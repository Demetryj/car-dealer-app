export function SelectCarBrands({ handleBrandChange, brands }) {
  return (
    <div className="mb-4">
      <label className="block mb-2">Car brand:</label>
      <select className="border p-2 w-40 md:w-2/6" name="make" onChange={handleBrandChange}>
        <option value="">Select car brand</option>
        {brands.map(brand => (
          <option key={brand.MakeId} value={brand.MakeId}>
            {brand.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}
