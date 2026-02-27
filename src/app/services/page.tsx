import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "not for now",
};

function Page() {
  const services = [
    { name: "indian-radio-online", href: "/services/indian-radio-online" },
    { name: "listen-to-the-world", href: "/services/listen-to-the-world" },
    { name: "listen-to-usa-radio", href: "/services/listen-to-usa-radio" },
    { name: "radio-stations-online", href: "/services/radio-stations-online" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center  items-center gap-4 md:gap-5 px-4 md:px-0 mt-40 md:mt-40 max-w-4xl mx-auto">
      {services.map((service, i) => (
        <Link
          key={i}
          className="w-full md:w-auto border  border-amber-50/30 p-5  md:p-5 rounded-2xl hover:scale-110 transition-all duration-150 ease-in-out text-center"
          href={service.href}
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
}

export default Page;
