export default function IntroMobile() {
  return (
    <section id="intro" className="lg:hidden mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center landscape:py-4">
      <div className="mx-auto max-w-3xl rounded-xl bg-black/50 px-4 py-4 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)] landscape:py-2">
        <p className="text-zinc-100 text-base landscape:text-sm">
          North-West England's 90s Britpop band. From Oasis to Travis and Paul Weller to Space, we deliver a night of hit anthems for weddings, events and venues.
        </p>
        <div className="mt-3 flex justify-center gap-2 landscape:mt-2 landscape:gap-1">
          <a
            href="#setlist"
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 landscape:px-3 landscape:py-1 landscape:text-xs"
          >
            Setlist
          </a>
          <a
            href="#videos"
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 landscape:px-3 landscape:py-1 landscape:text-xs"
          >
            Performance videos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900 landscape:px-3 landscape:py-1 landscape:text-xs"
          >
            Book the band
          </a>
        </div>
      </div>
    </section>
  );
}
