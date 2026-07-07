"use client";

export default function Home() {
  const realms = [
    { name: "The Inverse", className: "text-slate-100" },
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
          backgroundImage: "url('/inverse3.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <section className="relative z-10 min-h-screen">

        <header className="pt-8 flex flex-col items-center text-center">
  <section className="title-section">
    <h1 className="font-cinzel-deco text-6xl font-bold text-black drop-shadow-[2px_2px_3px_rgba(255,255,255,0.5)]">
      The Anomaly
    </h1>
  </section>

  <div style={{ height: "25px" }} />

  <section className="nav-section flex w-full justify-center">
    <nav className="flex w-full max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3 rounded-xl border border-yellow-500/20 bg-black/50 px-8 py-3 text-xl font-bold backdrop-blur-sm">
      {realms.map((realm) => (
        <button
          key={realm.name}
          className={`${realm.className} drop-shadow-[2px_2px_1px_black] transition-all duration-300 hover:scale-110 hover:tracking-widest`}
        >
          {realm.name}
        </button>
      ))}
    </nav>
  </section>
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
