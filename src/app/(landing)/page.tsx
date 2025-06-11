import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <Testimonials />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}