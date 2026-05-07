import React from "react";
import { CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const getMarkerIcon = (item) => {
  if (item.highlight) return CheckCircle2;
  if (item.upcoming) return Clock3;
  return Sparkles;
};

const TimelineItem = ({ item, index, isLast }) => {
  const isOdd = index % 2 !== 0;
  const MarkerIcon = getMarkerIcon(item);

  return (
    <motion.article
      className="relative grid grid-cols-[2.5rem_1fr] gap-5 py-6 md:grid-cols-[1fr_4rem_1fr] md:gap-0 md:py-8"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      {/* Left / content side on desktop */}
      <div
        className={`hidden md:block ${
          isOdd ? "order-3 pl-10 text-left" : "order-1 pr-10 text-right"
        }`}
      >
        {!isOdd && <TimelineCard item={item} align="right" />}
      </div>

      {/* Center marker */}
      <div className="relative order-1 flex justify-center md:order-2">
        <div
          className={`relative z-10 grid h-11 w-11 place-items-center rounded-full border shadow-soft ${
            item.highlight
              ? "border-trail-gold bg-trail-gold text-forest-950"
              : item.upcoming
                ? "border-trail-gold/45 bg-forest-950 text-trail-gold"
                : "border-forest-400/45 bg-forest-950 text-forest-300"
          }`}
        >
          <MarkerIcon size={18} strokeWidth={2.4} aria-hidden="true" />
        </div>

        {!isLast && (
          <div
            className="absolute left-1/2 top-11 h-full w-px -translate-x-1/2 md:top-12"
            style={{
              background:
                "linear-gradient(to bottom, rgba(201,168,76,0.36), rgba(46,204,113,0.14), rgba(201,168,76,0.04))",
              minHeight: "5rem",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right / content side */}
      <div
        className={`order-2 md:order-3 ${
          isOdd ? "md:pl-10 md:text-left" : "md:pr-10 md:text-right"
        }`}
      >
        {isOdd ? (
          <TimelineCard item={item} align="left" />
        ) : (
          <div className="md:hidden">
            <TimelineCard item={item} align="left" />
          </div>
        )}
      </div>
    </motion.article>
  );
};

const TimelineCard = ({ item, align = "left" }) => {
  return (
    <motion.div
      className={`glass-card relative inline-block w-full max-w-md overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-trail-gold/30 md:p-7 ${
        item.highlight ? "border-trail-gold/45" : "border-white/10"
      }`}
      style={{
        background: item.highlight
          ? "rgba(201, 168, 76, 0.07)"
          : "rgba(255,255,255,0.035)",
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative z-10">
        {item.tag && (
          <span
            className={`mb-4 inline-flex rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest ${
              item.upcoming
                ? "border-trail-gold/25 bg-trail-gold/10 text-trail-gold"
                : "border-forest-400/25 bg-forest-400/10 text-forest-300"
            }`}
          >
            {item.tag}
          </span>
        )}

        <p className="section-label mb-2 text-[11px]">{item.year}</p>

        <h3 className="mb-2 font-display text-2xl font-semibold leading-tight text-cream md:text-3xl">
          {item.title}
        </h3>

        <p className="mb-4 font-body text-sm font-semibold text-trail-gold">
          {item.subtitle}
        </p>

        <p
          className={`font-body text-sm leading-relaxed text-cream-muted ${
            align === "right" ? "md:ml-auto" : ""
          }`}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;