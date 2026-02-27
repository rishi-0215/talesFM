// NotFound.jsx
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        {/* Big 404 */}
        <h1 className="text-[80px] sm:text-[120px] md:text-[160px] leading-none font-extrabold tracking-tight">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Oops Page Not Found!
        </h2>

        {/* Message */}
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 px-2">
          We apologize, but the page you are looking for does not exist.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-10 sm:mt-12 rounded-xl bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
