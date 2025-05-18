"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, Award, Users, Target, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function AboutSection() {
  const expertise = [
    "Strategic Sales",
    "Business Development",
    "Technology Sales",
    "Account Management",
    "Digital Transformation",
    "Negotiation & Deal Closing",
    "Customer Engagement",
    "Enterprise Software Sales"
  ];

  const achievements = [
    {
      icon: <Target className="h-6 w-6 text-blue-400" />,
      title: "Sales Excellence",
      description: "Consistently exceeded sales targets by 150%+ across multiple quarters"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Team Leadership",
      description: "Built and led high-performing sales teams across diverse markets"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Market Expansion",
      description: "Successfully penetrated new markets in the MEA region"
    },
    {
      icon: <Award className="h-6 w-6 text-blue-400" />,
      title: "Client Success",
      description: "Maintained 95%+ client retention rate through strategic partnerships"
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
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
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/images/fahim.png"
                  alt="Fahim Raashid"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Content */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  I am Fahim Raashid, a results-oriented Sales Leader with a proven track record in driving revenue growth and market expansion across the Middle East and Africa (MEA) region. With expertise in strategic sales and technology solutions, I specialize in identifying new opportunities, building strong client relationships, and delivering tailored solutions to meet business needs.
                </p>
                
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  My passion lies in developing innovative sales strategies, penetrating emerging markets, and exceeding sales targets. I thrive in dynamic environments where I can leverage my skills to create value for clients and drive organizational success in the MEA region.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-gray-300">
                        <Phone className="w-5 h-5 mr-3 text-blue-400" />
                        +971 56 48x xx xx
                      </p>
                      <p className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                        UAE, Dubai
                      </p>
                      <p className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 mr-3 text-blue-400" />
                        fahimraashid@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {expertise.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          <span className="text-gray-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-300">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}