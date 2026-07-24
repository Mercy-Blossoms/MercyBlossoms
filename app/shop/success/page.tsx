import Link from "next/link";
import BranchDivider from "@/components/BranchDivider";

export const metadata = { title: "Thank You — Mercy Blossoms" };

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
        Order Confirmed
      </p>
      <h1 className="mt-3 font-display text-4xl text-indigo">
        Thank you for your order!
      </h1>
      <p className="mt-4 text-ink/75">
        Your copy of <span className="italic">God's Favorite Tree</span> is
        on its way. You'll receive an email receipt from Stripe shortly.
      </p>

      <BranchDivider className="my-10" />

      <Link
        href="/coloring-collection"
        className="inline-block rounded-book bg-sage-deep px-7 py-3 font-display text-sm uppercase tracking-wide text-parchment shadow-card transition-transform hover:-translate-y-0.5"
      >
        Explore the Coloring Collection
      </Link>
    </div>
  );
}
