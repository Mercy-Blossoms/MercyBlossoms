"use client";

import { useState, useEffect } from "react";
import type { Category } from "@/lib/catalog";
import CategoryBrowseSection from "@/components/CategoryBrowseSection";

export default function ColoringCollectionTabs({ categories }: { categories: Category[] }) {
  const [activeId, setActiveId] = useState(categories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setActiveId(hash as Category["id"]);
    }
  }, [categories]);

  const active = categories.find((c) => c.id === activeId)!;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`rounded-full border px-4 py-1.5 font-display text-xs uppercase tracking-wide transition-colors ${
              activeId === c.id
                ? "border-sage-deep bg-sage-deep text-parchment"
                : "border-indigo/25 text-indigo hover:bg-indigo/5"
            }`}
          >
            {c.shortName}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <CategoryBrowseSection cat={active} />
      </div>
    </div>
  );
}
