import { useEffect } from "react";
import type { Cat } from "../data/cats";
import CatPortrait from "./CatPortrait";

const mediumLabels: Record<string, string> = {
  film: "Film",
  tv: "TV Series",
  novel: "Novel",
};

interface Props {
  cat: Cat;
  onClose: () => void;
}

export default function CatModal({ cat, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 animate-fade-in bg-black/75 backdrop-blur-sm" />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={cat.name}
        className="relative z-10 flex max-h-[90vh] w-full max-w-2xl animate-fade-in flex-col overflow-y-auto rounded-2xl border border-white/15 bg-zinc-900/95 shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1.5 text-white/45 transition-colors hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/40 focus:outline-none"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col gap-6 p-8 sm:flex-row">
          {/* Portrait */}
          <div className="flex shrink-0 justify-center sm:block">
            <div className="w-44">
              <CatPortrait cat={cat} />
            </div>
          </div>

          {/* Details */}
          <div className="flex min-w-0 flex-col gap-5">
            <div>
              <h2 className="text-2xl font-bold tracking-wide text-white">
                {cat.name}
              </h2>
              <p className="mt-0.5 text-sm text-white/55">{cat.franchise}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/20 px-3 py-0.5 text-xs text-white/55">
                  {mediumLabels[cat.medium]}
                </span>
                <span className="text-sm text-white/38">{cat.year}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/78">{cat.bio}</p>

            <div>
              <h3 className="mb-1 text-xs font-semibold tracking-widest text-white/38 uppercase">
                Where to Find
              </h3>
              <p className="text-sm leading-relaxed text-white/68">
                {cat.whereToFind}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h3 className="mb-1 text-xs font-semibold tracking-widest text-white/38 uppercase">
                Did You Know
              </h3>
              <p className="text-sm leading-relaxed text-white/68">
                {cat.trivia}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
