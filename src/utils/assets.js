/**
 * Vite Dynamic Asset Resolver
 */
import defaultProfile from '../assets/profile.jpg';

const localImages = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function resolveAsset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const normalized = path
    .replace(/^\/src\//, '../')
    .replace(/^src\//, '../')
    .replace(/^assets\//, '../assets/');

  return localImages[normalized] || defaultProfile;
}
