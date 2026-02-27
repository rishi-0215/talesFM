"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // h-dvh (dynamic viewport height) ensures it fills exactly 100% of the mobile screen
    // flex flex-col allows us to split the space between the title and the list
    <div className="h-dvh w-full bg-black text-white px-4 py-2 flex flex-col overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col h-full">
        
        {/* Header: Fixed height/size */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 shrink-0">
          FAQs
        </h1>

        {/* Scrollable Container: This takes up the remaining space */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-zinc-700 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 shrink-0"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                >
                  <span className="text-md md:text-xl font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-500 ease-out shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Content */}
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