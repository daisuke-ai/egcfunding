import React from 'react';
import { Hammer, Building2, Home, Clock } from 'lucide-react';
import LoanProduct from '../components/LoanProduct';
import ExperienceTier from '../components/ExperienceTier';

const loanProducts = [
  {
    title: "Fix & Flip Loans",
    description: "Quick financing for property renovation and resale projects.",
    Icon: Hammer,
    features: [
      { label: "Loan Amount", value: "$50K - $3.5M" },
      { label: "LTC", value: "Up to 90%" },
      { label: "Rehab Costs", value: "100%" },
      { label: "Term Length", value: "6-24 months" }
    ]
  },
  {
    title: "Ground Up Construction",
    description: "Comprehensive funding for new construction projects.",
    Icon: Building2,
    features: [
      { label: "LTC", value: "Up to 90%" },
      { label: "Construction Costs", value: "100%" },
      { label: "Term Length", value: "12-24 months" },
      { label: "Experience Required", value: "1-2 Projects" }
    ]
  },
  {
    title: "Rental Property Loans",
    description: "Long-term financing solutions for rental properties.",
    Icon: Home,
    features: [
      { label: "LTV", value: "Up to 80%" },
      { label: "Term Length", value: "30 years" },
      { label: "Amortization", value: "30 years" },
      { label: "Rates From", value: "6.99%" }
    ]
  }
];

const experienceTiers = [
  {
    tier: 5,
    experience: "10+ Completed Projects",
    features: [
      {
        type: "Light Rehab (≤ 25% PP)",
        requirements: [
          "90% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      },
      {
        type: "Heavy Rehab (50-100% PP)",
        requirements: [
          "90% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      },
      {
        type: "Extensive Rehab (≥ 100% PP)",
        requirements: [
          "85% LTC / 100% Rehab",
          "Max 90% LTFC",
          "Up to 70% ARV",
          "Min FICO 680"
        ]
      }
    ]
  },
  {
    tier: 4,
    experience: "5-9 Completed Projects",
    features: [
      {
        type: "Light/Moderate Rehab (≤ 50% PP)",
        requirements: [
          "90% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      },
      {
        type: "Heavy Rehab (50-100% PP)",
        requirements: [
          "85% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      }
    ]
  },
  {
    tier: 3,
    experience: "3-4 Completed Projects",
    features: [
      {
        type: "Light/Moderate Rehab (≤ 50% PP)",
        requirements: [
          "85% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      },
      {
        type: "Heavy Rehab (50-100% PP)",
        requirements: [
          "80% LTC / 100% Rehab",
          "Up to 75% ARV",
          "Min FICO 660"
        ]
      }
    ]
  },
  {
    tier: 2,
    experience: "1-2 Completed Projects",
    features: [
      {
        type: "Light Rehab (≤ 25% PP)",
        requirements: [
          "80% LTC / 100% Rehab",
          "Up to 70% ARV",
          "Min FICO 680"
        ]
      },
      {
        type: "Heavy Rehab (50-100% PP)",
        requirements: [
          "75% LTC / 100% Rehab",
          "Up to 70% ARV",
          "Min FICO 680"
        ]
      }
    ]
  },
  {
    tier: 1,
    experience: "No Experience",
    features: [
      {
        type: "Light Rehab Only (≤ 25% PP)",
        requirements: [
          "FICO 720+: 80% LTC / 100% Rehab",
          "FICO 680+: 75% LTC / 100% Rehab",
          "Up to 70% ARV"
        ]
      }
    ]
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Lending Solutions</h1>
          <p className="text-xl">Flexible financing options tailored to your investment strategy</p>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Loan Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <LoanProduct key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience Tiers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceTiers.map((tier, index) => (
              <ExperienceTier key={index} {...tier} />
            ))}
          </div>
          
          {/* Additional Requirements Note */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Additional Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Interest Reserve Requirements (FICO)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>600-620: 12 months IR</li>
                  <li>620-640: 9 months IR</li>
                  <li>640-660: 6 months IR</li>
                  <li>660-680: 3 months IR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Special Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Rural properties: 65% Initial LTC</li>
                  <li>Lopsided deals: 85% max total LTFC</li>
                  <li>Less than 5 tradelines: 6 month IR required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your investment needs.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}