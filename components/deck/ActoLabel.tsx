import type { ReactNode } from 'react';
import styles from './ActoLabel.module.css';

export function ActoLabel({ children }: { children: ReactNode }) {
  return <p className={styles.label}>{children}</p>;
}
