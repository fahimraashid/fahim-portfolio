"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "@/components/ui/quote-icon";

const testimonials = [
  {
    quote: "Fahim's strategic approach to our MEA expansion transformed our business. His deep understanding of the regional market helped us achieve 200% growth in just 18 months.",
    author: "Sarah Johnson",
    title: "CEO, TechGrowth Solutions"
  },
  {
    quote: "Working with Fahim gave us the strategic edge we needed to penetrate challenging markets in the Middle East. His consultative approach and regional expertise were invaluable.",
    author: "Mohammed Al-Harbi",
    title: "Regional Director, Enterprise Systems"
  },
  {
    quote: "Fahim's leadership in developing our go-to-market strategy for Africa resulted in exceptional growth and partnership opportunities we hadn't previously considered.",
    author: "David Chen",
    title: "VP of Global Sales, Nexus Technologies"
  },
  {
    quote: "The sales framework Fahim implemented helped us quadruple our enterprise customer base in the GCC region within a year. His strategic insights are second to none.",
    author: "Aisha Al-Mansouri",
    title: "Managing Director, Gulf Tech Solutions"
  }
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Executive Testimonials
          </h2>
          <p className="text-xl text-muted-foreground">
            What business leaders say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                  <div className="h-full">
                    <Card className="h-full border-none shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <QuoteIcon className="h-12 w-12 text-blue-600/20 dark:text-blue-400/20 mb-4" />
                        <p className="text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;