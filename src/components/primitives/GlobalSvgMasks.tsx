import React from 'react'

/**
 * Global SVG ClipPaths for category reveals.
 * Normalised coordinates (0 to 1) for objectBoundingBox units
 * so they automatically scale with the card containers.
 */
export function GlobalSvgMasks() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        {/* Art / Paintings: Organic fluid paint brushstroke / blob */}
        <clipPath id="mask-art" clipPathUnits="objectBoundingBox">
          <path d="M0.2,0.15 C0.35,0.05 0.65,0.02 0.82,0.12 C0.96,0.22 0.98,0.42 0.92,0.6 C0.86,0.78 0.68,0.92 0.48,0.95 C0.28,0.98 0.12,0.88 0.06,0.68 C0.01,0.48 0.05,0.25 0.2,0.15 Z" />
        </clipPath>

        {/* Food / Recipes: Concentric wavy circle / plate */}
        <clipPath id="mask-food" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.08 C0.61,0.08 0.72,0.1 0.8,0.18 C0.88,0.26 0.92,0.37 0.92,0.5 C0.92,0.63 0.88,0.74 0.8,0.82 C0.72,0.9 0.61,0.92 0.5,0.92 C0.39,0.92 0.28,0.9 0.2,0.82 C0.12,0.74 0.08,0.63 0.08,0.5 C0.08,0.37 0.12,0.26 0.2,0.18 C0.28,0.1 0.39,0.08 0.5,0.08 Z" />
        </clipPath>

        {/* Travel / Photography: Rounded map-pin / droplet blob */}
        <clipPath id="mask-travel" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0.06 C0.72,0.06 0.88,0.24 0.88,0.45 C0.88,0.68 0.68,0.88 0.5,0.96 C0.32,0.88 0.12,0.68 0.12,0.45 C0.12,0.24 0.28,0.06 0.5,0.06 Z" />
        </clipPath>

        {/* Writing / Letters: Angular torn-paper / quill shape */}
        <clipPath id="mask-writing" clipPathUnits="objectBoundingBox">
          <path d="M0.12,0.12 L0.45,0.08 L0.88,0.14 L0.82,0.48 L0.92,0.82 L0.52,0.92 L0.15,0.86 L0.08,0.48 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
