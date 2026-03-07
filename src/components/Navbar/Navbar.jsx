"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { logUserEvent } from "../../hooks/UserLogEvent";
import AppDownloadModal from "../AppDownloadModal/AppDownloadModal";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
  { href: "/blog", label: "Blogs" },
];

const SERVICES = [
  { route: "listen-radio-online", text: "Listen Radio Online" },
  { route: "listen-to-the-world", text: "Listen To The World" },
  { route: "listen-to-usa-radio", text: "Listen To USA Radio" },
  { route: "radio-stations-online", text: "Radio Stations Online" },
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const navRef = useRef(null);
  const pathname = usePathname();
  const pillRef = useRef(null);
  const collapsedRef = useRef(null);
  const contentRef = useRef(null);
  const scrimRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Sticky scroll check - optimized with throttling */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Navbar intro */
  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    );
  }, []);

  /* Close menu if viewport crosses 810px (tablet/desktop) - optimized */
  useEffect(() => {
    let timeoutId;
    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 810) setMobileOpen(false);
      }, 100);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* Lock body scroll when open */
  useEffect(() => {
    const { body } = document;
    if (mobileOpen) body.style.overflow = "hidden";
    else body.style.overflow = "";
    return () => {
      body.style.overflow = "";
    };
  }, [mobileOpen, mobileServicesOpen]);

  /* Animate pill open/close - optimized */
  useEffect(() => {
    const pill = pillRef.current;
    const row = collapsedRef.current;
    const content = contentRef.current;
    const scrim = scrimRef.current;
    if (!pill || !row || !content || !scrim) return;

    // Kill existing animations to prevent memory leaks
    gsap.killTweensOf([pill, content, scrim]);

    const measure = () => {
      const prevDisplay = content.style.display;
      const prevVisibility = content.style.visibility;
      const prevPosition = content.style.position;

      content.style.display = "block";
      content.style.visibility = "hidden";
      content.style.position = "relative";

      const collapsedH = row.offsetHeight;
      const contentH = content.scrollHeight;
      const expandedH = collapsedH + contentH;

      content.style.visibility = prevVisibility;
      content.style.position = prevPosition;

      return { collapsedH, expandedH, prevDisplay };
    };

    if (mobileOpen) {
      const { collapsedH, expandedH } = measure();

      scrim.style.pointerEvents = "auto";
      gsap.set([pill, content, scrim], {
        willChange: "height, opacity, transform",
      });

      gsap.fromTo(
        pill,
        { height: collapsedH },
        { height: expandedH, duration: 0.28, ease: "power2.out" },
      );
      gsap.fromTo(
        content,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.24, ease: "power2.out", delay: 0.04 },
      );
      gsap.fromTo(
        scrim,
        { opacity: 0 },
        { opacity: 1, duration: 0.18, ease: "power2.out" },
      );
    } else {
      const collapsedH = row.offsetHeight;

      gsap.to(content, {
        opacity: 0,
        y: -6,
        duration: 0.16,
        ease: "power2.in",
      });
      gsap.to(pill, {
        height: collapsedH,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          content.style.display = "none";
        },
      });
      gsap.to(scrim, {
        opacity: 0,
        duration: 0.16,
        ease: "power2.in",
        onComplete: () => {
          scrim.style.pointerEvents = "none";
        },
      });
    }
  }, [mobileOpen]);

  /* Helpers (scroll) */
  const getTargetFromHash = (hash) => {
    if (!hash || hash === "#") return null;
    const id = hash.slice(1);
    const safeId =
      window.CSS && CSS.escape
        ? CSS.escape(id)
        : id.replace(/[^-\w]/g, "\\$&\\");
    const el = document.querySelector(`#${safeId}`);
    return el || null;
  };

  const scrollToEl = (el) => {
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;

    if (window.lenis?.scrollTo) {
      window.lenis.scrollTo(top, {
        duration: 1.05,
      });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToHash = (hash) => {
    const target = getTargetFromHash(hash);
    if (!target) return;

    // Two RAFs ensure the pill/scrim is fully gone and layout is stable on iOS
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToEl(target);
      });
    });
  };

  // Updated handleNavLinkClick with sessionStorage storage and redirect logic
  const handleNavLinkClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    // Log navigation click
    logUserEvent("ui_button_click", {
      button_id: href,
      screen_name: "Navbar",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: isSticky,
    });

    // Special handling for "Home" (#home)
    if (href === "#home") {
      e.preventDefault();

      if (mobileOpen) {
        setMobileOpen(false);
        document.body.style.overflow = "";
      }

      if (pathname === "/") {
        // Already on home → scroll to top
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (window.lenis?.scrollTo)
              window.lenis.scrollTo(0, { duration: 1.05 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          });
        });
      } else {
        // Different page → go to home
        router.push("/");
      }
      return;
    }
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const mapped = href === "#contact" ? "#testimonials" : href;

    if (pathname === "/") {
      // Already on home, scroll to section
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHash(mapped);
        });
      });
    } else {
      // Set hash in sessionStorage and navigate to home
      sessionStorage.setItem("scrollTarget", mapped);
      router.push("/");
    }
  };

  // Scroll to stored hash on homepage mount after redirect
  useEffect(() => {
    const hash = sessionStorage.getItem("scrollTarget");
    if (pathname === "/" && hash) {
      sessionStorage.removeItem("scrollTarget");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHash(hash);
        });
      });
    }
  }, [pathname]);

  const handleLogoClick = (e) => {
    // Log logo click
    logUserEvent("ui_button_click", {
      button_id: "logo",
      screen_name: "Navbar",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: isSticky,
    });

    if (pathname === "/") {
      e.preventDefault(); // stop navigation if already home
      setMobileOpen(false);
      document.body.style.overflow = "";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.lenis?.scrollTo)
            window.lenis.scrollTo(0, { duration: 1.05 });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    } else {
      // let <a href="/"> navigate normally
      setMobileOpen(false);
      document.body.style.overflow = "";
    }
  };

  const handleLoginClick = (e) => {
    // Log login button click
    logUserEvent("ui_button_click", {
      button_id: "#login",
      screen_name: "Navbar",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: isSticky,
    });
    window.open("https://listen.talesfm.com/Login", "_blank");
  };

  const handleGetAppClick = (e) => {
    e.preventDefault(); // Prevent default button behavior
    // Log app download button click
    logUserEvent("ui_button_click", {
      button_id: "get-app-button",
      screen_name: "Navbar",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: isSticky,
    });
    // Open download modal
    setShowDownloadModal(true);
  };

  const handleMobileMenuToggle = (e) => {
    const newState = !mobileOpen;
    setMobileOpen(newState);

    // Log mobile menu interaction
    logUserEvent("ui_button_click", {
      button_id: "mobile-menu-toggle",
      screen_name: "Navbar",
      position_xy: `${e.clientX},${e.clientY}`,
      sticky: isSticky,
    });
  };

  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false);
  }, [mobileOpen]);
  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[200] transition-shadow duration-300`}
        aria-label="Primary"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-2 sm:px-22 min-[810px]:max-[1000px]:px-0 min-[1001px]:px-20">
          <div className="min-[810px]:py-5 grid grid-cols-1 min-[810px]:grid-cols-[1fr_auto_1fr] items-center gap-2 min-[810px]:gap-4">
            {/* Desktop logo (col 1) */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="hidden min-[810px]:inline-flex items-center group shrink-0 justify-self-start transition-transform duration-300 hover:scale-110"
              aria-label="Go to top"
            >
              <Image
                src="/logo.png"
                alt="TalesFM Logo"
                width={36}
                height={36}
                className="w-12 h-12 object-contain"
                priority
              />
            </Link>

            {/* Desktop center links (col 2) */}
            <div className="hidden min-[810px]:flex items-center justify-center justify-self-center min-w-0">
              <div
                ref={servicesRef}
                className="flex flex-wrap items-center gap-x-2 min-[810px]:gap-x-3 gap-y-1 lg:gap-x-6 py-2 rounded-full bg-zinc-100/20 px-3 min-[810px]:px-4 lg:px-2 backdrop-blur"
              >
                {/* HOME / ABOUT / CONTACT / BLOGS */}
                {NAV_LINKS.map((l) =>
                  l.href.startsWith("/") ? (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-full px-3 min-[810px]:px-4 py-1 text-sm lg:text-[16px] font-[400] text-white hover:bg-white hover:text-black transition"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={handleNavLinkClick}
                      className="rounded-full px-3 min-[810px]:px-4 py-1 text-sm lg:text-[16px] font-[400] text-white hover:bg-white hover:text-black transition"
                    >
                      {l.label}
                    </a>
                  ),
                )}

                {/* SERVICES DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-2 rounded-full px-3 min-[810px]:px-4 py-1 text-sm lg:text-[16px] font-[400] text-white hover:bg-white hover:text-black transition"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 mt-3 w-56 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl overflow-hidden z-50">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.text}
                          href={`/services/${service.route}`}
                          className="block px-5 py-3 text-white/90 hover:bg-white/10 transition"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop / Tablet CTAs (col 3) */}
            <div className="hidden min-[810px]:flex items-center justify-end gap-1 min-[810px]:gap-1.5 lg:gap-2.5 flex-wrap shrink-0 justify-self-end">
              <a
                href="https://listen.talesfm.com"
                onClick={handleLoginClick}
                aria-label="Login"
                className="rounded-full bg-zinc-100/10 px-3 min-[810px]:px-3.5 lg:px-6 py-1.5 lg:py-2 text-xs min-[810px]:text-sm lg:text-lg font-semibold text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 backdrop-blur min-h-[30px]"
              >
                Login
              </a>

              <button
                onClick={handleGetAppClick}
                aria-label="Get the app"
                className="inline-flex items-center gap-x-1 min-[810px]:gap-x-1.5 rounded-full bg-zinc-100/10 px-3 min-[810px]:px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs min-[810px]:text-sm lg:text-lg font-medium text-white backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[30px] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-4 min-[810px]:h-5 min-[810px]:w-5 lg:h-6 lg:w-6 object-contain"
                />
                <span className="whitespace-nowrap">Get App</span>
              </button>
            </div>

            {/* MOBILE PILL (visible < 810) */}
            <div className="min-[810px]:hidden fixed left-1/2 -translate-x-1/2 top-2 w-[92vw] max-w-[420px] z-[210]">
              {/* Scrim behind pill (closes on click) */}
              <button
                ref={scrimRef}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-zinc-600/20 opacity-0 pointer-events-none"
                aria-label="Close menu"
                style={{ zIndex: 100 }}
              />

              <div
                ref={pillRef}
                className={`relative z-[220] mx-auto overflow-hidden rounded-[22px] backdrop-blur-xl bg-zinc-600/20 ring-1 ring-white/10 transition-all duration-300 ${
                  mobileOpen ? "max-h-[500px]" : "max-h-[42px]"
                }`}
              >
                {/* Collapsed row */}
                <div
                  ref={collapsedRef}
                  className="flex items-center justify-between px-4 py-2"
                >
                  <Link
                    href="/"
                    onClick={handleLogoClick}
                    aria-label="Go to top/home"
                    className="flex items-center"
                  >
                    <Image
                      src="/logo.png"
                      alt="TalesFM Logo"
                      width={21}
                      height={21}
                      className="w-8 h-8 object-contain"
                      priority
                    />
                  </Link>

                  <div className="flex items-center gap-2">
                    {/* Get App button for mobile - increased size */}
                    <button
                      onClick={(e) => {
                        handleGetAppClick(e);
                        setMobileOpen(false);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-h-[36px]"
                      aria-label="Get the app"
                    >
                      <Image
                        src="/logo.png"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                      <span className="whitespace-nowrap">Get App</span>
                    </button>

                    <button
                      className="rounded-full p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      aria-label="Toggle mobile menu"
                      aria-expanded={mobileOpen}
                      onClick={handleMobileMenuToggle}
                    >
                      {mobileOpen ? (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8h16M4 16h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanding content */}
                <div
                  ref={contentRef}
                  style={{
                    display: "block",
                  }}
                  className="px-4 pb-4 pt-1.5  "
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[22px] opacity-40"
                    style={{
                      background:
                        "radial-gradient(60% 35% at 50% 10%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%), radial-gradient(55% 40% at 50% 65%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)",
                    }}
                  />
                  <nav className="relative z-10 flex flex-col items-center gap-3.5 py-1.5">
                    {NAV_LINKS.map((link) =>
                      link.href.startsWith("/") ? (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[15px] font-medium text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={handleNavLinkClick}
                          className="text-[15px] font-medium text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-md"
                        >
                          {link.label}
                        </a>
                      ),
                    )}
                    {/* MOBILE SERVICES */}
                    <div className="flex flex-col items-center gap-2">
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {
                        <div className="mt-2 flex flex-col items-center gap-3 rounded-xl py-3 ">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.text}
                              href={`/services/${service.route}`}
                              className="text-sm text-white/80 hover:text-white transition"
                              onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileOpen(false);
                                document.body.style.overflow = "";
                              }}
                            >
                              {service.text}
                            </Link>
                          ))}
                        </div>
                      }
                    </div>

                    {/* Mobile CTAs */}
                    <div className="mt-1.5 flex  flex-col gap-3 w-[14rem]">
                      <a
                        href="#login"
                        onClick={(e) => {
                          handleLoginClick(e);
                          setMobileOpen(false);
                        }}
                        className="inline-flex items-center transition-colors duration-300 ease-in-out hover:bg-white hover:text-black justify-center rounded-full bg-white/10 text-white px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        aria-label="Login"
                      >
                        Login
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* App Download Modal */}
      <AppDownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
      />
    </>
  );
};
export default Navbar;
