# Rooibos — Junior 418 Agents

Deck de proyector de la clase Rooibos (Protocol 418 para Arkeidia): niños de 6–11 años
reclutados como agentes junior que cazan Breaches sobre cómo funcionan internet y la IA.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Navegación del deck

- `→` / `PageDown` / espacio — siguiente slide
- `←` / `PageUp` — slide anterior
- Swipe horizontal (móvil/trackpad) y scroll con rueda también avanzan
- `i` — abre el índice de slides

## Tema

Mismo esqueleto 418/OS oscuro que earl-grey: fondo negro `#0B0B0B` por defecto, texto
crema `#F0EBE2`, acentos naranja `#EA5A1F`, tipografía XXL pensada para leerse al fondo
de la sala a 1280×720 (~2x earl-grey). La slide `/fire` se marca con lenguaje de system
alert (tag naranja/negro, glow, tono de chrome más profundo) en vez de un fondo invertido
— ya no hay "excepción oscura" posible cuando todo el deck es oscuro.

Sin gate de `prefers-reduced-motion` a propósito (mismo caveat que earl-grey: el Chrome
de la presentadora lo reporta mal).

## Deploy

Objetivo: local por ahora; posible `rooibos.protocol418.com` (decisión pendiente, ver spec).

## Spec

Spec y plan: en el proyecto padre —
docs/superpowers/specs/2026-07-10-clase-rooibos-arkeidia-design.md (no versionado en este repo).
