import React from "react";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { officialContact } from "../data/eventData";

const BLUENIX_INSTAGRAM_URL = "https://www.instagram.com/bluenix.tech/";
const IRACAMBI_WHATSAPP_URL = `https://wa.me/${officialContact.whatsappNumber}`;

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/ong_iracambi/",
    label: "Instagram da Iracambi",
  },
  {
    Icon: Facebook,
    href: "https://facebook.com/iracambi",
    label: "Facebook da Iracambi",
  },
  {
    Icon: FaWhatsapp,
    href: IRACAMBI_WHATSAPP_URL,
    label: "WhatsApp oficial da Iracambi",
  },
];

const navLinks = [
  { label: "Sobre o Evento", href: "#sobre" },
  { label: "Impacto Ambiental", href: "#impacto" },
  { label: "Nossa História", href: "#historia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Informações", href: "#informacoes" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 12% 0%, rgba(46,204,113,0.1), transparent 28rem), linear-gradient(180deg, #050d07 0%, #040a04 100%)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />

      {/* Main footer */}
      <div className="section-container relative z-10 px-4 py-16 md:px-8 md:py-20 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr]">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <img
                  src="/images/logo-iracambi.png"
                  alt="Logo da Iracambi"
                  className="h-11 w-11 object-contain"
                  style={{ filter: "brightness(0.9)" }}
                  loading="lazy"
                />
              </div>

              <div>
                <span className="block font-display text-2xl font-semibold leading-none text-cream">
                  Iracambi
                </span>

                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.25em] text-trail-gold">
                  Trail Run
                </span>
              </div>
            </div>

            <p className="mb-7 max-w-md font-body text-sm leading-relaxed text-cream-muted">
              Evento esportivo em meio à Mata Atlântica, com Trail Run 12km,
              caminhada ecológica 3km, corrida infantil e impacto ambiental em
              Rosário da Limeira, MG.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.045] text-cream-muted transition-all duration-300 hover:-translate-y-1 hover:border-trail-gold/45 hover:bg-trail-gold/10 hover:text-trail-gold"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-trail-gold">
              Navegação
            </p>

            <nav
              className="grid grid-cols-1 gap-3"
              aria-label="Navegação do rodapé"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-cream-muted transition-colors duration-200 hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-trail-gold">
              Contato
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${officialContact.email}`}
                className="group flex items-center gap-3 text-cream-muted transition-colors hover:text-cream"
                aria-label="Enviar e-mail para contato da Iracambi"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                  <Mail size={14} strokeWidth={2.4} aria-hidden="true" />
                </span>

                <span className="font-body text-sm">
                  {officialContact.email}
                </span>
              </a>

              <a
                href={IRACAMBI_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-cream-muted transition-colors hover:text-cream"
                aria-label="Abrir WhatsApp oficial da Iracambi"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                  <FaWhatsapp size={15} aria-hidden="true" />
                </span>

                <span className="font-body text-sm">WhatsApp oficial</span>
              </a>

              <div className="flex items-start gap-3 text-cream-muted">
                <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-trail-gold/20 bg-trail-gold/10 text-trail-gold">
                  <MapPin size={14} strokeWidth={2.4} aria-hidden="true" />
                </span>

                <span className="font-body text-sm leading-relaxed">
                  ONG Iracambi
                  <br />
                  Rosário da Limeira, MG
                  <br />
                  Brasil
                </span>
              </div>

              <a
                href="https://iracambi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-trail-gold/25 bg-trail-gold/10 px-4 py-2 font-body text-sm text-trail-gold transition-all duration-300 hover:-translate-y-0.5 hover:border-trail-gold hover:bg-trail-gold hover:text-forest-950"
                aria-label="Abrir site oficial da Iracambi"
              >
                iracambi.com
                <ExternalLink size={13} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 border-t px-4 py-6 md:px-8"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="section-container flex flex-col items-center justify-between gap-5 lg:flex-row">
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-cream-subtle lg:text-left">
            © {year} Iracambi Trail Run · ONG Iracambi · Todos os direitos
            reservados
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <p className="text-center font-mono text-[10px] uppercase tracking-widest text-cream-subtle">
              Design e desenvolvimento por{" "}
              <a
                href={BLUENIX_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-trail-gold transition-colors hover:text-cream"
                aria-label="Abrir Instagram da Bluenix"
              >
                Bluenix
              </a>{" "}
              em parceria com Luiz Henrique e Manoel Rodrigues
            </p>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
              <Sparkles
                size={13}
                className="text-forest-400"
                strokeWidth={2.4}
                aria-hidden="true"
              />

              <p className="font-mono text-[10px] uppercase tracking-widest text-cream-subtle">
                1 inscrição = 1 muda nativa
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
