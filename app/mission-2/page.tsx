import { SlideShell } from '@/components/deck/SlideShell';
import { ActoLabel } from '@/components/deck/ActoLabel';
import { slideByUrl } from '@/lib/slides';
import slideStyles from '@/components/deck/slide.module.css';

export default function Page() {
  const slide = slideByUrl('/mission-2')!;
  return (
    <SlideShell>
      <div className={slideStyles.center}>
        <div className={slideStyles.stack}>
          <ActoLabel>{slide.framing}</ActoLabel>
          <h1 className={slideStyles.title}>The robot that guesses</h1>
        </div>
      </div>
    </SlideShell>
  );
}
