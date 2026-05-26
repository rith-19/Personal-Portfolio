import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineEntry {
  title: string;
  org: string;
  duration: string;
  points: string[];
}

const workEntries: TimelineEntry[] = [
  {
    title: "Machine Learning Engineer",
    org: "Skypler AI, Chennai",
    duration: "Oct 2024 – Nov 2025",
    points: [
      "Built a multi-agent LLM framework from scratch that auto-generates production-level frontend and backend code from design inputs, cutting engineering setup time by 75%.",
      "Refactored core agents to handle typed errors and multi-step execution flows, lifting end-to-end build success rate from 60% to 85%.",
      "Maintained full MLOps pipelines (SFT → Pruning → Distillation) optimized for constrained GPU environments.",
    ],
  },

  {
    title: "Data Scientist Intern",
    org: "Skypler AI, Chennai",
    duration: "Aug 2024 – Oct 2024",
    points: [
      "Developed a production level vehicle monitoring system with ALPR and weight extraction, achieving 92%+ license-plate recognition accuracy.",
      "Optimized edge models via quantization, distillation, and ROI-based inference, boosting throughput from 8 FPS to 20+ FPS.",
      "Reduced false-positive rates by 35% through improved tracking and environmental robustness handling."
    ],
  },
  { 
    title: "Machine Learning Engineer Intern",
    org: "NEVAR Systems, Puducherry",
    duration: "Feb 2024 - Apr 2024",
    points: [
      "Built a YOLO-based crack detection system on Roboflow-annotated datasets, improving defect localization precision by 35%.",
      "Integrated SAM for pixel-level crack segmentation, reducing measurement error by 40%.",
      "Boosted YOLO accuracy and reduced false positives through augmentation, hyperparameter tuning, and threshold calibration."
    ],
  },
  
];

const educationEntries: TimelineEntry[] = [
  {
    title: "M.Sc in Computer Science",
    org: "University of Madras",
    duration: "2022 — 2024",
    points: [
      "Specialized in Computer Science.",
      "Capstone: American Sign Language(ASL) Detection using Deep Learning.",
    ],
  },
  {
    title: "B.Sc in Computer Science",
    org: "Guru Nanak College",
    duration: "2019 — 2022",
    points: [
      "Specialized in Computer Science.",
      "Capstone: Real-Time Color Detection using OpenCV.",
    ],
  },
];

function TimelineItem({
  entry,
  index,
  icon: Icon,
}: {
  entry: TimelineEntry;
  index: number;
  icon: typeof Briefcase;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-12 pb-10 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-gradient-orange flex items-center justify-center text-primary-foreground glow-orange">
        <Icon size={16} />
      </div>
      <div className="surface-card rounded-xl p-6">
        <div className="flex flex-wrap justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-bold">{entry.title}</h3>
            <p className="text-sm text-primary">{entry.org}</p>
            
          </div>
          <span className="text-xs text-muted-foreground">{entry.duration}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {entry.points.map((p, i) => (
            <li key={i} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
              <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function TimelineColumn({
  title,
  entries,
  icon,
}: {
  title: string;
  entries: TimelineEntry[];
  icon: typeof Briefcase;
}) {
  const Icon = icon;
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Icon className="text-primary" size={22} />
        <h3 className="font-display text-2xl font-bold">{title}</h3>
      </div>
      <div className="relative">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        {entries.map((e, i) => (
          <TimelineItem key={i} entry={e} index={i} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient-orange">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <TimelineColumn title="Work Experience" entries={workEntries} icon={Briefcase} />
          <TimelineColumn title="Education" entries={educationEntries} icon={GraduationCap} />
        </div>
      </div>
    </section>
  );
}
