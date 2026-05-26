import { motion } from "framer-motion";
import { Check, ExternalLink, Award } from "lucide-react";

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  color: string;
}

export function CertificationCard({
  cert,
  index,
}: {
  cert: Certification;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="surface-card rounded-2xl p-6 flex gap-5 glow-orange-hover group"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-orange-soft"
        style={{
          backgroundColor: `${cert.color}1a`,
          color: cert.color,
        }}
      >
        <Award size={26} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <h3 className="font-display text-lg font-bold text-foreground leading-tight">
            {cert.name}
          </h3>
          <span
            className="shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
            title="Verified"
          >
            <Check size={12} className="text-primary-foreground" />
          </span>
        </div>
        <p className="text-sm text-primary mt-1">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>

        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-soft text-foreground hover:bg-primary/10 hover:border-primary transition-colors"
        >
          Verify <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
}
