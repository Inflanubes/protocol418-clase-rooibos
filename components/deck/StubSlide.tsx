import { SlideShell } from './SlideShell';
import slideStyles from './slide.module.css';
import styles from './StubSlide.module.css';

interface Props {
  framing?: string;
  title: string;
}

/** Placeholder for routes 8–14. Content lands in a later task; this keeps the
 *  route declared, navigable, and building. */
export function StubSlide({ framing, title }: Props) {
  return (
    <SlideShell framing={framing}>
      <div className={slideStyles.center}>
        <div className={slideStyles.stack}>
          <h1 className={slideStyles.title}>{title}</h1>
          <p className={styles.soon}>coming soon</p>
        </div>
      </div>
    </SlideShell>
  );
}
