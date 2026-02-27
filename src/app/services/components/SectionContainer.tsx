export function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-9/12 mx-auto px-4 sm:px-6">
        <div className=" space-y-10">
          {children}
        </div>
      </div>
    </section>
  );
}
