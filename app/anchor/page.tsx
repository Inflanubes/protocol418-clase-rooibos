import { SlideShell } from '@/components/deck/SlideShell';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './anchor.module.css';

export default function Page() {
  const slide = slideByUrl('/anchor')!;
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <SlideShell framing={slide.framing}>
        <div className={styles.stack}>
          <h1 className={`${slideStyles.title} ${styles.title}`}>CABLE BROKEN…</h1>
          <div className={styles.anchor} aria-hidden="true">
            <svg viewBox="0 0 100 124" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="anchorGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFD27A" />
                  <stop offset="55%" stopColor="#FF8A3D" />
                  <stop offset="100%" stopColor="#EA5A1F" />
                </linearGradient>
              </defs>
              <g
                fill="none"
                stroke="url(#anchorGrad)"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* ring / shackle */}
                <circle cx="50" cy="12" r="8" strokeWidth="5.5" />
                {/* shank */}
                <line x1="50" y1="20" x2="50" y2="99" strokeWidth="9" />
                {/* stock (crossbar) */}
                <line x1="29" y1="32" x2="71" y2="32" strokeWidth="8" />
                {/* arms / crown */}
                <path d="M17 78 Q17 101 50 101 Q83 101 83 78" strokeWidth="9" />
              </g>
              <g fill="url(#anchorGrad)">
                {/* flukes (barbs) + crown point */}
                <path d="M17 82 L4 63 L28 71 Z" />
                <path d="M83 82 L96 63 L72 71 Z" />
                <path d="M44 99 L50 114 L56 99 Z" />
              </g>
            </svg>
          </div>
          <p className={styles.caption}>
            <span className={styles.code}>⚓ /rerouting…</span> so it goes the long way. Slower.
          </p>
        </div>
      </SlideShell>
    </div>
  );
}
