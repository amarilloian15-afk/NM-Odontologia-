import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero-clinic.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import doctorImg from "@/assets/doctor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NM Odontología — Clínica dental boutique en Recoleta, CABA" },
      {
        name: "description",
        content:
          "Clínica dental premium en Recoleta, CABA. Odontología integral, implantes, estética y ortodoncia con atención cercana y planificación personalizada.",
      },
      { property: "og:title", content: "NM Odontología — Clínica dental en Recoleta" },
      {
        property: "og:description",
        content:
          "Una experiencia tranquila, cercana y cuidada en odontología integral. Recoleta, CABA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/541170634377?text=" +
  encodeURIComponent("Hola, quiero consultar por un turno.");

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#tratamientos", label: "Tratamientos" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none">
            nm
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[15px] font-medium tracking-tight text-foreground">
              NM Odontología
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Recoleta · CABA
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/75 transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:origin-right after:bg-foreground after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-medium text-background transition-all duration-300 hover:bg-primary hover:shadow-elegant"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.8c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
          </svg>
          <span>Reservar turno</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
      <div className="absolute -z-10 -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute -z-10 top-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" style={{ animation: "float 9s ease-in-out infinite" }} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:px-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Odontología integral · Recoleta
          </div>

          <h1 className="mt-7 font-display text-[44px] leading-[1.04] tracking-tight text-foreground sm:text-[58px] lg:text-[72px] text-balance">
            Planificamos tu tratamiento,
            <span className="block italic text-primary"> vos volvés a sonreír.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Una experiencia tranquila, cercana y cuidada en odontología integral.
            Diagnóstico claro, tiempos respetados y un equipo que te acompaña en cada paso.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              Reservar turno
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#tratamientos"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card hover:border-foreground/30"
            >
              Ver tratamientos
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85z"/></svg>
                ))}
              </div>
              <span><span className="font-semibold text-foreground">5,0</span> en Google</span>
            </div>
            <span className="hidden sm:block h-3 w-px bg-border" />
            <span>+50 reseñas positivas</span>
            <span className="hidden sm:block h-3 w-px bg-border" />
            <span>Atención cercana</span>
            <span className="hidden sm:block h-3 w-px bg-border" />
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
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Atención humana</p>
                <p className="text-sm font-medium text-foreground">Te explicamos cada paso</p>
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
    { t: "Atención cercana", d: "Tiempo, escucha y respuestas claras desde la primera consulta." },
    { t: "Tratamientos planificados", d: "Diagnóstico completo y un plan a medida antes de comenzar." },
    { t: "Explicación paso a paso", d: "Sabés qué vamos a hacer, por qué, y cuánto va a llevar." },
    { t: "Ambiente cómodo", d: "Una clínica boutique pensada para que te sientas en calma." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary">La experiencia</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[56px] text-balance">
            No solo cuidamos tu sonrisa. <br className="hidden sm:block" />
            <span className="italic text-muted-foreground">También cómo te sentís.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
            Sabemos que muchas personas sienten miedo o ansiedad al ir al dentista. Por eso
            nuestra prioridad es la tranquilidad: tiempo, claridad y acompañamiento en cada visita.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-display text-lg">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-[17px] font-medium tracking-tight text-foreground">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  const stats = [
    { v: "5,0★", l: "Google" },
    { v: "+50", l: "Reseñas" },
    { v: "10+", l: "Años de experiencia" },
    { v: "100%", l: "Atención personalizada" },
  ];
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={gallery1} alt="Recepción de la clínica" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" />
              <img src={gallery4} alt="Sala de espera" width={1024} height={1280} loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-soft" />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-foreground text-background px-6 py-5 shadow-elegant max-w-[240px]">
              <p className="font-display text-2xl leading-none">Boutique</p>
              <p className="mt-1 text-xs text-background/70">Clínica dental en el corazón de Recoleta</p>
            </div>
          </div>

          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Sobre la clínica</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
              Una clínica pensada como un lugar donde quedarse, no del que escapar.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              Estamos en <strong className="font-medium text-foreground">Viamonte 1620</strong>,
              entre Recoleta y San Nicolás. Nos especializamos en odontología integral y
              tratamientos planificados, con foco en una atención humana, clara y cercana.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              Cada paciente tiene un plan a medida y un equipo que lo acompaña: desde
              el diagnóstico hasta el último control.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-card px-5 py-6">
                  <p className="font-display text-3xl text-foreground">{s.v}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tratamientos() {
  const items = [
    { t: "Odontología integral", d: "Diagnóstico completo y planificación personalizada para cuidar tu salud bucal de forma integral." },
    { t: "Implantes dentales", d: "Recuperá funcionalidad y estética con tratamientos planificados y personalizados." },
    { t: "Bruxismo y placas", d: "Protección dental y alivio muscular para mejorar tu descanso y bienestar." },
    { t: "Estética y rehabilitación", d: "Soluciones pensadas para recuperar armonía, funcionalidad y confianza." },
    { t: "Odontopediatría", d: "Atención paciente y cercana para que los más chicos vivan una experiencia positiva." },
    { t: "Alineadores invisibles", d: "Ortodoncia moderna, cómoda y discreta, con seguimiento personalizado." },
  ];
  return (
    <section id="tratamientos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Tratamientos</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[56px] text-balance">
              Cada tratamiento, <span className="italic text-muted-foreground">a tu medida.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-muted-foreground">
            Trabajamos con tecnología moderna —scanner digital 3D, alineadores invisibles— y un enfoque clínico minucioso.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.t}
              className="reveal group relative bg-card p-8 lg:p-10 transition-colors duration-500 hover:bg-secondary/60"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground/40 transition-all duration-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="mt-12 font-display text-[28px] leading-tight tracking-tight text-foreground">{it.t}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-center">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-[28px] shadow-elegant">
              <img src={doctorImg} alt="Dr. Nazareno Machado, director odontológico" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 lg:-left-10 glass border border-white/60 rounded-2xl shadow-elegant px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Director</p>
              <p className="mt-0.5 font-display text-xl text-foreground">Dr. Nazareno Machado</p>
            </div>
          </div>

          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Equipo</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
              Profesionales que escuchan antes de tratar.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              "Planificamos cada tratamiento para que puedas recuperar funcionalidad,
              estética y confianza en un entorno cercano."
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Un equipo de odontólogos y asistentes enfocado en una atención humana,
              clara y cercana —desde la recepción hasta el alta del tratamiento.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <p className="font-display italic text-foreground text-lg">nm.</p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  const items = [
    { q: "Me sentí cómodo en todo momento. La atención fue impecable.", n: "Lucía R." },
    { q: "La atención maravillosa y el lugar muy lindo. Volvería sin dudarlo.", n: "Martín G." },
    { q: "Excelente atención desde la recepcionista hasta las doctoras.", n: "Carolina P." },
    { q: "Muy amorosas y bien predispuestas. Salí relajada.", n: "Sofía M." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85z"/></svg>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">5,0 en Google · pacientes reales</p>
          <h2 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance max-w-3xl">
            Lo que cuentan quienes ya pasaron por la clínica.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal group relative rounded-2xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <svg className="h-6 w-6 text-primary/60" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11H4a4 4 0 0 1 4-4V4a7 7 0 0 0-7 7v7h6v-7Zm13 0h-3a4 4 0 0 1 4-4V4a7 7 0 0 0-7 7v7h6v-7Z"/></svg>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t.n.split(" ").map((x) => x[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.n}</p>
                  <p className="text-[11px] text-muted-foreground">Paciente · Google</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary">El ambiente</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
            Un espacio diseñado para la calma.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4">
          <div className="reveal col-span-12 sm:col-span-7 overflow-hidden rounded-2xl">
            <img src={gallery2} alt="Box odontológico" width={1280} height={960} loading="lazy" className="h-[320px] sm:h-[420px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
          </div>
          <div className="reveal col-span-12 sm:col-span-5 overflow-hidden rounded-2xl">
            <img src={gallery1} alt="Recepción" width={1024} height={1280} loading="lazy" className="h-[320px] sm:h-[420px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
          </div>
          <div className="reveal col-span-6 sm:col-span-4 overflow-hidden rounded-2xl">
            <img src={gallery3} alt="Instrumental" width={1024} height={1024} loading="lazy" className="h-[260px] sm:h-[340px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
          </div>
          <div className="reveal col-span-6 sm:col-span-4 overflow-hidden rounded-2xl">
            <img src={gallery4} alt="Sala de espera" width={1024} height={1280} loading="lazy" className="h-[260px] sm:h-[340px] w-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
          </div>
          <div className="reveal col-span-12 sm:col-span-4 overflow-hidden rounded-2xl bg-foreground text-background p-8 flex flex-col justify-between">
            <p className="text-[11px] uppercase tracking-[0.22em] text-background/60">Detalles</p>
            <p className="font-display text-2xl leading-tight">
              Iluminación cálida, materiales nobles y silencio. Todo pensado para que respires.
            </p>
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
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
            Lo que necesitás saber antes de venir.
          </h2>
        </div>

        <div className="reveal mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((it, i) => (
            <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-[16px] font-medium text-foreground">{it.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground group-open:border-primary">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">Ubicación</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl text-balance">
              En el corazón de Recoleta.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              Viamonte 1620 1D, Ciudad Autónoma de Buenos Aires. A pocos minutos del subte y
              con conexiones de colectivo en todas las direcciones.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Dirección</dt>
                  <dd className="mt-1 text-[15px] text-foreground">Viamonte 1620 1D, CABA</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 2 4.11 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7 10.5a16 16 0 0 0 6.5 6.5l1.75-1.82a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .75 1Z"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Teléfono</dt>
                  <dd className="mt-1 text-[15px] text-foreground">+54 11 7063-4377</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Instagram</dt>
                  <dd className="mt-1 text-[15px] text-foreground">
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
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-slate)" }} />
      <div className="absolute -z-10 -top-32 right-1/3 h-[460px] w-[460px] rounded-full bg-white/5 blur-3xl animate-float" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="reveal text-background">
          <p className="text-[11px] uppercase tracking-[0.22em] text-background/60">Reservá tu turno</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-[58px] text-balance">
            Tu próxima experiencia odontológica puede ser <span className="italic">distinta.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-background/75">
            Escribinos y te acompañamos para que vuelvas a sonreír con tranquilidad y confianza.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant"
            >
              Reservar por WhatsApp
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="tel:+541170634377" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background/10">
              Llamar
            </a>
          </div>
        </div>

        <form
          className="reveal glass-dark rounded-3xl border border-white/10 p-7 lg:p-9 shadow-elegant"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "nombre", l: "Nombre", t: "text" },
              { n: "telefono", l: "Teléfono", t: "tel" },
            ].map((f) => (
              <label key={f.n} className="block">
                <span className="text-[11px] uppercase tracking-[0.18em] text-background/60">{f.l}</span>
                <input required name={f.n} type={f.t} className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 text-background placeholder:text-background/40 px-4 py-3 text-sm outline-none transition-all focus:bg-white/10 focus:border-white/40" />
              </label>
            ))}
          </div>
          <label className="mt-4 block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-background/60">Email</span>
            <input name="email" type="email" required className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 text-background placeholder:text-background/40 px-4 py-3 text-sm outline-none transition-all focus:bg-white/10 focus:border-white/40" />
          </label>
          <label className="mt-4 block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-background/60">Motivo de consulta</span>
            <input name="motivo" type="text" placeholder="Implantes, ortodoncia, control..." className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 text-background placeholder:text-background/40 px-4 py-3 text-sm outline-none transition-all focus:bg-white/10 focus:border-white/40" />
          </label>
          <label className="mt-4 block">
            <span className="text-[11px] uppercase tracking-[0.18em] text-background/60">Mensaje</span>
            <textarea name="mensaje" rows={4} className="mt-2 w-full rounded-xl bg-white/5 border border-white/15 text-background placeholder:text-background/40 px-4 py-3 text-sm outline-none transition-all focus:bg-white/10 focus:border-white/40 resize-none" />
          </label>
          <button type="submit" className="mt-6 w-full rounded-full bg-background text-foreground py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant">
            Enviar consulta
          </button>
        </form>
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
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">nm</span>
              <span className="text-[15px] font-medium tracking-tight text-foreground">NM Odontología</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Clínica dental boutique en Recoleta. Odontología integral, planificada y cercana.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Navegación</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["#nosotros", "Nosotros"],
                ["#tratamientos", "Tratamientos"],
                ["#ubicacion", "Ubicación"],
                ["#contacto", "Contacto"],
              ].map(([h, l]) => (
                <li key={h}><a href={h} className="text-foreground/75 hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Contacto</p>
            <ul className="mt-5 space-y-2.5 text-sm text-foreground/75">
              <li>Viamonte 1620 1D, CABA</li>
              <li>+54 11 7063-4377</li>
              <li><a href="https://instagram.com/nm.odontologia.integral" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@nm.odontologia.integral</a></li>
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
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-foreground text-background shadow-elegant transition-all duration-500 hover:scale-110 hover:bg-primary animate-float"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52Zm-8.5 18.32c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Z"/></svg>
    </a>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Nosotros />
        <Tratamientos />
        <Equipo />
        <Testimonios />
        <Galeria />
        <Faq />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
