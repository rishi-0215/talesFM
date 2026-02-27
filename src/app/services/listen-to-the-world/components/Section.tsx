interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) => (
  <section className={`py-12 max-w-4xl mx-auto px-6 ${className}`}>
    <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
    {subtitle && <p className="text-xl text-gray-400 mb-8">{subtitle}</p>}
    <div className="space-y-6">{children}</div>
  </section>
);
