import { Star, UserRound } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-14 sm:py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold uppercase tracking-wide text-neutral-900 sm:text-2xl">
          What People Say About RoadHero
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <UserRound className="h-9 w-9" aria-hidden="true" />
              </span>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm leading-6 text-neutral-700 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <span className="mt-1 text-sm font-bold text-neutral-900 sm:text-base">
                  {testimonial.name}
                </span>
                <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current text-provider-yellow"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-customer-teal" />
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-300" />
        </div>
      </div>
    </section>
  );
}
