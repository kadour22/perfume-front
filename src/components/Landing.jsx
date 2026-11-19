import React, { useState } from "react";
import { Link } from "react-router-dom";
import man from '../assets/man.png'
import logo from '../assets/logo.png'
const GOLD = "#e6b565";
const GOLD_DEEP = "#c8923a";
const INK = "#0a0806";
const CREAM = "#faf6f0";

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const sans = { fontFamily: "'Inter', system-ui, sans-serif" };

const Icon = ({ children, className = "w-5 h-5", ...p }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...p}
  >
    {children}
  </svg>
);

const SearchIcon = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);
const UserIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
  </Icon>
);
const HeartIcon = (p) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.4-9-9.2C1.8 7.3 4 4.5 7 4.5c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3 0 5.200 2.800 4 6.300C19 15.600 12 20 12 20Z" />
  </Icon>
);
const CartIcon = (p) => (
  <Icon {...p}>
    <path d="M3 4h2.500l2.200 11h10.300l2-8H6.500" />
    <circle cx="9" cy="19.500" r="1.300" />
    <circle cx="17" cy="19.500" r="1.300" />
  </Icon>
);
const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
const ChevronDown = (p) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);
const DiamondIcon = (p) => (
  <Icon {...p}>
    <path d="M6 4h12l4 5-10 11L2 9l4-5Z" />
    <path d="M2 9h20M9 4l3 5 3-5M12 9v11" />
  </Icon>
);
const TruckIcon = (p) => (
  <Icon {...p}>
    <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" />
    <circle cx="6.500" cy="17.500" r="1.800" />
    <circle cx="16.500" cy="17.500" r="1.800" />
  </Icon>
);
const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3 4 6v6c0 4.500 3.200 8 8 9 4.800-1 8-4.500 8-9V6l-8-3Z" />
    <path d="m8.500 12 2.500 2.500 4.500-5" />
  </Icon>
);
const HeadsetIcon = (p) => (
  <Icon {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.500" />
    <rect x="17" y="14" width="4" height="6" rx="1.500" />
    <path d="M19 20c0 1-2 2-5 2" />
  </Icon>
);
const GiftIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13M5 12v9h14v-9M12 8c-2-4-6-4-6-1.500S10 8 12 8Zm0 0c2-4 6-4 6-1.500S14 8 12 8Z" />
  </Icon>
);
const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
  </Icon>
);
const PlayIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...p}>
    <path d="M8 5v14l11-7z" />
  </svg>
);
const SocialIcon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d={d} />
  </svg>
);

const Star = ({ filled = true, half = false }) => (
  <svg viewBox="0 0 24 24" className="w-3 h-3">
    <defs>
      <linearGradient id="halfStar">
        <stop offset="50%" stopColor={GOLD_DEEP} />
        <stop offset="50%" stopColor="#d9d2c7" />
      </linearGradient>
    </defs>
    <path
      d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.9L12 2.500Z"
      fill={half ? "url(#halfStar)" : filled ? GOLD_DEEP : "#d9d2c7"}
    />
  </svg>
);

const Stars = ({ rating = 5, className = "" }) => (
  <div className={`flex gap-0.5 ${className}`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        filled={i <= Math.floor(rating)}
        half={i === Math.ceil(rating) && rating % 1 !== 0}
      />
    ))}
  </div>
);

