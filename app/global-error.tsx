'use client'; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1 className="text-xl font-semibold mb-4">{error}</h1>
        <button
          className="bg-blue-500 px-4 py-2 text-base text-white transition-colors hover:bg-blue-500 rounded-md"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
