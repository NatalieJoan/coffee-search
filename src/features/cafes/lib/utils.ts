export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

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
