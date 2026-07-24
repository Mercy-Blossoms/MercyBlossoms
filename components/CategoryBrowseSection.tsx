import Image from "next/image";
import type { Category } from "@/lib/catalog";
import EmailGateDownload from "@/components/EmailGateDownload";

export default function CategoryBrowseSection({ cat }: { cat: Category }) {
  return (
    <section id={cat.id} className="scroll-mt-24">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="w-40 flex-none overflow-hidden rounded-book border border-gold-light/50 shadow-card">
          <Image
            src={cat.coverImage}
            alt={`${cat.name} cover art`}
            width={300}
            height={400}
            className="h-auto w-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl text-indigo">{cat.name}</h2>
          <p className="mt-2 text-sm text-ink/70">{cat.blurb}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-ink/50">
            {cat.pages.length} pages · Free
          </p>
          <div className="mt-3">
            <EmailGateDownload
              href={cat.downloadAllHref}
              label={`Download All of ${cat.shortName}`}
              filename={`mercy-blossoms-${cat.id}.pdf`}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {cat.pages.map((p, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-book border border-gold-light/50 bg-white shadow-card"
          >
            <Image
              src={p.image}
              alt={p.caption}
              width={400}
              height={520}
              className="h-auto w-full"
            />
            <div className="p-3">
              <p className="line-clamp-2 text-xs text-ink/60">{p.caption}</p>
              <div className="mt-2">
                <EmailGateDownload
                  href={p.pdf}
                  label="Download"
                  filename={`mercy-blossoms-${cat.id}-${i + 1}.pdf`}
                  className="w-full rounded-book border border-sage-deep px-3 py-1.5 text-center font-display text-[11px] uppercase tracking-wide text-sage-deep transition-colors hover:bg-sage-tint"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
