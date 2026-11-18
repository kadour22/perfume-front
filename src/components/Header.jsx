
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const GOLD = "#e6b565";
const GOLD_DEEP = "#c8923a";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 shrink-0">
    <svg
      viewBox="0 0 40 56"
      className="h-12 w-auto"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.4"
    >
      <rect x="15" y="2" width="10" height="9" />
      <rect x="12" y="11" width="16" height="4" />
      <rect x="4" y="15" width="32" height="38" rx="2" />
      <path d="M20 26c-4 0-6 3-6 6s3 4 6 4 6 1 6 4-3 5-6 5" />
    </svg>

    <div className="leading-none">
      <h1
        className="text-2xl font-semibold tracking-wide"
        style={{
          color: GOLD,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        PARFUMÉ
      </h1>

      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/60">
        — Luxury Fragrances —
      </p>
    </div>
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0806]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-12">

        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-1 rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#f0c27a] to-[#c8923a] font-medium text-black"
                    : "text-white/80 hover:text-[#e6b565]"
                }`
              }
            >
              {link.name}
              {link.dropdown && (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 text-white sm:gap-5">
          <button
            aria-label="Search"
            className="hidden transition hover:text-[#e6b565] sm:block"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Account"
            className="hidden transition hover:text-[#e6b565] sm:block"
          >
            <UserRound size={20} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Wishlist"
            className="transition hover:text-[#e6b565]"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Shopping cart"
            className="relative transition hover:text-[#e6b565]"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#e6b565] text-[10px] font-bold text-black">
              2
            </span>
          </button>

          {/* Mobile menu */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="ml-1 lg:hidden"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="border-t border-white/10 bg-[#0a0806] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-white/5 text-[#e6b565]"
                      : "text-white/80 hover:bg-white/5 hover:text-[#e6b565]"
                  }`
                }
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown size={16} />
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
