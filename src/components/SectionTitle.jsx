import React from "react";
import { motion } from "motion/react";

const SectionTitle = ({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}) => {
  const alignClass = {
    left: "text-left",
    center: "mx-auto text-center",
    right: "ml-auto text-right",
  }[align];

  const labelAlignClass = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  }[align];

  return (
    <motion.div
      className={`mb-12 max-w-2xl md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {label && (
        <p
          className={`premium-label mb-5 ${labelAlignClass} ${
            light ? "border-forest-700/20 bg-forest-700/5 text-forest-700" : ""
          }`}
        >
          {label}
        </p>
      )}

      <h2
        className={`mb-6 font-display text-[clamp(2.4rem,7vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.07em] ${
          light ? "text-forest-900" : "text-cream"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`font-body text-base leading-relaxed md:text-lg ${
            light ? "text-forest-700" : "text-cream-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;