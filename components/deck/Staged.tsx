import type { CSSProperties, ReactNode } from 'react';
import styles from './Staged.module.css';

interface StagedStyle extends CSSProperties {
  '--step'?: number;
}

interface Props {
  step: number;
  children: ReactNode;
}

export function Staged({ step, children }: Props) {
  const style: StagedStyle = { '--step': step };
  return (
    <div className={styles.staged} style={style}>
      {children}
    </div>
  );
}
