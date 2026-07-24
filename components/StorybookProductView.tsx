import Image from "next/image";
import type { StorybookProduct } from "@/lib/catalog";
import BranchDivider from "@/components/BranchDivider";
import BuyButton from "@/components/BuyButton";

export default function StorybookProductView({ product }: { product: StorybookProduct }) {
  return (
    <div>
      <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <div className="overflow-hidden rounded-book border-4 border-white shadow-card">
            <Image
              src={product.coverImage}
              alt={`${product.title} front cover`}
              width={900}
              height={1180}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-book border border-gold-light/50">
              <Image
                src={product.backCoverImage}
                alt={`${product.title} back cover`}
                width={500}
                height={660}
                className="h-auto w-full"
              />
            </div>
            <div className="overflow-hidden rounded-book border border-gold-light/50">
              <Image
                src={product.behindTheScenesImage}
                alt="Behind the scenes: original drawings"
                width={500}
                height={660}
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-book border border-gold-light/50">
            <Image
              src={product.spineImage}
              alt={`${product.title} spine`}
              width={1000}
              height={200}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
            Storybook
          </p>
          <h1 className="mt-2 font-display text-4xl text-indigo">{product.title}</h1>
          <p className="mt-1 text-sm text-ink/60">by {product.author}</p>
          <p className="mt-2 font-display italic text-ink/70">{product.tagline}</p>

          <p className="mt-6 font-display text-2xl text-indigo">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs uppercase tracking-wide text-ink/40">
            {product.format}
          </p>

          <div className="mt-6 max-w-sm">
            <BuyButton
              price={product.price}
              label="Buy the Book"
              productName={product.title}
              slug={product.slug}
            />
          </div>

          <div className="mt-8 space-y-4 text-ink/80">
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <BranchDivider className="my-14" />

      <div>
        <h2 className="text-center font-display text-2xl text-indigo">
          Inside the book
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {product.interiorPreviewImages.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-book border border-gold-light/50 shadow-card"
            >
              <Image
                src={src}
                alt="Interior spread"
                width={700}
                height={520}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
