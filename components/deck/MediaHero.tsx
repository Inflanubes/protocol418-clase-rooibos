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
}

/** Shared "huge image + title + caption" slide pattern — used by /agents,
 *  /cables, /cloud. Almost no text, the visual carries the slide. */
export function MediaHero({
  framing,
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  caption,
  priority,
}: Props) {
  return (
    <SlideShell framing={framing}>
      <div className={styles.stack}>
        <h1 className={`${slideStyles.title} ${styles.title}`}>{title}</h1>
        <div className={styles.frame}>
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
