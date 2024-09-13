import { getCarModels } from '../utils/getCarModels';

export async function CarModelsList({ makeId, year }) {
  const models = await getCarModels(makeId, year);

  return (
    <ul className="flex flex-col gap-2">
      {models.map(model => (
        <li key={model.Model_ID} className="p-2 border">
          <p className="mb-2">{model.Make_Name}</p>
          <p className="mb-2">{model.Model_Name}</p>
          <p>{year}</p>
        </li>
      ))}
    </ul>
  );
}
