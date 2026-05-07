import React from "react";
import { Droplets, Globe, Leaf, Sprout, Trees } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import { impactCards } from "../data/eventData";

const iconMap = {
  tree: Trees,
  leaf: Leaf,
  droplets: Droplets,
  globe: Globe,
};

const ImpactCard = ({ card, index }) => {
  const Icon = iconMap[card.icon] || Leaf;

  return (
    <motion.article
      className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-forest-400/30 md:p-7"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.58,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
    >
      <div className="relative z-10">
        <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl border border-forest-400/20 bg-forest-400/10 text-forest-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-forest-400 group-hover:text-forest-950">
          <Icon size={21} strokeWidth={2.35} aria-hidden="true" />
        </div>

        <h3 className="mb-3 font-display text-xl font-semibold leading-tight text-cream">
          {card.title}
        </h3>

        <p className="font-body text-sm leading-relaxed text-cream-muted">
          {card.description}
        </p>
      </div>
    </motion.article>
  );
};

const Impact = () => {
  return (
    <section
      id="impacto"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 10%, rgba(46,204,113,0.11), transparent 30rem), radial-gradient(circle at 10% 82%, rgba(201,168,76,0.1), transparent 28rem), linear-gradient(180deg, #0a2a0a 0%, #091f09 50%, #050d07 100%)",
      }}
      aria-labelledby="impact-title"
    >
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30" />

      {/* Big background accent */}
      <div
        className="pointer-events-none absolute right-0 top-12 select-none font-display text-[12rem] leading-none opacity-[0.035] md:right-8 md:text-[20rem]"
        aria-hidden="true"
      >
        🌱
      </div>

      <div className="section-container relative z-10">
        {/* Top row */}
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:mb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] lg:gap-16">
          <SectionTitle
            label="Impacto Ambiental"
            title={
              <>
                Cada inscrição
                <br />
                fortalece uma{" "}
                <em className="not-italic gradient-text">floresta</em>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="glass-card mb-6 rounded-[2rem] border-forest-400/20 p-7 md:p-8">
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-forest-400/20 bg-forest-400/10 text-forest-300">
                    <Sprout size={20} strokeWidth={2.4} aria-hidden="true" />
                  </span>

                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-cream-subtle">
                    Resultado da 1ª edição
                  </p>
                </div>

                <div className="mb-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-[clamp(4rem,10vw,7rem)] font-bold leading-none tracking-[-0.08em] gradient-text">
                    80+
                  </span>

                  <span className="font-display text-2xl font-semibold text-cream md:text-3xl">
                    árvores
                  </span>
                </div>

                <p className="font-body text-sm leading-relaxed text-cream-muted md:text-base">
                  plantadas após a 1ª edição do Iracambi Trail Run em 2025. Em
                  2026, a proposta é ampliar esse impacto junto à comunidade.
                </p>
              </div>
            </div>

            <p className="font-body text-sm leading-relaxed text-cream-muted md:text-base">
              A ONG Iracambi atua na restauração da Mata Atlântica, conectando
              pesquisa científica, voluntariado e comunidade local para
              regenerar um dos biomas mais ameaçados do planeta.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactCards.map((card, index) => (
            <ImpactCard
              key={`${card.title}-${index}`}
              card={card}
              index={index}
            />
          ))}
        </div>

        {/* Image strip */}
        <motion.div
          className="relative mt-16 h-[320px] overflow-hidden rounded-[2rem] border border-white/10 shadow-soft md:h-[380px]"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <img
            src="/images/viveiro-mudas.jpg"
            alt="Viveiro de mudas nativas da Iracambi"
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,13,7,0.12) 0%, rgba(5,13,7,0.42) 44%, rgba(5,13,7,0.88) 100%)",
            }}
          />

          <div className="noise-overlay absolute inset-0 opacity-35" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-center md:p-8">
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl md:p-7">
              <p className="mb-3 font-display text-3xl font-semibold leading-tight text-cream md:text-5xl">
                Viveiro de Mudas Nativas
              </p>

              <p className="mx-auto max-w-xl font-body text-sm leading-relaxed text-cream-muted md:text-base">
                Rosário da Limeira, Minas Gerais · uma iniciativa conectada à
                restauração, educação ambiental e preservação da Mata Atlântica.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;