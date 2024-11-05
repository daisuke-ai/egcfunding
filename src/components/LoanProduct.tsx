import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LoanFeature {
  label: string;
  value: string;
}

interface LoanProductProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: LoanFeature[];
}

export default function LoanProduct({ title, description, Icon, features }: LoanProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-gray-600">{feature.label}</span>
            <span className="font-semibold">{feature.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}