import type { Metadata } from "next";
import { blogPosts } from "@/data/content";
import Postcards from "@/components/Postcards";
import LaEffects from "@/components/LaEffects";

export const metadata: Metadata = { title: "Postcards · Lalithya Raavi" };

export default function BlogPage() {
  return (
    <div className="la-wrap" style={{ maxWidth: 1180 }}>
      <LaEffects showRoute={false} />
      <Postcards posts={blogPosts} />
    </div>
  );
}
