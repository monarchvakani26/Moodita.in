import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Moodita';
    const subtitle = searchParams.get('subtitle') || 'Kindness Above Everything';
    const category = searchParams.get('category') || 'Niomi Gada';

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
          {/* Subtle frame border */}
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

          {/* Top header lockup */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ fontSize: '20px', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6B7C5E' }}>
              {category}
            </span>
            {/* Minimalist sun-spiral representation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#C4714A' }} />
              <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold', color: '#1A1714' }}>
                MOODITA
              </span>
            </div>
          </div>

          {/* Central Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '900px' }}>
            <h1
              style={{
                fontSize: '64px',
                lineHeight: '1.15',
                color: '#1A1714',
                margin: 0,
                fontWeight: '400',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: '28px',
                  fontStyle: 'italic',
                  color: '#C4714A',
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom brand tagline */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <span style={{ fontSize: '16px', fontFamily: 'sans-serif', letterSpacing: '0.15em', color: '#6B7C5E' }}>
              moodita.in
            </span>
            <span style={{ fontSize: '18px', fontStyle: 'italic', color: '#6B7C5E' }}>
              Kindness Above Everything
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OpenGraph image`, { status: 500 });
  }
}
