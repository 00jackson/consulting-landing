"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Nexus Consulting transformed our business operations. Their strategic insights helped us scale efficiently while maintaining our company culture.",
    avatar: "/avatars/sarah.jpg",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenSolutions",
    content:
      "The financial advisory we received was game-changing. We doubled our profitability within a year of implementing their recommendations.",
    avatar: "/avatars/michael.jpg",
    initials: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Director, Global Retail Co.",
    content:
      "Their market analysis gave us the competitive edge we needed. Highly recommend their services to any business looking to grow strategically.",
    avatar: "/avatars/emma.jpg",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say
              about working with us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="italic mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
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
        </div>
      </div>
    </section>
  );
}