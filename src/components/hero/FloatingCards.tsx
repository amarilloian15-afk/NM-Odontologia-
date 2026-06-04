import { motion } from 'framer-motion';

/* ── Card data ───────────────────────────────────────── */
interface CardData {
  label: string;
  detail?: string;
  icon: 'star' | 'badge' | 'scan' | 'tooth' | 'implant' | 'rehab' | 'heart' | 'plan' | 'eye' | 'pin';
  x: number;
  y: number;
}

/*
 * Card positions are laid out within a relative container
 * that occupies roughly the right 45% of the viewport.
 * Coordinates represent % from left/top of that container.
 * Cards are arranged in a staggered organic pattern.
 */
const CARDS: CardData[] = [
  // Top cluster
  { label: '5.0★', detail: 'Google Reviews', icon: 'star', x: 8, y: 6 },
  { label: '+50', detail: 'Reseñas positivas', icon: 'badge', x: 56, y: 2 },

  // Upper-mid row
  { label: 'Scanner Digital 3D', icon: 'scan', x: 2, y: 22 },
  { label: 'Ortodoncia', icon: 'tooth', x: 52, y: 20 },

  // Center cluster
  { label: 'Implantes', icon: 'implant', x: 30, y: 38 },
  { label: 'Rehabilitación', icon: 'rehab', x: 60, y: 40 },

  // Lower-mid row
  { label: 'Atención cercana', icon: 'heart', x: 4, y: 54 },
  { label: 'Tratamientos planificados', icon: 'plan', x: 42, y: 58 },

  // Bottom cluster
  { label: 'Explicaciones claras', icon: 'eye', x: 14, y: 72 },
  { label: 'Recoleta / San Nicolás', icon: 'pin', x: 50, y: 76 },
];

/* ── Icons ───────────────────────────────────────────── */
function CardIcon({ type }: { type: CardData['icon'] }) {
  const cls = 'h-[14px] w-[14px]';
  switch (type) {
    case 'star':
      return <svg viewBox="0 0 20 20" className={cls} fill="currentColor"><path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85z" /></svg>;
    case 'badge':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 15l-3.5 2 .9-4L6 9.7l4-.4L12 6l1.9 3.3 4 .4-3.4 3.3.9 4z" strokeLinejoin="round" /></svg>;
    case 'scan':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" strokeLinecap="round" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'tooth':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C9 2 7 4 7 7c0 2-1 4-2 6-.5 1.5 0 3 1.5 3.5.7.2 1.5 0 2-.5l1-1c.8-.8 2.2-.8 3 0l1 1c.5.5 1.3.7 2 .5C17 16 17.5 14.5 17 13c-1-2-2-4-2-6 0-3-2-5-3-5z" strokeLinejoin="round" /></svg>;
    case 'implant':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v4M8 9h8M9 12h6M10 15h4M11 18h2" strokeLinecap="round" /></svg>;
    case 'rehab':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case 'heart':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" strokeLinejoin="round" /></svg>;
    case 'plan':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" strokeLinecap="round" /></svg>;
    case 'eye':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'pin':
      return <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  }
}

/* ── Single floating card ────────────────────────────── */
function FloatingCard({ card, index, scrollProgress }: {
  card: CardData;
  index: number;
  scrollProgress: number;
}) {
  const floatDuration = 6 + (index % 4) * 1.8;
  const floatDelay = index * 0.35;
  const floatDistance = 5 + (index % 3) * 2.5;

  // Gentle scroll-driven parallax drift
  const driftY = scrollProgress * ((index % 2 === 0) ? -14 : 10);
  const driftX = scrollProgress * ((index % 3 === 0) ? 5 : -3);

  const isHighlight = card.icon === 'star' || card.icon === 'badge';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
      animate={{
        opacity: 1,
        y: driftY,
        x: driftX,
        scale: 1,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.9,
        delay: 0.4 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute"
      style={{
        left: `${card.x}%`,
        top: `${card.y}%`,
        zIndex: isHighlight ? 10 : 5,
      }}
    >
      <motion.div
        animate={{ y: [-floatDistance / 2, floatDistance / 2, -floatDistance / 2] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.04, y: -2 }}
        className={`
          rounded-xl border whitespace-nowrap
          backdrop-blur-lg backdrop-saturate-[1.6]
          transition-shadow duration-500 cursor-default select-none
          ${isHighlight
            ? 'bg-[#324D72] border-[#4a6d94]/40 text-white shadow-lg shadow-[#324D72]/12 px-4 py-2.5'
            : 'bg-white/80 border-[#e2e6ec] text-[#111827] shadow-md shadow-[#24364F]/5 px-3.5 py-2'
          }
        `}
        style={{ willChange: 'transform' }}
      >
        <div className="flex items-center gap-2">
          <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg ${
            isHighlight ? 'bg-white/15 text-white' : 'bg-[#324D72]/8 text-[#324D72]'
          }`}>
            <CardIcon type={card.icon} />
          </span>
          <div>
            <p className={`text-[12px] font-semibold leading-tight ${
              isHighlight ? 'text-white' : 'text-[#111827]'
            }`}>
              {card.label}
            </p>
            {card.detail && (
              <p className={`text-[10px] leading-tight mt-px ${
                isHighlight ? 'text-white/60' : 'text-[#A8B3C2]'
              }`}>
                {card.detail}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Export ───────────────────────────────────────────── */
export default function FloatingCards({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="relative h-full w-full">
      {CARDS.map((card, i) => (
        <FloatingCard
          key={card.label}
          card={card}
          index={i}
          scrollProgress={scrollProgress}
        />
      ))}

      {/* Subtle decorative line connecting cards area */}
      <div
        className="absolute left-1/2 top-[10%] bottom-[10%] w-px opacity-[0.06]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #324D72 30%, #324D72 70%, transparent 100%)',
        }}
      />
    </div>
  );
}
