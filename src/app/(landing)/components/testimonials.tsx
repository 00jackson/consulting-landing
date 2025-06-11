"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Nexus Consulting delivered a 40% operational efficiency gain within six months. Their strategic framework became our playbook for sustainable scaling while preserving our culture.",
    avatar: "/avatars/sarah.jpg",
    initials: "SJ",
    results: ["40% efficiency gain", "3 new markets entered", "25% cost reduction"],
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenSolutions",
    content:
      "Their financial restructuring increased our EBITDA by 112% year-over-year. The implementation support ensured we realized value faster than anticipated.",
    avatar: "/avatars/michael.jpg",
    initials: "MC",
    results: ["112% EBITDA growth", "18-month ROI", "Investor-ready reporting"],
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Director, Global Retail Co.",
    content:
      "The market penetration strategy developed with Nexus captured 15% new market share in Q3 alone. Their insights revealed opportunities we'd overlooked for years.",
    avatar: "/avatars/emma.jpg",
    initials: "ER",
    results: ["15% market share gain", "22% revenue lift", "Competitor benchmarking"],
    rating: 5
  },
];

export function Testimonials() {
  return (
    <section id="results" className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-5"
          >
            <span className="text-gradient">Proven</span> Business Transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-3xl mx-auto text-lg"
          >
            Quantifiable outcomes from organizations that trusted our expertise
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="flex mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="italic text-lg mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  <div className="mb-6 space-y-2">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 mt-1 mr-2 text-primary flex-shrink-0" />
                        <p className="text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
            Industry Recognition
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
            {/* Replace with actual client logos */}
            <div className="h-8 w-auto bg-muted/50 rounded"></div>
            <div className="h-8 w-auto bg-muted/50 rounded"></div>
            <div className="h-8 w-auto bg-muted/50 rounded"></div>
            <div className="h-8 w-auto bg-muted/50 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}