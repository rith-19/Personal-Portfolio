import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

// Replace [USERNAME] with your Codolio username
const CODOLIO_USERNAME = "rith";


export function CodolioSection() {
  const profileUrl = `https://codolio.com/profile/${CODOLIO_USERNAME}/card`;

  return (
    <section id="codolio" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold inline-flex items-center gap-2">
            <Code2 size={14} /> Codolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Coding <span className="text-gradient-orange">Activity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            My competitive programming & problem-solving footprint.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl surface-card overflow-hidden glow-orange"
        >
          <div className="aspect-[16/10] w-full bg-[#0f0f0f] relative">
            <iframe
              src={profileUrl}
              title="Codolio Profile"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
            {/* Fallback placeholder if iframe blocked */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
              <Code2 size={48} className="text-primary mb-4" />
              <p className="font-display text-xl mb-2">Codolio Profile Embed</p>
              <p className="text-sm">
                Replace <code className="text-primary">[USERNAME]</code> in
                CodolioSection.tsx with your real handle.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 flex justify-center">
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-orange text-primary-foreground font-semibold glow-orange hover:glow-orange-lg transition-all"
          >
            View Full Profile on Codolio <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
