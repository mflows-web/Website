type Video = { id: string; title: string };

const videos: Video[] = [
  { id: "psiAggQO-eM", title: "Performance 1" },
  { id: "Dd74Rg1DaII", title: "Performance 2" },
  { id: "bszMRU2oIEY", title: "Performance 3" },
  { id: "aS_ksxISrN0", title: "Performance 4" },
  { id: "i138SuKzsEg", title: "Performance 5" },
  { id: "X93vOd2jSjA", title: "Performance 6" },
];

export default function VideoGrid() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight font-[var(--font-bebas)]">Performance Videos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div key={v.id} className="space-y-2">
            <div className="aspect-video overflow-hidden rounded-lg border border-zinc-200/60 dark:border-zinc-800 bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title="The Mersey Flows Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://www.youtube.com/@themerseyflows5485/videos"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center rounded-md p-[1px] border border-white"
        >
          <span className="rounded-md bg-zinc-950 px-3 py-1.5 text-sm text-white">See more on YouTube</span>
        </a>
      </div>
    </section>
  );
}
