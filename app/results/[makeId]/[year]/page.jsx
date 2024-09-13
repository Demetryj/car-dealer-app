import { Suspense } from 'react';

import { CarModelsList } from '../../../components/CarModelsList';

import { getYears } from '../../../utils/getYears';
import { getCarBrands } from '../../../utils/getCarBrands';

export async function generateStaticParams() {
  const makesData = await getCarBrands();

  const years = getYears();

  const paths = makesData.map(make =>
    years.map(year => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );

  return paths;
}

export default async function Results({ params }) {
  const { makeId, year } = params;

  return (
    <section>
      <div className="p-4 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Car Models</h1>

        <Suspense fallback={<div className="text-xl font-bold">Loading car models...</div>}>
          <CarModelsList makeId={makeId} year={year} />
        </Suspense>
      </div>
    </section>
  );
}
