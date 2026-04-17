const CDN = process.env.NEXT_PUBLIC_SPRITE_CDN || "";

/** Resolve a sprite path like `/sprites/3.png` to its CDN URL (or leave as-is when no CDN is set). */
export function spriteUrl(path: string): string {
  if (!path || path.startsWith("http")) return path;
  return CDN + path;
}
