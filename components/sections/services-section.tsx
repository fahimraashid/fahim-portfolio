"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart2, 
  Compass, 
  Users2, 
  PieChart,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: <BarChart2 className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />,
    title: "Sales Strategy Development",
    description: "Customized sales strategies tailored to your business goals and market conditions across the MEA region.",
    points: [
      "Market entry planning and execution",
      "Sales process optimization",
      "Revenue forecasting and planning",
      "Competitive positioning"
    ]
  },
  {
    icon: <Compass className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />,
    title: "Go-to-Market Advisory",
    description: "Develop and implement effective go-to-market strategies for technology products and services in MEA markets.",
    points: [
      "Channel strategy development",
      "Partner ecosystem building",
      "Market segmentation",
      "Value proposition refinement"
    ]
  },
  {
    icon: <Users2 className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />,
    title: "Sales Leadership Coaching",
    description: "Mentorship and coaching for sales leaders and teams to enhance performance and drive results.",
    points: [
      "Sales team structure optimization",
      "Performance management frameworks",
      "Sales management methodologies",
      "Leadership development"
    ]
  },
  {
    icon: <PieChart className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />,
    title: "Strategic Technology Sales",
    description: "Expert guidance on selling complex technology solutions to enterprise customers.",
    points: [
      "Solution selling methodologies",
      "Executive-level engagement",
      "Key account management",
      "Value-based selling approaches"
    ]
  }
];

const ServicesSection = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Strategic Offerings
          </h2>
          <p className="text-xl text-muted-foreground">
            Specialized services to accelerate your business growth and market
            presence across the Middle East and Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="mr-2 mt-1 size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Requirements
            <ArrowRight 
              size={18} 
              className="ml-2 transition-transform group-hover:translate-x-1" 
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;