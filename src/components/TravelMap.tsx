"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule10, geoBounds, type GeoProjection } from "d3-geo";
import { select } from "d3-selection";
import { zoom as d3zoom, zoomIdentity, type ZoomBehavior } from "d3-zoom";
import "d3-transition";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import world from "world-atlas/countries-110m.json";
import { places, type Place } from "@/data/travel";

const PLANE = "M0,-7 L2,-2 L8,1 L8,3 L2,1 L1.5,5 L3.5,7 L3.5,8 L0,7 L-3.5,8 L-3.5,7 L-1.5,5 L-2,1 L-8,3 L-8,1 L-2,-2Z";

export default function TravelMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const api = useRef<{ focus: (i: number) => void; reset: () => void } | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [photo, setPhoto] = useState(0);
  const countries = new Set(places.map((p) => p.country)).size;

  // draw map once
  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const svg = select(svgEl);
    svg.selectAll("*").remove();
    const { width: W, height: H } = svgEl.getBoundingClientRect();
    svg.attr("viewBox", `0 0 ${W} ${H}`);
    const g = svg.append("g");

    const topo = world as unknown as Topology<{ countries: GeometryCollection }>;
    const land = feature(topo, topo.objects.countries);

    // Fit the view to the places, with room around them (clamped so it never wraps past 180°).
    const b = geoBounds({ type: "MultiPoint", coordinates: places.map((p) => [p.lon, p.lat]) });
    const padLon = Math.max(14, (b[1][0] - b[0][0]) * 0.08);
    const padLat = Math.max(8, (b[1][1] - b[0][1]) * 0.25);
    const clampLon = (x: number) => Math.max(-179, Math.min(179, x));
    const clampLat = (y: number) => Math.max(-80, Math.min(80, y));
    const proj: GeoProjection = geoNaturalEarth1().fitExtent([[30, 50], [W - 30, H - 50]], {
      type: "MultiPoint",
      coordinates: [
        [clampLon(b[0][0] - padLon), clampLat(b[0][1] - padLat)], [clampLon(b[1][0] + padLon), clampLat(b[0][1] - padLat)],
        [clampLon(b[1][0] + padLon), clampLat(b[1][1] + padLat)], [clampLon(b[0][0] - padLon), clampLat(b[1][1] + padLat)],
      ],
    });
    const path = geoPath(proj);
    const xy = (p: Place) => proj([p.lon, p.lat]) as [number, number];

    g.append("path").datum(geoGraticule10()).attr("class", "grat").attr("d", path);
    g.append("g").selectAll("path").data(land.features).join("path").attr("class", "land").attr("d", path);

    const curve = (a: [number, number], c: [number, number]) => {
      const mx = (a[0] + c[0]) / 2, my = (a[1] + c[1]) / 2, dx = c[0] - a[0], dy = c[1] - a[1], len = Math.hypot(dx, dy) || 1;
      const lift = Math.min(120, len * 0.28);
      return `M${a[0]},${a[1]} Q${mx - (dy / len) * lift * 0.3},${my - lift} ${c[0]},${c[1]}`;
    };
    // Every route flies out from the home hub (first place), like an airline route map.
    const hub = xy(places[0]);
    const legs = places.slice(1).map((p) => curve(hub, xy(p)));
    const arcs = g.append("g").selectAll<SVGPathElement, string>("path").data(legs).join("path").attr("class", "arc").attr("d", (d) => d);
    arcs.each(function (_, i) {
      const L = this.getTotalLength();
      select(this).attr("stroke-dasharray", `${L} ${L}`).attr("stroke-dashoffset", L)
        .transition().delay(300 + i * 110).duration(1000).attr("stroke-dashoffset", 0)
        .on("end", function () { select(this).attr("stroke-dasharray", "5 6"); });
    });

    let k = 1;
    const plane = g.append("path").attr("d", PLANE).attr("fill", "var(--ink)").attr("opacity", 0);
    let stopped = false;
    const nodes = arcs.nodes();
    const fly = (i: number) => {
      if (stopped || !nodes.length) return;
      const n = nodes[i % nodes.length];
      const L = n.getTotalLength();
      plane.attr("opacity", 1).transition().duration(2600)
        .attrTween("transform", () => (t) => {
          const p = n.getPointAtLength(t * L), q = n.getPointAtLength(Math.min(L, t * L + 1));
          const a = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI + 90;
          return `translate(${p.x},${p.y}) rotate(${a}) scale(${1 / k})`;
        })
        .on("end", () => window.setTimeout(() => fly(i + 1 + Math.floor(Math.random() * 3)), 400));
    };
    const flyTimer = window.setTimeout(() => fly(0), 300 + legs.length * 110 + 1200);

    const pins = g.append("g").selectAll<SVGGElement, Place>("g").data(places).join("g")
      .attr("class", (d) => `pin${d.home ? " home" : ""}`)
      .attr("transform", (d) => `translate(${xy(d)})`)
      .attr("tabindex", 0).attr("role", "button").attr("aria-label", (d) => d.name)
      .on("click", (_, d) => setActive(places.indexOf(d)))
      .on("keydown", (e: KeyboardEvent, d) => { if (e.key === "Enter") setActive(places.indexOf(d)); });
    pins.append("circle").attr("class", "halo").attr("r", 9);
    pins.append("circle").attr("class", "dot").attr("r", 6);
    pins.append("text").attr("y", -14).attr("text-anchor", "middle").text((d) => d.code);

    const zoom: ZoomBehavior<SVGSVGElement, unknown> = d3zoom<SVGSVGElement, unknown>().scaleExtent([1, 8]).on("zoom", (e) => {
      k = e.transform.k;
      svgEl.classList.toggle("zoomed", k >= 2.2);
      g.attr("transform", e.transform.toString());
      pins.attr("transform", (d) => `translate(${xy(d)}) scale(${1 / k})`);
      arcs.attr("stroke-width", 1.6 / k);
    });
    svg.call(zoom);

    api.current = {
      focus: (i) => {
        const [x, y] = xy(places[i]);
        const kk = Math.max(k, 2.2);
        const w = window.innerWidth > 860 ? W - 400 : W;
        svg.transition().duration(900).call(zoom.transform, zoomIdentity.translate(w / 2 - kk * x, H / 2 - kk * y).scale(kk));
      },
      reset: () => { svg.transition().duration(900).call(zoom.transform, zoomIdentity); },
    };
    (svgEl as unknown as { _zoomBy: (f: number) => void })._zoomBy = (f) => svg.transition().duration(500).call(zoom.scaleBy, f);
    (svgEl as unknown as { _pins: typeof pins })._pins = pins;

    return () => { stopped = true; window.clearTimeout(flyTimer); svg.interrupt(); };
  }, []);

  // react to selection
  useEffect(() => {
    const svgEl = svgRef.current as unknown as { _pins?: { classed: (c: string, f: (d: Place) => boolean) => void } } | null;
    svgEl?._pins?.classed("active", (d) => active !== null && d === places[active]);
    setPhoto(0);
    if (active !== null) window.setTimeout(() => api.current?.focus(active), 350);
  }, [active]);

  // photo slideshow
  const count = active !== null ? places[active].photos.length : 0;
  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => setPhoto((p) => (p + 1) % count), 4000);
    return () => window.clearInterval(id);
  }, [count, active]);

  const close = useCallback(() => { setActive(null); window.setTimeout(() => api.current?.reset(), 300); }, []);
  const go = useCallback((d: number) => setActive((a) => ((a ?? 0) + d + places.length) % places.length), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, go]);

  const p = active !== null ? places[active] : null;
  const zoomBy = (f: number) => (svgRef.current as unknown as { _zoomBy?: (f: number) => void })?._zoomBy?.(f);

  return (
    <>
      <div className="tv-head">
        <div>
          <p className="la-mono">Travel log · Frequent flyer record</p>
          <h1>Places I&apos;ve been</h1>
          <p className="sub">Every route flies out of home base in Fort McMurray. Tap a checkpoint to open its postcard, or zoom in to see the codes.</p>
        </div>
        <div className="tv-stats">
          <div><span className="la-mono">Checkpoints</span><b>{places.length}</b></div>
          <div><span className="la-mono">Countries</span><b>{countries}</b></div>
        </div>
      </div>

      <div ref={stageRef} className={`tv-stage${p ? " open" : ""}`}>
        <svg ref={svgRef} className="tv-map" role="img" aria-label="Map of places Lali has travelled to" />
        <div className="tv-hint">Click a checkpoint ✈</div>
        <div className="tv-legend"><span><i style={{ background: "var(--denim)" }} />Home base</span><span><i style={{ background: "var(--accent)" }} />Visited</span></div>
        <div className="tv-zoom"><button onClick={() => zoomBy(1.6)} aria-label="Zoom in">+</button><button onClick={() => zoomBy(1 / 1.6)} aria-label="Zoom out">−</button></div>
        <aside className="tv-panel" aria-live="polite">
          <button className="tv-close" onClick={close} aria-label="Close">×</button>
          {p && active !== null && (
            <div className="tv-panel-in" key={p.code}>
              <div className="tv-ticket">
                <span className="la-mono">Checkpoint {String(active + 1).padStart(2, "0")} / {String(places.length).padStart(2, "0")}</span>
                <span className="la-mono">{p.home ? "Home base" : "Visited"}</span>
              </div>
              <div className="tv-code">{p.code}</div>
              <div className="tv-place">{p.name} · {p.region === p.name ? p.country : `${p.region}, ${p.country}`}</div>
              <div className="tv-stampd">{p.code}<br />{p.home ? "HOME" : "ARRIVED"}</div>
              <div className="tv-gallery">
                {p.photos.length === 0 && <div className="ph">Photos coming soon</div>}
                {p.photos.map((src, i) => <img key={src} src={src} alt={`${p.name} photo ${i + 1}`} className={i === photo ? "on" : ""} />)}
                {p.photos.length > 1 && (
                  <>
                    <button className="tv-garrow l" aria-label="Previous photo" onClick={() => setPhoto((photo - 1 + p.photos.length) % p.photos.length)}>‹</button>
                    <button className="tv-garrow r" aria-label="Next photo" onClick={() => setPhoto((photo + 1) % p.photos.length)}>›</button>
                    <div className="tv-gnav">{p.photos.map((_, i) => <button key={i} className={i === photo ? "on" : ""} aria-label={`Photo ${i + 1}`} onClick={() => setPhoto(i)} />)}</div>
                  </>
                )}
              </div>
              {p.note && <p className="tv-note">{p.note}</p>}
              <div className="tv-meta">
                <div><span className="la-mono">{p.when ? "When" : "Country"}</span><b>{p.when ?? p.country}</b></div>
                <div><span className="la-mono">Coordinates</span><b>{p.lat.toFixed(2)}°, {p.lon.toFixed(2)}°</b></div>
              </div>
              <div className="tv-next"><button onClick={() => go(-1)}>← Previous stop</button><button onClick={() => go(1)}>Next stop →</button></div>
            </div>
          )}
        </aside>
      </div>

      <div className="tv-strip">
        {places.map((pl, i) => <button key={pl.code} className={i === active ? "on" : ""} onClick={() => setActive(i)}>{pl.code} · {pl.name}</button>)}
      </div>
    </>
  );
}
