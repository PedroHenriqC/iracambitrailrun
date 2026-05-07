import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navLinks } from "../data/eventData";
import Button from "../components/Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-40 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5, 13, 7, 0.84)"
          : "linear-gradient(180deg, rgba(5,13,7,0.62), transparent)",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(248,247,242,0.09)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 18px 60px rgba(0,0,0,0.22)" : "none",
      }}
    >
      <div className="section-container flex h-16 items-center justify-between px-4 md:h-20 md:px-8 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-full pr-3 transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Voltar ao início"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.065] backdrop-blur-md transition-all duration-300 group-hover:border-trail-gold/30 group-hover:bg-trail-gold/10">
            <img
              src="/images/logo-iracambi.png"
              alt="Logo da Iracambi"
              className="h-8 w-8 object-contain transition-all duration-300 group-hover:brightness-110"
              style={{ filter: "brightness(0.92)" }}
            />
          </span>

          <span>
            <span className="block font-display text-lg font-semibold leading-none text-cream">
              Iracambi
            </span>

            <span className="mt-1 block font-mono text-[9px] uppercase leading-none tracking-[0.25em] text-trail-gold">
              Trail Run
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm tracking-wide text-cream-muted transition-colors duration-200 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-trail-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="outline" href="#inscricao" className="px-6 py-3 text-xs">
            Inscrições em Breve
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-cream backdrop-blur-md transition-all duration-300 hover:border-trail-gold/30 hover:text-trail-gold lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={2.4} aria-hidden="true" />
          ) : (
            <Menu size={22} strokeWidth={2.4} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              background: "rgba(5,13,7,0.96)",
              backdropFilter: "blur(18px)",
              borderTop: "1px solid rgba(248,247,242,0.07)",
              borderBottom: "1px solid rgba(248,247,242,0.09)",
            }}
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-6 pt-3 md:px-8"
              aria-label="Navegação mobile"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-transparent px-4 py-4 font-body text-base text-cream-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.045] hover:text-cream"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <Button
                variant="outline"
                href="#inscricao"
                className="mt-3 justify-center text-center text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Inscrições em Breve
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;