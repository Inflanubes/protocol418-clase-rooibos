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

Inverso de earl-grey: fondo crema `#F0EBE2` por defecto, texto oscuro, acentos naranja
`#EA5A1F`, tipografía XXL pensada para leerse al fondo de la sala a 1280×720. La slide
`/fire` es la excepción: fondo oscuro con tratamiento de llamas.

Sin gate de `prefers-reduced-motion` a propósito (mismo caveat que earl-grey: el Chrome
de la presentadora lo reporta mal).

## Deploy

Objetivo: local por ahora; posible `rooibos.protocol418.com` (decisión pendiente, ver spec).

## Spec

Spec y plan: en el proyecto padre —
docs/superpowers/specs/2026-07-10-clase-rooibos-arkeidia-design.md (no versionado en este repo).
