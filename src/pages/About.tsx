import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elevate Global Capital Funding</h1>
          <p className="text-xl">Empowering real estate investors with flexible financing solutions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-gray-600 mb-12">
              At Elevate Global Funding, we specialize in providing tailored financial solutions for real estate investors. 
              Our mission is to empower investors by offering flexible and efficient funding options that align with their 
              unique investment strategies.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trusted Partner</h3>
                <p className="text-gray-600">
                  With extensive experience in real estate financing, we've built a reputation for reliability and excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                <p className="text-gray-600">
                  Our professionals bring decades of combined experience in real estate and financial services.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Growth Focus</h3>
                <p className="text-gray-600">
                  We're committed to helping our clients achieve their investment goals and grow their portfolios.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-4">
                <span className="font-semibold">Tailored Financing Solutions:</span>
                <span>We understand that each investment opportunity is unique and work closely with you to develop customized loan packages.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-semibold">Streamlined Process:</span>
                <span>Our efficient application and approval processes ensure quick access to capital when you need it.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-semibold">Expert Guidance:</span>
                <span>We offer valuable insights and guidance throughout your investment journey.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Partner with us to elevate your real estate investment potential.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}