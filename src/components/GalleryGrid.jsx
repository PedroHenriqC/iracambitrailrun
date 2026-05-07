import React, { useEffect, useMemo, useState } from "react";
import { FolderOpen, MoveRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const getSizeClass = (size) => {
  if (size === "large") return "md:col-span-2 md:row-span-2";
  if (size === "tall") return "md:row-span-2";
  return "";
};

const CategoryCard = ({ category, cover, count, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(category.id)}
      className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-trail-gold/40"
      aria-label={`Abrir categoria ${category.label}`}
    >
      {cover && (
        <img
          src={cover.src}
          alt={cover.alt}
          className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,13,7,0.12) 0%, rgba(5,13,7,0.38) 45%, rgba(5,13,7,0.92) 100%)",
        }}
      />

      <div className="noise-overlay absolute inset-0 opacity-25" />

      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
        <FolderOpen size={14} className="text-trail-gold" aria-hidden="true" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream-muted">
          {count} foto{count !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-display text-2xl font-semibold leading-tight text-cream">
          {category.label}
        </p>

        <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-trail-gold">
          Abrir galeria
          <MoveRight size={13} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
};

const GalleryItem = ({ item, onClick }) => {
  const sizeClass = getSizeClass(item.size);

  return (
    <button
      type="button"
      className={`group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] text-left shadow-soft outline-none transition-all duration-300 hover:-translate-y-1 hover:border-trail-gold/35 md:min-h-[220px] ${sizeClass}`}
      onClick={() => onClick(item)}
      aria-label={`Abrir imagem: ${item.caption || item.alt}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:min-h-[220px]"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,13,7,0.05) 0%, rgba(5,13,7,0.1) 38%, rgba(5,13,7,0.86) 100%)",
        }}
      />

      <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold backdrop-blur-md">
        <ZoomIn size={15} strokeWidth={2.4} aria-hidden="true" />
      </div>

      <figcaption className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-display text-lg font-semibold leading-tight text-cream">
          {item.caption}
        </p>
      </figcaption>
    </button>
  );
};

const GalleryGrid = ({ items, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const visibleCategories = useMemo(
    () => categories.filter((category) => category.id !== "todos"),
    [categories]
  );

  const categoryCards = useMemo(() => {
    return visibleCategories.map((category) => {
      const categoryItems = items.filter((item) => item.category === category.id);

      return {
        ...category,
        count: categoryItems.length,
        cover: categoryItems[0],
        items: categoryItems,
      };
    });
  }, [items, visibleCategories]);

  const activeCategoryData = categoryCards.find(
    (category) => category.id === activeCategory
  );

  useEffect(() => {
    if (!activeCategory && !lightbox) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (lightbox) {
          setLightbox(null);
        } else {
          setActiveCategory(null);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCategory, lightbox]);

  return (
    <>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-subtle">
          Escolha uma categoria
        </p>

        <p className="hidden font-body text-xs text-cream-subtle sm:block">
          Clique em uma galeria para ver todas as fotos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categoryCards.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            cover={category.cover}
            count={category.count}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeCategoryData && (
          <motion.div
  className="fixed inset-0 z-50 overflow-y-auto px-4 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(46,204,113,0.14), transparent 34rem), rgba(5,13,7,0.97)",
              backdropFilter: "blur(14px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Galeria ${activeCategoryData.label}`}
          >
            <div className="mx-auto max-w-7xl">
              <div className="sticky top-3 z-10 mb-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-forest-950/90 p-4 backdrop-blur-xl md:top-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-trail-gold">
                    Galeria
                  </p>

                  <h3 className="font-display text-2xl font-semibold text-cream md:text-3xl">
                    {activeCategoryData.label}
                  </h3>

                  <p className="mt-1 font-body text-sm text-cream-muted">
                    {activeCategoryData.count} foto
                    {activeCategoryData.count !== 1 ? "s" : ""}
                  </p>
                </div>

                <button
                  type="button"
                  className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.065] text-cream backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold/40 hover:text-trail-gold"
                  onClick={() => setActiveCategory(null)}
                  aria-label="Fechar galeria da categoria"
                >
                  <X size={24} strokeWidth={2.4} aria-hidden="true" />
                </button>
              </div>

              <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[230px] lg:grid-cols-4">
                {activeCategoryData.items.map((item, index) => (
                  <GalleryItem
                    key={`${item.src}-${index}`}
                    item={item}
                    onClick={setLightbox}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(46,204,113,0.14), transparent 34rem), rgba(5,13,7,0.97)",
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