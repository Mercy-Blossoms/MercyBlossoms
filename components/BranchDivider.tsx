import Image from "next/image";

export default function BranchDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-2 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold-light/70" />
      <Image
        src="/brand/blossom-mark.png"
        alt=""
        width={28}
        height={28}
        className="h-7 w-7"
      />
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold-light/70" />
    </div>
  );
}
