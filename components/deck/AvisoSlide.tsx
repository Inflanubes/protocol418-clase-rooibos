import Image from 'next/image';
import { SlideShell } from './SlideShell';
import styles from './AvisoSlide.module.css';

interface Props {
  /** Breach number as it appears on the aviso card, e.g. "001". */
  breach: string;
  imageSrc: string;
  imageAlt: string;
}

/** Brand "aviso" warning-card slide — shown right before each Breachling
 *  reveal, styled like the web's /breach console reveal: a mono orange
 *  detection tag above the portrait card, nothing else (the card IS the
 *  content). The Spanish on the aviso artwork is a deliberate brand
 *  exception (Sonia narrates these slides live). */
export function AvisoSlide({ breach, imageSrc, imageAlt }: Props) {
  return (
    <SlideShell>
      <div className={styles.stack}>
        <p className={styles.tag}>⚠ BREACH {breach} — DETECTED</p>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={1536}
          priority
          className={styles.card}
        />
      </div>
    </SlideShell>
  );
}
