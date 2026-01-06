export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-24 pt-10 text-sm text-black/55">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} WAOC. All rights reserved.</div>
        <div className="text-black/45">
          This site does not constitute financial advice.
        </div>
      </div>
    </footer>
  );
}
