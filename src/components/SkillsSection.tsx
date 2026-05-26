import { motion } from "framer-motion";
import {
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi,
  SiHuggingface, SiLangchain, SiOpencv, SiNumpy, SiPandas,
  SiJupyter, SiGit, SiDocker, SiGooglecolab,
  SiWeightsandbiases, SiMlflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Cursor, Groq } from "@lobehub/icons";

const stack = [
  { name: "Python", Icon: SiPython },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "Scikit-learn", Icon: SiScikitlearn },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "LangChain", Icon: SiLangchain },
  { name: "OpenCV", Icon: SiOpencv },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Pandas", Icon: SiPandas },
];

const tools = [
  { name: "Jupyter", Icon: SiJupyter },
  { name: "VS Code", Icon: VscVscode },
  { name: "Cursor", Icon: Cursor },
  { name: "Git", Icon: SiGit },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS SageMaker", Icon: FaAws },
  { name: "Google Colab", Icon: SiGooglecolab },
  // { name: "Weights & Biases", Icon: SiWeightsandbiases },
  // { name: "MLflow", Icon: SiMlflow },
  { name: "Groq", Icon: Groq },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            What I <span className="text-gradient-orange">Work With</span>
          </h2>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-xl font-display font-semibold mb-6 text-muted-foreground">
            Languages & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {stack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="surface-card rounded-xl p-5 flex flex-col items-center justify-center gap-3 group hover:border-primary transition-all glow-orange-hover"
              >
                <s.Icon
                  size={36}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <span className="text-sm font-medium text-center">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-muted-foreground">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full surface-card hover:border-primary transition-colors"
              >
                <t.Icon size={18} className="text-primary" />
                <span className="text-sm font-medium">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-orange-soft py-6 mt-12">
          <div className="flex gap-16 animate-marquee w-max">
            {[...stack, ...tools, ...stack].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <item.Icon size={28} />
                <span className="font-display font-medium text-lg whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
