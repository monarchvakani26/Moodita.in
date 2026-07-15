'use client';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream flex flex-col items-center justify-center text-center p-8">
        <h1 className="font-serif text-4xl text-ink mb-4">Critical System Error</h1>
        <p className="font-sans text-sm text-ink-muted mb-8 max-w-sm">
          A critical system error occurred. Please try resetting the application.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-ink text-cream rounded-full hover:bg-opacity-90 transition-colors"
        >
          Reset Application
        </button>
      </body>
    </html>
  );
}
