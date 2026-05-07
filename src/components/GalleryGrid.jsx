import React, { useEffect, useState } from "react";
import { MoveRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const getSizeClass = (size) => {
  if (size === "large") {
    return "md:col-span-2 md:row-span-2";
  }

  if (size === "tall") {
    return "md:row-span-2";
  }

  return "";
};

const GalleryItem = ({ item, index, onClick }) => {
  const sizeClass = getSizeClass(item.size);

  return (
    <motion.button
      type="button"
      className={`group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left shadow-soft outline-none transition-colors duration-300 hover:border-trail-gold/35 md:min-h-[220px] ${sizeClass}`}
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.6,
        delay: index * 0.045,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      aria-label={`Abrir imagem: ${item.caption || item.alt}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-[220px]"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,13,7,0.05) 0%, rgba(5,13,7,0.1) 38%, rgba(5,13,7,0.86) 100%)",
        }}
      />

      <div className="noise-overlay absolute inset-0 opacity-25" />

      <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cream-muted backdrop-blur-md">
          1ª edição
        </span>

        <span className="grid h-9 w-9 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold opacity-100 backdrop-blur-md transition-all duration-300 group-hover:bg-trail-gold group-hover:text-forest-950 md:opacity-0 md:group-hover:opacity-100">
          <ZoomIn size={15} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </div>

      <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="font-display text-lg font-semibold leading-tight text-cream">
          {item.caption}
        </p>

        <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-trail-gold opacity-90">
          Ampliar
          <MoveRight size={13} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </figcaption>
    </motion.button>
  );
};

const GalleryGrid = ({ items }) => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-4">
        {items.map((item, index) => (
          <GalleryItem
            key={`${item.src}-${index}`}
            item={item}
            index={index}
            onClick={setLightbox}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(46,204,113,0.14), transparent 34rem), rgba(5,13,7,0.96)",
              backdropFilter: "blur(14px)",
            }}
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada da galeria"
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.065] text-cream backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold/40 hover:text-trail-gold md:right-6 md:top-6"
              onClick={() => setLightbox(null)}
              aria-label="Fechar imagem ampliada"
            >
              <X size={24} strokeWidth={2.4} aria-hidden="true" />
            </button>

            <motion.div
              className="w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-soft">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="max-h-[76vh] w-full object-contain"
                />
              </div>

              {lightbox.caption && (
                <p className="mx-auto mt-5 max-w-2xl text-center font-body text-sm leading-relaxed text-cream-muted">
                  {lightbox.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;