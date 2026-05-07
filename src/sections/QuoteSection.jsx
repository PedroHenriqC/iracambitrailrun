import React from "react";
import { MapPin, Quote } from "lucide-react";
import { motion } from "motion/react";

import { eventInfo } from "../data/eventData";

const QuoteSection = () => {
  return (
    <section
      className="relative overflow-hidden px-4 py-24 md:px-8 md:py-32 lg:px-16"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.11), transparent 30rem), radial-gradient(circle at 12% 82%, rgba(46,204,113,0.1), transparent 28rem), linear-gradient(135deg, #050d07 0%, #0a2a0a 48%, #050d07 100%)",
      }}
      aria-label="Citação sobre o Iracambi Trail Run"
    >
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-35" />

      {/* Large decorative quote mark */}
      <div
        className="pointer-events-none absolute -left-6 top-4 select-none font-display text-[14rem] leading-none opacity-[0.035] md:left-10 md:top-4 md:text-[22rem]"
        aria-hidden="true"
      >
        “
      </div>

      <div
        className="pointer-events-none absolute -right-16 bottom-0 select-none font-display text-[14rem] leading-none opacity-[0.025] md:right-8 md:text-[20rem]"
        aria-hidden="true"
      >
        ”
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {/* Label */}
        <div className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
          <Quote
            size={14}
            className="text-trail-gold"
            strokeWidth={2.4}
            aria-hidden="true"
          />

          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
            Imprensa local sobre o evento
          </span>
        </div>

        {/* The quote */}
        <blockquote>
          <p className="mx-auto mb-10 max-w-5xl font-display text-[clamp(2.7rem,8vw,6.7rem)] font-bold leading-[0.92] tracking-[-0.08em] text-cream">
            <span aria-hidden="true">“</span>
            <span className="gradient-text">{eventInfo.quote}</span>
            <span aria-hidden="true">”</span>
          </p>

          {/* Divider */}
          <div className="divider-gold mx-auto mb-8 w-28" />

          <footer>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream-subtle">
              — {eventInfo.quoteAuthor}
            </p>

            <p className="mt-3 font-body text-sm leading-relaxed text-cream-subtle">
              Sobre a 1ª edição do Iracambi Trail Run, 2025
            </p>
          </footer>
        </blockquote>

        {/* Location badge */}
        <motion.div
          className="glass-card mx-auto mt-14 inline-flex max-w-full items-center gap-3 rounded-full px-5 py-3 text-left md:mt-16 md:px-7 md:py-4"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        >
          <span className="relative z-10 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-forest-400/15 text-forest-300">
            <MapPin size={16} strokeWidth={2.4} aria-hidden="true" />
          </span>

          <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-muted md:text-[11px] md:tracking-[0.25em]">
            Rosário da Limeira · Mata Atlântica · MG
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;