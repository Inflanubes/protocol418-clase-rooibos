export type SlideId =
  | 'cover' | 'agents' | 'mission1' | 'fire' | 'anchor'
  | 'aviso1' | 'cloud' | 'aviso2' | 'cables' | 'stamp1'
  | 'mission2' | 'predict' | 'aviso3' | 'breachling3' | 'stamp2'
  | 'mission3' | 'stamp3' | 'breachHunt';

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
  // Performance order (per the class script): the server burns DURING the
  // human-internet game, and the reveals (cloud, cables) come after — so
  // /fire precedes /cloud and /cables. Do not "fix" this back to reveal-first.
  // Each aviso card lands immediately before its Breachling reveal:
  // 001 → cloud, 002 → cables, 003 → pensar.
  // /anchor is Mission 1's 3rd round (the reroute twist, after fire) —
  // still before the cloud/cables reveals.
  { id: 'fire',        url: '/fire',            position: 4,  title: 'Server on fire',                framing: '' },
  { id: 'anchor',      url: '/anchor',          position: 5,  title: 'Another cable',                 framing: '' },
  { id: 'aviso1',      url: '/aviso-001',       position: 6,  title: 'Aviso — Breach 001',            framing: '' },
  { id: 'cloud',       url: '/cloud',           position: 7,  title: 'The cloud doesn\'t exist',       framing: '' },
  { id: 'aviso2',      url: '/aviso-002',       position: 8,  title: 'Aviso — Breach 002',            framing: '' },
  { id: 'cables',      url: '/cables',          position: 9,  title: 'The internet is underwater',    framing: '' },
  { id: 'stamp1',      url: '/stamp-1',         position: 10, title: 'Mission 1 — stamp time',        framing: 'MISSION 1 COMPLETE' },
  { id: 'mission2',    url: '/mission-2',       position: 11, title: 'Mission 2',                     framing: 'MISSION 2' },
  { id: 'predict',     url: '/predict',         position: 12, title: 'Predict',                       framing: '' },
  { id: 'aviso3',      url: '/aviso-003',       position: 13, title: 'Aviso — Breach 003',            framing: '' },
  { id: 'breachling3', url: '/breachling-003',  position: 14, title: 'Breachling 003',                framing: '' },
  { id: 'stamp2',      url: '/stamp-2',         position: 15, title: 'Mission 2 — stamp time',        framing: 'MISSION 2 COMPLETE' },
  { id: 'mission3',    url: '/mission-3',       position: 16, title: 'Mission 3',                     framing: 'MISSION 3' },
  { id: 'stamp3',      url: '/stamp-3',         position: 17, title: 'Mission 3 — stamp time',        framing: 'MISSION 3 COMPLETE' },
  { id: 'breachHunt',  url: '/breach-hunt',     position: 18, title: 'Breach Hunt!',                  framing: '' },
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
