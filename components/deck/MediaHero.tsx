import Image from 'next/image';
import { SlideShell } from './SlideShell';
import slideStyles from './slide.module.css';
import styles from './MediaHero.module.css';

interface Props {
  framing?: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  caption: string;
  priority?: boolean;
  /** Drop the surface box behind the image (keeps size constraints).
   *  For transparent-RGBA art that should float directly on the dark
   *  slide (individual Breachlings). Opaque art with a baked background
   *  (breachlings-grupo) keeps the frame — there it reads as intentional. */
  frameless?: boolean;
}

/** Shared "huge image + title + caption" slide pattern — used by /agents,
 *  /cables, /cloud, /breachling-003. Almost no text, the visual carries
 *  the slide. */
export function MediaHero({
  framing,
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  caption,
  priority,
  frameless,
}: Props) {
  return (
    <SlideShell framing={framing}>
      <div className={styles.stack}>
        <h1 className={`${slideStyles.title} ${styles.title}`}>{title}</h1>
        <div className={frameless ? styles.frameless : styles.frame}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            className={styles.image}
          />
        </div>
        <p className={styles.caption}>{caption}</p>
      </div>
    </SlideShell>
  );
}
