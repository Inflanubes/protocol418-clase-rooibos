import { StubSlide } from '@/components/deck/StubSlide';
import { slideByUrl } from '@/lib/slides';

export default function Page() {
  const slide = slideByUrl('/stamp-2')!;
  return <StubSlide framing={slide.framing} title={slide.title} />;
}
