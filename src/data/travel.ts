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
  { code: "YMM", name: "Fort McMurray", region: "Alberta", country: "Canada", lat: 56.73, lon: -111.38, home: true, when: "Grew up here", note: "Where it all started.", photos: ["/photos/travel/fort-mcmurray.jpg"] },
  { code: "YKF", name: "Waterloo", region: "Ontario", country: "Canada", lat: 43.46, lon: -80.52, home: true, when: "SYDE '30", note: "Home for school.", photos: ["/photos/photo3.jpeg", "/photos/photo.JPG"] },
  { code: "YOW", name: "Ottawa", region: "Ontario", country: "Canada", lat: 45.42, lon: -75.70, when: "Co-op, Fall 2026", note: "Co-op term in Kanata at ORBCOMM, and Canada-Wide Science Fair on Parliament Hill.", photos: ["/photos/travel/ottawa-parliament.jpg"] },

  // Canada
  { code: "YEG", name: "Edmonton", region: "Alberta", country: "Canada", lat: 53.55, lon: -113.49, photos: [] },
  { code: "YYC", name: "Calgary", region: "Alberta", country: "Canada", lat: 51.05, lon: -114.07, photos: [] },
  { code: "YBA", name: "Banff", region: "Alberta", country: "Canada", lat: 51.18, lon: -115.57, photos: [] },
  { code: "YJA", name: "Jasper", region: "Alberta", country: "Canada", lat: 52.87, lon: -118.08, photos: [] },
  { code: "DRU", name: "Drumheller", region: "Alberta", country: "Canada", lat: 51.46, lon: -112.71, photos: ["/photos/travel/drumheller.jpg"] },
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
  { code: "DTW", name: "Detroit", region: "Michigan", country: "United States", lat: 42.33, lon: -83.05, photos: [] },
  { code: "MCD", name: "Mackinac Island", region: "Michigan", country: "United States", lat: 45.85, lon: -84.62, photos: [] },
  { code: "LAS", name: "Las Vegas", region: "Nevada", country: "United States", lat: 36.17, lon: -115.14, photos: ["/photos/travel/las-vegas.jpg"] },

  // Mexico and the Caribbean
  { code: "CUN", name: "Cancún", region: "Quintana Roo", country: "Mexico", lat: 21.16, lon: -86.85, photos: [] },
  { code: "PVR", name: "Puerto Vallarta", region: "Jalisco", country: "Mexico", lat: 20.65, lon: -105.23, photos: ["/photos/travel/puerto-vallarta.jpg"] },
  { code: "CRB", name: "The Caribbean", region: "CocoCay, Bahamas", country: "The Bahamas", lat: 25.82, lon: -77.94, photos: ["/photos/travel/caribbean-cococay.jpg"] },

  // Europe
  { code: "DUB", name: "Dublin", region: "Leinster", country: "Ireland", lat: 53.35, lon: -6.26, photos: [] },
  { code: "LHR", name: "London", region: "England", country: "United Kingdom", lat: 51.51, lon: -0.13, photos: ["/photos/travel/london.jpg"] },
  { code: "CWL", name: "Wales", region: "Conwy, Wales", country: "United Kingdom", lat: 53.28, lon: -3.83, photos: ["/photos/travel/wales-conwy.jpg"] },
  { code: "CDG", name: "Paris", region: "Île-de-France", country: "France", lat: 48.86, lon: 2.35, photos: ["/photos/travel/paris.jpg"] },

  // Middle East and Asia
  { code: "DXB", name: "Dubai", region: "Dubai", country: "United Arab Emirates", lat: 25.20, lon: 55.27, photos: ["/photos/travel/dubai.jpg"] },
  { code: "KWI", name: "Kuwait", region: "Kuwait City", country: "Kuwait", lat: 29.38, lon: 47.99, photos: [] },
  { code: "HYD", name: "Hyderabad", region: "Telangana", country: "India", lat: 17.39, lon: 78.49, photos: [] },
];
