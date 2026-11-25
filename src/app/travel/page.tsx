import type { Metadata } from "next";
import TravelMap from "@/components/TravelMap";
import LaEffects from "@/components/LaEffects";

export const metadata: Metadata = { title: "Travel log · Lalithya Raavi" };

export default function TravelPage() {
  return (
    <div className="la-wrap" style={{ maxWidth: 1180 }}>
      <LaEffects showRoute={false} />
      <TravelMap />
    </div>
  );
}
