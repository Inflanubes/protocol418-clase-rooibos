import { SlideShell } from '@/components/deck/SlideShell';
import { Stamp } from '@/components/deck/Stamp';
import slideStyles from '@/components/deck/slide.module.css';

export default function Page() {
  return (
    <SlideShell>
      <div className={slideStyles.center}>
        <Stamp mission={3} />
      </div>
    </SlideShell>
  );
}
