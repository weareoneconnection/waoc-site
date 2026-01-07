import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-44 -left-44 h-[540px] w-[540px] rounded-full bg-amber-200/18 blur-3xl" />
      <div className="absolute -bottom-52 -right-52 h-[600px] w-[600px] rounded-full bg-orange-200/14 blur-3xl" />
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

export default function CommunityPage({ params }: { params: { locale: string } }) {
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
              <Badge>Community</Badge>
              <Badge>Coordination</Badge>
              <Badge>Governance (Evolving)</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              Community
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              WAOC is a coordination layer for people. We organize around transparency, verified information, and
              collective value creation—so the network grows without losing trust.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/connect`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Join & Connect
              </Link>
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Verify Official Links
              </Link>
              <Link
                href={`${base}/network`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                View Network
              </Link>
            </div>
          </div>

          {/* Operating principles */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card title="Trust first" desc="Verification is the default behavior.">
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Official links only</li>
                <li>• Anti-scam clarity</li>
                <li>• Transparent updates</li>
              </ul>
            </Card>

            <Card title="Open contribution" desc="Anyone can help; work compounds.">
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Small shippable tasks</li>
                <li>• Shared templates & playbooks</li>
                <li>• Recognition system (soon)</li>
              </ul>
            </Card>

            <Card title="Collective direction" desc="We coordinate without central capture.">
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Public decisions & notes</li>
                <li>• Community-led initiatives</li>
                <li>• Governance evolves over time</li>
              </ul>
            </Card>
          </div>

          {/* Participation loops */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">How coordination happens</div>
            <div className="mt-2 text-sm text-black/60">
              We run a simple loop: <span className="font-medium text-black/70">announce → align → execute → verify</span>.
              This keeps growth clean and repeatable.
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">Announcements</div>
                <div className="mt-2 text-sm text-black/60">
                  Official updates, links, releases. Everything starts from verified sources.
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">Initiatives</div>
                <div className="mt-2 text-sm text-black/60">
                  Community projects: campaigns, education, builders tasks, partnerships.
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">Verification</div>
                <div className="mt-2 text-sm text-black/60">
                  We document outcomes and gradually move proofs on-chain.
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">Join the WAOC community</div>
                <div className="mt-1 text-sm text-black/60">
                  Start from Connect, then choose one contribution you can complete this week.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/connect`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Open Connect
                </Link>
                <Link
                  href={`${base}/builders`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  Explore Builders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
