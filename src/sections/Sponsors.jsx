import React from "react";
import { Handshake, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import SponsorCard from "../components/SponsorCard";
import { sponsors, officialContact } from "../data/eventData";

const Sponsors = () => {
  return (
    <section
      id="patrocinadores"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.09), transparent 30rem), linear-gradient(180deg, #050d07 0%, #060f06 48%, #050d07 100%)",
      }}
      aria-labelledby="sponsors-title"
    >
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />

      <div
        className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(46,204,113,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
            <Handshake
              size={14}
              className="text-trail-gold"
              strokeWidth={2.4}
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
              Patrocinadores É Parceiros
            </span>
          </div>

          <SectionTitle
           
            title={
              <>
                Quem torna
                <br />
                isso <em className="not-italic gradient-text">possível</em>
              </>
            }
            subtitle="O Iracambi Trail Run existe graças ao apoio de organizações que acreditam na união entre esporte, comunidade e meio ambiente."
            align="center"
          />
        </motion.div>

        {/* Master sponsor */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-cream-subtle">
            Realizador Master
          </p>

          <div className="flex justify-center">
            <SponsorCard sponsor={sponsors.master[0]} size="master" />
          </div>
        </motion.div>

        <div className="divider-gold mb-12" />

        {/* Support */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-cream-subtle">
            Apoio
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {sponsors.support.map((sponsor, index) => (
              <SponsorCard
                key={`${sponsor.name}-${index}`}
                sponsor={sponsor}
                size="normal"
              />
            ))}
          </div>
        </motion.div>

        <div className="divider-gold mb-12" />

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-cream-subtle">
            Parceiros
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sponsors.partners.map((sponsor, index) => (
              <SponsorCard
                key={`${sponsor.name}-${index}`}
                sponsor={sponsor}
                size="small"
              />
            ))}
          </div>
        </motion.div>

        {/* Become sponsor CTA */}
        <motion.div
          className="glass-card mt-16 rounded-[2rem] border-dashed border-trail-gold/25 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
              <Sparkles size={24} strokeWidth={2.4} aria-hidden="true" />
            </div>

            <p className="mb-3 font-display text-3xl font-semibold leading-tight text-cream">
              Quer fazer parte?
            </p>

            <p className="mx-auto mb-7 max-w-md font-body text-sm leading-relaxed text-cream-muted md:text-base">
              Associe sua marca a um evento que combina esporte, natureza,
              comunidade e impacto ambiental na Mata Atlântica.
            </p>

          <a
            href={`mailto:${officialContact.email}`}
            className="btn-outline inline-flex px-6 py-3 text-xs"
            aria-label="Enviar e-mail para contato da Iracambi">
            <Mail size={15} strokeWidth={2.4} aria-hidden="true" />
            Fale conosco
          </a>          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;