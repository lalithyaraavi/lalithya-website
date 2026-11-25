// Places on the travel log map. Add a place by copying one entry.
// photos: put images in public/photos/travel/ and list them as "/photos/travel/name.jpg"
// home: true for places you've lived (blue pin). Routes on the map fly out from the first place (home hub).
// when / note are optional: they show on the postcard when filled in.
export type Place = {
  code: string;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  home?: boolean;
  when?: string;
  note?: string;
  photos: string[];
};

export const places: Place[] = [
  // Home bases
  { code: "YMM", name: "Fort McMurray", region: "Alberta", country: "Canada", lat: 56.73, lon: -111.38, home: true, when: "Grew up here", note: "Where it all started.", photos: [] },
  { code: "YKF", name: "Waterloo", region: "Ontario", country: "Canada", lat: 43.46, lon: -80.52, home: true, when: "SYDE '30", note: "Home for school.", photos: ["/photos/photo3.jpeg", "/photos/photo.JPG", "/photos/photo4.jpg"] },
  { code: "YOW", name: "Kanata", region: "Ontario", country: "Canada", lat: 45.31, lon: -75.91, when: "Fall 2026", note: "Co-op term at ORBCOMM.", photos: [] },

  // Canada
  { code: "YEG", name: "Edmonton", region: "Alberta", country: "Canada", lat: 53.55, lon: -113.49, photos: [] },
  { code: "YYC", name: "Calgary", region: "Alberta", country: "Canada", lat: 51.05, lon: -114.07, photos: [] },
  { code: "YBA", name: "Banff", region: "Alberta", country: "Canada", lat: 51.18, lon: -115.57, photos: [] },
  { code: "YJA", name: "Jasper", region: "Alberta", country: "Canada", lat: 52.87, lon: -118.08, photos: [] },
  { code: "YVR", name: "Vancouver", region: "British Columbia", country: "Canada", lat: 49.28, lon: -123.12, photos: [] },
  { code: "YYZ", name: "Toronto", region: "Ontario", country: "Canada", lat: 43.65, lon: -79.38, photos: [] },
  { code: "BRM", name: "Brampton", region: "Ontario", country: "Canada", lat: 43.73, lon: -79.76, photos: [] },
  { code: "YUL", name: "Montreal", region: "Quebec", country: "Canada", lat: 45.50, lon: -73.57, photos: [] },
  { code: "YHZ", name: "Halifax", region: "Nova Scotia", country: "Canada", lat: 44.65, lon: -63.57, photos: [] },

  // United States
  { code: "JFK", name: "New York", region: "New York", country: "United States", lat: 40.71, lon: -74.01, photos: [] },
  { code: "SYR", name: "Syracuse", region: "New York", country: "United States", lat: 43.05, lon: -76.15, photos: [] },
  { code: "EWR", name: "New Jersey", region: "New Jersey", country: "United States", lat: 40.73, lon: -74.17, photos: [] },
  { code: "MCO", name: "Orlando", region: "Florida", country: "United States", lat: 28.54, lon: -81.38, photos: [] },
  { code: "DFW", name: "Dallas", region: "Texas", country: "United States", lat: 32.78, lon: -96.80, photos: [] },
  { code: "PHL", name: "Pennsylvania", region: "Pennsylvania", country: "United States", lat: 39.95, lon: -75.17, photos: [] },
  { code: "LAS", name: "Las Vegas", region: "Nevada", country: "United States", lat: 36.17, lon: -115.14, photos: [] },

  // Mexico and the Caribbean
  { code: "CUN", name: "Cancún", region: "Quintana Roo", country: "Mexico", lat: 21.16, lon: -86.85, photos: [] },
  { code: "PVR", name: "Puerto Vallarta", region: "Jalisco", country: "Mexico", lat: 20.65, lon: -105.23, photos: [] },
  { code: "CRB", name: "The Caribbean", region: "Caribbean Sea", country: "The Caribbean", lat: 18.2, lon: -72.0, photos: [] },

  // Europe
  { code: "DUB", name: "Dublin", region: "Leinster", country: "Ireland", lat: 53.35, lon: -6.26, photos: [] },
  { code: "LHR", name: "London", region: "England", country: "United Kingdom", lat: 51.51, lon: -0.13, photos: [] },
  { code: "CWL", name: "Wales", region: "Wales", country: "United Kingdom", lat: 51.48, lon: -3.18, photos: [] },
  { code: "CDG", name: "Paris", region: "Île-de-France", country: "France", lat: 48.86, lon: 2.35, photos: [] },

  // Middle East and Asia
  { code: "KWI", name: "Kuwait", region: "Kuwait City", country: "Kuwait", lat: 29.38, lon: 47.99, photos: [] },
  { code: "HYD", name: "Hyderabad", region: "Telangana", country: "India", lat: 17.39, lon: 78.49, photos: [] },
];
