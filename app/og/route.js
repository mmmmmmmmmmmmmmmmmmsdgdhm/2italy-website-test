import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';

// Social share image (1200×630) used by every page — see ogImage in app/seo.js
export async function GET() {
  const logo = await readFile(join(process.cwd(), 'public/brand-assets/Asset 165000px.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 90px',
          gap: '70px',
          background: 'linear-gradient(135deg, #E6F9F8 0%, #FFF8F0 55%, #F0FAF2 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={logoSrc} width={300} height={410} style={{ objectFit: 'contain' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flex: 1 }}>
          <div style={{ display: 'flex', fontSize: 66, fontWeight: 800, color: '#0D3A36', lineHeight: 1.1 }}>
            Your Path to Italy, Made Simple.
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#1a3530', lineHeight: 1.35 }}>
            University admission · Student visa · Scholarships · Relocation
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '18px',
              fontSize: 30,
              fontWeight: 700,
              color: '#fff',
              background: 'linear-gradient(135deg, #26B6BA, #158F3E)',
              padding: '14px 30px',
              borderRadius: '999px',
              alignSelf: 'flex-start',
            }}
          >
            2italy.co
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
