import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="flex h-screen items-center justify-center">
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
          <h2 className="text-xl font-semibold">404 Not Found</h2>

          <Link
            href="/"
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-500"
          >
            Go Back
          </Link>
        </div>
      </section>
    </main>
  );
}
