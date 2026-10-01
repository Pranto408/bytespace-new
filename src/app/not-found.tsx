import Link from "next/link";

function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#0047FF] px-4 text-center font-sans overflow-hidden">
      {/* Grid Overlay Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Giant 404 Text with Gradient Fill */}
        <h1 className="text-[140px] sm:text-[220px] md:text-[300px] font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#CFF500] via-[#D2F800] to-[#609900]/40 select-none">
          404
        </h1>

        {/* Main Heading */}
        <h2 className="-mt-6 sm:-mt-12 md:-mt-20 text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
          The page you are looking for doesn’t exist
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-white/80 font-normal max-w-md">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Call to Action Button */}
        <Link
          href="/"
          className="mt-8 px-7 py-3 rounded-full bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold text-sm transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
