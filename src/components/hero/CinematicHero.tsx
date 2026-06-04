import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import FloatingCards from './FloatingCards';

/* ── Typography scenes ───────────────────────────────── */
const SCENES = [
  { line1: 'PLANIFICAMOS', line2: 'TU SONRISA' },
  { line1: 'ODONTOLOGÍA', line2: 'INTEGRAL' },
  { line1: 'MENOS', line2: 'ANSIEDAD' },
  { line1: 'TECNOLOGÍA', line2: 'Y CERCANÍA' },
];

/* ── Determine active scene from scroll progress ─────── */
function getActiveScene(progress: number) {
  const sceneCount = SCENES.length;
  const zone = Math.min(Math.floor(progress * sceneCount), sceneCount - 1);
  const localProgress = progress * sceneCount - zone;
  return { index: zone, localProgress: Math.max(0, Math.min(1, localProgress)) };
}

/* ── Scene typography component ──────────────────────── */
function SceneText({ scene, sceneIndex }: { scene: typeof SCENES[number]; sceneIndex: number }) {
  return (
    <motion.div
      key={sceneIndex}
      initial={{ opacity: 0, y: 60, filter: 'blur(16px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <motion.p
        className="hero-line1"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {scene.line1}
      </motion.p>
      <motion.p
        className="hero-line2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {scene.line2}
      </motion.p>
    </motion.div>
  );
}

/* ── Background depth elements ───────────────────────── */
function DepthBackground({ progress }: { progress: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Large ambient orbs */}
      <div
        className="absolute -top-[200px] -left-[200px] w-[700px] h-[700px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(50,77,114,0.06) 0%, transparent 65%)',
          transform: `translate(${progress * 50}px, ${progress * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute -bottom-[150px] -right-[200px] w-[600px] h-[600px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(168,179,194,0.08) 0%, transparent 65%)',
          transform: `translate(${-progress * 40}px, ${-progress * 25}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(50,77,114,0.04) 0%, transparent 70%)',
          transform: `scale(${1 + progress * 0.3})`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(50,77,114,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50,77,114,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translateY(${progress * -15}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
    </div>
  );
}

/* ── Scroll indicator ────────────────────────────────── */
function ScrollIndicator({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: visible ? 0.8 : 0, y: visible ? 0 : 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A8B3C2] font-semibold">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-[18px] h-7 rounded-full border-[1.5px] border-[#A8B3C2]/30 flex items-start justify-center pt-1.5"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[3px] h-[5px] rounded-full bg-[#324D72]/60"
        />
      </motion.div>
    </motion.div>
  );
}

/* ── Progress indicator ──────────────────────────────── */
function ProgressDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="hidden lg:flex absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-20">
      {SCENES.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            width: i === activeIndex ? 3 : 3,
            height: i === activeIndex ? 20 : 8,
            backgroundColor: i === activeIndex ? '#324D72' : '#A8B3C2',
            opacity: i === activeIndex ? 1 : 0.35,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full"
        />
      ))}
    </div>
  );
}

/* ── Brand badge ─────────────────────────────────────── */
function BrandBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 rounded-full border border-[#324D72]/12 bg-white/50 backdrop-blur-md px-3.5 py-1.5 shadow-sm"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#324D72] text-white font-serif text-[10px] leading-none font-normal italic">
        nm
      </span>
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#324D72]/80 font-semibold">
        NM Odontología
      </span>
    </motion.div>
  );
}

