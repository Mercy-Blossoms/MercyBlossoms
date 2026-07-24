import Image from "next/image";
import Link from "next/link";
import { shopProducts } from "@/lib/catalog";
import BranchDivider from "@/components/BranchDivider";

export const metadata = { title: "Shop — Mercy Blossoms" };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
          Shop
        </p>
        <h1 className="mt-3 font-display text-4xl text-indigo">
          Faith-filled resources for children
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-ink/70">
          Explore Aisling's original storybook alongside printable prayer
          cards, bookmarks, activities, learning resources, and Catholic
          family favorites.
        </p>
      </div>

      <BranchDivider className="my-10" />

      <div className="mx-auto grid max-w-sm gap-8">
        {shopProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="group block overflow-hidden rounded-book border border-gold-light/50 bg-white shadow-card transition-transform hover:-translate-y-1"
          >
            <Image
              src={product.coverImage}
              alt={`${product.title} cover`}
              width={760}
              height={1000}
              className="h-auto w-full"
            />
            <div className="p-6">
              <p className="font-display text-xs uppercase tracking-wide text-blossom-deep">
                God's Favorite Tree
              </p>
              <h2 className="mt-1 font-display text-xl text-indigo">
                {product.title}
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Discover the original children's story Aisling wrote and
                published at age ten, now at the heart of Mercy Blossoms.
              </p>
              <p className="mt-4 font-display text-lg text-indigo">
                ${product.price.toFixed(2)}
              </p>
              <span className="mt-4 inline-block rounded-book bg-sage-deep px-5 py-2 font-display text-sm uppercase tracking-wide text-parchment">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>

      <BranchDivider className="my-14" />

      <div className="grid gap-8 sm:grid-cols-2">
        <div className="rounded-book border border-dashed border-indigo/30 p-8 text-center">
          <p className="font-display text-xs uppercase tracking-wide text-blossom-deep">
            Coming soon
          </p>
          <h2 className="mt-2 font-display text-xl text-indigo">Printable Resources</h2>
          <p className="mt-2 text-sm text-ink/70">
            Free printable prayer cards, bookmarks, activity packs,
            worksheets, sacramental guides, and more resources made for
            growing Catholic families — download instantly with your email,
            just like the coloring collection.
          </p>
        </div>
        <div className="rounded-book border border-dashed border-indigo/30 p-8 text-center">
          <p className="font-display text-xs uppercase tracking-wide text-blossom-deep">
            Coming soon
          </p>
          <h2 className="mt-2 font-display text-xl text-indigo">
            Catholic Family Favorites
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Browse thoughtfully chosen Catholic books, rosaries, Mass
            helpers, and family resources recommended through our Amazon
            affiliate links.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink/50">
        As an Amazon Associate, Mercy Blossoms may earn from qualifying
        purchases at no additional cost to you.
      </p>
    </div>
  );
}
