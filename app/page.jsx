'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { SelectCarBrands } from './components/SelectCarBrands';
import { SelectYear } from './components/SelectYear';

import { getCarBrands } from './utils/getCarBrands';

export default function FilterPage() {
  const [brands, setBrands] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [makeId, setMakeId] = useState('');
  const [year, setYear] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (makeId && year) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [makeId, year]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCarBrands();

        setBrands(response);
      } catch (error) {
        console.error(error);

        router.push('/error');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [router]);

  const handleBrandChange = e => setMakeId(e.target.value);
  const handleYearChange = e => setYear(e.target.value);

  return (
    <section>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Car Filter</h1>

        {loading ? (
          <div className="text-xl font-bold">Loading car brands...</div>
        ) : (
          <>
            <SelectCarBrands handleBrandChange={handleBrandChange} brands={brands} />
            <SelectYear handleYearChange={handleYearChange} />

            <Link
              href={`/results/${makeId}/${year}`}
              className={`px-4 py-2 inline-block bg-blue-500 text-white ${!isButtonEnabled ? 'opacity-50 pointer-events-none rounded-md' : ''}`}
            >
              Next
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
