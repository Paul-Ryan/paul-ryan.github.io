import type { Cat } from "../data/cats";
import CatPortrait from "./CatPortrait";

const mediumLabels: Record<string, string> = {
  film: "Film",
  tv: "TV Series",
  novel: "Novel",
};

interface Props {
  cat: Cat;
  onClick: (cat: Cat) => void;
}

export default function CatCard({ cat, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(cat)}
      className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:border-white/25 hover:bg-white/[0.08] focus:ring-2 focus:ring-white/40 focus:outline-none"
      aria-label={`Learn more about ${cat.name} from ${cat.franchise}`}
    >
      <div className="w-full max-w-[200px] transition-all duration-300 group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.12)]">
        <CatPortrait cat={cat} />
      </div>
      <div>
        <h2 className="text-lg font-semibold tracking-wide text-white">
          {cat.name}
        </h2>
        <p className="mt-0.5 text-sm text-white/55">{cat.franchise}</p>
        <div className="mt-2.5 flex items-center justify-center gap-2">
          <span className="rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white/45">
            {mediumLabels[cat.medium]}
          </span>
          <span className="text-xs text-white/35">{cat.year}</span>
        </div>
      </div>
    </button>
  );
}
