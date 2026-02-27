"use client";

import { useState } from "react";
import {
  ChevronDown,
  Music,
  Guitar,
  Mic2,
  Music2,
  Radio,
  Heart,
  Zap,
} from "lucide-react";

interface AccordionItem {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: string;
  stations: { name: string }[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const iconMap: Record<string, any> = {
  Music,
  Guitar,
  Mic2,
  Music2,
  Radio,
  Heart,
  Zap,
};

export default function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        const Icon = iconMap[item.icon] || Music;

        return (
          <div
            key={item.id}
            className={`
  relative
  rounded-2xl md:rounded-3xl
  overflow-hidden
  border border-white/10
  bg-linear-to-br from-white/10 via-white/5 to-transparent
  backdrop-blur-xl
  shadow-md md:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
  transition-all duration-500
  md:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
  md:hover:-translate-y-1
`}
          >
            {/* subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-40 pointer-events-none" />

            {/* Header */}
            <button
              onClick={() => toggle(item.id)}
              className="relative w-full flex items-center justify-between px-5 py-5 md:px-8 md:py-7 text-left"
            >
              <div className="flex items-center gap-5">
                <Icon
                  className="w-5 h-5 md:w-6 md:h-6 text-white/90"
                  strokeWidth={1.5}
                />

                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ChevronDown
                className={`
                  transition-transform duration-500 ease-out
                  ${isOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* Animated Content */}
            <div
              className={`
                grid transition-all duration-500 ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-8 pb-6 md:pb-8 pt-2 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <p>{item.description}</p>

                  {item.stations.length > 0 && (
                    <>
                      <p className="text-white font-semibold">
                        Popular Stations
                      </p>
                      <ul className="space-y-2 list-disc list-inside text-gray-300">
                        {item.stations.map((station, index) => (
                          <li key={index}>{station.name}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
