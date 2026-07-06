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
    
Ok lets do one issue at a time, lets mae "the inverse" easier to readDevised CSS solution to enhance readabilityDevised CSS solution to enhance readabilityFor "The Inverse," the core problem is black text with only a soft white shadow — on a photo with variable brightness, that combo is fragile.
A few options, from safest to most stylized:
Option A — Pale/ghost tone with dark shadow (safest, most consistent)
Flip the color to something light with a strong dark shadow instead of light shadow. This guarantees contrast against sky, rock, or anything else:
jsx{ name: "The Inverse", className: "text-slate-100" },
and change its shadow to match the others (dark shadow, not the white one currently hardcoded just for this button):
jsxclassName={`${realm.className} drop-shadow-[2px_2px_1px_black] ...`}
(Right now "The Inverse" is the only one using a white shadow — drop-shadow-[2px_2px_3px_rgba(255,255,255,0.5)] is actually on your <h1>, but worth double-checking your realm button doesn't have something similar. From the screenshot it looks like the black text has no real shadow at all, which is why it's only surviving because it happens to sit on light sky right now.)
Option B — Thematic "inverse" treatment
Since this is literally the realm called "The Inverse," you could lean into the concept — a color that reads as an inversion of the others, like a soft white-lavender or pale silver, giving it a "reflection/negative" feel distinct from the warm/cool tones of the other five:
jsx{ name: "The Inverse", className: "text-zinc-200" },
Option C — Outline/stroke approach
Keep it black but add a light outline via text-stroke (needs a small plugin or inline style) so it holds up no matter what's behind it — more robust but more setup.
My honest recommendation: Option A or B, both with a solid dark drop-shadow like the rest of your realms use. It's the smallest change, keeps consistency with your existing pattern, and won't break the next time you swap the background image.
Want me to write out the exact line to replace in your file?lets fix "The nav row is visually noisy"Devised visual styling to declutter navigation interfaceDevised visual styling to declutter navigation interfaceGood call — the fix is to give the nav a consistent surface to sit on, instead of letting six different colored texts float directly on the photo. Same trick you already used for "The Latest" card.
Here's the approach:
Wrap the <nav> in a semi-transparent bar, similar to your "Latest" panel — a dark, blurred backdrop strip that spans (or roughly centers under) the realm names. This gives every color a neutral background to read against, so the mist/rock/sky behind it stops competing with the text.
jsx<nav className="mt-8 mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-4 rounded-xl border border-yellow-500/20 bg-black/50 px-8 py-4 text-xl font-bold backdrop-blur-sm">
  {realms.map((realm) => (
    <button
      key={realm.name}
      className={`${realm.className} drop-shadow-[2px_2px_1px_black] transition-all duration-300 hover:scale-110 hover:tracking-widest`}
    >
      {realm.name}
    </button>
  ))}
</nav>
What changed:

Added bg-black/50 backdrop-blur-sm — same treatment as your "Latest" card, so it's visually consistent with an element you already like.
Added rounded-xl border border-yellow-500/20 — matches "Latest" card's border styling, ties the whole page together.
Added max-w-4xl mx-auto px-8 py-4 — gives the bar real edges/padding instead of the text floating loose, and keeps it centered regardless of screen width.

This should immediately calm things down — all six colors get the same dark, blurred surface, so contrast becomes predictable instead of depending on what patch of sky/rock happens to be behind each word.
Want me to also adjust the spacing/size so the bar doesn't feel cramped against the header text above it, or is this enough to test first?here is it now Id likea little bit room between the title and the nav and make the nav centered, the black backdrop also thinner. I change the background image so that the characters are further down from the as wellParsed layout refinements: spacing, centering, and backdrop adjustmentsParsed layout refinements: spacing, centering, and backdrop adjustmentsHere's the adjustment — more breathing room above the nav, true centering, and a slimmer bar:
jsx<header className="pt-8 text-center">
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
What changed:

mt-8 → mt-12 on the nav — adds more vertical gap between "Planet Name" and the bar.
py-4 → py-3 — thinner bar top/bottom.
gap-y-4 → gap-y-3 — tightens the two-row wrap (Droskavar dropping to its own line) so the thinner bar doesn't look cramped when it wraps.
It's already using mx-auto + justify-center, so it should center — if it's still hugging the left edge like in your screenshot, check that nothing above it (like a parent container) has w-full without flex justify-center, or that there isn't a stray items-start/text-left on a parent overriding it. Worth pasting the full <main>/<section> wrapper if it still doesn't center after this change.

Want to try this and send another screenshot?Here is the code now, the nav is still the same: too wide and too close to the title. "use client";
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
