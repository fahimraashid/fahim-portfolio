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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-semibold">Education</h3>
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
                    <Card className="p-6 bg-white dark:bg-gray-800">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {edu.period}
                      </p>
                      <div>
                        <h5 className="font-semibold mb-2">Relevant Coursework:</h5>
                        <ul className="space-y-1">
                          {edu.coursework.map((course, i) => (
                            <li
                              key={i}
                              className="text-gray-600 dark:text-gray-300"
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
                <Award className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              
              <Card className="p-6 bg-white dark:bg-gray-800">
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">
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