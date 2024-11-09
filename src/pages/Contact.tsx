import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    const formData = {
      portalId: "47974339",
      formGuid: "07b56362-ee36-4b39-84b4-c4ea057bb280",
      fields: [
        {
          name: "firstname",
          value: (form.querySelector('#firstName') as HTMLInputElement).value
        },
        {
          name: "lastname",
          value: (form.querySelector('#lastName') as HTMLInputElement).value
        },
        {
          name: "email",
          value: (form.querySelector('#email') as HTMLInputElement).value
        },
        {
          name: "phone",
          value: (form.querySelector('#phone') as HTMLInputElement).value
        },
        {
          name: "loan_type",
          value: (form.querySelector('#loanType') as HTMLSelectElement).value
        },
        {
          name: "message",
          value: (form.querySelector('#message') as HTMLTextAreaElement).value
        }
      ]
    };

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/47974339/07b56362-ee36-4b39-84b4-c4ea057bb280`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you shortly.');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 808.757.4053",
      description: "Mon-Fri from 9am to 6pm HST"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@elevateglobalventures.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "200 N Vineyard Blvd, Ste. A325 A325 - 5603",
      description: "Honolulu, HI 96817"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Discuss Your Investment
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our lending experts are ready to help you find the perfect financing solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="loanType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a loan program</option>
                    <option value="fix-and-flip">Fix and Flip</option>
                    <option value="ground-up">Ground Up Construction</option>
                    <option value="rental">Single Property Rentals</option>
                    <option value="bridge">Stabilized Bridge</option>
                    <option value="portfolio">Rental Portfolios</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your investment needs..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full !bg-blue-600 hover:!bg-blue-700">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Quick Response Section */}
            <div className="lg:pt-12">
              <div className="bg-blue-900 rounded-2xl p-8 text-white mb-8">
                <Clock className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
                <p className="text-blue-100 mb-6">
                  We understand that timing is crucial in real estate investments. Our team typically responds within:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Phone inquiries: Within 2 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Email inquiries: Within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Loan applications: Within 48 hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Initial Consultation</p>
                      <p className="text-sm text-gray-600">We'll discuss your investment goals and requirements</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Loan Assessment</p>
                      <p className="text-sm text-gray-600">Our team will evaluate your application</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-gray-900">Proposal & Funding</p>
                      <p className="text-sm text-gray-600">Receive your customized loan proposal and funding</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}