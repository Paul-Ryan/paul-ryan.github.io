import { useState } from "react";
import { cats, type Cat } from "../data/cats";
import CatCard from "../components/CatCard";
import CatModal from "../components/CatModal";

function StarField() {
  const stars = Array.from({ length: 90 }, (_, i) => ({
    x: ((i * 137.508) % 100).toFixed(2),
    y: ((i * 97.318) % 100).toFixed(2),
    r: i % 7 === 0 ? 1.3 : i % 3 === 0 ? 0.9 : 0.5,
    opacity: (0.15 + ((i * 73) % 30) / 100).toFixed(2),
  }));

  return (
    <svg
      className="pointer-events-none fixed inset-0 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 100 100"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r * 0.4}
          fill="white"
          opacity={s.opacity}
        />
      ))}
    </svg>
  );
}

export default function CatsOfSciFi() {
  const [selected, setSelected] = useState<Cat | null>(null);

  return (
    <div className="relative min-h-screen bg-zinc-950 px-4 py-16">
      <StarField />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-16 animate-fade-in text-center">
          <h1 className="font-display text-4xl font-bold tracking-widest text-white sm:text-5xl">
            The Cats of
            <br />
            Science Fiction
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/45">
            A compendium of feline heroes, companions, and enigmas from across
            the galaxy.
          </p>
        </header>

        {/* Grid */}
        <main>
          <ul
            className="grid animate-fade-in grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Cats of science fiction"
          >
            {cats.map((cat) => (
              <li key={cat.id}>
                <CatCard cat={cat} onClick={setSelected} />
              </li>
            ))}
          </ul>
        </main>

        <footer className="mt-20 text-center text-xs text-white/20">
          Select a portrait to learn more.
        </footer>
      </div>

      {selected && (
        <CatModal cat={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