/* ---------- Generic bottle illustration ---------- */
const Bottle = ({
  body = "#10151f",
  cap = "#0a0a0a",
  liquid = null,
  label = "",
  sub = "",
  labelColor = "#e6e6e6",
  shape = "rect", // rect | tall | round
  className = "",
}) => {
  const bodyPath =
    shape === "round"
      ? "M30 62h40c8 0 14 6 14 14v70c0 8-6 14-14 14H30c-8 0-14-6-14-14V76c0-8 6-14 14-14Z"
      : shape === "tall"
      ? "M34 60h32v100H34z"
      : "M22 62h56c4 0 8 4 8 8v88c0 4-4 8-8 8H22c-4 0-8-4-8-8V70c0-4 4-8 8-8Z";
  return (
    <svg viewBox="0 0 100 180" className={className} aria-hidden>
      <defs>
        <linearGradient id={`g-${body}`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".18" />
          <stop offset=".35" stopColor="#fff" stopOpacity=".02" />
          <stop offset="1" stopColor="#000" stopOpacity=".25" />
        </linearGradient>
      </defs>
      <rect x="40" y="14" width="20" height="30" rx="3" fill={cap} />
      <rect x="36" y="42" width="28" height="20" fill={cap} opacity=".9" />
      <path d={bodyPath} fill={liquid || body} />
      <path d={bodyPath} fill={`url(#g-${body})`} />
      {label && (
        <text
          x="50"
          y="112"
          textAnchor="middle"
          fontSize="8.500"
          letterSpacing="1.200"
          fill={labelColor}
          style={serif}
        >
          {label}
        </text>
      )}
      {sub && (
        <text x="50" y="124" textAnchor="middle" fontSize="5" fill={labelColor} opacity=".7">
          {sub}
        </text>
      )}
    </svg>
  );
};

/* ---------- Data ---------- */
const navLinks = ["Home", "Products", "Categories", "About", "Contact"];

const features = [
  { icon: DiamondIcon, label: "Premium Quality" },
  { icon: TruckIcon, label: "Fast Delivery" },
  { icon: ShieldIcon, label: "Secure Payment" },
  { icon: HeadsetIcon, label: "24/7 Support" },
];

const products = [
  { name: "Bleu de Chanel", rating: 5, reviews: 124, price: 129.99, bottle: { body: "#0d1a33", cap: "#050505", label: "BLEU", sub: "DE CHANEL" } },
  { name: "Dior Sauvage", rating: 4.5, reviews: 98, price: 119.99, bottle: { body: "#101c35", cap: "#111", label: "SAUVAGE", sub: "EAU DE TOILETTE", shape: "tall" } },
  { name: "YSL Libre", rating: 4.5, reviews: 87, price: 139.99, bottle: { body: "#f0c35a", cap: "#111", label: "LIBRE", labelColor: "#4a3210", shape: "round" } },
  { name: "Creed Aventus", rating: 4.5, reviews: 72, price: 229.99, bottle: { body: "#c9ccd0", cap: "#2a2a2a", label: "AVENTUS", labelColor: "#1a1a1a" } },
  { name: "Tom Ford Oud Wood", rating: 3.5, reviews: 66, price: 199.99, bottle: { body: "#2a1a10", cap: "#0a0a0a", label: "OUD WOOD", labelColor: "#d9b77a", shape: "tall" } },
];

const reviews = [
  { name: "Ahmed Ben Ali", text: "Amazing quality and fast delivery! Highly recommended.", initials: "AB" },
  { name: "Sarah Mahboubi", text: "The best perfume store ever. Elegant and professional.", initials: "SM" },
  { name: "Karim Trabelsi", text: "Outstanding service and authentic products.", initials: "KT" },
];

const quickLinks = ["Home", "Products", "Categories", "About Us", "Contact"];
const careLinks = ["FAQ", "Shipping Policy", "Return Policy", "Privacy Policy", "Terms of Service"];

/* ---------- Pieces ---------- */
const Logo = ({ size = "md" }) => (
  <div className="flex items-center gap-3">
    <img 
      src={logo}
    />
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-40 mx-auto max-w-[1280px] px-4 pt-5 sm:px-6 lg:px-12 lg:pt-6">
      <div className="flex items-center justify-between gap-4">
        <div className="scale-[.8] origin-left sm:scale-100">
          <Logo />
        </div>
        <nav className="hidden items-center gap-1 text-sm text-white lg:flex" style={sans}>
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`flex items-center gap-1 rounded-full px-5 py-2 transition ${
                i === 0 ? "font-medium text-black" : "hover:text-[#e6b565]"
              }`}
              style={i === 0 ? { background: `linear-gradient(135deg, #f0c27a, ${GOLD_DEEP})` } : {}}
            >
              {l}
              {l === "Categories" && <ChevronDown className="h-3 w-3" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-white sm:gap-5">
          <SearchIcon className="hidden h-5 w-5 cursor-pointer hover:text-[#e6b565] sm:block" />
          <UserIcon className="hidden h-5 w-5 cursor-pointer hover:text-[#e6b565] sm:block" />
          <HeartIcon className="h-5 w-5 cursor-pointer hover:text-[#e6b565]" />
          <div className="relative cursor-pointer">
            <CartIcon className="h-5 w-5 hover:text-[#e6b565]" />
            <span
              className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-black"
              style={{ background: GOLD }}
            >
              2
            </span>
          </div>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden"
          >
            <Icon className="h-6 w-6">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </Icon>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mt-4 flex flex-col rounded-2xl border border-white/10 bg-black/90 p-2 text-white backdrop-blur lg:hidden"
          style={sans}
        >
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm ${i === 0 ? "text-[#e6b565]" : "hover:bg-white/10"}`}
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4eee5]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-[#d8b98b]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-white/80 blur-[100px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1400px] grid-cols-1 items-center px-6 pt-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:pt-0">

        {/* Left content */}
        <div className="relative z-10 mx-auto w-full max-w-xl py-10 text-center lg:mx-0 lg:py-20 lg:text-left">

          <div className="mb-7 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b58a50]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#a47b45]">
              The Art of Fragrance
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#201b16] sm:text-6xl lg:text-7xl">
            Discover Your
            <br />
            <span className="italic text-[#a47b45]">
              Signature
            </span>
            <br />
            Fragrance.
          </h1>

          <p className="mx-auto mt-7 max-w-md text-sm leading-8 text-[#71675d] sm:text-base lg:mx-0">
            More than a fragrance, it's a statement.
            Explore a world of exceptional scents crafted
            to express your personality and leave a lasting impression.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="group flex items-center gap-5 bg-[#201b16] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#a47b45]"
            >
              Explore Collection
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>

            <a
              href="#about"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#55483b] transition hover:text-[#a47b45]"
            >
              Discover More
            </a>
          </div>

          {/* Bottom details */}
          <div className="mt-14 flex items-center justify-center gap-8 border-t border-[#c8b9a6]/60 pt-7 lg:justify-start">
            <div>
              <p className="font-serif text-2xl text-[#201b16]">100%</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8a7d70]">
                Authentic
              </p>
            </div>

            <div className="h-9 w-px bg-[#c8b9a6]" />

            <div>
              <p className="font-serif text-2xl text-[#201b16]">Luxury</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8a7d70]">
                Experience
              </p>
            </div>

            <div className="h-9 w-px bg-[#c8b9a6]" />

            <div>
              <p className="font-serif text-2xl text-[#201b16]">Unique</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#8a7d70]">
                Collection
              </p>
            </div>
          </div>
        </div>


        <div className="relative mx-auto flex h-[430px] w-full max-w-[600px] items-end justify-center sm:h-[550px] lg:h-[680px] lg:max-w-none">

          {/* Decorative circle */}
          <div className="absolute bottom-[8%] left-1/2 aspect-square w-[85%] -translate-x-1/2 rounded-full border border-[#b58a50]/30" />

          <div className="absolute bottom-[8%] left-1/2 aspect-square w-[72%] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#dfc7a7] via-[#c7a77e] to-[#a47b45] opacity-70" />

          {/* Soft shadow */}
          <div className="absolute bottom-[5%] left-1/2 h-12 w-[65%] -translate-x-1/2 rounded-full bg-[#5a4430]/20 blur-2xl" />

          <img
            src={man}
            alt="Our luxury fragrance model"
            className="relative z-10 h-full max-h-[680px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(40,25,10,0.18)]"
          />

          {/* Floating label */}
          <div className="absolute right-0 top-[20%] z-20 hidden border border-white/70 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-md sm:block">
            <p className="font-serif text-xl italic text-[#a47b45]">
              Elegance
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#76695c]">
              In every detail
            </p>
          </div>

          <div className="absolute bottom-[15%] left-0 z-20 hidden -rotate-90 text-[10px] font-medium uppercase tracking-[0.4em] text-[#8a745d] lg:block">
            PARFUMÉ — EXCLUSIVE
          </div>
        </div>
      </div>
    </section>
    
  );
};


const ProductCard = ({ p, index }) => (
  <article
    className="group relative rounded-2xl bg-gradient-to-b from-[#e6b565]/80 via-[#e6b565]/15 to-[#c8923a]/60 p-px transition duration-500 hover:-translate-y-1.5 hover:from-[#f6d595] hover:via-[#e6b565]/40 hover:to-[#c8923a] hover:shadow-[0_18px_40px_-8px_rgba(200,146,58,.45)] max-md:last:col-span-2 max-md:last:mx-auto max-md:last:w-1/2 max-sm:last:w-full"
  >
    <div className="relative h-full overflow-hidden rounded-[15px] bg-[#0b0907]">
      {/* spotlight + stage */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(230,181,101,.32), transparent 70%)",
        }}
      />

      {/* rank + wishlist */}
      <span
        className="absolute left-4 top-3.5 z-10 text-[11px] tracking-[0.25em] text-[#e6b565]/80"
        style={serif}
      >
        N°{String(index + 1).padStart(2, "0")}
      </span>
      <button
        aria-label="Add to wishlist"
        className="absolute right-3.5 top-3 z-10 text-white/70 transition hover:scale-110 hover:text-[#e6b565]"
      >
        <HeartIcon className="h-[18px] w-[18px]" />
      </button>

      {/* bottle on a pedestal */}
      <div className="relative flex h-56 items-end justify-center pb-6">
        <div
          className="absolute bottom-4 h-5 w-24 rounded-[50%] opacity-90 blur-[1px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(230,181,101,.55), rgba(230,181,101,.08) 70%, transparent 75%)",
          }}
        />
        <Bottle
          {...p.bottle}
          className="relative h-40 drop-shadow-[0_10px_22px_rgba(230,181,101,.28)] transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* details */}
      <div className="relative px-3 pb-5 text-center sm:px-4" style={sans}>
        <div className="mx-auto mb-3 flex items-center justify-center gap-2" aria-hidden>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#e6b565]/70" />
          <span className="h-1 w-1 rotate-45 bg-[#e6b565]" />
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#e6b565]/70" />
        </div>
        <h3 className="text-xl leading-tight text-white" style={{ ...serif, fontWeight: 600 }}>
          {p.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10px] text-white/50">
          <Stars rating={p.rating} /> ({p.reviews})
        </div>
        <p
          className="mt-2 bg-clip-text text-2xl font-semibold text-transparent"
          style={{ ...serif, backgroundImage: "linear-gradient(180deg,#f6d595,#c8923a)" }}
        >
          ${p.price.toFixed(2)}
        </p>
        <button className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-full border border-[#e6b565]/70 whitespace-nowrap py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#e6b565] sm:text-[11px] sm:tracking-[0.18em] transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#f0c27a] hover:to-[#c8923a] hover:text-black">
          <CartIcon className="h-3.5 w-3.5" /> Add to Cart
        </button>
      </div>
    </div>
  </article>
);

const BestSellers = () => (
  <section id="products" className="mx-auto max-w-[1280px] px-6 pt-6 lg:px-12">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-4xl text-neutral-900" style={serif}>Our Best Sellers</h2>
        <p className="mt-1 text-sm text-neutral-600" style={sans}>
          Timeless fragrances, loved by our customers.
        </p>
      </div>
      <Link
        to='/products'
        className="hidden items-center gap-2 rounded-full border border-neutral-800 px-5 py-2 text-xs font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white sm:flex"
        style={sans}
      >
        View All Products <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
    <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
      {products.map((p, i) => (
        <ProductCard key={p.name} p={p} index={i} />
      ))}
    </div>
  </section>
);

const Banner = () => (
  <section className="mx-auto mt-10 max-w-[1280px] px-4 lg:px-6">
    <div
      className="relative flex flex-col items-center gap-8 overflow-hidden rounded-2xl px-8 py-8 md:flex-row md:justify-between lg:px-16"
      style={{
        background:
          "radial-gradient(ellipse 40% 100% at 15% 50%, rgba(214,150,60,.35), transparent 70%), linear-gradient(90deg,#0b0907,#14100b)",
      }}
    >
      <Bottle body="#d99a3a" cap="#111" shape="round" className="h-36 shrink-0 drop-shadow-2xl" />
      <div className="text-center md:text-left" style={sans}>
        <h2 className="text-4xl" style={{ ...serif, color: GOLD }}>The Art of Fragrance</h2>
        <p className="mt-1 text-lg font-medium text-white">More than a scent… a lifestyle.</p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-black"
          style={{ background: `linear-gradient(135deg, #f0c27a, ${GOLD_DEEP})` }}
        >
          Explore Collection <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-y-4" style={sans}>
        {[
          [ShieldIcon, "100% Authentic"],
          [GiftIcon, "Luxury Packaging"],
          [GlobeIcon, "Worldwide Shipping"],
        ].map(([I, t], i) => (
          <li
            key={t}
            className={`flex flex-col items-center gap-2 px-4 text-xs sm:px-5 ${i > 0 ? "border-l border-white/20" : ""}`}
            style={{ color: GOLD }}
          >
            <I className="h-9 w-9" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Reviews = () => (
  <section className="mx-auto max-w-[1280px] px-6 pt-8 lg:px-12">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-3xl text-neutral-900" style={serif}>What Our Customers Say</h2>
        <p className="text-sm text-neutral-600" style={sans}>Real reviews. Real satisfaction.</p>
      </div>
      <a
        href="#"
        className="hidden items-center gap-2 rounded-full border border-neutral-800 px-5 py-2 text-xs font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white sm:flex"
        style={sans}
      >
        View All Reviews <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
    <div className="mt-5 grid gap-5 md:grid-cols-3">
      {reviews.map((r) => (
        <figure key={r.name} className="relative flex gap-4 rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(60,40,10,.08)]" style={sans}>
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg,#3a2a14,${GOLD_DEEP})` }}
          >
            {r.initials}
          </div>
          <div>
            <figcaption className="text-xs font-semibold text-neutral-900">{r.name}</figcaption>
            <Stars rating={5} className="mt-1" />
            <blockquote className="mt-2 text-xs leading-relaxed text-neutral-700">“{r.text}”</blockquote>
          </div>
          <span className="absolute right-5 top-3 text-5xl leading-none" style={{ ...serif, color: GOLD }}>”</span>
        </figure>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="mx-auto mt-8 max-w-[1280px] px-4 pb-6 lg:px-5">
    <div
      className="grid gap-10 rounded-2xl px-6 py-10 text-white sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr] lg:px-12"
      style={{
        background:
          "radial-gradient(ellipse 50% 80% at 100% 100%, rgba(214,150,60,.4), transparent 70%), linear-gradient(90deg,#0b0907,#14100b)",
        ...sans,
      }}
    >
      <div>
        <Logo />
        <p className="mt-5 text-xs leading-relaxed text-white/80">
          Fragrance is not just a scent,
          <br />
          it’s an emotion.
        </p>
        <div className="mt-4 flex gap-4 text-white">
          <SocialIcon d="M13.500 21v-8h2.700l.4-3.200h-3.100V7.800c0-.9.300-1.500 1.600-1.500h1.700V3.400c-.3 0-1.300-.1-2.400-.1-2.400 0-4 1.500-4 4.100v2.400H7.700V13h2.700v8h3.100Z" />
          <SocialIcon d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm4.800-3.300a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
          <SocialIcon d="M16.600 3c.3 2.300 1.700 3.700 4 3.900v3a7 7 0 0 1-4-1.300v6.200A6 6 0 1 1 10.500 9v3.100a3 3 0 1 0 2.100 2.900V3h4Z" />
          <SocialIcon d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5 3-5 3Z" />
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold" style={{ ...serif, color: GOLD, fontSize: 17 }}>Quick Links</h4>
        <ul className="space-y-2 text-xs text-white/90">
          {quickLinks.map((l) => (
            <li key={l}><a href="#" className="hover:text-[#e6b565]">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold" style={{ ...serif, color: GOLD, fontSize: 17 }}>Customer Care</h4>
        <ul className="space-y-2 text-xs text-white/90">
          {careLinks.map((l) => (
            <li key={l}><a href="#" className="hover:text-[#e6b565]">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold" style={{ ...serif, color: GOLD, fontSize: 17 }}>Newsletter</h4>
        <p className="text-xs text-white/90">Subscribe to get updates on new arrivals and exclusive offers.</p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 flex overflow-hidden rounded-md border border-white/40"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs text-white placeholder-white/70 outline-none"
          />
          <button
            className="px-5 text-xs font-semibold text-black"
            style={{ background: `linear-gradient(135deg, #f0c27a, ${GOLD_DEEP})` }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-4 flex flex-col justify-between gap-2 px-2 text-[10px] text-neutral-700 sm:flex-row" style={sans}>
      <span>© 2025 Parfumé. All rights reserved.</span>
      <span>Made with <span className="text-red-600">♥</span> for perfume lovers</span>
    </div>
  </footer>
);

export default function ParfumeLanding() {
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <Hero />
      <main className="pb-2">
        <BestSellers />
        <Banner />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
