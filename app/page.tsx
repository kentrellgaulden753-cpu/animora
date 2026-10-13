import Image from "next/image";

const pets = [
  {
    name: "Golden Retriever",
    category: "DOGS",
    description: "Friendly, affectionate and full of life.",
    price: "Enquire for price",
    image:
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "British Shorthair",
    category: "CATS",
    description: "Calm, charming and wonderfully curious.",
    price: "Enquire for price",
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Lovebirds",
    category: "BIRDS",
    description: "Colourful companions with lively personalities.",
    price: "Enquire for price",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  { emoji: "🐕", name: "Dogs", count: "Loyal companions" },
  { emoji: "🐈", name: "Cats", count: "Independent spirits" },
  { emoji: "🦜", name: "Birds", count: "Colourful personalities" },
  { emoji: "🐇", name: "Rabbits", count: "Gentle little friends" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#18251f]">
      <div className="bg-[#183d32] px-4 py-2 text-center text-xs tracking-wide text-white sm:text-sm">
        Every companion deserves a loving, responsible home.
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="text-2xl font-black tracking-tight text-[#183d32]">
          animora<span className="text-[#d19b52]">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#pets" className="hover:text-[#b77d34]">Our companions</a>
          <a href="#categories" className="hover:text-[#b77d34]">Explore pets</a>
          <a href="#promise" className="hover:text-[#b77d34]">Our promise</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#183d32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285b49]"
        >
          Get in touch
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 md:grid-cols-2 md:pb-24 md:pt-14">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a16d30]">
            FIND YOUR FOREVER FRIEND
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            A little more
            <br />
            love in your
            <br />
            <span className="font-serif italic text-[#65836b]">everyday.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#68736c] sm:text-lg">
            Meet your next companion through a pet shop built around care,
            transparency and finding the right match for your home.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pets"
              className="rounded-full bg-[#183d32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#285b49]"
            >
              Meet our companions ↗
            </a>
            <a
              href="#promise"
              className="rounded-full border border-[#d9ded7] px-7 py-4 text-sm font-semibold transition hover:bg-white"
            >
              Our approach
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#68736c]">
            <span>✓ Honest information</span>
            <span>✓ Care-first approach</span>
            <span>✓ Thoughtful matching</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-4xl bg-[#e9e8dd]" />
          <Image
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90"
            alt="Golden retriever enjoying a peaceful moment outdoors"
            width={1200}
            height={800}
            priority
            unoptimized
            className="relative h-90 w-full rounded-3xl object-cover sm:h-120"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:right-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a16d30]">
              THE ANIMORA DIFFERENCE
            </p>
            <p className="mt-2 text-lg font-semibold">
              More than a pet. A new chapter.
            </p>
            <p className="mt-1 text-sm text-[#68736c]">
              The right care begins before they come home.
            </p>
          </div>
        </div>
      </section>

      <section id="categories" className="border-y border-[#e8e8df] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a16d30]">
                FIND YOUR MATCH
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Who will steal your heart?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#68736c]">
              Different personalities, different needs, one important decision.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#pets"
                className="rounded-2xl border border-[#e8e8df] bg-[#fbfaf7] p-5 transition hover:-translate-y-1 hover:border-[#a4b5a5] hover:shadow-md sm:p-7"
              >
                <span className="text-4xl">{category.emoji}</span>
                <h3 className="mt-5 text-lg font-semibold">{category.name}</h3>
                <p className="mt-1 text-sm text-[#68736c]">{category.count}</p>
                <p className="mt-4 text-sm font-semibold text-[#285b49]">
                  Explore ↗
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="pets" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a16d30]">
              MEET YOUR MATCH
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              A few familiar faces.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#68736c]">
              These are example catalogue cards for the initial design. We’ll
              replace them with verified profiles of actual animals before launch.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <article
              key={pet.name}
              className="overflow-hidden rounded-2xl border border-[#e8e8df] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={900}
                  height={640}
                  unoptimized
                  className="h-64 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-widest">
                  {pet.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{pet.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#68736c]">
                  {pet.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eee] pt-4">
                  <span className="text-sm font-medium">{pet.price}</span>
                  <a
                    href="#contact"
                    className="rounded-full bg-[#edf1eb] px-4 py-2 text-sm font-semibold text-[#285b49] hover:bg-[#dfe8dc]"
                  >
                    Enquire ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="promise" className="bg-[#183d32] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7b47d]">
              OUR PROMISE
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              Good beginnings make better companions.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/75">
              Bringing an animal home is a commitment. Our goal is to help every
              customer make an informed, responsible choice with clear
              information about each animal’s needs, care and background.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 p-5">
              <span className="text-2xl">♡</span>
              <h3 className="mt-3 font-semibold">Welfare first</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Responsible sourcing and appropriate animal care matter.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 p-5">
              <span className="text-2xl">⌕</span>
              <h3 className="mt-3 font-semibold">Clear information</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Understand an animal’s needs before making a decision.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 p-5">
              <span className="text-2xl">✳</span>
              <h3 className="mt-3 font-semibold">Thoughtful matching</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Consider your home, experience and everyday routine.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 p-5">
              <span className="text-2xl">↗</span>
              <h3 className="mt-3 font-semibold">Support that matters</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Get in touch to discuss your questions and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 text-center sm:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a16d30]">
          YOUR NEXT CHAPTER STARTS HERE
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          The best friendships begin with a little curiosity.
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-[#68736c]">
          Have a question or looking for a particular companion? We’d love to
          hear from you.
        </p>
        <a
          href="mailto:hello@animora.example"
          className="mt-7 inline-flex rounded-full bg-[#183d32] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#285b49]"
        >
          Contact Animora ↗
        </a>
        <p className="mt-3 text-xs text-[#68736c]">
          Contact address is a placeholder and must be replaced before launch.
        </p>
      </section>

      <footer className="border-t border-[#e8e8df] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#68736c] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-black tracking-tight text-[#183d32]">
            animora<span className="text-[#d19b52]">.</span>
          </p>
          <p>Thoughtful pet ownership starts here.</p>
          <p>© {new Date().getFullYear()} Animora</p>
        </div>
      </footer>
    </main>
  );
}