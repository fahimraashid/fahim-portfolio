"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 dark:from-blue-950/70 dark:to-indigo-950/70 z-0"
      />
      
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30 dark:opacity-10 z-[-1]"
      />
      
      <div className="container relative z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 ease-out transform ${
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block mb-2">Strategic Sales</span>
            <span className="block">
              <AnimatedText 
                text="Leadership for MEA" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400" 
              />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Driving revenue growth and market expansion for technology 
            enterprises across the Middle East and Africa region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect Now
              <ArrowRight 
                size={18} 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('track-record')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Track Record
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowRight size={20} className="rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;