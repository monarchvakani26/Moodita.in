import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = 'Moodita by Niomi Gada';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAF7F2',
          padding: '80px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid rgba(107, 124, 94, 0.15)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <span style={{ fontSize: '20px', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B7C5E' }}>
            Niomi Gada
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#C4714A' }} />
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold', color: '#1A1714' }}>
              MOODITA
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '900px' }}>
          <h1
            style={{
              fontSize: '72px',
              lineHeight: '1.1',
              color: '#1A1714',
              margin: 0,
              fontWeight: '400',
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              fontSize: '32px',
              fontStyle: 'italic',
              color: '#C4714A',
              margin: 0,
            }}
          >
            {siteConfig.tagline}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <span style={{ fontSize: '16px', fontFamily: 'sans-serif', letterSpacing: '0.15em', color: '#6B7C5E' }}>
            moodita.in
          </span>
          <span style={{ fontSize: '18px', fontStyle: 'italic', color: '#6B7C5E' }}>
            Art, Writing &amp; Creativity
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
