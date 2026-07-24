import Image from "next/image";
import BranchDivider from "@/components/BranchDivider";
import NewsletterSignup from "@/components/NewsletterSignup";
import SocialLinks from "@/components/SocialLinks";
import { shopProducts } from "@/lib/catalog";

export const metadata = { title: "About — Mercy Blossoms" };

export default function AboutPage() {
  const tree = shopProducts.find((p) => p.slug === "gods-favorite-tree");
  const behindTheScenes =
    tree && tree.kind === "storybook" ? tree.behindTheScenesImage : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <Image
          src="/brand/logo-mark.png"
          alt="Mercy Blossoms flower mark"
          width={140}
          height={140}
          className="mx-auto h-28 w-28"
        />
        <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl text-indigo">
          About Mercy Blossoms
        </h1>
      </div>

      <BranchDivider className="my-10" />

      {/* How It Started */}
      <section className="grid items-center gap-10 sm:grid-cols-2">
        {behindTheScenes && (
          <div className="overflow-hidden rounded-book border border-gold-light/50 shadow-card sm:order-2">
            <Image
              src={behindTheScenes}
              alt="Behind the scenes of God's Favorite Tree"
              width={800}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        )}
        <div className="space-y-4 text-ink/80 sm:order-1">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-blossom-deep">
            How It Started
          </p>
          <p>
            When I was ten years old, I wrote and published a children's
            book called <span className="italic">God's Favorite Tree</span>.
            Seeing a childhood idea become a real book showed me how
            something small and personal could grow into something
            meaningful.
          </p>
          <p>
            Years later, I returned to that idea and began to see it as
            more than one story. I saw the beginning of a creative space
            where children could learn about their faith and grow closer
            to God.
          </p>
          <p>
            <a
              href="https://www.seacoastonline.com/story/news/local/hampton-union/2013/09/20/child-s-campfire-story-becomes/44248829007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blossom-deep underline hover:text-indigo"
            >
              Read the original Seacoastonline interview →
            </a>
          </p>
        </div>
      </section>

      <BranchDivider className="my-14" />

      {/* How It's Going */}
      <section className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-[0.25em] text-blossom-deep">
          How It's Going
        </p>
        <p className="mt-4 text-ink/75">
          In August 2026, I created Mercy Blossoms, beginning with a
          collection of Catholic coloring pages for children. It was the
          first step toward bringing my childhood idea back to life and
          creating something meaningful for a new generation.
        </p>
        <p className="mt-4 text-ink/75">
          My hope is to make faith feel joyful, approachable, and easy for
          children and families to share.
        </p>
      </section>

      <BranchDivider className="my-14" />

      {/* Keep Connected */}
      <div className="mx-auto max-w-md text-center">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
          Keep Connected
        </p>
        <p className="mt-3 text-ink/75">
          Follow Mercy Blossoms on social media and join the newsletter for
          new coloring pages, free resources, and updates as the library
          grows.
        </p>
        <div className="mt-5 flex justify-center">
          <SocialLinks variant="light" />
        </div>
        <a
          href="mailto:aislingbihari@mercyblossoms.com"
          className="mt-5 inline-block text-sm text-ink/70 hover:text-blossom-deep"
        >
          aislingbihari@mercyblossoms.com
        </a>
      </div>

      <BranchDivider className="my-14" />

      <NewsletterSignup
        heading="Grow With Mercy Blossoms"
        body="Join our little community and receive a free coloring page, new resource announcements, and occasional updates from me."
      />
    </div>
  );
}
