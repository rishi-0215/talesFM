"use client";

import React, { useState } from "react";
import { logUserEvent } from "../../hooks/UserLogEvent";
import { useRef, useEffect } from "react";
import { useTimeInView } from "../../hooks/useTimeInView";

const defaultFaqs = {
  buttonLabel: "FREQUENTLY ASKED QUESTIONS",
  items: [],
};

function AccordionItem({ index, item, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const contentId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  const handleClick = (e) => {
    const nextIndex = isOpen ? -1 : index;
    setOpenIndex(nextIndex);

    if (typeof window !== "undefined") {
      logUserEvent("ui_button_click", {
        button_id: "faq_toggle",
        screen_name: "faqs",
        position_xy: `${e.clientX},${e.clientY}`,
        sticky: false,
        title: item?.question,
        index,
        action: isOpen ? "collapse" : "expand",
      });
    }
  };

  return (
    <div
      className="
        w-full mx-auto
        max-w-[336px] sm:max-w-none
        border border-[#232326]
        rounded-xl overflow-hidden
        shadow-[0_6px_22px_rgba(0,0,0,0.35)] sm:shadow-none
        transition-colors duration-300
      "
      style={{ backgroundColor: "#131415" }}
    >
     

      <h3 className="m-0">
        <button
          id={buttonId}
          aria-controls={contentId}
          aria-expanded={isOpen}
          onClick={(e) => handleClick(e)}
          className="
            w-full grid grid-cols-[1fr_auto] items-center gap-3
            text-left px-4 md:px-5
            py-3 md:py-3.5
            min-h-[44px]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
          "
        >
          <span
            className="
              flex items-center h-full
              text-white font-semibold font-poppins
              leading-tight break-words
              pr-1.5
              text-[17px] sm:text-sm md:text-xl
            "
          >
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className="
              justify-self-end
              h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10
              rounded-full bg-white/10 text-white
              flex items-center justify-center
              transition-transform duration-300
            "
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </span>
        </button>
      </h3>

      {/* Animated Content */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`
          transition-all duration-500 ease-in-out
          overflow-hidden
          ${isOpen ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="px-4 md:px-5">
          <p className="text-gray-300 leading-relaxed font-poppins text-[15px] sm:text-sm md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const Faqs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const buttonLabel = faqs?.buttonLabel ?? defaultFaqs.buttonLabel;
  const items = Array.isArray(faqs?.items) ? faqs.items : defaultFaqs.items;
  const sectionRef = useRef(null);
  useTimeInView(sectionRef, "ui_focus_time", { screen_name: "Faqs" });

  return (
    <section
      ref={sectionRef}
      className="
        bg-black font-poppins
        pt-8 md:pt-[6.4rem]
        min-h-[75vh] md:min-h-[90vh]
        flex items-start md:items-center justify-center
      "
      aria-label="Frequently Asked Questions"
    >
      <div
        className="
          w-full mx-auto
          px-3 sm:px-5 lg:px-7
          max-w-[24rem] sm:max-w-none md:max-w-[70rem]
        "
      >
        <div className="flex justify-center mb-5 md:mb-8">
          <button
            className="
              border-2 border-white/90 text-white
              px-4 py-1.5 rounded-full
              text-[14px] sm:text-md tracking-wide font-[500]
              w-auto sm:px-8 sm:py-1.5 sm:text-xl sm:w-full sm:max-w-[420px]
            "
          >
            {buttonLabel}
          </button>
        </div>

        <div className="flex flex-col gap-2 md:gap-5 w-full">
          {items.map((item, index) => (
            <AccordionItem
              key={item.question}
              index={index}
              item={item}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;