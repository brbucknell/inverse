"use client";

export default function Home() {
  const realms = [
    { name: "The Inverse", className: " text-slate-100" },
    { name: "Rosemera", className: "text-pink-300" },
    { name: "The Cult Lands", className: "text-orange-500" },
    { name: "The Undoing", className: "text-teal-500" },
    { name: "The Silent Expanse", className: "text-green-800" },
    { name: "Droskavar", className: "text-slate-300" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black font-serif">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/inverse2.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <section className="relative z-10 min-h-screen">
    
  <h1 className="font-cinzel-deco text-6xl font-bold text-black drop-shadow-[2px_2px_3px_rgba(255,255,255,0.5)]">
    The Anomaly
  </h1>
  <h2 className="mt-4 text-3xl font-bold text-yellow-400 drop-shadow-[2px_2px_1px_black]">
    Universe Name
  </h2>
  <h3 className="mt-1 text-xl font-semibold text-yellow-300 drop-shadow-[2px_2px_1px_black]">
    Planet Name
  </h3>
  <nav className="mt-12 mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-3 rounded-xl border border-yellow-500/20 bg-black/50 px-8 py-3 text-xl font-bold backdrop-blur-sm">
    {realms.map((realm) => (
      <button
        key={realm.name}
        className={`${realm.className} drop-shadow-[2px_2px_1px_black] transition-all duration-300 hover:scale-110 hover:tracking-widest`}
      >
        {realm.name}
      </button>
    ))}
  </nav>
</header>

export default function Home() {
  const realms = [
    { name: "The Inverse", className: " text-slate-100" },
    { name: "Rosemera", className: "text-pink-300" },
    { name: "The Cult Lands", className: "text-orange-500" },
    { name: "The Undoing", className: "text-teal-500" },
    { name: "The Silent Expanse", className: "text-green-800" },
    { name: "Droskavar", className: "text-slate-300" },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden bg-black font-serif">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/inverse2.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <section className="relative z-10 min-h-screen">
      <header className="pt-8 text-center">
  <h1 className="font-cinzel-deco text-6xl font-bold text-black drop-shadow-[2px_2px_3px_rgba(255,255,255,0.5)]">
    The Anomaly
  </h1>  <nav className="mt-12 mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-3 rounded-xl border border-yellow-500/20 bg-black/50 px-8 py-3 text-xl font-bold backdrop-blur-sm">
    {realms.map((realm) => (
      <button
        key={realm.name}
        className={${realm.className} drop-shadow-[2px_2px_1px_black] transition-all duration-300 hover:scale-110 hover:tracking-widest}
      >
        {realm.name}
      </button>
    ))}
  </nav>
</header>
        <div className="absolute bottom-16 right-16 w-[420px] rounded-xl border border-yellow-500/20 bg-black/65 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            The Latest
          </h2>
        </div>
      </section>
    </main>
  );
}Show moreDiagnosed spacing and width issues, prescribed layout refinementsDiagnosed spacing and width issues, prescribed layout refinementsI see two things going on:

The gap looks tight because you removed "Universe Name" / "Planet Name" — so mt-12 is now measured directly from the title, not from where the third line used to be. Same margin value, but visually it reads as closer since there's less vertical distance overall.
"Too wide" is max-w-4xl (56rem/896px) — that's a fixed cap regardless of how much space the six realm names actually need, so it's stretching wider than the content, leaving a lot of empty bar on either side of "Droskavar" wrapping to its own row.

Fix for both:
jsx<header className="pt-8 text-center">
  <h1 className="font-cinzel-deco text-6xl font-bold text-black drop-shadow-[2px_2px_3px_rgba(255,255,255,0.5)]">
    The Anomaly
  </h1>

  <nav className="mt-20 mx-auto flex w-fit flex-wrap justify-center gap-x-10 gap-y-3 rounded-xl border border-yellow-500/20 bg-black/50 px-8 py-3 text-xl font-bold backdrop-blur-sm">
    {realms.map((realm) => (
      <button
        key={realm.name}
        className={`${realm.className} drop-shadow-[2px_2px_1px_black] transition-all duration-300 hover:scale-110 hover:tracking-widest`}
      >
        {realm.name}
      </button>
    ))}
  </nav>
</header>


        <div className="absolute bottom-16 right-16 w-[420px] rounded-xl border border-yellow-500/20 bg-black/65 p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            The Latest
          </h2>
        </div>
      </section>
    </main>
  );
} 
