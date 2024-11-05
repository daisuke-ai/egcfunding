import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/Button";
import { 
  ArrowRight, 
  Home, 
  Building2, 
  Building, 
  Briefcase, 
  LineChart, 
  MapPin,
  ChevronRight 
} from 'lucide-react';

export default function HomePage() {
  const loanPrograms = [
    {
      title: "Fix and Flip",
      icon: Home,
      description: "Short-term financing for investors looking to purchase, renovate, and sell properties for profit."
    },
    {
      title: "Ground Up Construction",
      icon: Building2,
      description: "Financing for new construction projects from the ground up, supporting developers in creating new properties."
    },
    {
      title: "Single Property Rentals",
      icon: Building,
      description: "Long-term financing solutions for investors looking to purchase or refinance single-family rental properties."
    },
    {
      title: "Stabilized Bridge",
      icon: Briefcase,
      description: "Short-term financing for investors acquiring or refinancing stabilized properties, bridging the gap to long-term financing."
    },
    {
      title: "Rental Portfolios",
      icon: LineChart,
      description: "Tailored financing solutions for investors with multiple rental properties, offering competitive terms for portfolio growth."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight text-blue-900">
                Elevate Your Real Estate Investments
              </h1>
              <p className="text-xl mb-8 text-blue-700">
                Customized financial solutions for visionary investors. From fix-and-flip to ground-up construction, we're your partner in growth.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/programs">Explore Our Programs</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3"
                alt="Modern building"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">$500M+</h3>
                <p className="text-gray-600">Funded in Real Estate Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100 -z-10 transform skew-x-12"></div>
      </section>

      {/* Loan Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Our Loan Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <program.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to="/programs" 
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Our Service Area</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3"
                alt="USA Map"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <MapPin className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Nationwide Coverage</h3>
                <p className="text-gray-600 mb-4">
                  We provide our services across the United States, with a few exceptions:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Not available in: MN, VT, UT, OR, SD, ND</li>
                  <li>Special requirements apply in NV and AZ</li>
                </ul>
                <p className="text-gray-600">
                  Contact us to learn more about our services in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Elevate Global Funding</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tailored Solutions", description: "Customized financing packages designed to meet your specific investment needs." },
              { title: "Fast Approvals", description: "Streamlined process for quick loan approvals and funding." },
              { title: "Expert Guidance", description: "Team of experienced professionals to support your investment journey." },
              { title: "Competitive Rates", description: "Attractive interest rates to maximize your investment potential." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 rounded-lg p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Ready to Elevate Your Investments?</h2>
              <p className="text-xl text-blue-700">Let's discuss how we can help you achieve your real estate investment goals.</p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}