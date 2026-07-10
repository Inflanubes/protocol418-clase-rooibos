import { MediaHero } from '@/components/deck/MediaHero';
import { slideByUrl } from '@/lib/slides';

export default function Page() {
  const slide = slideByUrl('/agents')!;
  return (
    <MediaHero
      framing={slide.framing}
      title="TODAY YOU BECOME AGENTS."
      imageSrc="/breachlings-grupo.png"
      imageAlt="A group of Breachlings, captured lies about the internet and AI"
      imageWidth={1536}
      imageHeight={1024}
      caption="these are captured lies"
      priority
    />
  );
}
