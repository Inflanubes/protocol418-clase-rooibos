import { MediaHero } from '@/components/deck/MediaHero';
import { slideByUrl } from '@/lib/slides';

export default function Page() {
  const slide = slideByUrl('/cables')!;
  return (
    <MediaHero
      framing={slide.framing}
      title="THE INTERNET IS UNDERWATER"
      imageSrc="/breach-002-internet.png"
      imageAlt="Breachling 002, the internet"
      imageWidth={708}
      imageHeight={894}
      caption="real cables. real sharks."
      frameless
    />
  );
}
