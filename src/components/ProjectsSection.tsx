import { motion } from "framer-motion";
import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Personal Finance Tracker",
    description:
      "A command-line application to track your income and expenses, view transaction summaries, and visualize spending patterns over time.A command-line application to track your income and expenses, view transaction summaries, and visualize spending patterns over time.",
    tags: ["Python", "pandas", "matplotlib"],
    github: "https://github.com/rith-19/Personal-Finance-Tracker",
    demo: "#",
  },
  {
    title: "American Sign Language Detection using Deep Learning",
    description:
      "CNN trained on a Kaggle ASL alphabet dataset with data augmentation, dropout regularization and early stopping — covering full pipeline from training to real-time inference.",
    tags: ["TensorFlow/Keras", "CNN", "OpenCV", "NumPy", "Scikit-learn"],
    github: "https://github.com/rith-19/American-Sign-Language-Detection-using-Deep-Learning",
    demo: "#",
  },
  {
    title: "PDF-to-Audio-Convertor-using-Python",
    description:
      "GUI-based tool that extracts text from PDFs and converts it to audio using TTS, with voice selection and custom output location support.",
    tags: ["Python", "PyPDF2", "Pyttsx3", "Pygame", "TTS"],
    github: "https://github.com/rith-19/PDF-to-Audio-Convertor-using-Python",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient-orange">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
