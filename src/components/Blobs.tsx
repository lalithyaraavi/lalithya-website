export default function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full blob opacity-20" style={{ background: "radial-gradient(circle, #F2DEED 0%, #C4788A 100%)" }} />
      <div className="absolute bottom-20 left-6 w-56 h-56 rounded-full blob blob-delay opacity-15" style={{ background: "radial-gradient(circle, #E8E2F5 0%, #ADBCA5 100%)" }} />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full blob opacity-10" style={{ background: "radial-gradient(circle, #FDEEF4 0%, #E8A0B0 100%)", animationDelay: "2s" }} />
      <div className="absolute bottom-10 right-1/3 w-48 h-48 rounded-full blob blob-delay opacity-15" style={{ background: "radial-gradient(circle, #EDE8F5 0%, #9B8DB8 100%)", animationDelay: "0.8s" }} />
      <div className="absolute top-1/3 left-0 w-36 h-36 rounded-full blob opacity-10" style={{ background: "radial-gradient(circle, #F9E4EC 0%, #C4788A 100%)", animationDelay: "1.5s" }} />
    </div>
  );
}
