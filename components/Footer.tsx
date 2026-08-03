import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gold-light/40 bg-indigo-deep text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/brand/blossom-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <p className="font-display text-xl font-semibold tracking-tight text-parchment">
                Mercy Blossoms
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-parchment/70">
              Faith-filled stories, coloring pages, and printables created to
              help little hearts grow closer to God.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-light">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-parchment/80">
              <li><Link href="/coloring-collection" className="hover:text-gold-light">Coloring Collection</Link></li>
              <li><Link href="/shop" className="hover:text-gold-light">Shop</Link></li>
              <li><Link href="/about" className="hover:text-gold-light">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold-light">
              Follow
            </p>
            <div className="mt-3">
              <SocialLinks variant="dark" />
            </div>
            <a
              href="mailto:aislingbihari@mercyblossoms.com"
              className="mt-4 block text-sm text-parchment/80 hover:text-gold-light"
            >
              aislingbihari@mercyblossoms.com
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-parchment/10 pt-6 text-xs text-parchment/50">
          © {new Date().getFullYear()} Mercy Blossoms. All artwork and text
          are the property of their creators.
        </p>
      </div>
    </footer>
  );
}
