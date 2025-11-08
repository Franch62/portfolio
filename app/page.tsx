import { AboutSection } from "@/components/About";
import { College } from "@/components/College";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import HalftoneBackground from "@/components/HalftoneBackground";
import { Hero } from "@/components/Hero";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <HalftoneBackground>
      <div
        className={`grid-cols-2 not-only:justify-items-center justify-around min-h-screen p-8 pb-20 gap-8 sm:p-20`}
      >
        <Hero />
        <hr className="border-[0.2px border-[#2b2b2c]" />
        <Experience />
        <hr className="border-[0.2px border-[#2b2b2c]" />
        <AboutSection />
        <hr className="border-[0.2px border-[#2b2b2c]" />
       
        <hr className="border-[0.2px border-[#2b2b2c]" />

        <College />
        <Footer />
      </div>
    </HalftoneBackground>
  );
}
