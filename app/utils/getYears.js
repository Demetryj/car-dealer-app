export function getYears() {
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - 2014 }, (_, i) => i + 2015);

  return years;
}
