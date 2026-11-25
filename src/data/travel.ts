// Places on the travel log map. Add a place by copying one entry.
// photos: put images in public/photos/travel/ and list them as "/photos/travel/name.jpg"
// home: true for places you've lived (blue pin), otherwise orange "visited" pin.
export type Place = {
  code: string;
  name: string;
  region: string;
  lat: number;
  lon: number;
  home?: boolean;
  when: string;
  note: string;
  photos: string[];
};

export const places: Place[] = [
  { code: "YMM", name: "Fort McMurray", region: "Alberta, Canada", lat: 56.73, lon: -111.38, home: true, when: "Grew up here", note: "Where it all started.", photos: ["/photos/photo3.jpeg"] },
  { code: "YKF", name: "Waterloo", region: "Ontario, Canada", lat: 43.46, lon: -80.52, home: true, when: "SYDE '30", note: "Home for school.", photos: ["/photos/photo.JPG", "/photos/photo4.jpg"] },
  { code: "YOW", name: "Kanata", region: "Ontario, Canada", lat: 45.31, lon: -75.91, when: "Fall 2026", note: "Co-op term at ORBCOMM.", photos: [] },
];
