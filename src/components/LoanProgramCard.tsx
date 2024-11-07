import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface LoanFeature {
  label: string;
  value: string;
}

interface LoanProgramCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features: LoanFeature[];
  minAmount: string;
  maxAmount: string;
  term: string;
  ltv: string;
}

export default function LoanProgramCard({
  title,
  description,
  Icon,
  features,
  minAmount,
  maxAmount,
  term,
  ltv
}: LoanProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
          <p className="font-semibold text-gray-900">{minAmount} - {maxAmount}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Max LTV</p>
          <p className="font-semibold text-gray-900">{ltv}</p>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{feature.label}</span>
            <span className="font-medium text-gray-900">{feature.value}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button 
          variant="primary" 
          className="flex-1 !bg-blue-600 hover:!bg-blue-700" 
          showForm
        >
          Apply Now
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-gray-300 hover:bg-gray-50" 
          showForm
        >
          <span className="inline-flex items-center">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </span>
        </Button>
      </div>
    </div>
  );
}