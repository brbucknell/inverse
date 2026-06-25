"use client";

export default function Home() {
  const realms = [
    { name: "The Inverse", className: "text-black" },
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
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-yellow-400 drop-shadow-[2px_2px_1px_black]">
            Universe Name
          </h2>

          <h3 className="mt-1 text-xl font-semibold text-yellow-300 drop-shadow-[2px_2px_1px_black]">
            Planet Name
          </h3>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4 px-8 text-xl font-bold">
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
