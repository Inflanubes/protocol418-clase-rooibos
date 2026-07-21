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
          <span className={styles.tag}>⚓ rerouting…</span>
          <h1 className={`${slideStyles.title} ${styles.title}`}>ANOTHER CABLE…</h1>
          <div className={styles.reroute} aria-hidden="true">
            <span className={styles.cut} />
            <span className={styles.detour} />
          </div>
          <p className={styles.caption}>…so it goes the long way. Slower.</p>
        </div>
      </SlideShell>
    </div>
  );
}
