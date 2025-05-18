"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "MBA in Corporate & Financial Management",
      institution: "University",
      period: "June 2019 - May 2021",
      coursework: [
        "Corporate Management",
        "Financial Management"
      ]
    },
    {
      degree: "B.E. in Mechanical Engineering",
      institution: "University",
      period: "July 2014 - May 2018",
      coursework: [
        "Computational Fluid Dynamics",
        "Engineering Materials",
        "Manufacturing Engineering"
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner Essentials",
    "Algorithms-Design and Analysis",
    "Algorithmic Toolbox"
  ];

  return (
    <section id="education" className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
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
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Education & Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-gray-300 mb-4">
                        {edu.period}
                      </p>
                      <div>
                        <h5 className="font-semibold mb-2 text-white">Relevant Coursework:</h5>
                        <ul className="space-y-1">
                          {edu.coursework.map((course, i) => (
                            <li
                              key={i}
                              className="text-gray-300"
                            >
                              • {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-6 w-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
              </div>
              
              <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 