"use client";

// app/contact-us/Contact_Us.jsx or src/pages/Contact_Us.jsx
import React, { useState } from "react";
import DynamicContent from "../DynamicContent/DynamicContent";

export default function Contact_Us({ content }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onCancel = () => setForm({ name: "", email: "", message: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    try {
      setLoading(true);
      alert("Message sent! (wire this to your API)");
      onCancel();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black font-p text-white">
      <section className="w-full pt-24 sm:pt-40 px-4 sm:px-8 md:px-16 lg:px-32 pb-10 sm:pb-20">
        {/* Title - Removed duplicate H1, handled by DynamicContent */}

        {/* Card full width */}
        <div className="w-full bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] mb-10 sm:mb-16">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your Full Name"
                value={form.name}
                onChange={onChange}
                className="w-full h-12 sm:h-14 rounded-xl bg-black/40 border border-white/5 px-4 sm:px-5 text-white placeholder-white/40 outline-none focus:border-white/20 text-base sm:text-lg"
              />
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email Address"
                value={form.email}
                onChange={onChange}
                className="w-full h-12 sm:h-14 rounded-xl bg-black/40 border border-white/5 px-4 sm:px-5 text-white placeholder-white/40 outline-none focus:border-white/20 text-base sm:text-lg"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="How Can We Help?"
                value={form.message}
                onChange={onChange}
                className="w-full rounded-xl bg-black/40 border border-white/5 px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-white/40 outline-none focus:border-white/20 resize-none text-base sm:text-lg"
              />
            </div>
            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <button
                type="button"
                onClick={onCancel}
                className="w-full sm:w-[13rem] md:w-[18rem] h-12 sm:h-14 rounded-xl bg-black/40 border border-white/5 text-white/80 transition mb-2 sm:mb-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !form.name || !form.email || !form.message}
                className="w-full sm:w-[13rem] md:w-[18rem] h-12 sm:h-14 rounded-xl bg-black/40 border border-white/5 text-white/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Dynamic content sections */}
        {content && (
          <div className="mt-10">
            <DynamicContent content={content} />
          </div>
        )}
      </section>
    </main>
  );
}
