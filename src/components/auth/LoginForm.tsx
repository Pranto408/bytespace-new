"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthField from "./AuthField";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-full flex-col items-center justify-between gap-10">
      <div className="flex w-full max-w-[453px] flex-col gap-10">
        <div>
          <p className="font-body text-lg leading-[1.6] text-primary">
            Sign In
          </p>
          <h1 className="font-heading text-3xl font-semibold leading-[1.2] text-shuttle-950 sm:text-[44px] sm:tracking-[-0.44px]">
            Welcome Back
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
          <AuthField
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
          />
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-3xl bg-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-shuttle-950 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className="flex w-full max-w-[453px] items-center gap-[11px]">
          <span className="h-px flex-1 bg-[#d1d1d1]" />
          <span className="font-body text-lg leading-[1.6] text-[#888]">
            or
          </span>
          <span className="h-px flex-1 bg-[#d1d1d1]" />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition hover:bg-shuttle-50"
          >
            <FaFacebook size={32} />
          </button>
          <button
            type="button"
            aria-label="Continue with Google"
            className="flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-3xl border border-[#d1d1d1] bg-white transition hover:bg-shuttle-50"
          >
            <FaGoogle size={32} />
          </button>
        </div>
      </div>

      <p className="flex gap-1 font-body text-base leading-[1.6]">
        <span className="text-[#888]">New user?</span>
        <Link href="/signup" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
