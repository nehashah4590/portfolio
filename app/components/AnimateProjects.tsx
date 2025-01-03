import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import K70 from "../../public/k70.png";
import travelingyak from "../../public/travelingyak.png";
import shivtrading from "../../public/shivtrading.png";

export function AnimatedProjects() {
  const testimonials = [
    {
      name: "kanchenjunga70",
      designation:"Tech Stack: Nextjs, Typescript, Tailwindcss",
      quote: "It is a static nextjs website built to celebrate 70 years of climbing kanchenjunga.",
      src: K70,
    },
    {
      name: "Traveling yak",
      designation:"Tech Stack: Nextjs, Typescript, Tailwindcss, shadcn, Framer Motion",
      quote: "It is a nextjs website built for tours and travel company.",
      src: travelingyak,
    },
    {
      name: "Shiv trading",
      designation:"Tech Stack:  Nextjs, Typescript, Tailwindcss, shadcn, Framer Motion, Next Auth",
      quote: "It is a tiles and marble website where users can search there favorite tiles and marbles design according to sizes and areas.",
      src: shivtrading,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
