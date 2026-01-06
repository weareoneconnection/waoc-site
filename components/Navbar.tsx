import Link from "next/link";

const LINKS = [
  { href: "/verify", label: "Verify" },
  { href: "/docs", label: "Docs" },
  { href: "/community", label: "Community" },
  { href: "#connect", label: "Connect" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="card-soft rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl border border-black/10 bg-white/70" />
              <div className="leading-tight">
                <div className="text-xs tracking-[.25em] text-black/55">
                  WAOC
                </div>
                <div className="text-sm font-medium text-black/90">
                  We Are One Connection
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-7 text-sm text-black/70">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="hover:text-black transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://waoc-meditation-mvp-test.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/80 hover:bg-white transition"
              >
                Meditation App
              </a>
              <a
                href="https://waoc-genesis-mint.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90 transition"
              >
                Mint NFT
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
