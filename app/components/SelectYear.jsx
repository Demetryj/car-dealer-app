import { getYears } from '../utils/getYears';

export function SelectYear({ handleYearChange }) {
  const years = getYears();

  return (
    <div className="mb-6">
      <label className="block mb-2">Year:</label>
      <select className="border p-2" name="year" onChange={handleYearChange}>
        <option value="">Select year</option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
