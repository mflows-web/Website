export default function Setlist() {
  const songs = [
    "Oasis - Live Forever",
    "Dodgy - Staying Out For The Summer",
    "Ocean Colour Scene - The Circle",
    "Travis - Why Does It Always Rain On Me",
    "Snow Patrol - Chasing Cars",
    "James - Laid",
    "Ocean Colour Scene - The Day We Caught The Train",
    "Paul Weller - You Do Something To Me",
    "Oasis - Half The World Away",
    "The Coral - Dreaming Of You",
    "Space - Neighbourhood",
    "R.E.M - Losing My Religion",
    "Shed Seven - Going For Gold",
    "Oasis - She's Electric",
    "Paul Weller - Changing Man",
    "Oasis - Rock 'N' Roll Star",
    "T.Rex - 20th Century Boy",
    "James - Sit Down",
    "The Jam - Town Called Malice",
    "Undertones - Teenage Kicks",
    "Beatles - Get Back",
    "Pulp - Disco 2000",
    "Oasis - Don't Look Back In Anger",
    "Stereophonics - Dakota",
  ];

  return (
    <section id="setlist" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Our usual setlist</h2>
      </div>
      <div className="mx-auto max-w-4xl">
        {/* Mobile: stacked, centered */}
        <ul className="sm:hidden space-y-2 text-zinc-300">
          {songs.map((s) => (
            <li key={s} className="flex">
              <div className="w-full flex justify-center text-center">
                <span className="inline-block max-w-[28ch]">{s}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop/Tablet: two columns, left/right per row */}
        <div className="hidden sm:grid grid-cols-2 gap-y-2 text-zinc-300">
          {Array.from({ length: Math.ceil(songs.length / 2) }).map((_, rowIdx) => {
            const left = songs[rowIdx * 2];
            const right = songs[rowIdx * 2 + 1];
            return (
              <>
                <div key={`left-${left}`} className="flex justify-start text-left">
                  <span className="inline-block">{left}</span>
                </div>
                <div key={`right-${right || rowIdx}-cell`} className="flex justify-end text-right">
                  {right ? <span className="inline-block">{right}</span> : <span className="inline-block" />}
                </div>
              </>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-400">Other songs available upon request</p>
      </div>
    </section>
  );
}
