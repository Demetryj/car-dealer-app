'use client';

import { useRouter } from 'next/navigation';

export function Error() {
  const router = useRouter();

  const handleButtonClick = () => router.back();

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="p-4 flex h-full flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Something went wrong. Try again.</h2>
        <button
          className="bg-blue-500 px-4 py-2 text-base text-white transition-colors hover:bg-blue-500 rounded-md"
          onClick={handleButtonClick}
        >
          Try
        </button>
      </div>
    </section>
  );
}
