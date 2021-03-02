import { Injectable } from '@angular/core';
import {
  GoogleTimelineData,
  GoogleTimelineDataLocation,
  ParsedGoogleTimelineData,
  ParsedGoogleTimelineDataLocation,
} from '../interfaces/google-timeline.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class GoogleTimelineDataService {
  constructor() {}

  async readFile(sourceFile: File): Promise<GoogleTimelineData> {
    let data: GoogleTimelineData = {
      locations: [],
    };
    try {
      const content = await sourceFile.text();
      data = JSON.parse(content);
    } catch (error) {
      console.error(error);
    } finally {
      return data;
    }
  }

  async parseGoogleTimelineData(
    data: GoogleTimelineData
  ): Promise<ParsedGoogleTimelineData> {
    const parsedData: ParsedGoogleTimelineData = {
      locations: null,
    };

    const parsedLocations: ParsedGoogleTimelineDataLocation[] = data.locations.map(
      (loc: GoogleTimelineDataLocation) => ({
        accuracy: loc.accuracy,
        latitude: loc.latitudeE7 * Math.pow(10, -7),
        longitude: loc.longitudeE7 * Math.pow(10, -7),
        timestampMs: +loc.timestampMs,
        activity:
          (loc.activity && loc.activity[0].activity[0].type.toString()) ||
          'unknown',
      })
    );

    parsedData.locations = parsedLocations;

    return parsedData;
  }

  async filterDataWithinTimeRange(
    data: ParsedGoogleTimelineData,
    startDate: moment.Moment,
    endDate: moment.Moment
  ): Promise<ParsedGoogleTimelineData> {
    const filteredData: ParsedGoogleTimelineData = {
      locations: [],
    };

    const startDateMs = startDate.valueOf();
    const endDateMs = endDate.valueOf();

    const filteredLocations = data.locations
      .filter(
        (loc: ParsedGoogleTimelineDataLocation) =>
          startDateMs < loc.timestampMs && loc.timestampMs < endDateMs
      )
      .map((loc: ParsedGoogleTimelineDataLocation) => ({
        ...loc,
        timestampMs: moment(loc.timestampMs).format('DD/MM/YYYY HH:mm:ss'),
      }));
    filteredData.locations = filteredLocations;

    return filteredData;
  }
}
