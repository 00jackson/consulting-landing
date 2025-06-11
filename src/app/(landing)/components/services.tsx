"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart4, Lightbulb, LineChart, Settings, ShieldCheck, Users } from "lucide-react";

const solutions = [
  {
    title: "Strategic Business Consulting",
    description: "Data-driven strategies to accelerate growth, outpace competitors, and maximize profitability in your market.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    delay: 0.1
  },
  {
    title: "Operational Excellence",
    description: "Transform your workflows to reduce costs by 20-30% while improving quality and delivery times.",
    icon: <Settings className="h-8 w-8 text-primary" />,
    delay: 0.2
  },
  {
    title: "Financial Performance",
    description: "Actionable insights to optimize cash flow, reduce expenses, and improve your bottom line.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    delay: 0.3
  },
  {
    title: "Market Intelligence",
    description: "Comprehensive competitive analysis to identify untapped opportunities and emerging trends.",
    icon: <BarChart4 className="h-8 w-8 text-primary" />,
    delay: 0.4
  },
  {
    title: "Talent Optimization",
    description: "Build high-performance teams with our proven organizational development frameworks.",
    icon: <Users className="h-8 w-8 text-primary" />,
    delay: 0.5
  },
  {
    title: "Enterprise Risk Solutions",
    description: "Proactive risk assessment and mitigation strategies to safeguard your business assets.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    delay: 0.6
  },
];

export function ClientSolutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            <span className="text-gradient">Proven Solutions</span> For Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We deliver measurable results - 90% of clients see ROI within the first 90 days of implementation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: solution.delay }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {solution.description}
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