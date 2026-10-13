"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PetProfilePage() {
  const [showEnquiry, setShowEnquiry] = useState(false);

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
            href="/pets"
            className="rounded-full border border-[#e1e4dc] px-5 py-3 text-sm font-semibold hover:bg-[#fbfaf7]"
          >
            ← All pets
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="text-sm text-[#68736c]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" / "}
          <Link href="/pets" className="hover:underline">
            Pets
          </Link>
          {" / Profile"}
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-3xl bg-[#e9e8dd]">
              <Image
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90"
                alt="Example photograph of a golden retriever"
                width={1200}
                height={800}
                unoptimized
                className="h-90 w-full object-cover sm:h-130"
              />
            </div>

            <p className="mt-3 text-xs leading-5 text-[#7b857d]">
              Example photograph for the design preview. Replace it with a
              verified photograph of the actual animal before publishing.
            </p>
          </div>

          <div className="py-2">
            <span className="inline-flex rounded-full bg-[#e8eee5] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#285b49]">
              Example profile
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Golden Retriever
            </h1>

            <p className="mt-4 text-base leading-7 text-[#68736c]">
              Friendly, affectionate and energetic companions. Every animal
              has its own personality, needs and history, so getting to know
              the individual is an important part of choosing responsibly.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#e5e7df] bg-white p-4">
                <p className="text-xs text-[#68736c]">Species</p>
                <p className="mt-1 font-semibold">Dog</p>
              </div>

              <div className="rounded-2xl border border-[#e5e7df] bg-white p-4">
                <p className="text-xs text-[#68736c]">Breed</p>
                <p className="mt-1 font-semibold">Golden Retriever</p>
              </div>

              <div className="rounded-2xl border border-[#e5e7df] bg-white p-4">
                <p className="text-xs text-[#68736c]">Age</p>
                <p className="mt-1 font-semibold">To be confirmed</p>
              </div>

              <div className="rounded-2xl border border-[#e5e7df] bg-white p-4">
                <p className="text-xs text-[#68736c]">Availability</p>
                <p className="mt-1 font-semibold">Not yet confirmed</p>
              </div>
            </div>

            <section className="mt-8 border-t border-[#e5e7df] pt-7">
              <h2 className="text-xl font-semibold">Care and compatibility</h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#68736c]">
                <li>• Daily exercise and appropriate enrichment</li>
                <li>• Balanced nutrition and regular veterinary care</li>
                <li>• Time for training, companionship and grooming</li>
                <li>• A suitable home environment and family routine</li>
              </ul>
            </section>

            <section className="mt-8 rounded-2xl bg-[#edf1eb] p-5">
              <h2 className="font-semibold">Health and background</h2>
              <p className="mt-2 text-sm leading-6 text-[#526057]">
                Veterinary records, vaccination information, breeder or
                caregiver details, and other relevant documents must be
                verified for the actual animal.
              </p>
            </section>

            <button
              type="button"
              onClick={() => setShowEnquiry(!showEnquiry)}
              className="mt-8 w-full rounded-full bg-[#183d32] px-6 py-4 font-semibold text-white transition hover:bg-[#285b49]"
            >
              {showEnquiry ? "Close enquiry details" : "Enquire about this pet ↗"}
            </button>

            {showEnquiry && (
              <div className="mt-4 rounded-2xl border border-[#e5e7df] bg-white p-5">
                <h2 className="font-semibold">Interested in this companion?</h2>
                <p className="mt-2 text-sm leading-6 text-[#68736c]">
                  This is a design preview. We&apos;ll connect this button to a
                  real enquiry form and your business contact details later.
                </p>
                <Link
                  href="/pets"
                  className="mt-4 inline-block text-sm font-semibold text-[#285b49] underline"
                >
                  Continue browsing pets
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8e8df] bg-white px-5 py-7 text-center text-sm text-[#68736c]">
        © {new Date().getFullYear()} Animora. Thoughtful pet ownership starts here.
      </footer>
    </main>
  );
}