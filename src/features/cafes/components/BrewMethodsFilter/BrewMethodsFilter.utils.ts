export function toggleSelectedMethod(
  selectedMethods: string[],
  slug: string,
): string[] {
  if (selectedMethods.includes(slug)) {
    return selectedMethods.filter((method) => method !== slug);
  } else {
    return [...selectedMethods, slug];
  }
}
