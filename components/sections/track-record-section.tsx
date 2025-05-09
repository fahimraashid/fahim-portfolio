"use client";

import { useEffect, useState } from "react";
import { motion } from "@/components/ui/motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from "recharts";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const achievementData = [
  {
    year: '2020',
    growth: 28,
  },
  {
    year: '2021',
    growth: 42,
  },
  {
    year: '2022',
    growth: 65,
  },
  {
    year: '2023',
    growth: 87,
  },
  {
    year: '2024',
    growth: 104,
  },
];

const achievements = [
  {
    id: "revenue",
    title: "Revenue Growth",
    metrics: [
      { label: "Annual Revenue Growth", value: "38%" },
      { label: "New Market Revenue", value: "$14.2M" },
      { label: "Customer Acquisition", value: "+42%" },
    ],
    description: "Led strategic sales initiatives resulting in consistent year-over-year revenue growth across the MEA region. Successfully expanded into 5 new markets, generating substantial additional revenue streams.",
  },
  {
    id: "market",
    title: "Market Expansion",
    metrics: [
      { label: "New Markets Entered", value: "7" },
      { label: "Market Share Growth", value: "23%" },
      { label: "New Strategic Partnerships", value: "12" },
    ],
    description: "Spearheaded market expansion strategies across the Middle East and Africa, establishing strong local presence in key markets including UAE, Saudi Arabia, Egypt, and South Africa.",
  },
  {
    id: "team",
    title: "Team Development",
    metrics: [
      { label: "Team Growth", value: "175%" },
      { label: "Promotion Rate", value: "32%" },
      { label: "Retention Rate", value: "94%" },
    ],
    description: "Built and developed high-performing sales teams across multiple countries. Implemented structured training and mentorship programs resulting in exceptional team retention and internal promotion rates.",
  },
];

const TrackRecordSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("revenue");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("track-record");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="track-record" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Track Record
          </h2>
          <p className="text-xl text-muted-foreground">
            A history of driving tangible business results and transformative growth 
            across the Middle East and Africa region.
          </p>
        </motion.div>

        <div className="mb-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Regional Growth Trajectory</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={achievementData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      label={{ 
                        value: 'Growth %', 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { textAnchor: 'middle' }
                      }}
                    />
                    <Tooltip />
                    <Bar 
                      dataKey="growth" 
                      fill="hsl(var(--chart-1))" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            {achievements.map((achievement) => (
              <TabsTrigger key={achievement.id} value={achievement.id}>
                {achievement.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {achievements.map((achievement) => (
            <TabsContent key={achievement.id} value={achievement.id}>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {achievement.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {achievement.metrics.map((metric, index) => (
                        <Card key={index} className="bg-muted/50">
                          <CardContent className="p-4 text-center">
                            <p className="text-sm text-muted-foreground mb-1">
                              {metric.label}
                            </p>
                            <p className="text-3xl font-bold text-primary">
                              {metric.value}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TrackRecordSection;