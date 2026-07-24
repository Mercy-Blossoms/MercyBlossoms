import Link from "next/link";
import { notFound } from "next/navigation";
import { shopProducts } from "@/lib/catalog";
import StorybookProductView from "@/components/StorybookProductView";

export function generateStaticParams() {
  return shopProducts.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = shopProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/shop" className="text-sm text-indigo/70 hover:text-blossom-deep">
        ← Back to Shop
      </Link>

      <div className="mt-6">
        <StorybookProductView product={product} />
      </div>
    </div>
  );
}
