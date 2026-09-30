"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Courses", href: "#courses", active: false },
  { label: "Creators", href: "#creators", active: false },
];

const linkStyle =
  "relative font-body text-base text-shuttle-50 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-lime after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-50 h-[120px]"
    >
      <div className="relative mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 xl:px-0">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="ByteSpace logo"
              width={29}
              height={32}
              className="-translate-y-1.5"
            />

            <span className="font-logo text-2xl font-bold text-shuttle-50">
              ByteSpace
            </span>
          </Link>
        </motion.div>

        {/* Center links (desktop only) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${linkStyle} ${link.active ? "font-medium" : "font-normal"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side (desktop only) */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login" className={linkStyle}>
            Sign In
          </Link>
          <Link href="/signup" className={linkStyle}>
            Join Us
          </Link>

          <motion.button
            aria-label="Shopping bag"
            className="text-shuttle-50"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag className="h-6 w-6 cursor-pointer" />
          </motion.button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-shuttle-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu*/}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-base text-shuttle-950"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="font-body text-base text-shuttle-950"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="font-body text-base text-shuttle-950"
            >
              Join Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
