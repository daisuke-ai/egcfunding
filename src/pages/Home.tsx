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
  ChevronRight,
  Star 
} from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    role: "Real Estate Investor",
    content: "Elevate Funding helped me secure financing for my first fix & flip project. Their quick approval process and competitive rates made all the difference.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Property Developer",
    content: "The bridge loan from Elevate Funding allowed me to act quickly on a prime investment opportunity. Their team was professional and efficient throughout the process.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "Commercial Real Estate Investor",
    content: "I've worked with many lenders, but Elevate Funding stands out for their personalized service and flexible terms. They truly understand the needs of investors.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

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

export default function HomePage() {
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
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      {/* Testimonials Section - Moved up for social proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Investments?</h2>
              <p className="text-xl opacity-90">Let's discuss how we can help you achieve your real estate investment goals.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="!bg-white !text-blue-900 hover:!bg-blue-50 whitespace-nowrap"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 whitespace-nowrap flex items-center"
              >
                <Link to="/programs" className="flex items-center">
                  View Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}