'use client';

import { useCallback, useState } from 'react';
import { SlideShell } from '@/components/deck/SlideShell';
import { Typewriter } from '@/components/deck/Typewriter';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './predict.module.css';

const FILL_DELAY_MS = 1400;

export default function Page() {
  const slide = slideByUrl('/predict')!;
  const [filled, setFilled] = useState(false);

  // Estable entre renders para no re-disparar el efecto de Typewriter.
  const handleFilled = useCallback(() => setFilled(true), []);

  return (
    <SlideShell framing={slide.framing}>
      <div className={slideStyles.center}>
        <div className={slideStyles.stack}>
          <p className={`${slideStyles.title} ${styles.prompt}`}>
            <span>PEANUT BUTTER AND</span>
            <span className={styles.blank}>
              <Typewriter
                text="JELLY"
                startDelayMs={FILL_DELAY_MS}
                className={styles.filled}
                onComplete={handleFilled}
              />
            </span>
          </p>
          {filled ? <p className={styles.caption}>you just did what AI does</p> : null}
        </div>
      </div>
    </SlideShell>
  );
}
