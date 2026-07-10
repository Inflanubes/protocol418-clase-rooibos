export type SlideId =
  | 'cover' | 'agents' | 'mission1' | 'cables' | 'cloud' | 'fire' | 'stamp1'
  | 'mission2' | 'predict' | 'breachling3' | 'stamp2' | 'mission3' | 'stamp3' | 'breachHunt';

export interface Slide {
  id: SlideId;
  url: string;
  position: number;
  title: string;
  framing: string;
}

export const SLIDES: readonly Slide[] = [
  { id: 'cover',       url: '/',                position: 1,  title: 'Rooibos — Junior 418 Agents',   framing: '' },
  { id: 'agents',      url: '/agents',          position: 2,  title: 'You are agents now',            framing: '' },
  { id: 'mission1',    url: '/mission-1',       position: 3,  title: 'Mission 1',                     framing: 'MISSION 1' },
  { id: 'cables',      url: '/cables',          position: 4,  title: 'The internet is underwater',    framing: '' },
  { id: 'cloud',       url: '/cloud',           position: 5,  title: 'The cloud doesn\'t exist',       framing: '' },
  { id: 'fire',        url: '/fire',            position: 6,  title: 'Server on fire',                framing: '' },
  { id: 'stamp1',      url: '/stamp-1',         position: 7,  title: 'Mission 1 — stamp time',        framing: 'MISSION 1 COMPLETE' },
  { id: 'mission2',    url: '/mission-2',       position: 8,  title: 'Mission 2',                     framing: 'MISSION 2' },
  { id: 'predict',     url: '/predict',         position: 9,  title: 'Predict',                       framing: '' },
  { id: 'breachling3', url: '/breachling-003',  position: 10, title: 'Breachling 003',                framing: '' },
  { id: 'stamp2',      url: '/stamp-2',         position: 11, title: 'Mission 2 — stamp time',        framing: 'MISSION 2 COMPLETE' },
  { id: 'mission3',    url: '/mission-3',       position: 12, title: 'Mission 3',                     framing: 'MISSION 3' },
  { id: 'stamp3',      url: '/stamp-3',         position: 13, title: 'Mission 3 — stamp time',        framing: 'MISSION 3 COMPLETE' },
  { id: 'breachHunt',  url: '/breach-hunt',     position: 14, title: 'Breach Hunt!',                  framing: '' },
] as const;

export const TOTAL_SLIDES = SLIDES.length;

export function slideByUrl(pathname: string): Slide | undefined {
  return SLIDES.find((s) => s.url === pathname);
}

export function nextSlide(currentUrl: string): Slide | undefined {
  const current = slideByUrl(currentUrl);
  if (!current) return SLIDES[0];
  return SLIDES[current.position];
}

export function prevSlide(currentUrl: string): Slide | undefined {
  const current = slideByUrl(currentUrl);
  if (!current) return undefined;
  return SLIDES[current.position - 2];
}
