'use client';

import { useState } from 'react';

interface MathematicianPortraitProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MathematicianPortrait({ src, alt, className = '' }: MathematicianPortraitProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null; // Hide if image fails to load
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}