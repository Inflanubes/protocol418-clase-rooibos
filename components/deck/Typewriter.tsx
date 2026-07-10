'use client';

import { useEffect, useState } from 'react';

interface Props {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  loop?: boolean;
  loopPauseMs?: number;
  className?: string;
  onComplete?: () => void;
}

/** Ported from earl-grey's components/effects/Typewriter.tsx — same pattern,
 *  same caveat: no reduced-motion gate on purpose (presenter's Chrome
 *  misreports it). Used by /predict to fill in "JELLY" on advance. */
export function Typewriter({
  text,
  speedMs = 40,
  startDelayMs = 0,
  loop = false,
  loopPauseMs = 2000,
  className,
  onComplete,
}: Props) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const run = (delay: number) => {
      let i = 0;
      setShown('');

      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          timeoutId = setTimeout(tick, speedMs);
        } else {
          onComplete?.();
          if (loop) timeoutId = setTimeout(() => run(0), loopPauseMs);
        }
      };

      timeoutId = setTimeout(tick, delay);
    };

    run(startDelayMs);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speedMs, startDelayMs, loop, loopPauseMs, onComplete]);

  return <span className={className}>{shown}</span>;
}
