import React from 'react';
import { ArrowRight, Hammer, Building2, Home, Bridge, Buildings, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const loanTypes = [
    {
      title: "Fix & Flip",
      icon: Hammer,
      description: "Quick financing for renovation projects with up to 90% LTC and 100% rehab costs covered."
    },
    {
      title: "Ground Up Construction",
      icon: Building2,
      description: "Comprehensive funding for new construction with up to 90% LTC and flexible terms."
    },
    {
      title: "Single Property Rentals",
      icon: Home,
      description: "Long-term financing solutions with competitive rates and 30-year terms available."
    },
    {
      title: "Stabilized Bridge",
      icon: Bridge,
      description: "Short-term financing for stabilized properties with quick closings and flexible exit options."
    },
    {
      title: "Rental Portfolios",
      icon: Buildings,
      description: "Portfolio financing solutions with competitive rates and streamlined processing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Elevate Your Real Estate Investments
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Access flexible financing solutions tailored to your investment strategy. 
              From fix & flip to new construction, we've got you covered.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('loan-programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Explore Programs <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Programs Section */}
      <section id="loan-programs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Loan Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of financing solutions designed for real estate investors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
                  <loan.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                <a href="/services" className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nationwide Coverage</h2>
              <p className="text-xl text-gray-600 mb-8">
                We provide lending services across the United States, offering local expertise with national reach.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Coverage Exceptions:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Not available in: MN, VT, UT, OR, SD, ND</li>
                  <li>• Special requirements apply in: NV, AZ</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3"
                alt="USA Map"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of successful investors who trust Elevate Global Funding 
            for their real estate financing needs.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}