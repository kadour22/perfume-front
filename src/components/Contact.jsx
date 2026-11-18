
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const mailto = `mailto:hello@yourstore.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4eee5] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d8b98b]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b58a50]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a47b45]">
              Get In Touch
            </span>
            <span className="h-px w-10 bg-[#b58a50]" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#201b16] sm:text-5xl lg:text-6xl">
            We'd Love To
            <span className="block italic text-[#a47b45]">
              Hear From You
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#71675d] sm:text-base">
            Have a question about our fragrances or need help
            choosing your perfect scent? We're here for you.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-16 grid overflow-hidden border border-[#d7c8b5] bg-[#faf7f1] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left information */}
          <div className="relative overflow-hidden bg-[#211c17] p-8 text-white sm:p-12 lg:p-14">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#e6b565]/20" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#e6b565]/20" />

            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e6b565]">
                Contact Information
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                Let's Start a
                <span className="block italic text-[#e6b565]">
                  Conversation.
                </span>
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-8 text-white/60">
                Our team is ready to assist you with any questions
                about our collection and your shopping experience.
              </p>

              <div className="mt-12 space-y-8">

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e6b565]/40 text-[#e6b565]">
                    <span className="text-lg">✉</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@yourstore.com"
                      className="mt-2 block text-sm transition hover:text-[#e6b565]"
                    >
                      hello@yourstore.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e6b565]/40 text-[#e6b565]">
                    <span className="text-lg">☎</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Call Us
                    </p>
                    <p className="mt-2 text-sm">
                      Add your phone number
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#e6b565]/40 text-[#e6b565]">
                    <span className="text-lg">⌖</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Our Location
                    </p>
                    <p className="mt-2 text-sm">
                      Add your store address
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 border-t border-white/15 pt-7">
                <p className="font-serif text-xl italic text-[#e6b565]">
                  Luxury is in the details.
                </p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a47b45]">
              Send Us A Message
            </p>

            <h3 className="mt-4 font-serif text-3xl text-[#201b16]">
              How Can We Help?
            </h3>

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">

              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76695c]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b border-[#c8b9a6] bg-transparent py-3 text-sm text-[#201b16] outline-none transition placeholder:text-[#b4a99c] focus:border-[#a47b45]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76695c]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border-b border-[#c8b9a6] bg-transparent py-3 text-sm text-[#201b16] outline-none transition placeholder:text-[#b4a99c] focus:border-[#a47b45]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76695c]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full border-b border-[#c8b9a6] bg-transparent py-3 text-sm text-[#201b16] outline-none transition placeholder:text-[#b4a99c] focus:border-[#a47b45]"
                />
              </div>

              <div>
                <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76695c]">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none border-b border-[#c8b9a6] bg-transparent py-3 text-sm text-[#201b16] outline-none transition placeholder:text-[#b4a99c] focus:border-[#a47b45]"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-5 bg-[#211c17] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#a47b45] sm:w-auto"
              >
                Send Message
                <span className="text-lg transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
