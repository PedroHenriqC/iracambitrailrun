import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const sizeClasses = {
  master: "min-h-24 px-8 py-6 md:min-h-28 md:px-10",
  normal: "min-h-20 px-5 py-5",
  small: "min-h-16 px-4 py-4",
};

const textSizeClasses = {
  master: "text-sm md:text-base",
  normal: "text-xs md:text-sm",
  small: "text-[10px] md:text-xs",
};

const isExternalUrl = (url) => /^https?:\/\//i.test(url || "");

const SponsorCard = ({ sponsor, size = "normal" }) => {
  const hasUrl = Boolean(sponsor.url);
  const external = isExternalUrl(sponsor.url);

  const content = (
    <>
      <div className="relative z-10 flex w-full items-center justify-center">
        {sponsor.logo ? (
          <div
            className={`relative z-10 grid place-items-center ${
              size === "master"
                ? "h-24 w-24 rounded-3xl border border-trail-gold/20 bg-cream/95 shadow-gold md:h-28 md:w-28"
                : "h-full w-full"
            }`}
          >
            <img
              src={sponsor.logo}
              alt={`Logo ${sponsor.name}`}
              className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                size === "master"
                  ? "h-20 w-20 md:h-24 md:w-24"
                  : "max-h-14 max-w-full opacity-80 group-hover:opacity-100"
              }`}
              loading="lazy"
            />
          </div>
        ) : (
          <span
            className={`font-mono uppercase tracking-widest text-cream-subtle transition-colors duration-300 group-hover:text-cream-muted ${textSizeClasses[size]}`}
          >
            {sponsor.name}
          </span>
        )}
      </div>

      {hasUrl && (
        <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
        </span>
      )}
    </>
  );

  const className = `glass-card group relative flex items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 hover:border-trail-gold/30 ${sizeClasses[size]}`;

  if (hasUrl) {
    return (
      <motion.a
        href={sponsor.url}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={className}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        aria-label={`Abrir patrocinador ${sponsor.name}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      aria-label={sponsor.name}
    >
      {content}
    </motion.div>
  );
};

export default SponsorCard;