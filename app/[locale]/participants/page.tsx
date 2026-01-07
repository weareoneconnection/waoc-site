import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-orange-200/15 blur-3xl" />
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

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)] backdrop-blur">
      <div className="text-xs font-medium text-black/45">{n}</div>
      <div className="mt-1 text-base font-semibold text-black/85">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-black/60">{body}</div>
    </div>
  );
}

export default function ParticipantsPage({ params }: { params: { locale: string } }) {
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
              <Badge>People</Badge>
              <Badge>Identity</Badge>
              <Badge>Contributions</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              Participants
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              A simple path to participate in WAOC: <span className="font-medium text-black/70">verify → learn → act</span>.
              You join as a human, contribute as a role, and become part of a transparent network.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Verify (Must)
              </Link>
              <Link
                href={`${base}/get-started`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Get Started
              </Link>
              <Link
                href={`${base}/community`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                Join Community
              </Link>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Step
              n="1) Verify"
              title="Confirm official links & contracts"
              body="Start from the Verify Center. WAOC will never DM you for seed phrases or private keys."
            />
            <Step
              n="2) Learn"
              title="Understand the entry points"
              body="Read the short onboarding pages: Genesis NFT, Meditation Practice, Token, and the Whitepaper."
            />
            <Step
              n="3) Act"
              title="Participate with a role"
              body="Choose a role—Contributor, Ambassador, Holder—and make your first verifiable contribution."
            />
          </div>

          {/* Roles */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card
              title="Contributor"
              desc="Create value: content, ops, design, translation, support."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Help onboarding newcomers</li>
                <li>• Ship weekly improvements</li>
                <li>• Earn recognition & badges (soon)</li>
              </ul>
            </Card>

            <Card
              title="Ambassador"
              desc="Grow the network: outreach, events, partnerships."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Expand communities</li>
                <li>• Host sessions / AMAs</li>
                <li>• Build local nodes (soon)</li>
              </ul>
            </Card>

            <Card
              title="Holder"
              desc="Support the ecosystem with aligned ownership."
            >
              <ul className="space-y-2 text-sm text-black/65">
                <li>• Participate in governance direction</li>
                <li>• Access ecosystem utilities</li>
                <li>• Long-term alignment</li>
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">Your first step</div>
                <div className="mt-1 text-sm text-black/60">
                  Verify first, then pick one action you can complete today.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/verify`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Open Verify Center
                </Link>
                <Link
                  href={`${base}/network`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  View Network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
