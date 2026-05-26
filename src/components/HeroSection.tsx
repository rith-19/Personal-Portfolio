import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Floating orbs background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-primary animate-float" />
        <div
          className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-primary-glow animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-primary animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-soft text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Building{" "}
            <span className="text-gradient-orange">Intelligent</span>{" "}
            Systems.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            AI/ML Engineer · 1+ Year Experience · Building with Python, PyTorch & LLMs
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-orange text-primary-foreground font-semibold glow-orange hover:glow-orange-lg transition-all"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="src\resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-soft text-foreground font-semibold hover:bg-primary/10 transition-all"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Animated blob visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[420px] md:h-[520px] hidden md:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              {/* Outer rotating gradient ring */}
              <div className="absolute inset-0 rounded-full animate-blob"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(255,95,31,0.6), rgba(255,140,66,0.2), rgba(255,95,31,0.6), transparent, rgba(255,95,31,0.6))",
                  filter: "blur(20px)",
                }}
              />
              {/* Inner blob */}
              <div className="absolute inset-8 rounded-full bg-gradient-orange opacity-80 animate-pulse"
                style={{
                  borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
                  filter: "blur(2px)",
                }}
              />
              <div className="absolute inset-16 rounded-full bg-background border border-orange-soft flex items-center justify-center">
                <div className="font-display text-7xl text-gradient-orange font-bold">
                  AI
                </div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-blob">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-orange" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-glow" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-glow" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-orange" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
