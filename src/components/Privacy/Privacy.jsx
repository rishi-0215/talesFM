    // app/privacy/Privacy.jsx or src/pages/Privacy.jsx
    // Tailwind-friendly. If you don't use Tailwind, see the plain CSS note at bottom.

    import React from "react";

    export default function DynamicContent({ content }) {
      const title = content?.title ?? "Content";
      const effectiveDate = content?.effectiveDate ?? "";
      const updatedDate = content?.updatedDate ?? "";
      const intro = Array.isArray(content?.intro) ? content.intro : [];
      const sections = Array.isArray(content?.sections) ? content.sections : [];
      const contact = content?.contact ?? { email: "", phone: "", address: [] };
      const closingTitle = content?.closingTitle ?? "";
      const closing = Array.isArray(content?.closing) ? content.closing : [];
      return (
        <main className="min-h-screen bg-black font-p text-white">
          {/* Responsive container: max-w-5xl on desktop, padding on all screens */}
          <section className="w-full max-w-[73rem] mx-auto pt-16 sm:pt-24 md:pt-32 px-4 sm:px-8 md:px-16 pb-16 sm:pb-20">
            {/* Title (responsive size) */}
            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[2.9rem] lg:text-[45px] font-semibold leading-tight mb-8">
              {title}
            </h1>

            {/* Effective / Updated */}
            {(effectiveDate || updatedDate) && (
              <p className="text-white/80 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
                {effectiveDate && <span className="block">Effective Date: {effectiveDate}</span>}
                {updatedDate && <span className="block">Last Updated: {updatedDate}</span>}
              </p>
            )}

            {intro.map((p, idx) => (
              <p key={`intro-${idx}`} className="mt-4 text-white/80 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">{p}</p>
            ))}

            {/* 1. Our Commitment */}
            {sections.map((s, idx) => (
              <Section key={`sec-${idx}`} number={`${idx + 1}`} title={s?.title || ""}>
                {(s?.paragraphs || []).map((p, pi) => (
                  <p key={`p-${pi}`} className="text-white/80 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">{p}</p>
                ))}
                {Array.isArray(s?.bullets) && s.bullets.length > 0 && (
                  <ul className="list-disc pl-5 sm:pl-6 mt-3 space-y-1 text-white/80 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
                    {s.bullets.map((b, bi) => (<li key={`b-${bi}`}>{b}</li>))}
                  </ul>
                )}
              </Section>
            ))}

            {/* Contact */}
            {(
              Boolean(contact?.email) ||
              Boolean(contact?.phone) ||
              (Array.isArray(contact?.address) && contact.address.length > 0)
            ) ? (
              <Section number={`${sections.length + 1}`} title="">
                <address className="not-italic text-white/80 mt-3 space-y-1 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
                  {(contact?.address || []).map((line, li) => (<div key={`addr-${li}`}>{line}</div>))}
                  {contact?.email && (<div className="mt-2">Email: <a href={`mailto:${contact.email}`} className="underline decoration-white/40 hover:decoration-white">{contact.email}</a></div>)}
                  {contact?.phone && (<div>Phone: {contact.phone}</div>)}
                </address>
              </Section>
            ) : null}

            {/* Closing */}
            {(
              Boolean(closingTitle) || (Array.isArray(closing) && closing.length > 0)
            ) ? (
              <div className="mt-10 text-white/80 leading-tight text-[1.1rem] sm:text-[1.15rem] md:text-[20px]">
                {closingTitle && (<p className="font-medium text-white leading-tight text-[1.2rem] sm:text-[1.3rem] md:text-[23px]">{closingTitle}</p>)}
                {closing.map((p, idx) => (<p key={`c-${idx}`} className="mt-2">{p}</p>))}
              </div>
            ) : null}
          </section>
        </main>
      );
    }

    /* ---------- Small helper components ---------- */

    function Section({ number, title, children }) {
      return (
        <section className="mt-10">
          <h2 className="font-semibold mb-3 text-[1.2rem] sm:text-[1.3rem] md:text-[23px] leading-tight">
            {number}. {title}
          </h2>
          <div className="space-y-3">{children}</div>
        </section>
      );
    }

    function Subheading({ children, className = "" }) {
      return (
        <h3
          className={`text-white font-medium mt-6 text-[1.15rem] sm:text-[1.2rem] md:text-[23px] leading-tight ${className}`}
        >
          {children}
        </h3>
      );
    }
