import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Nexus Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic business solutions for sustainable growth and operational
                  excellence.
                </p>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Business Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Process Optimization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Financial Advisory
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Market Analysis
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#testimonials"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Nexus Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}