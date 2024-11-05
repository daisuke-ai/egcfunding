import React from 'react';
import { CheckCircle2, LucideIcon } from 'lucide-react';

interface LoanFeature {
  text: string;
}

interface LoanCardProps {
  title: string;
  Icon: LucideIcon;
  features: LoanFeature[];
}

export default function LoanCard({ title, Icon, features }: LoanCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
        Get Started
      </button>
    </div>
  );
}