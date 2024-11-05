import React from 'react';

interface USMapProps {
  availableStates: string[];
}

export default function USMap({ availableStates }: USMapProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center">
      <p className="text-gray-600">Map visualization available in production version</p>
      <p className="mt-2">Available in {availableStates.length} states</p>
    </div>
  );
}