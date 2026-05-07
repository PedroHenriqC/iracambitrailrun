import React from "react";
import { Camera, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import SectionTitle from "../components/SectionTitle";
import GalleryGrid from "../components/GalleryGrid";
import { gallery, galleryCategories } from "../data/eventData";

const Gallery = () => {
  return (
    <section
      id="galeria"
      className="section-padding relative overflow-hidden"
      aria-labelledby="gallery-title"
    >
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 8%, rgba(201,168,76,0.1), transparent 28rem), radial-gradient(circle at 88% 22%, rgba(46,204,113,0.1), transparent 30rem)",
        }}
      />

      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-35" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2">
            <Camera size={14} className="text-trail-gold" aria-hidden="true" />

            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-trail-gold">
              Galeria
            </span>

            <Sparkles
              size={13}
              className="text-trail-gold"
              aria-hidden="true"
            />
          </div>

          <SectionTitle
            
            title={
              <>
                Momentos que
                <br />
                ficam na <em className="not-italic gradient-text">memória</em>
              </>
            }
            subtitle="Imagens da 1ª edição, dos voluntários, da reserva e do espírito que move o Iracambi Trail Run."
          />
        </motion.div>

        <div>
  <GalleryGrid items={gallery} categories={galleryCategories} />
</div>
      </div>
    </section>
  );
};

export default Gallery;