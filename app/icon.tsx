import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#F0EBE2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#EA5A1F',
          fontFamily: 'monospace',
          fontWeight: 700,
        }}
      >
        4|8
      </div>
    ),
    size,
  );
}
