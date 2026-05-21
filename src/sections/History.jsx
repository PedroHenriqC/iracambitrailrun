import React from "react";
import { History as HistoryIcon, Route } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { timeline } from "../data/eventData";

const History = () => {
  return (
    <section
      id="historia"
      className="section-padding relative overflow-hidden"
      aria-labelledby="history-title"
    >
      {/* Background image with premium overlay */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/mata-atlantica.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{
            opacity: 0.08,
            filter: "saturate(1.05) contrast(1.08)",
          }}
          loading="lazy"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,13,7,0.98) 0%, rgba(10,42,10,0.9) 48%, rgba(5,13,7,0.98) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.1), transparent 30rem), radial-gradient(circle at 15% 82%, rgba(46,204,113,0.09), transparent 28rem)",
          }}
        />

        <div className="noise-overlay absolute inset-0 opacity-30" />
      </div>

      <div className="section-container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
            <HistoryIcon
              size={14}
              className="text-trail-gold"
              strokeWidth={2.4}
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
              Nossa História
            </span>
          </div>

          <SectionTitle
            title={
              <>
                De trilha em
                <br />
                <em className="not-italic gradient-text">trilha</em>
              </>
            }
            subtitle="Depois da primeira edição em 2025, o Iracambi Trail Run retorna em 2026 com Trail Run 12km, caminhada ecológica 3km, corrida infantil e o mesmo compromisso com a Mata Atlântica."
            align="center"
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
        >
          {/* Vertical line */}
          <div
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,168,76,0.52), rgba(46,204,113,0.18), rgba(201,168,76,0.04))",
            }}
            aria-hidden="true"
          />

          {/* Top marker */}
          <div className="absolute left-5 top-0 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-trail-gold/25 bg-forest-950 text-trail-gold shadow-gold md:left-1/2">
            <Route size={17} strokeWidth={2.4} aria-hidden="true" />
          </div>

          <div className="space-y-0 pt-6">
            {timeline.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${item.title}-${index}`}
                item={item}
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
