import { SlideShell } from '@/components/deck/SlideShell';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './cover.module.css';

export default function Page() {
  const slide = slideByUrl('/')!;
  return (
    <SlideShell framing={slide.framing}>
      <div className={slideStyles.center}>
        <div className={styles.stage}>
          <p className={styles.wordmark}>
            &lt;4<span className={styles.pipe}>|</span>8&gt;
          </p>
          <h1 className={slideStyles.title}>ROOIBOS</h1>
          <p className={styles.subtitle}>JUNIOR 418 AGENTS</p>
          <p className={`${slideStyles.note} ${styles.bottomNote}`}>
            a class about the internet and AI
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
