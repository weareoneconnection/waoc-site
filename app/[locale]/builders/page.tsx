import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-44 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/18 blur-3xl" />
      <div className="absolute -bottom-52 -right-48 h-[560px] w-[560px] rounded-full bg-orange-200/14 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
      <h3 className="text-lg font-semibold text-black/85">{title}</h3>
      {desc ? <p className="mt-1 text-sm text-black/55">{desc}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-sm text-black/70">
      {children}
    </span>
  );
}

export default function BuildersPage({ params }: { params: { locale: string } }) {
  const locale = (params?.locale || "en").toLowerCase();
  const base = `/${locale.startsWith("zh") ? "zh" : "en"}`;

  return (
    <main className="relative">
      <SoftBackdrop />
      <Container>
        <div className="relative py-14">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>Builders</Badge>
              <Badge>Open Infrastructure</Badge>
              <Badge>Proof of Work (Soon)</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              Builders
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              Build with WAOC’s open infrastructure. We favor small, shippable contributions that compound into a living
              network—transparent, verifiable, and community-owned.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/docs`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Read Docs
              </Link>
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Verify First
              </Link>
              <Link
                href={`${base}/connect`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* What to build */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">What builders ship</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Pill>Onboarding pages</Pill>
              <Pill>Verification UX</Pill>
              <Pill>Community tools</Pill>
              <Pill>Visual network map</Pill>
              <Pill>Mini-apps & experiments</Pill>
            </div>
            <p className="mt-4 text-sm text-black/60">
              Start small: improve one page, clarify one flow, or ship one component. We track contributions and will
              later attach verifiable badges (NFT/SBT).
            </p>
          </div>

          {/* Builder lanes */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card
              title="Product & UX"
              desc="Make the site feel trustworthy and effortless."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Navigation & information architecture</li>
                <li>• Verify-center clarity & anti-scam UX</li>
                <li>• Mobile polish & performance</li>
              </ul>
            </Card>

            <Card
              title="Engineering"
              desc="Build components & integrations that scale."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Directory / filters / search</li>
                <li>• On-chain reads (later)</li>
                <li>• CI & deployment hygiene</li>
              </ul>
            </Card>

            <Card
              title="Content & Ops"
              desc="Turn ideology into a daily, living system."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Threads / announcements</li>
                <li>• Community playbooks</li>
                <li>• Event templates & localization</li>
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">Ready to build?</div>
                <div className="mt-1 text-sm text-black/60">
                  Pick a lane, ship one improvement, then share it with the community.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/docs`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Start from Docs
                </Link>
                <Link
                  href={`${base}/network`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  See the Network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
