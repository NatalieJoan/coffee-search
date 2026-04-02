import Image from 'next/image';
import { Cafe } from '@/features/cafes/types/cafe.types';
import { STRAPI_URL } from '@/shared/config/env';
import { useTranslations } from 'next-intl';

interface CafeCardProps {
  cafe: Cafe;
}
export function CafeCard({ cafe }: CafeCardProps) {
  const t = useTranslations('HomePage');

  return (
    <article
      key={cafe.id}
      className="bg-card text-card-foreground shadow-md rounded-lg overflow-hidden"
    >
      <Image
        className="w-full h-48 object-cover"
        src={
          cafe.image?.url
            ? STRAPI_URL + cafe.image.url
            : `${STRAPI_URL}/uploads/coffee_unsplash_06d3456ae8.jpg`
        }
        alt={cafe.name}
        width={180}
        height={38}
        priority
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-shadow-white">
          {cafe.name}
        </h3>
        <p className="text-muted mb-4">{cafe.address}</p>
        <div className="flex gap-2 mb-4">
          {cafe.brew_methods?.map((method) => (
            <div key={method.id} title={method.name}>
              {method.icon?.url ? (
                <Image
                  src={STRAPI_URL + method.icon.url}
                  alt={method.name}
                  width={40}
                  height={40}
                />
              ) : (
                <span className="text-xs border p-1 rounded">
                  {method.name}
                </span>
              )}
            </div>
          ))}
        </div>
        {cafe.link && (
          <a
            href={cafe.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 font-medium"
          >
            {t('viewOnWebsite')}
          </a>
        )}
      </div>
    </article>
  );
}
