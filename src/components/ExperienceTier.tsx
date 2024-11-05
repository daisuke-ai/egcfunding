import React from 'react';

interface TierFeature {
  type: string;
  requirements: string[];
}

interface ExperienceTierProps {
  tier: number;
  experience: string;
  features: TierFeature[];
}

export default function ExperienceTier({ tier, experience, features }: ExperienceTierProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">Tier {tier}</h3>
        <p className="text-gray-600">{experience}</p>
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2">{feature.type}</h4>
            <ul className="list-disc list-inside space-y-1">
              {feature.requirements.map((req, reqIndex) => (
                <li key={reqIndex} className="text-sm text-gray-600">{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}