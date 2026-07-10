import { SlideShell } from '@/components/deck/SlideShell';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';
import styles from './breach-hunt.module.css';

type Space = { id: string; label: string; kind?: 'special' | 'finish' };

const SPACES: readonly Space[] = [
  { id: 'a', label: '1' },
  { id: 'b', label: '2' },
  { id: 'c', label: '3', kind: 'special' },
  { id: 'd', label: '4' },
  { id: 'e', label: '5' },
  { id: 'f', label: '✦', kind: 'finish' },
];

export default function Page() {
  const slide = slideByUrl('/breach-hunt')!;
  return (
    <SlideShell framing={slide.framing}>
      <div className={slideStyles.center}>
        <div className={slideStyles.stack}>
          <h1 className={`${slideStyles.title} ${styles.title}`}>
            FINAL MISSION: <span className={styles.shout}>BREACH HUNT!</span>
          </h1>
          <div className={styles.board} aria-hidden="true">
            <span className={styles.trail} />
            {SPACES.map((space) => (
              <span
                key={space.id}
                className={`${styles.space} ${space.kind ? styles[space.kind] : ''}`}
              >
                {space.label}
              </span>
            ))}
          </div>
          <p className={styles.caption}>agents: to your teams</p>
        </div>
      </div>
    </SlideShell>
  );
}
