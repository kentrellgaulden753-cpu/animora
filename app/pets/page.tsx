"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const pets = [
  {
    id: 1,
    name: "Golden Retriever",
    category: "Dogs",
    description: "Friendly, affectionate and energetic companions.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "British Shorthair",
    category: "Cats",
    description: "Calm, charming and wonderfully curious.",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Colourful Companion",
    category: "Birds",
    description: "Discover the care and personality birds need.",
    image:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Gentle Rabbit",
    category: "Rabbits",
    description: "Gentle, curious animals with individual needs.",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Playful Puppy",
    category: "Dogs",
    description: "Learn about training, exercise and daily care.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Curious Cat",
    category: "Cats",
    description: "Find out about enrichment, comfort and care.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = ["All Pets", "Dogs", "Cats", "Birds", "Rabbits"];

export default function PetsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Pets");
  const [search, setSearch] = useState("");

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesCategory =
        selectedCategory === "All Pets" ||
        pet.category === selectedCategory;

      const matchesSearch =
        pet.name.toLowerCase().includes(search.toLowerCase()) ||
        pet.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#18251f]">
      <header className="border-b border-[#e8e8df] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-[#183d32]"
          >
            animora<span className="text-[#d19b52]">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#e1e4dc] px-5 py-3 text-sm font-semibold hover:bg-[#fbfaf7]"
          >
            ← Home
          </Link>
        </div>
      </header>

      <section className="bg-[#183d32] px-5 py-14 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d7b47d]">
            THE ANIMORA COLLECTION
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Meet your next
            <span className="block font-serif italic text-[#d7b47d]">
              best friend.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            Explore our animal categories, discover their individual needs,
            and take the time to find the right companion for your home.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/80">
            <span>♡ Responsible care</span>
            <span>✳ Thoughtful matching</span>
            <span>✓ Clear information</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a16d30]">
              EXPLORE OUR CATALOGUE
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Find your kind of companion.
            </h2>
          </div>

          <p className="text-sm text-[#68736c]">
            {filteredPets.length} example listings
          </p>
        </div>

        <div className="mt-8">
          <label
            htmlFor="pet-search"
            className="mb-2 block text-sm font-semibold"
          >
            Search animals
          </label>

          <input
            id="pet-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try dogs, cats or rabbits..."
            className="w-full rounded-xl border border-[#dfe3da] bg-white px-4 py-3 outline-none transition placeholder:text-[#9aa39b] focus:border-[#65836b] sm:max-w-md"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#183d32] text-white"
                  : "border border-[#dfe3da] bg-white text-[#526057] hover:border-[#65836b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPets.map((pet) => (
            <article
              key={pet.id}
              className="overflow-hidden rounded-2xl border border-[#e8e8df] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={800}
                  height={640}
                  unoptimized
                  className="h-64 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#183d32]">
                  {pet.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{pet.name}</h3>

                <p className="mt-2 text-sm leading-6 text-[#68736c]">
                  {pet.description}
                </p>

                <a
                  href="mailto:hello@animora.example?subject=Pet%20enquiry"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#183d32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#285b49]"
                >
                  Enquire about this animal ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-[#cfd7cc] p-10 text-center">
            <h3 className="text-xl font-semibold">No matches found</h3>
            <p className="mt-2 text-sm text-[#68736c]">
              Try another search or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All Pets");
              }}
              className="mt-5 rounded-full bg-[#183d32] px-5 py-3 text-sm font-semibold text-white"
            >
              Show all animals
            </button>
          </div>
        )}

        <p className="mt-10 text-xs leading-5 text-[#7b857d]">
          Catalogue preview: these are example listings, not confirmed animals
          available for sale. Actual availability, photographs, care details,
          health records and contact information must be verified before launch.
        </p>
      </section>

      <footer className="border-t border-[#e8e8df] bg-white px-5 py-7 text-center text-sm text-[#68736c]">
        © {new Date().getFullYear()} Animora. Thoughtful pet ownership starts here.
      </footer>
    </main>
  );
}