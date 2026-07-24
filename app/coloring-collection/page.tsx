import { categories, completeCollectionDownload } from "@/lib/catalog";
import BranchDivider from "@/components/BranchDivider";
import EmailGateDownload from "@/components/EmailGateDownload";
import ColoringCollectionTabs from "@/components/ColoringCollectionTabs";

export const metadata = { title: "Catholic Coloring Collection — Mercy Blossoms" };

export default function ColoringCollectionPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
          Catholic Coloring Collection
        </p>
        <h1 className="mt-3 font-display text-4xl text-indigo">
          Color, learn, and begin for free
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Every page here is free, including original standalone designs
          and pages from every collection in the series. Pick a category
          below, or download everything at once.
        </p>

        <div className="mt-6 flex justify-center">
          <EmailGateDownload
            href={completeCollectionDownload.href}
            label={`Download the Complete Collection (${completeCollectionDownload.pageCount} pages)`}
            filename="mercy-blossoms-complete-collection.pdf"
            className="rounded-book bg-sage-deep px-7 py-3 font-display text-sm uppercase tracking-wide text-parchment shadow-card transition-transform hover:-translate-y-0.5"
          />
        </div>
      </div>

      <BranchDivider className="my-10" />

      <ColoringCollectionTabs categories={categories} />
    </div>
  );
}
