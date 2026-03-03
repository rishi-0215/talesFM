"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ heading,faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // min-h-[50vh] ensures it's not too small, but we remove h-dvh 
    // to prevent forcing it to be 100% height if it doesn't need to be.
    <div className="w-full  text-white px-4 py-8 flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 shrink-0">
          {heading}
        </h1>

        {/* 1. max-h-[70vh]: Limits the height so it fits on laptop screens.
          2. overflow-y-auto: Adds a scrollbar ONLY if the list is longer than the screen.
          3. pr-2: Space for the scrollbar so it doesn't touch the cards.
        */}
        <div className="space-y-3 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-700 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="text-md md:text-lg font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-500 ease-out shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-zinc-300/90 leading-relaxed">
                      <div className="h-px bg-zinc-700/50 mb-4" />
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}