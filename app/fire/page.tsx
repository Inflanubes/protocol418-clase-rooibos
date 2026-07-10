import { SlideShell } from '@/components/deck/SlideShell';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './fire.module.css';

export default function Page() {
  const slide = slideByUrl('/fire')!;
  return (
    <div className={styles.dark}>
      <SlideShell framing={slide.framing}>
        <div className={styles.stack}>
          <h1 className={`${slideStyles.title} ${styles.title}`}>SERVER ON FIRE!</h1>
          <div className={styles.flame} aria-hidden="true">
            <span className={`${styles.tongue} ${styles.tongue1}`} />
            <span className={`${styles.tongue} ${styles.tongue2}`} />
            <span className={`${styles.tongue} ${styles.tongue3}`} />
          </div>
          <p className={styles.caption}>that&apos;s why the game stops</p>
        </div>
      </SlideShell>
    </div>
  );
}
