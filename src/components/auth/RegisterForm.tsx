"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import AuthField from "./AuthField";

export default function RegisterForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center gap-10 xl:gap-[122px]">
      <div className="flex w-full max-w-[453px] flex-col gap-10">
        <div>
          <p className="font-body text-lg leading-[1.6] text-primary">
            Create an Account
          </p>
          <h1 className="font-heading text-3xl font-semibold leading-[1.2] text-shuttle-950 sm:text-[44px] sm:tracking-[-0.44px]">
            Welcome to ByteSpace
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-end gap-6">
          <AuthField
            label="Full Name"
            name="fullName"
            placeholder="Jamie Davis"
            autoComplete="name"
          />
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
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-3xl bg-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-shuttle-950 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            Continue
          </button>
        </form>
      </div>

      <p className="flex gap-1 font-body text-base leading-[1.6]">
        <span className="text-shuttle-700">Already have an account?</span>
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
