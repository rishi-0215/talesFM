export function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-6 sm:py-8 md:py-8">
      <div className="max-w-9/12 mx-auto  sm:px-6">
        <div className=" space-y-3">
          {children}
        </div>
      </div>
    </section>
  );
}
