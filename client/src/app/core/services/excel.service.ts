import { Injectable } from '@angular/core';
import * as xlsx from 'xlsx';
import {
  GoogleTimelineData,
  ParsedGoogleTimelineData,
} from '../interfaces/google-timeline.interface';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  createExcelFromGoogleTimelineData(data: ParsedGoogleTimelineData) {
    const wb = xlsx.utils.book_new();

    const ws = xlsx.utils.json_to_sheet(data.locations, {
      header: ['timestampMs', 'latitude', 'longitude', 'accuracy'],
    });

    xlsx.utils.book_append_sheet(wb, ws, 'Google timeline data');

    xlsx.writeFile(wb, 'google_timeline_data.xlsx');
  }
}
