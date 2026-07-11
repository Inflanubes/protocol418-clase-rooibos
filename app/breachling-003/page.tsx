import { MediaHero } from '@/components/deck/MediaHero';
import { slideByUrl } from '@/lib/slides';

export default function Page() {
  const slide = slideByUrl('/breachling-003')!;
  return (
    <MediaHero
      framing={slide.framing}
      title="PREDICTING ≠ THINKING"
      imageSrc="/breach-003-pensar.png"
      imageAlt="Breachling 003, predicting"
      imageWidth={1536}
      imageHeight={1024}
      caption="it guesses the next word"
      frameless
    />
  );
}
