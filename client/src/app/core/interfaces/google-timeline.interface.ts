export interface GoogleTimelineData {
  locations: GoogleTimelineDataLocation[];
}

export interface GoogleTimelineDataLocation {
  timestampMs: string;
  latitudeE7: number;
  longitudeE7: number;
  accuracy: number;
  activity?: {
    timestampMs: string;
    activity: {
      type: string;
      confidence: number;
    }[];
  }[];
}

export interface ParsedGoogleTimelineData {
  locations: ParsedGoogleTimelineDataLocation[];
}

export interface ParsedGoogleTimelineDataLocation {
  timestampMs: number | string;
  latitude: number;
  longitude: number;
  accuracy: number;
  activity: string;
}

// export interface ComplexGoogleTimelineData {
//   timelineObjects: {
//     placeVisit?: PlaceVisit;
//     activitySegment?: ActivitySegment;
//   }[];
// }

// export interface ActivitySegment {
//   startLocation: Location;
//   endLocation: Location;
//   duration: Duration;
//   distance: number;
//   activityType: string;
//   confidence: string;
//   waypointPath: {
//     waypoints: Waypoint[];
//   };
//   simplifiedRawPath: {
//     points: RawPathPoint[];
//   };
//   parkingEvent: ParkingEvent;
// }

// export interface Location {
//   latitudeE7: number;
//   longitudeE7: number;
// }

// export interface Waypoint {
//   latE7: number;
//   lngE7: number;
// }

// export interface RawPathPoint {
//   latE7: number;
//   lngE7: number;
//   timestampMs: string;
//   accuracyMeters: number;
// }

// export interface Duration {
//   startTimestampMs: string;
//   endTimestampMs: string;
// }

// export interface ParkingEvent {
//   timestampMs: string;
//   location: Location;
//   placeConfidence: string;
//   centerLatE7: number;
//   centerLngE7: number;
//   visitConfidence: number;
// }

// export interface PlaceVisit {
//   location: PlaceLocation;
//   duration: Duration;
// }

// export interface PlaceLocation {
//   latitudeE7: number;
//   longitudeE7: number;
//   address: string;
//   name: string;
//   locationConfidence: number;
// }
