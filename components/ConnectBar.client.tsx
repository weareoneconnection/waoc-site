"use client";

const LINKS = {
  x: "https://x.com/waoconnectone?s=21",
  tg: "https://t.me/WAOCGlobalCommunity",
  meditation: "https://waoc-meditation-mvp-test.vercel.app/",
  mint: "https://waoc-genesis-mint.vercel.app/",
};

export default function ConnectBar() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="card-soft rounded-2xl p-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs tracking-[.25em] text-black/50">
              CONNECT
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/80 hover:bg-white transition"
                target="_blank"
                rel="noreferrer"
                href={LINKS.x}
              >
                X (Twitter) →
              </a>
              <a
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/80 hover:bg-white transition"
                target="_blank"
                rel="noreferrer"
                href={LINKS.tg}
              >
                Telegram →
              </a>
              <a
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/80 hover:bg-white transition"
                target="_blank"
                rel="noreferrer"
                href={LINKS.meditation}
              >
                Meditation App →
              </a>
              <a
                className="rounded-xl bg-black px-5 py-2 text-sm text-white hover:opacity-90 transition"
                target="_blank"
                rel="noreferrer"
                href={LINKS.mint}
              >
                Mint Genesis NFT →
              </a>
            </div>
          </div>

          <div className="mt-2 text-xs text-black/50">
            Reminder: Always verify links and contracts via official sources.
            Beware of scams and clones.
          </div>
        </div>
      </div>
    </div>
  );
}
