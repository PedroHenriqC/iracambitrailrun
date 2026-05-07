import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const panelId = `faq-panel-${question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <article className="group border-b border-trail-gold/15">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <h4 className="flex-1 font-display text-lg font-semibold leading-snug text-cream transition-colors duration-200 group-hover:text-trail-gold md:text-xl">
          {question}
        </h4>

        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold transition-all duration-300 group-hover:bg-trail-gold group-hover:text-forest-950">
          <ChevronDown
            size={18}
            strokeWidth={2.4}
            aria-hidden="true"
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 font-body leading-relaxed text-cream-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default FAQItem;