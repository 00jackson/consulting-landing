"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, BarChart2, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-28 md:py-36 lg:py-44 overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -ml-[800px] w-[1600px] h-[800px] bg-gradient-to-b from-primary/10 to-transparent rounded-full" />
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary mb-6 tracking-wider uppercase"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <BarChart2 className="h-4 w-4 mr-2" />
                Trusted by 200+ Businesses Worldwide
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
              >
                <span className="text-gradient">Data-Driven</span> Business Solutions That <span className="text-primary">Deliver Results</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                We help CEOs and founders optimize operations, reduce costs, and scale profitably with our proven business consulting framework. Get custom-tailored strategies in as little as 2 weeks.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              >
                <Button size="lg" className="group shadow-lg hover:shadow-primary/20">
                  <a href="#contact" className="flex items-center">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <a href="#case-studies" className="flex items-center">
                    See Case Studies
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center gap-x-8 gap-y-4"
              >
                <div className="flex items-center text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No-Risk 30-Day Guarantee
                </div>
                <div className="flex items-center text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Certified Business Experts
                </div>
                <div className="flex items-center text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ROI-Focused Strategies
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
          <span className="text-xs mt-1 text-muted-foreground">Explore More</span>
        </div>
      </motion.div>
    </section>
  );
}