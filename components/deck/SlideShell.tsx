import type { ReactNode } from 'react';
import styles from './SlideShell.module.css';

interface Props {
  framing?: string;
  children: ReactNode;
}

export function SlideShell({ framing, children }: Props) {
  return (
    <main className={styles.shell}>
      {framing ? <p className={styles.framing}>{framing}</p> : null}
      {/* data-scrollable marks this as a *candidate* for wheel-scroll; DeckNav's wheel
          handler decides whether to cede the wheel event based on real overflow
          (scrollHeight > clientHeight), not just this attribute's presence. */}
      <div className={styles.body} data-scrollable="true">{children}</div>
    </main>
  );
}
