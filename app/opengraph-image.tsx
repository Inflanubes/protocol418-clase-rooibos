import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Rooibos — Junior 418 Agents';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F0EBE2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          fontFamily: 'monospace',
        }}
      >
        <div style={{ fontSize: 240, color: '#EA5A1F', fontWeight: 700, lineHeight: 1 }}>
          {'<4|8>'}
        </div>
        <div style={{ fontSize: 32, color: '#0B0B0B', letterSpacing: '0.05em' }}>
          ROOIBOS · JUNIOR 418 AGENTS
        </div>
        <div style={{ fontSize: 20, color: '#7A7A7A', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          PROTOCOL 418
        </div>
      </div>
    ),
    size,
  );
}
