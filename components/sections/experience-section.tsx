"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award } from "lucide-react";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isAtBottom = rect.bottom <= window.innerHeight + 10;
      
      if (isAtBottom && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
        const nextSection = document.getElementById("education");
        if (nextSection) {
          const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const handleScroll = (e: Event) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isAtBottom = rect.bottom <= window.innerHeight + 10;
      
      if (isAtBottom) {
        const nextSection = document.getElementById("education");
        if (nextSection) {
          const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    window.addEventListener('scroll', handleScroll, { capture: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  const experiences = [
    {
      company: "Fluid Codes - An Ansys Apex Partner",
      role: "Sr. Sales Account Manager",
      period: "September 2022 - Present",
      achievements: [
        "Led enterprise software sales initiatives resulting in 200% revenue growth",
        "Managed key client relationships with Fortune 500 companies",
        "Developed and executed strategic sales plans for the MEA region",
        "Achieved 150% of annual sales target in Q1 2023"
      ],
      highlights: [
        "Successfully closed deals worth $5M+ in enterprise software solutions",
        "Built and led a high-performing sales team of 8 members",
        "Implemented CRM system improving sales efficiency by 40%",
        "Established strategic partnerships with key industry players"
      ]
    },
    {
      company: "LEMO - Middle East",
      role: "Technical Sales Engineer",
      period: "September 2021 - September 2022",
      achievements: [
        "Increased sales revenue by 120% through technical solution selling",
        "Developed and maintained relationships with key clients",
        "Created technical proposals and solution architectures",
        "Led product demonstrations and technical presentations"
      ],
      highlights: [
        "Successfully penetrated new markets in Saudi Arabia and Qatar",
        "Reduced sales cycle time by 30% through improved technical documentation",
        "Achieved 95% client satisfaction rate",
        "Mentored junior sales engineers in technical selling"
      ]
    },
    {
      company: "Mahindra Consulting Engineers",
      role: "Assistant Engineer - Projects & Business Development",
      period: "November 2018 - August 2021",
      achievements: [
        "Managed multiple engineering projects worth $2M+",
        "Developed business strategies for market expansion",
        "Led client engagement and relationship building",
        "Coordinated cross-functional teams for project delivery"
      ],
      highlights: [
        "Successfully delivered 15+ major engineering projects",
        "Reduced project delivery time by 25% through process optimization",
        "Generated new business opportunities worth $3M",
        "Implemented quality control measures improving client satisfaction"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Professional Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-gray-300 mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-white">
                        <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center text-white">
                        <Award className="h-5 w-5 text-blue-400 mr-2" />
                        Highlights
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 