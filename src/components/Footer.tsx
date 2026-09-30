"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-12 border-t border-gray-100 text-gray-700">
      <div className="w-19/24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="ByteSpace Logo"
                width={30}
                height={30}
                className="object-contain -translate-y-1"
              />
              <span
                className="text-2xl sm:text-3xl font-bold text-black tracking-tight"
                style={{
                  fontFamily: "var(--font-logo, var(--font-clash, sans-serif))",
                }}
              >
                ByteSpace
              </span>
            </div>

            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#C2F000] text-black font-semibold text-sm cursor-pointer transition-all duration-200 hover:bg-[#b0dc00] hover:shadow-md active:scale-95 select-none"
              >
                Search
              </button>
            </form>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm pt-2">
            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="hover:text-black transition-colors">
                Featured Courses
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Featured Categories
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Business
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                IT
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Design
              </Link>
            </div>

            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="hover:text-black transition-colors">
                Development
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Marketing
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Photography
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Finance
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Sport
              </Link>
            </div>

            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="hover:text-black transition-colors">
                Become a Creator
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Affiliate Program
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                Help
              </Link>
              <Link href="#" className="hover:text-black transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-800 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
