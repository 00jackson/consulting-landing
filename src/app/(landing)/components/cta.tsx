"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-xl border"
          >
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Schedule a free consultation call to discuss how we can help you achieve your business goals.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="group gap-2">
                <a href="https://fiverr.com/yourprofile" target="_blank" className="flex items-center">
                  Book on Fiverr
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="group gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
              
              <Button size="lg" variant="outline" className="group gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </motion.div>
            
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Typically replies within 2 hours during business days
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}