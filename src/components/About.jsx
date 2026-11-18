
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4eee5] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#d8b98b]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b58a50]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a47b45]">
              Our Story
            </span>
            <span className="h-px w-10 bg-[#b58a50]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#201b16] sm:text-5xl lg:text-6xl">
            More Than Just
            <span className="block italic text-[#a47b45]">
              A Fragrance
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#71675d] sm:text-base">
            We believe that every fragrance tells a story.
            A story of elegance, confidence, and unforgettable moments.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 -top-5 h-full w-full border border-[#b58a50]/40" />

            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#dfc7a7] via-[#c6a77f] to-[#a47b45] p-10 sm:min-h-[460px]">
              <div className="absolute inset-5 border border-white/30" />

              <div className="relative text-center">
                <p className="font-serif text-6xl italic text-white/90 sm:text-8xl">
                  P.
                </p>
                <span className="mt-4 block text-[10px] uppercase tracking-[0.5em] text-white">
                  The Art of Perfume
                </span>
              </div>

              <div className="absolute bottom-8 right-8 font-serif text-sm italic text-white/80">
                Est. With Elegance
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a47b45]">
              The Philosophy
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-tight text-[#201b16] sm:text-4xl">
              An Expression of
              <span className="italic text-[#a47b45]"> Your Identity</span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-[#71675d] sm:text-base">
              At Parfumé, we bring together a carefully selected
              collection of fragrances designed for people who
              appreciate quality, beauty, and individuality.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#71675d] sm:text-base">
              From timeless classics to modern creations,
              every fragrance is an opportunity to express
              who you are without saying a word.
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#c8b9a6] pt-8">
              <div>
                <span className="font-serif text-2xl text-[#a47b45]">
                  01.
                </span>
                <h4 className="mt-2 text-sm font-semibold text-[#201b16]">
                  Authenticity
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#817468]">
                  Carefully selected fragrances.
                </p>
              </div>

              <div>
                <span className="font-serif text-2xl text-[#a47b45]">
                  02.
                </span>
                <h4 className="mt-2 text-sm font-semibold text-[#201b16]">
                  Elegance
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#817468]">
                  Beauty in every little detail.
                </p>
              </div>
            </div>

            <a
              href="#products"
              className="group mt-10 inline-flex items-center gap-5 border-b border-[#a47b45] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#201b16] transition hover:text-[#a47b45]"
            >
              Explore Our Collection
              <span className="text-lg transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-y border-[#c8b9a6]/70 py-10 text-center">
          <p className="font-serif text-2xl italic text-[#a47b45] sm:text-3xl">
            "Your fragrance. Your identity. Your story."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
