import { Cafe } from '@/features/cafes/types/cafe.types';

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

export function toLatLng(lat: number, lng: number): [number, number] {
  return [lat, lng];
}

export function hasLocation(
  cafe: Cafe,
): cafe is Cafe & { latitude: number; longitude: number } {
  return cafe.latitude !== null && cafe.longitude !== null;
}
