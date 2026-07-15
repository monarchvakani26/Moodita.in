'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console or error reporter
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center section-padding text-center pt-[var(--nav-height)]">
      <p className="font-display text-[clamp(6rem,18vw,12rem)] text-paper select-none leading-none mb-4" aria-hidden="true">
        Oops
      </p>

      <h1 className="font-display text-fluid-2xl text-ink mb-4 -mt-6 relative z-10">
        Something went astray.
      </h1>
      
      <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-md mb-10">
        We encountered an unexpected error. Don&apos;t worry, the art and journal entries are safe. 
        Let&apos;s try reloading or heading home.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Try Again
        </button>
        <Link href="/" className="btn-secondary">
          Back Home
        </Link>
      </div>
    </div>
  );
}
