import React from "react";
import { HelpCircle, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import FAQItem from "../components/FAQItem";
import { faqItems, officialContact } from "../data/eventData";

const whatsappUrl = `https://wa.me/${officialContact.whatsappNumber}`;

const FAQ = () => {
  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      aria-labelledby="faq-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.09), transparent 28rem), radial-gradient(circle at 8% 80%, rgba(46,204,113,0.09), transparent 30rem)",
        }}
      />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="section-container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
            <HelpCircle
              size={14}
              className="text-trail-gold"
              strokeWidth={2.4}
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
              Perguntas frequentes
            </span>
          </div>

          <SectionTitle
            title={
              <>
                Dúvidas?
                <br />
                <em className="not-italic gradient-text">Temos respostas.</em>
              </>
            }
            align="center"
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-soft sm:p-6 md:p-8">
            <div className="relative z-10">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={`${item.question}-${index}`}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 text-center shadow-soft md:mt-16 md:p-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                <MessageCircle size={24} strokeWidth={2.4} aria-hidden="true" />
              </div>

              <p className="mb-3 font-display text-2xl font-semibold leading-tight text-cream">
                Ainda ficou com dúvida?
              </p>

              <p className="mx-auto mb-6 max-w-xl font-body text-sm leading-relaxed text-cream-muted md:text-base">
                Entre em contato pelos canais oficiais da Iracambi para
                informações sobre inscrições, modalidades, transporte e detalhes
                do evento.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${officialContact.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-5 py-3 font-display text-sm font-semibold text-trail-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold hover:bg-trail-gold hover:text-forest-950 sm:w-auto md:text-base"
                  aria-label="Enviar e-mail para contato da Iracambi"
                >
                  <Mail size={17} strokeWidth={2.4} aria-hidden="true" />
                  {officialContact.email}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest-400/25 bg-forest-400/10 px-5 py-3 font-display text-sm font-semibold text-forest-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-400 hover:bg-forest-400 hover:text-forest-950 sm:w-auto md:text-base"
                  aria-label="Abrir WhatsApp oficial da Iracambi"
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                  WhatsApp oficial
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
