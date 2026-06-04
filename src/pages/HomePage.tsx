import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/hooks/use-reveal";
import CinematicHero from "@/components/hero/CinematicHero";
import RotatingWords from "@/components/RotatingWords";
import Chatbot from "@/components/Chatbot";
import "@/components/hero/hero.css";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import doctorImg from "@/assets/doctor.jpg";
import heroImg from "@/assets/hero-clinic.jpg";
import { Clock, ClipboardCheck, MessageSquare, Heart, Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/541170634377?text=" +
  encodeURIComponent("Hola, quiero consultar por un turno.");

function Topbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const experienciaSection = document.getElementById('experiencia');
      if (experienciaSection) {
        const rect = experienciaSection.getBoundingClientRect();
        // Show when the section is in view (top of section is at or below viewport top)
        setVisible(rect.top <= 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-primary border-b border-border/50 py-2"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-6 text-xs text-primary-foreground">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Lun - Vie: 9:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+54 11 7063-4377</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/nm.odontologia.integral/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52Zm-8.5 18.32c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Header() {
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const experienciaSection = document.getElementById('experiencia');
      if (experienciaSection) {
        const rect = experienciaSection.getBoundingClientRect();
        // Show when the section is in view (top of section is at or below viewport top)
        setVisible(rect.top <= 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to prevent overlay bugs
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClose = () => setIsMenuOpen(false);
    window.addEventListener("resize", handleClose, { passive: true });
    return () => {
      window.removeEventListener("resize", handleClose);
    };
  }, [isMenuOpen]);

  const links = [
    { href: "#nosotros", label: "Nosotros", id: "nosotros" },
    { href: "#tratamientos", label: "Tratamientos", id: "tratamientos" },
    { href: "#ubicacion", label: "Ubicación", id: "ubicacion" },
    { href: "#contacto", label: "Contacto", id: "contacto" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-8 z-40 glass border-b border-border/60 py-3"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <img src="/logo.jpg" alt="NM Odontología" className="h-9 w-auto rounded-full object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[15px] font-medium tracking-tight text-foreground">
              NM Odontología
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Recoleta · CABA
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 mx-auto">
          {links.slice(0, -1).map((l) => (
            <button
              key={l.id}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(l.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative text-sm text-foreground/75 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-foreground after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-elegant cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* WhatsApp CTA - Desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-green-500/20"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.8c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
          </svg>
          Reservar turno
        </a>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-green-500/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.8c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
            </svg>
            <span>Reservar turno</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-1.5 text-foreground hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-border/50 bg-white/95 backdrop-blur-md overflow-hidden mt-3"
          >
            <div className="flex flex-col gap-3 px-6 py-5">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = l.id;
                    setIsMenuOpen(false);
                    // Wait for Framer Motion exit animation (300ms) to settle before scrolling
                    setTimeout(() => {
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 350);
                  }}
                  className="text-left text-[15px] font-medium text-foreground/80 hover:text-foreground py-2 border-b border-slate-100 last:border-0 transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 lg:pt-44 pb-20 lg:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
      <div className="absolute -z-10 -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute -z-10 top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" style={{ animation: "float 9s ease-in-out infinite" }} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:px-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Odontología integral · Recoleta
          </div>

          <h1 className="mt-7 font-display text-[44px] leading-[1.04] tracking-tight text-slate-900 sm:text-[58px] lg:text-[72px] text-balance">
            Planificamos tu tratamiento,
            <span className="block italic text-primary"> vos volvés a sonreír.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-slate-600">
            Una experiencia tranquila, cercana y cuidada en odontología integral.
            Diagnóstico claro, tiempos respetados y un equipo que te acompaña en cada paso.
          </p>

          <div className="mt-6">
            <RotatingWords />
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3 relative z-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
            >
              Reservar turno
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("tratamientos");
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-7 py-3.5 text-sm font-medium text-slate-900 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-slate-300 cursor-pointer"
            >
              Ver tratamientos
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85z"/></svg>
                ))}
              </div>
              <span><span className="font-semibold text-slate-900">5,0</span> en Google</span>
            </div>
            <span className="hidden sm:block h-3 w-px bg-slate-200" />
            <span>+50 reseñas positivas</span>
            <span className="hidden sm:block h-3 w-px bg-slate-200" />
            <span>Atención cercana</span>
            <span className="hidden sm:block h-3 w-px bg-slate-200" />
            <span>Horarios extendidos</span>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[28px] shadow-elegant">
            <img
              src={heroImg}
              alt="Interior de la clínica NM Odontología en Recoleta"
              width={1080}
              height={1620}
              className="h-[560px] w-full object-cover lg:h-[640px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -left-4 bottom-8 lg:-left-12 lg:bottom-14 max-w-[260px] rounded-2xl glass shadow-elegant border border-white/60 p-5 animate-float">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-600">Atención humana</p>
                <p className="text-sm font-medium text-slate-900">Te explicamos cada paso</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-6 lg:-right-8 rounded-2xl glass shadow-elegant border border-white/60 px-5 py-4" style={{ animation: "float 7s ease-in-out infinite" }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Viamonte 1620</p>
            <p className="mt-0.5 text-sm font-medium text-foreground">Recoleta · CABA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      icon: Clock,
      title: "Atención paciente y sin apuros",
      description: "Cada paciente es único. Reservamos el tiempo necesario para que tu consulta sea relajada, sin la prisa de las clínicas tradicionales."
    },
    {
      icon: ClipboardCheck,
      title: "Tratamientos 100% planificados",
      description: "No dejamos nada al azar. Trazamos un plan a medida, paso a paso, asegurando previsibilidad en los resultados y en los tiempos."
    },
    {
      icon: MessageSquare,
      title: "Explicaciones claras y transparentes",
      description: "Te contamos exactamente qué vamos a hacer, por qué lo hacemos y cómo te va a beneficiar. Sin sorpresas, con total claridad."
    },
    {
      icon: Heart,
      title: "Un entorno de calma en Recoleta",
      description: "Diseñamos nuestro consultorio en Viamonte 1620 para que se sienta como un espacio cálido y seguro, lejos de la frialdad hospitalaria."
    }
  ];
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl mb-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-sky-400">LA EXPERIENCIA NM</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[56px] text-balance font-medium">
            Entendemos lo que sentís. Por eso cambiamos la forma de hacer odontología.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate-300">
            Sabemos que visitar al dentista suele generar ansiedad, miedo o traer el recuerdo de malas experiencias. Nuestra filosofía de trabajo pone tu tranquilidad en el centro. Nos tomamos el tiempo necesario para escucharte, diagnosticar con precisión y acompañarte en cada paso para que recuperes tu salud bucal con total confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal group bg-slate-800 border border-slate-700 rounded-2xl p-8 transition-all duration-500 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-[19px] font-medium tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  const stats = [
    { v: "5.0★", l: "Calificación Google" },
    { v: "+50", l: "Reseñas Positivas" },
    { v: "10+", l: "Años de Experiencia" },
    { v: "100%", l: "Atención Personalizada" },
  ];
  
  const [animatedStats, setAnimatedStats] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = [5.0, 50, 10, 100];
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        0: 5.0 * easeOutQuart,
        1: 50 * easeOutQuart,
        2: 10 * easeOutQuart,
        3: 100 * easeOutQuart,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section id="nosotros" className="pt-28 pb-16 bg-slate-50 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <span className="block text-xs tracking-[0.2em] text-slate-400 font-semibold mb-6">SOBRE NM ODONTOLOGÍA</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-950">
            Una clínica pensada como un lugar <span className="italic text-slate-500">donde quedarse</span>, no del que escapar.
          </h2>
        </div>

        <div className="reveal lg:grid lg:grid-cols-12 gap-12 mt-12 items-start">
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-slate-100 to-slate-200/60 flex items-center justify-center">
                <span className="text-slate-400 font-display italic text-3xl">NM</span>
              </div>
              <div className="absolute -bottom-8 -right-2 sm:-right-4 w-36 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-slate-200/80 to-slate-100 flex items-center justify-center">
                <span className="text-slate-400/80 font-display italic text-xl">Recoleta</span>
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <p className="text-xs font-medium text-slate-700">Viamonte 1620, Recoleta</p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10 mt-12 lg:mt-0">
            <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed">
              Nos especializamos en odontología integral y tratamientos planificados bajo la dirección del Dr. Nazareno Machado. Aquí, cada diagnóstico se respalda con tecnología de vanguardia como el Scanner Digital 3D, garantizando procesos claros, precisos y, sobre todo, humanos.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Entendemos que ir al dentista puede generar ansiedad. Por eso, derribamos el viejo paradigma de la atención apurada: nos tomamos el tiempo necesario para escuchar, explicar y acompañarte en cada etapa de tu salud bucal, desde la primera consulta hasta el alta definitiva.
            </p>
          </div>
        </div>

        <div className="reveal border-t border-slate-200 mt-20 pt-12" ref={sectionRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.l}>
                <p className="text-5xl md:text-6xl font-display text-slate-900 mb-2">
                  {i === 0 ? `${animatedStats[0].toFixed(1)}★` : i === 1 ? `+${Math.floor(animatedStats[1])}` : i === 2 ? `${Math.floor(animatedStats[2])}+` : `${Math.floor(animatedStats[3])}%`}
                </p>
                <p className="text-xs tracking-wider text-slate-500 font-medium uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tratamientos() {
  const tratamientos = [
    {
      title: "Odontología integral",
      description: "Diagnóstico completo y planificación personalizada para cuidar tu salud bucal de forma integral.",
      image: "/1.png"
    },
    {
      title: "Implantes dentales",
      description: "Recuperá funcionalidad y estética con tratamientos planificados y personalizados.",
      image: "/2.png"
    },
    {
      title: "Bruxismo y placas",
      description: "Protección dental y alivio muscular para mejorar tu descanso y bienestar.",
      image: "/3.png"
    },
    {
      title: "Estética y rehabilitación",
      description: "Soluciones pensadas para recuperar armonía, funcionalidad y confianza.",
      image: "/4.png"
    },
    {
      title: "Odontopediatría",
      description: "Atención paciente y cercana para que los más chicos vivan una experiencia positiva.",
      image: "/5.png"
    },
    {
      title: "Alineadores invisibles",
      description: "Ortodoncia moderna, cómoda y discreta, con seguimiento personalizado.",
      image: "/6.png"
    }
  ];

  return (
    <section id="tratamientos" className="py-24 lg:py-32 bg-slate-50 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.22em] tracking-widest text-slate-800">TRATAMIENTOS</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] text-balance">
              Cada tratamiento, <span className="italic text-slate-600">a tu medida.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-slate-600">
            Trabajamos con tecnología moderna —scanner digital 3D, alineadores invisibles— y un enfoque clínico minucioso.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tratamientos.map((tratamiento, i) => (
            <div
              key={tratamiento.title}
              className="reveal group relative overflow-hidden rounded-[2rem] min-h-[320px] md:min-h-[380px] flex flex-col justify-end p-6 md:p-8 cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={tratamiento.image}
                alt={tratamiento.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent z-10"></div>
              <div className="relative z-20 flex flex-col">
                <span className="text-sm font-semibold tracking-widest text-slate-300 mb-3">0{i + 1}</span>
                <h3 className="text-2xl md:text-3xl font-display text-white mb-3">{tratamiento.title}</h3>
                <p className="text-base text-slate-200 leading-relaxed">{tratamiento.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  const assistants = [
    { name: "Dra. Amara Pérez", role: "Odontóloga Integral" },
    { name: "Nombre Recepcionista", role: "Recepción y Atención" },
    { name: "Nombre Asistente", role: "Asistencia Odontológica" },
  ];
  
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal lg:grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="sticky top-32 h-fit">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-8 border border-slate-200/40">
                <span className="text-slate-400 font-display italic text-4xl mb-2">NM</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400/80">Espacio de Salud</span>
              </div>
              <div className="mt-6">
                <p className="text-xs tracking-widest text-slate-500 uppercase">DIRECTOR ODONTOLÓGICO</p>
                <h3 className="mt-2 font-display text-4xl md:text-5xl text-slate-950">Dr. Nazareno Machado</h3>
                <p className="mt-2 text-sm text-slate-400 tracking-wider">10+ Años de Experiencia</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12 pt-8">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-slate-950 leading-[1.1]">
                Un equipo dedicado a cuidarte.
              </h2>
              <p className="mt-6 text-xl md:text-2xl font-display text-slate-800 font-light leading-relaxed mb-6">
                Formado por profesionales con foco en trato humano, paciencia y explicación clara de cada paso del tratamiento.
              </p>
              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
                No somos una clínica odontológica tradicional. Nuestro equipo de odontólogos y asistentes se toma el tiempo para escucharte antes de tratarte. Nos adaptamos a tus tiempos, derribando el paradigma de la atención apurada para que te sientas cómodo, seguro y en calma.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200">
              {assistants.map((assistant, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="aspect-square rounded-[1.5rem] overflow-hidden shadow-md bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/40 flex items-center justify-center">
                    <span className="text-slate-400 font-display italic text-lg">{assistant.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-display text-lg text-slate-900">{assistant.name}</p>
                    <p className="text-sm text-slate-500">{assistant.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorQueElegirnos() {
  const reasons = [
    {
      number: "01",
      title: "Excelencia y Planificación",
      description: "El Dr. Nazareno Machado y su equipo diseñan cada tratamiento paso a paso. No hay sorpresas, solo resultados predecibles y duraderos."
    },
    {
      number: "02",
      title: "Experiencia Sin Dolor ni Ansiedad",
      description: "Sabemos que el sillón odontológico impone respeto. Adaptamos nuestros tiempos a los tuyos, explicando cada procedimiento para que te sientas seguro y en control."
    },
    {
      number: "03",
      title: "Respaldo de Nuestros Pacientes",
      description: "Nuestra mayor garantía son las sonrisas que devolvemos. Contamos con una calificación perfecta de 5.0 estrellas gracias a la confianza de quienes nos eligen todos los días."
    },
    {
      number: "04",
      title: "Comodidad en Pleno Recoleta",
      description: "Ubicados estratégicamente en Viamonte 1620, ofrecemos atención con horarios extendidos para adaptarnos a tu ritmo de vida y obligaciones."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="reveal sticky top-32 h-fit">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-slate-300" />
                <p className="text-[11px] uppercase tracking-[0.22em] tracking-widest text-slate-500">POR QUÉ ELEGIRNOS</p>
              </div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.08] tracking-tight text-slate-900 text-balance">
                Tu salud bucal en manos de expertos que te entienden.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                En NM Odontología no solo tratamos dientes; cuidamos personas. Nos enorgullece ser la clínica de confianza en Recoleta, donde la planificación médica y el trato humano se encuentran.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex flex-col gap-16">
              {reasons.map((reason, index) => (
                <div key={index} className="reveal border-t border-slate-200 pt-8" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex gap-6">
                    <span className="font-display text-6xl lg:text-7xl text-slate-300 leading-none">
                      {reason.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display text-slate-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900 to-slate-900" />
      
      <div className="reveal relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Da el primer paso hacia una sonrisa planificada y sin miedos.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300">
            Te acompañamos desde el primer contacto para entender tu caso y ofrecerte la mejor solución. Agendá tu consulta hoy mismo y descubrí una forma diferente de ir al dentista en el corazón de Recoleta.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-white font-medium transition-all hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-green-500/20 w-full sm:w-auto animate-pulse hover:animate-none"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.8c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
              </svg>
              Asesorate o turnos por WhatsApp
            </a>
            
            <a
              href="#contacto"
              className="flex items-center justify-center gap-3 rounded-xl border border-slate-600 px-8 py-4 text-slate-200 font-medium transition-all hover:bg-slate-800 hover:text-white w-full sm:w-auto"
            >
              Programá tu turno en línea
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "¿Atienden pacientes con miedo al dentista?", a: "Sí. Tomamos el tiempo necesario para explicar cada paso y trabajamos con un enfoque cercano para que la experiencia sea tranquila." },
    { q: "¿Realizan implantes dentales?", a: "Sí. Hacemos diagnóstico, planificación y colocación de implantes con seguimiento personalizado." },
    { q: "¿Atienden niños?", a: "Sí. Contamos con odontopediatría con un trato paciente y cercano." },
    { q: "¿Puedo consultar por WhatsApp?", a: "Sí, podés escribirnos al +54 11 7063-4377 y te respondemos a la brevedad." },
    { q: "¿Dónde están ubicados?", a: "Viamonte 1620 1D, entre Recoleta y San Nicolás, CABA. Muy bien conectado en transporte público." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="reveal text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Preguntas frecuentes</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-slate-900 sm:text-5xl text-balance">
            Lo que necesitás saber antes de venir.
          </h2>
        </div>

        <div className="reveal mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((it, i) => (
            <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-[16px] font-medium text-slate-900">{it.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-900 transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground group-open:border-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-slate-50 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Ubicación</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-slate-900 sm:text-5xl text-balance">
              En el corazón de Recoleta.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-600">
              Viamonte 1620 1D, Ciudad Autónoma de Buenos Aires. A pocos minutos del subte y
              con conexiones de colectivo en todas las direcciones.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-600">Dirección</dt>
                  <dd className="mt-1 text-[15px] text-slate-900">Viamonte 1620 1D, CABA</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1Z"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-600">Teléfono</dt>
                  <dd className="mt-1 text-[15px] text-slate-900">+54 11 7063-4377</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-600">Instagram</dt>
                  <dd className="mt-1 text-[15px] text-slate-900">
                    <a href="https://instagram.com/nm.odontologia.integral" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@nm.odontologia.integral</a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="reveal overflow-hidden rounded-[28px] border border-border shadow-elegant">
            <iframe
              title="Mapa NM Odontología"
              src="https://www.google.com/maps?q=Viamonte+1620,+CABA&output=embed"
              width="100%"
              height="520"
              style={{ border: 0, filter: "grayscale(0.4) contrast(0.95)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-slate-50 scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] tracking-tight text-slate-900 text-balance">
            Dejanos tu consulta o pedí tu turno.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
            Completá el formulario o escribinos directamente por WhatsApp. Te responderemos a la brevedad para coordinar tu visita.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="reveal">
            <form
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const msg =
                  `Hola, soy ${f.get("nombre") || ""}. ${f.get("motivo") ? `Motivo: ${f.get("motivo")}. ` : ""}${f.get("mensaje") || ""}`.trim();
                window.open(
                  `https://wa.me/541170634377?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
            >
              <label className="block">
                <span className="text-[13px] font-medium text-slate-700">Nombre y Apellido</span>
                <input required name="nombre" type="text" className="mt-2 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-all focus:border-slate-400 focus:ring-slate-400" placeholder="Tu nombre completo" />
              </label>
              <label className="mt-4 block">
                <span className="text-[13px] font-medium text-slate-700">Teléfono / WhatsApp</span>
                <input required name="telefono" type="tel" className="mt-2 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-all focus:border-slate-400 focus:ring-slate-400" placeholder="+54 11 ..." />
              </label>
              <label className="mt-4 block">
                <span className="text-[13px] font-medium text-slate-700">Email</span>
                <input name="email" type="email" required className="mt-2 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-all focus:border-slate-400 focus:ring-slate-400" placeholder="tu@email.com" />
              </label>
              <label className="mt-4 block">
                <span className="text-[13px] font-medium text-slate-700">Motivo de consulta</span>
                <select name="motivo" className="mt-2 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-800 px-4 py-3 text-sm outline-none transition-all focus:border-slate-400 focus:ring-slate-400">
                  <option value="">Seleccioná una opción</option>
                  <option value="Dolor">Dolor</option>
                  <option value="Control">Control</option>
                  <option value="Implantes">Implantes</option>
                  <option value="Estética">Estética</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>
              <label className="mt-4 block">
                <span className="text-[13px] font-medium text-slate-700">Mensaje</span>
                <textarea name="mensaje" rows={4} className="mt-2 w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 px-4 py-3 text-sm outline-none transition-all focus:border-slate-400 focus:ring-slate-400 resize-none" placeholder="Contanos más sobre tu consulta..." />
              </label>
              <button type="submit" className="mt-6 w-full rounded-xl bg-slate-700 hover:bg-slate-800 text-white py-3.5 text-sm font-medium transition-all duration-300">
                Enviar consulta
              </button>
            </form>
          </div>

          <div className="reveal">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <p className="text-[11px] uppercase tracking-[0.22em] tracking-widest text-slate-500">NUESTROS HORARIOS</p>
              <h3 className="mt-4 text-2xl font-display text-slate-900 mb-6">Atención con horarios extendidos.</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-700">Lunes a Viernes</span>
                  <span className="text-slate-900 font-medium">09:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <span className="text-slate-700">Sábados</span>
                  <span className="text-slate-900 font-medium">Consultar disponibilidad</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Domingos</span>
                  <span className="text-slate-900 font-medium">Cerrado</span>
                </div>
              </div>

              <div className="mt-8 bg-slate-100 rounded-2xl p-6">
                <p className="text-[15px] leading-relaxed text-slate-700">
                  Viamonte 1620, Piso 1D, Recoleta (CABA). Podés confirmar tu turno directamente por WhatsApp para una atención sin esperas.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-slate-600 transition-colors"
                >
                  Reservar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo.jpg" alt="NM Odontología" className="h-9 w-auto rounded-full object-contain" />
              <span className="text-[15px] font-medium tracking-tight text-slate-900">NM Odontología</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-slate-600 leading-relaxed">
              Clínica dental boutique en Recoleta. Odontología integral, planificada y cercana.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600">Navegación</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["nosotros", "Nosotros"],
                ["tratamientos", "Tratamientos"],
                ["ubicacion", "Ubicación"],
                ["contacto", "Contacto"],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600">Contacto</p>
            <ul className="mt-5 space-y-2.5 text-sm text-primary">
              <li>Viamonte 1620 1D, CABA</li>
              <li>+54 11 7063-4377</li>
              <li><a href="https://instagram.com/nm.odontologia.integral" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">@nm.odontologia.integral</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground max-w-2xl">
            La información presente en este sitio es de carácter general y no reemplaza la consulta odontológica profesional.
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NM Odontología</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar turno por WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-all duration-500 hover:scale-110 hover:bg-primary/90 animate-float"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52Zm-8.5 18.32c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Z"/></svg>
    </a>
  );
}

export default function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Topbar />
      <Header />
      <main>
        <CinematicHero />
        <Pillars />
        <Nosotros />
        <Tratamientos />
        <Equipo />
        <PorQueElegirnos />
        <CTA />
        <Faq />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