/* ── Subtitle bar ────────────────────────────────────── */
function SubtitleBar({ progress }: { progress: number }) {
  const messages = [
    'Odontología integral · Recoleta, CABA',
    'Diagnóstico claro y planificación a medida',
    'Acompañamiento en cada paso del tratamiento',
    'Tecnología moderna con atención humana',
  ];
  const idx = Math.min(Math.floor(progress * messages.length), messages.length - 1);

  return (
    <div className="mt-6 overflow-hidden h-5">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#A8B3C2] font-medium"
        >
          {messages[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ── CTA area ────────────────────────────────────────── */
function HeroCTA() {
  const WHATSAPP_URL =
    'https://wa.me/541170634377?text=' +
    encodeURIComponent('Hola, quiero consultar por un turno.');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-[#324D72] px-5 py-2.5 sm:px-6 sm:py-3 text-[12px] sm:text-[13px] font-semibold text-white transition-all duration-400 hover:bg-[#24364F] hover:shadow-lg hover:shadow-[#324D72]/20 hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.96 11.96 0 0 0 12.02 24c6.62 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.8c-1.86 0-3.68-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.78 9.78 0 0 1 2.22 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.4-4.4 9.8-9.8 9.8Zm5.62-7.34c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.16.21 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z" />
        </svg>
        <span>Reservar turno</span>
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <button
        onClick={() => {
          const el = document.getElementById('tratamientos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 rounded-full border border-[#324D72]/15 bg-white/40 backdrop-blur-sm px-4.5 py-2.5 sm:px-5 sm:py-3 text-[12px] sm:text-[13px] font-medium text-[#24364F] transition-all duration-300 hover:bg-white/70 hover:border-[#324D72]/30 cursor-pointer"
      >
        Ver tratamientos
      </button>
    </motion.div>
  );
}

/* ── Mobile floating cards (simplified) ──────────────── */
function MobileCards({ scrollProgress }: { scrollProgress: number }) {
  const highlights = [
    { label: '5.0★ Google', icon: '⭐' },
    { label: 'Scanner 3D', icon: '📱' },
    { label: 'Implantes', icon: '🦷' },
    { label: 'Ortodoncia', icon: '✨' },
    { label: '+50 Reseñas', icon: '💬' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:hidden mt-6 sm:mt-8 flex flex-wrap gap-1.5"
    >
      {highlights.map((h, i) => (
        <motion.span
          key={h.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
          className="inline-flex items-center gap-1 rounded-lg bg-white/60 backdrop-blur-sm border border-white/50 px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-[11px] font-medium text-[#24364F] shadow-sm"
        >
          <span className="text-[10px]">{h.icon}</span>
          {h.label}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN: CinematicHero
   ═══════════════════════════════════════════════════════ */
export default function CinematicHero() {
  const { ref, progress } = useScrollProgress(200);
  const { index: activeScene } = useMemo(() => getActiveScene(progress), [progress]);

  return (
    <section
      ref={ref}
      id="top"
      className="cinematic-hero relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-[#F6F7F8]">
        <DepthBackground progress={progress} />

        {/* Main content grid */}
        <div className="relative h-full mx-auto max-w-[1440px] px-6 lg:px-14 xl:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center">
          {/* ── LEFT: Editorial typography ───── */}
          <div className="relative z-10 pt-16 sm:pt-20 lg:pt-0">
            <BrandBadge />

            {/* Scene text container */}
            <div className="relative h-[120px] sm:h-[160px] lg:h-[260px] mt-4 sm:mt-6">
              <AnimatePresence mode="wait">
                <SceneText
                  key={activeScene}
                  scene={SCENES[activeScene]}
                  sceneIndex={activeScene}
                />
              </AnimatePresence>
            </div>

            <SubtitleBar progress={progress} />
            <HeroCTA />
            <MobileCards scrollProgress={progress} />
          </div>

          {/* ── RIGHT: Floating cards ────────── */}
          <div className="hidden lg:block relative h-[80vh] max-h-[700px]">
            <FloatingCards scrollProgress={progress} />
          </div>
        </div>

        {/* Progress dots */}
        <ProgressDots activeIndex={activeScene} />

        {/* Scroll indicator */}
        <ScrollIndicator visible={progress < 0.06} />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#F6F7F8] to-transparent pointer-events-none z-10" />

        {/* Top subtle line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#324D72]/10 to-transparent" />
      </div>
    </section>
  );
}
