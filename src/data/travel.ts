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
  // Credit for a photo that isn't Lali's own (freely licensed, from Wikimedia Commons)
  credit?: { by: string; license: string; url: string };
};

export const places: Place[] = [
  // Home bases
  { code: "YMM", name: "Fort McMurray", region: "Alberta", country: "Canada", lat: 56.73, lon: -111.38, home: true, when: "Grew up here", note: "Where it all started.", photos: ["/photos/travel/fort-mcmurray.jpg"] },
  { code: "YKF", name: "Waterloo", region: "Ontario", country: "Canada", lat: 43.46, lon: -80.52, home: true, when: "SYDE '30", note: "Home for school.", photos: ["/photos/photo3.jpeg", "/photos/photo.JPG"] },
  { code: "YOW", name: "Ottawa", region: "Ontario", country: "Canada", lat: 45.42, lon: -75.70, when: "Co-op, Fall 2026", note: "Co-op term in Kanata at ORBCOMM, and Canada-Wide Science Fair on Parliament Hill.", photos: ["/photos/travel/ottawa-parliament.jpg"] },

  // Canada
  { code: "YEG", name: "Edmonton", region: "Alberta", country: "Canada", lat: 53.55, lon: -113.49, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edmonton_skyline_from_Nellie_McClung_Park_%2840028p%29.jpg/1280px-Edmonton_skyline_from_Nellie_McClung_Park_%2840028p%29.jpg"], credit: { by: "Rhododendrites", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Edmonton_skyline_from_Nellie_McClung_Park_%2840028p%29.jpg" } },
  { code: "YYC", name: "Calgary", region: "Alberta", country: "Canada", lat: 51.05, lon: -114.07, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Calgary_Skyline%2C_north_panoramic_view_from_McHugh_Bluff_20240819_1.jpg/1280px-Calgary_Skyline%2C_north_panoramic_view_from_McHugh_Bluff_20240819_1.jpg"], credit: { by: "DXR", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Calgary_Skyline%2C_north_panoramic_view_from_McHugh_Bluff_20240819_1.jpg" } },
  { code: "YBA", name: "Banff", region: "Alberta", country: "Canada", lat: 51.18, lon: -115.57, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Peyto_Lake-Banff_NP-Canada.jpg/1280px-Peyto_Lake-Banff_NP-Canada.jpg"], credit: { by: "Tobias Alt", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Peyto_Lake-Banff_NP-Canada.jpg" } },
  { code: "YJA", name: "Jasper", region: "Alberta", country: "Canada", lat: 52.87, lon: -118.08, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Icefields_Parkway_from_an_elevated_viewpoint%2C_Jasper_National_Park%2C_Alberta%2C_Canada.jpg/1280px-Icefields_Parkway_from_an_elevated_viewpoint%2C_Jasper_National_Park%2C_Alberta%2C_Canada.jpg"], credit: { by: "Ethan Sahagun", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Icefields_Parkway_from_an_elevated_viewpoint%2C_Jasper_National_Park%2C_Alberta%2C_Canada.jpg" } },
  { code: "DRU", name: "Drumheller", region: "Alberta", country: "Canada", lat: 51.46, lon: -112.71, photos: ["/photos/travel/drumheller.jpg"] },
  { code: "YVR", name: "Vancouver", region: "British Columbia", country: "Canada", lat: 49.28, lon: -123.12, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Vancouver_%28BC%2C_Canada%29%2C_Skyline_--_2022_--_2080-92.jpg/1280px-Vancouver_%28BC%2C_Canada%29%2C_Skyline_--_2022_--_2080-92.jpg"], credit: { by: "Dietmar Rabich", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Vancouver_%28BC%2C_Canada%29%2C_Skyline_--_2022_--_2080-92.jpg" } },
  { code: "YYZ", name: "Toronto", region: "Ontario", country: "Canada", lat: 43.65, lon: -79.38, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Toronto_skyline_viewed_from_Trillium_Park.jpg/1280px-Toronto_skyline_viewed_from_Trillium_Park.jpg"], credit: { by: "Maksim Sokolov", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Toronto_skyline_viewed_from_Trillium_Park.jpg" } },
  { code: "BRM", name: "Brampton", region: "Ontario", country: "Canada", lat: 43.73, lon: -79.76, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Brampton_City_Hall_-_20240101_140900776.jpg/1280px-Brampton_City_Hall_-_20240101_140900776.jpg"], credit: { by: "Sikander Iqbal", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Brampton_City_Hall_-_20240101_140900776.jpg" } },
  { code: "YUL", name: "Montreal", region: "Quebec", country: "Canada", lat: 45.50, lon: -73.57, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Kondiaronk_Belvedere%2C_Montreal_city%2C_Canada.jpg/1280px-Kondiaronk_Belvedere%2C_Montreal_city%2C_Canada.jpg"], credit: { by: "Wilfredor", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Kondiaronk_Belvedere%2C_Montreal_city%2C_Canada.jpg" } },
  { code: "YHZ", name: "Halifax", region: "Nova Scotia", country: "Canada", lat: 44.65, lon: -63.57, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2022-08-15_01_Wide_angle_view_of_Halifax_skyline%2C_Nova_Scotia%2C_Canada.jpg/1280px-2022-08-15_01_Wide_angle_view_of_Halifax_skyline%2C_Nova_Scotia%2C_Canada.jpg"], credit: { by: "Gordon Leggett", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:2022-08-15_01_Wide_angle_view_of_Halifax_skyline%2C_Nova_Scotia%2C_Canada.jpg" } },

  // United States
  { code: "JFK", name: "New York", region: "New York", country: "United States", lat: 40.71, lon: -74.01, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1280px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg"], credit: { by: "Dllu", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg" } },
  { code: "SYR", name: "Syracuse", region: "New York", country: "United States", lat: 43.05, lon: -76.15, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Syracuse%2C_New_York_skyline_%28cropped%29.jpg/1280px-Syracuse%2C_New_York_skyline_%28cropped%29.jpg"], credit: { by: "Quintin Soloviev", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Syracuse%2C_New_York_skyline_%28cropped%29.jpg" } },
  { code: "EWR", name: "New Jersey", region: "New Jersey", country: "United States", lat: 40.73, lon: -74.17, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Newport_Jersey_City_June_2015_panorama.jpg/1280px-Newport_Jersey_City_June_2015_panorama.jpg"], credit: { by: "King of Hearts", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Newport_Jersey_City_June_2015_panorama.jpg" } },
  { code: "MCO", name: "Orlando", region: "Florida", country: "United States", lat: 28.54, lon: -81.38, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lake_Eola_and_Orlando_Skyline_seen_in_2024.jpg/1280px-Lake_Eola_and_Orlando_Skyline_seen_in_2024.jpg"], credit: { by: "JER3L1337", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Lake_Eola_and_Orlando_Skyline_seen_in_2024.jpg" } },
  { code: "DFW", name: "Dallas", region: "Texas", country: "United States", lat: 32.78, lon: -96.80, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/View_of_Dallas_from_Reunion_Tower_August_2015_05.jpg/1280px-View_of_Dallas_from_Reunion_Tower_August_2015_05.jpg"], credit: { by: "Michael Barera", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:View_of_Dallas_from_Reunion_Tower_August_2015_05.jpg" } },
  { code: "PHL", name: "Pennsylvania", region: "Pennsylvania", country: "United States", lat: 39.95, lon: -75.17, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Philadelphia_from_South_Street_Bridge_July_2016_panorama_2.jpg/1280px-Philadelphia_from_South_Street_Bridge_July_2016_panorama_2.jpg"], credit: { by: "King of Hearts", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Philadelphia_from_South_Street_Bridge_July_2016_panorama_2.jpg" } },
  { code: "DTW", name: "Detroit", region: "Michigan", country: "United States", lat: 42.33, lon: -83.05, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Skyline_of_Detroit%2C_Michigan_from_S_2014-12-07.jpg/1280px-Skyline_of_Detroit%2C_Michigan_from_S_2014-12-07.jpg"], credit: { by: "Crisco 1492", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Skyline_of_Detroit%2C_Michigan_from_S_2014-12-07.jpg" } },
  { code: "MCD", name: "Mackinac Island", region: "Michigan", country: "United States", lat: 45.85, lon: -84.62, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aerial_view_of_Mackinac_Island_2020-09-04.jpg/1280px-Aerial_view_of_Mackinac_Island_2020-09-04.jpg"], credit: { by: "August Schwerdfeger", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Mackinac_Island_2020-09-04.jpg" } },
  { code: "LAS", name: "Las Vegas", region: "Nevada", country: "United States", lat: 36.17, lon: -115.14, photos: ["/photos/travel/las-vegas.jpg"] },

  // Mexico and the Caribbean
  { code: "CUN", name: "Cancún", region: "Quintana Roo", country: "Mexico", lat: 21.16, lon: -86.85, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cancun_Beach.jpg/1280px-Cancun_Beach.jpg"], credit: { by: "Keith Pomakis", license: "CC BY-SA 2.5", url: "https://commons.wikimedia.org/wiki/File:Cancun_Beach.jpg" } },
  { code: "PVR", name: "Puerto Vallarta", region: "Jalisco", country: "Mexico", lat: 20.65, lon: -105.23, photos: ["/photos/travel/puerto-vallarta.jpg"] },
  { code: "CRB", name: "The Caribbean", region: "CocoCay, Bahamas", country: "The Bahamas", lat: 25.82, lon: -77.94, photos: ["/photos/travel/caribbean-cococay.jpg"] },

  // Europe
  { code: "DUB", name: "Dublin", region: "Leinster", country: "Ireland", lat: 53.35, lon: -6.26, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ha%27Penny_Bridge_in_Dublin%2C_Ireland.jpg/1280px-Ha%27Penny_Bridge_in_Dublin%2C_Ireland.jpg"], credit: { by: "Chris Rycroft", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Ha%27Penny_Bridge_in_Dublin%2C_Ireland.jpg" } },
  { code: "LHR", name: "London", region: "England", country: "United Kingdom", lat: 51.51, lon: -0.13, photos: ["/photos/travel/london.jpg"] },
  { code: "CWL", name: "Wales", region: "Conwy, Wales", country: "United Kingdom", lat: 53.28, lon: -3.83, photos: ["/photos/travel/wales-conwy.jpg"] },
  { code: "CDG", name: "Paris", region: "Île-de-France", country: "France", lat: 48.86, lon: 2.35, photos: ["/photos/travel/paris.jpg"] },

  // Middle East and Asia
  { code: "DXB", name: "Dubai", region: "Dubai", country: "United Arab Emirates", lat: 25.20, lon: 55.27, photos: ["/photos/travel/dubai.jpg"] },
  { code: "KWI", name: "Kuwait", region: "Kuwait City", country: "Kuwait", lat: 29.38, lon: 47.99, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Kuwait_City_Kuwait_Towers_View_to_the_al-Hamra_Tower.jpg/1280px-Kuwait_City_Kuwait_Towers_View_to_the_al-Hamra_Tower.jpg"], credit: { by: "Zairon", license: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Kuwait_City_Kuwait_Towers_View_to_the_al-Hamra_Tower.jpg" } },
  { code: "HYD", name: "Hyderabad", region: "Telangana", country: "India", lat: 17.39, lon: 78.49, photos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/The_Charminar_on_a_cloudy_day.jpg/1280px-The_Charminar_on_a_cloudy_day.jpg"], credit: { by: "Santosh Kumar Velamala", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:The_Charminar_on_a_cloudy_day.jpg" } },
];
