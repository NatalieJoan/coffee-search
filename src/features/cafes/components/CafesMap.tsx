'use client';

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { CafesMapProps } from '@/features/cafes/types/props.types';
import { hasLocation, toLatLng } from '@/features/cafes/lib/utils';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const DEFAULT_CENTER = [52.4057, 16.9313] as [number, number];
const DEFAULT_ZOOM = 12;

export default function CafesMap({ cafes }: CafesMapProps) {
  const cafesWithLocation = cafes.filter(hasLocation);

  const firstCafe = cafesWithLocation[0];
  const center: [number, number] = firstCafe
    ? toLatLng(firstCafe.latitude, firstCafe.longitude)
    : DEFAULT_CENTER;

  return (
    <MapContainer
      center={center}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cafesWithLocation.map((cafe) => (
        <Marker key={cafe.id} position={[cafe.latitude, cafe.longitude]}>
          <Popup>
            <div className="min-w-40">
              <div className="font-semibold">{cafe.name}</div>
              {cafe.address && (
                <div className="mt-1 text-sm text-gray-600">{cafe.address}</div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
