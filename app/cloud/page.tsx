import { MediaHero } from '@/components/deck/MediaHero';
import { slideByUrl } from '@/lib/slides';

export default function Page() {
  const slide = slideByUrl('/cloud')!;
  return (
    <MediaHero
      framing={slide.framing}
      title="THE CLOUD DOESN'T EXIST"
      imageSrc="/breach-001-nube.png"
      imageAlt="Breachling 001, the cloud"
      imageWidth={1536}
      imageHeight={1024}
      caption="it is someone else's computer"
    />
  );
}
