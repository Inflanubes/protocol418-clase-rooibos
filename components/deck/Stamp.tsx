import styles from './Stamp.module.css';

interface Props {
  mission: number;
}

/** Reusable "mission complete" stamp graphic — CSS only, no images.
 *  Used by /stamp-1, /stamp-2, /stamp-3. */
export function Stamp({ mission }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.badge}>
        <span className={styles.ring} />
        <span className={styles.star}>✦</span>
      </div>
      <p className={styles.label}>MISSION {mission} COMPLETE</p>
      <p className={styles.time}>STAMP TIME</p>
    </div>
  );
}
