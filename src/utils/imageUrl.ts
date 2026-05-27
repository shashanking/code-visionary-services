export function imgSrc(img: any): string {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (img.src) return img.src;
  return String(img);
}
