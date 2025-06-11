"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart4, Lightbulb, LineChart, Settings, ShieldCheck, Users } from "lucide-react";

const services = [
  {
    title: "Business Strategy",
    description: "Comprehensive strategic planning to position your business for long-term success.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    delay: 0.1
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and eliminate inefficiencies to boost productivity.",
    icon: <Settings className="h-8 w-8 text-primary" />,
    delay: 0.2
  },
  {
    title: "Financial Advisory",
    description: "Expert financial analysis and planning to maximize profitability.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    delay: 0.3
  },
  {
    title: "Market Analysis",
    description: "In-depth market research to identify opportunities and competitive advantages.",
    icon: <BarChart4 className="h-8 w-8 text-primary" />,
    delay: 0.4
  },
  {
    title: "Team Development",
    description: "Build high-performing teams with our leadership and organizational development expertise.",
    icon: <Users className="h-8 w-8 text-primary" />,
    delay: 0.5
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate potential risks to protect your business interests.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    delay: 0.6
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-gradient">Our Consulting</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Tailored solutions designed to address your unique business challenges and drive measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}