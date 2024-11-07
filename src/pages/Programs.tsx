import React from 'react';
import { 
  Home,
  Building2,
  Building,
  Briefcase,
  LineChart,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import LoanProgramCard from '../components/LoanProgramCard';
import LoanProduct from '../components/LoanProduct';
import ExperienceTier from '../components/ExperienceTier';

const loanPrograms = [
  {
    title: "Fix and Flip",
    description: "Short-term financing for investors looking to purchase, renovate, and sell properties for profit.",
    Icon: Home,
    minAmount: "$50,000",
    maxAmount: "$3.5M",
    term: "6-24 months",
    ltv: "Up to 90%",
    features: [
      { label: "Term Length", value: "6-24 months" },
      { label: "Rehab Costs", value: "100% covered" },
      { label: "Interest Rate", value: "From 7.99%" },
      { label: "Closing Time", value: "As fast as 10 days" }
    ]
  },
  {
    title: "Ground Up Construction",
    description: "Comprehensive funding for new construction projects from foundation to completion.",
    Icon: Building2,
    minAmount: "$100,000",
    maxAmount: "$5M",
    term: "12-24 months",
    ltv: "Up to 85%",
    features: [
      { label: "Term Length", value: "12-24 months" },
      { label: "Construction Costs", value: "100% covered" },
      { label: "Draw Schedule", value: "Flexible" },
      { label: "Experience Required", value: "2+ projects" }
    ]
  },
  {
    title: "Single Property Rentals",
    description: "Long-term financing solutions for single-family rental property investments.",
    Icon: Building,
    minAmount: "$75,000",
    maxAmount: "$2M",
    term: "30 years",
    ltv: "Up to 80%",
    features: [
      { label: "Term Length", value: "30 years" },
      { label: "Amortization", value: "30 years" },
      { label: "Interest Rate", value: "From 6.99%" },
      { label: "Cash-Out", value: "Available" }
    ]
  },
  {
    title: "Stabilized Bridge",
    description: "Short-term financing for acquiring or refinancing stabilized properties.",
    Icon: Briefcase,
    minAmount: "$100,000",
    maxAmount: "$4M",
    term: "12-36 months",
    ltv: "Up to 75%",
    features: [
      { label: "Term Length", value: "12-36 months" },
      { label: "Prepayment", value: "Flexible" },
      { label: "Interest Rate", value: "From 7.49%" },
      { label: "Occupancy", value: "Min. 90%" }
    ]
  },
  {
    title: "Rental Portfolios",
    description: "Tailored financing solutions for investors with multiple rental properties.",
    Icon: LineChart,
    minAmount: "$250,000",
    maxAmount: "$10M",
    term: "30 years",
    ltv: "Up to 75%",
    features: [
      { label: "Term Length", value: "30 years" },
      { label: "Properties", value: "5+ units" },
      { label: "Interest Rate", value: "From 6.49%" },
      { label: "Blanket Loans", value: "Available" }
    ]
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Lending Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Choose from our comprehensive range of loan programs designed for every real estate investment strategy
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="!bg-white !text-blue-900 hover:!bg-blue-50 whitespace-nowrap"
              showForm
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Fast Approvals", desc: "Get approved in as little as 24 hours" },
              { icon: Shield, title: "Flexible Terms", desc: "Customized solutions for your needs" },
              { icon: CheckCircle2, title: "Simple Process", desc: "Streamlined application and closing" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {loanPrograms.map((program, index) => (
              <LoanProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our lending experts are ready to help you choose the right financing solution
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="!bg-white !text-blue-900 hover:!bg-blue-50 whitespace-nowrap"
              showForm
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 whitespace-nowrap flex items-center"
              showForm
            >
              <span className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}