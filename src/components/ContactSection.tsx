export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <section className="space-y-3">
          <h3 className="text-xl font-medium">Booking & Enquiries</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a className="underline hover:opacity-80" href="mailto:themerseyflows@gmail.com">
                themerseyflows@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a className="underline hover:opacity-80" href="tel:+447454713523">
                07454 713523
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-medium">Socials</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>
              <a className="underline hover:opacity-80" href="https://www.facebook.com/TheMerseyFlows/" target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
            </li>
            <li>
              <a className="underline hover:opacity-80" href="https://www.instagram.com/themerseyflowsband/" target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section className="mt-12">
        <h3 className="text-xl font-medium mb-3">Availability</h3>
        <p className="max-w-2xl mx-auto text-zinc-400">
          Based in North-West England and available UK-wide. Typical sets are 2x45 minutes with sound and lighting provided.
        </p>
      </section>
    </section>
  );
}

