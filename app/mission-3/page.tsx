import { SlideShell } from '@/components/deck/SlideShell';
import { ActoLabel } from '@/components/deck/ActoLabel';
import { Staged } from '@/components/deck/Staged';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './mission-3.module.css';

export default function Page() {
  const slide = slideByUrl('/mission-3')!;
  return (
    <SlideShell>
      <div className={slideStyles.center}>
        <div className={slideStyles.stack}>
          <ActoLabel>{slide.framing}</ActoLabel>
          <h1 className={slideStyles.title}>Feed it well</h1>
          <div className={styles.lines}>
            <Staged step={0}>
              <p className={styles.line}>ask well</p>
            </Staged>
            <Staged step={1}>
              <p className={styles.line}>check facts</p>
            </Staged>
            <Staged step={2}>
              <p className={styles.line}>the internet has lies</p>
            </Staged>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
