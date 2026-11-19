
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center rounded-full px-4 xl:px-5 py-2 text-sm transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-[#f0c27a] to-[#c8923a] font-medium text-black"
        : "text-white/80 hover:text-[#e6b565]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0806]/95 backdrop-blur-xl">

      {/* Main Header */}
      <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:h-[84px] sm:px-6 lg:h-[100px] lg:px-10">

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Go to homepage"
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="!h-[48px] !w-auto max-w-none object-contain sm:!h-[60px] lg:!h-[82px] xl:!h-[90px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 text-white sm:gap-4">

          <button
            aria-label="Search"
            className="hidden transition hover:text-[#e6b565] sm:block"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            aria-label="Account"
            className="hidden transition hover:text-[#e6b565] md:block"
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

          {/* Mobile Menu */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="ml-1 flex items-center justify-center lg:hidden"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                  `rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-white/5 text-[#e6b565]"
                      : "text-white/80 hover:bg-white/5 hover:text-[#e6b565]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
