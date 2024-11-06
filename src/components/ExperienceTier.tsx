import React from 'react';

interface Feature {
  type: string;
  requirements: string[];
}

interface ExperienceTierProps {
  tier: number;
  experience: string;
  features: Feature[];
}

const ExperienceTier: React.FC<ExperienceTierProps> = ({ tier, experience, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-blue-600">T{tier}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800">{experience}</h3>
        </div>
      </div>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-900 mb-2">{feature.type}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {feature.requirements.map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTier;