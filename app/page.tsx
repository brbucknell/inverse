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

      <section className="relative z-10 min-h-screen px-20 pt-16">
        <h1 className="text-4xl font-bold text-black drop-shadow-lg">
          The Anomaly
        </h1>

        <div className="mt-8 max-w-xl">
          <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[2px_2px_1px_black]">
            Universe Name
          </h2>

          <h3 className="mt-2 text-xl font-bold text-yellow-400 drop-shadow-[2px_2px_1px_black]">
            Planet Name
          </h3>

          <nav className="mt-6 space-y-3 text-2xl font-bold">
            {realms.map((realm) => (
              <div
                key={realm.name}
                className={`${realm.className} drop-shadow-[2px_2px_1px_black]`}
              >
                {realm.name}
              </div>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 right-0 h-[42vh] w-[58vw] bg-black/70 px-16 py-14">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            The Latest
          </h2>
        </div>
      </section>
    </main>
  );
}