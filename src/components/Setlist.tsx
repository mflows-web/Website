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
        <ul className="space-y-2 text-zinc-300">
          {songs.map((s, i) => (
            <li key={s} className="flex">
              <div className={`w-full flex justify-center text-center ${i % 2 === 0 ? "sm:justify-start sm:text-left" : "sm:justify-end sm:text-right"}`}>
                <span className="inline-block max-w-[28ch] sm:max-w-none">{s}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-zinc-400">Other songs available upon request</p>
      </div>
    </section>
  );
}
