import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { Icon: FaGithub, href: "https://github.com/rith-19", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/rithishravi", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://twitter.com/rithishrav397", label: "X / Twitter" },
  { Icon: Mail, href: "mailto:rithishkumarravi2@email.com", label: "Email" },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Let's Build <span className="text-gradient-orange">Something</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Got an idea, a role, or a problem worth solving with ML? I'd love
            to hear about it. I usually reply within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-xl surface-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors glow-orange-hover"
              >
                <s.Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="surface-card rounded-2xl p-6 md:p-8 space-y-4"
          noValidate
        >
          {(["name", "email", "subject"] as const).map((field) => (
            <div key={field}>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-orange-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder={
                  field === "name" ? "Your name" :
                  field === "email" ? "you@email.com" :
                  "What's this about?"
                }
              />
              {errors[field] && (
                <p className="mt-1 text-xs text-destructive">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-orange-soft text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-orange text-primary-foreground font-semibold glow-orange hover:glow-orange-lg transition-all"
          >
            <Send size={16} /> Send Message
          </button>

          {sent && (
            <p className="text-sm text-primary text-center">
              Opening your mail client…
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
