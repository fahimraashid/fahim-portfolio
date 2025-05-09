"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Globe, Users, Award } from "lucide-react";

const AboutSection = () => {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Revenue Growth",
      description: "Proven track record of scaling technology businesses and driving substantial revenue increases.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Regional Expertise",
      description: "Deep understanding of Middle East and Africa markets, business cultures, and growth opportunities.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Team Leadership",
      description: "Built and led high-performing sales teams across diverse markets and business environments.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Strategic Vision",
      description: "Combines technological knowledge with business acumen to develop effective go-to-market strategies.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">
            A seasoned Sales Leader with a passion for driving technology adoption
            and business transformation across the MEA region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground mb-6">
              I believe in building long-term partnerships based on trust, value creation, 
              and mutual success. Throughout my career, I've helped organizations 
              navigate complex technological landscapes to achieve their business objectives.
            </p>
            <p className="text-muted-foreground">
              With over 15 years of experience in strategic sales leadership, I've developed 
              a consultative approach that focuses on understanding customer challenges, 
              aligning technology solutions, and delivering measurable business outcomes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[300px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 dark:from-blue-950/50 dark:to-indigo-950/50 z-10 rounded-lg" />
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fahim Raashid"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;