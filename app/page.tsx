import Image from "next/image";
import Link from "next/link";
import BranchDivider from "@/components/BranchDivider";
import NewsletterSignup from "@/components/NewsletterSignup";
import EmailGateDownload from "@/components/EmailGateDownload";
import {
  categories,
  shopProducts,
  completeCollectionDownload,
  volumeOneCoverImage,
} from "@/lib/catalog";

const tree = shopProducts.find((p) => p.slug === "gods-favorite-tree")!;
const sampleCategories = categories.filter((c) => c.id !== "extras");

export default function HomePage() {
  return (
    <div>
      {/* Coloring Collection hero — purely about the coloring pages */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <Image
            src="/brand/blossom-mark.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <p className="mt-3 font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
            Catholic Coloring Collection
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-indigo sm:text-6xl">
            {completeCollectionDownload.pageCount} free Catholic coloring pages.
          </h1>
          <div className="mt-8">
            <EmailGateDownload
              href={completeCollectionDownload.href}
              label={`Download the Full Collection (${completeCollectionDownload.pageCount} pages)`}
              filename="mercy-blossoms-complete-collection.pdf"
              className="block w-full rounded-book bg-sage-deep px-8 py-4 text-center font-display text-base uppercase tracking-wide text-parchment shadow-card transition-transform hover:-translate-y-0.5 sm:inline-block sm:w-auto"
            />
            <div className="mt-4">
              <Link
                href="/coloring-collection"
                className="font-display text-sm uppercase tracking-wide text-indigo underline decoration-indigo/30 underline-offset-4 hover:text-sage-deep"
              >
                Browse by Category
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-4 -z-10 rounded-book bg-gold-light/30 blur-2xl" />
            <Link href="/coloring-collection">
              <div className="overflow-hidden rounded-book border-4 border-white shadow-card">
                <Image
                  src={volumeOneCoverImage}
                  alt="Mercy Blossoms Catholic Coloring Series: Volume One"
                  width={400}
                  height={520}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Sample options — one page from each designed category */}
          <div className="mx-auto mt-4 grid max-w-xs grid-cols-3 gap-2 sm:grid-cols-5">
            {sampleCategories.map((c) => (
              <Link
                key={c.id}
                href={`/coloring-collection#${c.id}`}
                className="overflow-hidden rounded border border-gold-light/50"
              >
                <Image
                  src={c.pages[0].image}
                  alt={`${c.name} sample`}
                  width={150}
                  height={200}
                  className="h-auto w-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BranchDivider />

      {/* Shop hero — God's Favorite Tree, still prominent, mirrored layout */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-4 -z-10 rounded-book bg-gold-light/30 blur-2xl" />
            <Link href={`/shop/${tree.slug}`} className="block -translate-y-4">
              <div className="overflow-hidden rounded-book border-4 border-white shadow-card">
                <Image
                  src={tree.coverImage}
                  alt={`${tree.title} cover`}
                  width={400}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
            From the Shop
          </p>
          <h2 className="mt-3 font-display text-4xl text-indigo">
            {tree.title}
          </h2>
          <p className="mt-2 font-display italic text-ink/70">{tree.tagline}</p>
          <p className="mt-4 max-w-md text-ink/80">{tree.description[0]}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`/shop/${tree.slug}`}
              className="rounded-book bg-sage-deep px-7 py-3 font-display text-sm uppercase tracking-wide text-parchment shadow-card transition-transform hover:-translate-y-0.5"
            >
              Shop the Book — ${tree.price.toFixed(2)}
            </Link>
            <Link
              href="/shop"
              className="rounded-book border border-indigo/30 px-7 py-3 font-display text-sm uppercase tracking-wide text-indigo transition-colors hover:bg-indigo/5"
            >
              Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      <BranchDivider />

      {/* Mission statement */}
      <section className="relative mx-auto max-w-3xl px-6 py-16 text-center">
        <Image
          src="/brand/blossom-mark.png"
          alt=""
          width={260}
          height={260}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-10"
        />
        <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
          Our Mission
        </p>
        <p className="mt-4 font-display text-2xl font-semibold leading-relaxed text-indigo/90">
          Our mission is to create beautiful, approachable Catholic
          resources that invite children to learn their faith, use their
          imagination, and discover how deeply God loves them.
        </p>
      </section>

      <BranchDivider />

      {/* Coloring collection categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="font-display text-3xl text-indigo">
            Explore the Catholic Coloring Collection
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Six free collections, downloadable by the page, by category, or
            all at once.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link key={c.id} href={`/coloring-collection#${c.id}`} className="group block">
              <div className="overflow-hidden rounded-book border border-gold-light/50 shadow-card">
                <Image
                  src={c.coverImage}
                  alt={`${c.name} cover art`}
                  width={400}
                  height={520}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center font-display text-xs uppercase tracking-wide text-indigo/80">
                {c.shortName}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <BranchDivider />

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
