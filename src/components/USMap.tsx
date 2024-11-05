import React from 'react';

interface USMapProps {
  availableStates: string[];
}

export default function USMap({ availableStates }: USMapProps) {
  const stateColors = (stateCode: string) => {
    return availableStates.includes(stateCode) ? '#2563eb' : '#e5e7eb';
  };

  return (
    <svg
      viewBox="0 0 959 593"
      className="w-full h-auto max-w-4xl mx-auto"
      role="img"
      aria-label="US Map showing states where lending is available"
    >
      <title>US States Map</title>
      <path d="M833,512l35-8l34-7l-5-24l-5-24l7-15l7-15l-14-7l-14-6l-13,5l-14,4l-22,8l-22,7l13,41l13,41Z" fill={stateColors('FL')} />
      <path d="M832,444l-22,8l-22,7l-8-3l-8-4l-2-5l-3-5l1-5v-5l-8-3l-8-4l-4-7l-5-7l-12,1l-12,2l-8-8l-7-8l2-6l2-7l-3-5l-4-5l-9,2l-9,2l-7,8l-6,8l-16,10l-16,9l1,6l2,6l-4,5l-3,6l-6,1l-5,1l-11,3l-11,4l3,6l2,6l6,2l6,1l-1,7l-2,7l5,4l4,4l-4,5l-5,5l7,8l6,8l11-6l11-7l5,1l4,2l6,8l6,9l-6,9l-5,9l4,4l4,5l10-1l9-2l13-5l13-4l22-8l22-7l14-4l13-5l14,6l14,7l-7,15l-7,15l5,24l5,24l-34,7l-35,8l-13-41l-13-41Z" fill={stateColors('GA')} />
      {/* Add more state paths here */}
    </svg>
  );
}