import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function BenefitCard({ title, description, Icon }: BenefitCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}