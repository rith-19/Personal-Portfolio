import { motion } from "framer-motion";
import { CertificationCard, type Certification } from "./CertificationCard";

const certs: Certification[] = [
  {
    name: "Machine Learning & Deep Learning in Python & R",
    issuer: "Udemy",
    date: "2023",
    verifyUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-04673180-eb4e-471a-b860-d14fb6d247d2.pdf",
    color: "#0056D2",
  },
  {
    name: "Convolutional Neural Networks:Deep Learning",
    issuer: "Udemy",
    date: "2024",
    verifyUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-097a7afd-a724-436c-b597-7f3e95ce7fb3.pdf",
    color: "#FF6F00",
  },
  // {
  //   name: "AWS Certified Machine Learning – Specialty",
  //   issuer: "Amazon Web Services",
  //   date: "2024",
  //   verifyUrl: "#",
  //   color: "#FF9900",
  // },
  // {
  //   name: "Deep Learning Specialization",
  //   issuer: "DeepLearning.AI / Coursera",
  //   date: "2023",
  //   verifyUrl: "#",
  //   color: "#0056D2",
  // },
  // {
  //   name: "Python for Data Science and AI",
  //   issuer: "IBM / Coursera",
  //   date: "2023",
  //   verifyUrl: "#",
  //   color: "#1F70C1",
  // },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Credentials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Certifications & <span className="text-gradient-orange">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <CertificationCard key={c.name} cert={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
