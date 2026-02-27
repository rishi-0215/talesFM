import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { ReviewTestimonial } from "../interfaces";
interface InfiniteMovingCardsUsageProps {
  testimonials: ReviewTestimonial[];
}

export function InfiniteMovingCardsUsage({ testimonials }: InfiniteMovingCardsUsageProps) {

  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}