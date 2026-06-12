import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export type TestimonialColumnProps = {
  className?: string;
  testimonials: {
    title: string;
    testimonial: string;
    authorName: string;
    reviewLabel: string;
  }[];
};

export const TestimonialColumn = (props: TestimonialColumnProps) => {
  return (
    <div
      className={`box-border caret-transparent gap-x-5 flex flex-col shrink min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 no-underline w-full md:shrink-0 md:w-[33.333%] ${props.className ?? ""}`}
    >
      {props.testimonials.map((testimonial) => (
        <TestimonialCard
          key={`${testimonial.title}-${testimonial.authorName}`}
          title={testimonial.title}
          testimonial={testimonial.testimonial}
          authorName={testimonial.authorName}
          reviewLabel={testimonial.reviewLabel}
        />
      ))}
    </div>
  );
};
