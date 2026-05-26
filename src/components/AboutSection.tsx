import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Sparkles, User } from "lucide-react";

const highlights = [
  { icon: Briefcase, label: "1 Year Experience" },
  { icon: FolderGit2, label: "5+ Projects Shipped" },
  { icon: Sparkles, label: "Open to Work" },
  { icon: User, label: "AI / ML Roles" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-orange opacity-30 blur-xl" />
          <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-orange glow-orange-lg">
          <div className="w-full h-full rounded-full bg-surface overflow-hidden border border-orange-soft">
  <img
    src="/profile-photo.jpg"
    alt="Profile"
    className="w-full h-full object-cover object-top block"
  />
</div>  
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            About
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Engineer behind the <span className="text-gradient-orange">models</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm Rithish, an AI/ML engineer with one year of professional
            experience designing, training and shipping intelligent systems —
            from deep learning pipelines and computer vision models to LLM-powered
            applications. I care about clean code, reproducible experiments and
            models that actually work in production.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Currently exploring <span className="text-primary font-medium">AI/ML roles</span> where
            I can keep pushing the boundary between research and real-world impact.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="surface-card rounded-xl p-4 flex items-center gap-3 glow-orange-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-orange-soft flex items-center justify-center text-primary">
                  <h.icon size={18} />
                </div>
                <span className="text-sm font-medium">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
