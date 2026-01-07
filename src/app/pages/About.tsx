import React from 'react';
import { CheckCircle2, Package, Users, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Relief Packages & Benefits</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive support designed to assist every sector of our society during the pandemic recovery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Section 1: Introduction */}
          <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1758654860020-36fa3fd0dd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG51cnNlJTIwY2FyaW5nfGVufDF8fHx8MTc2NzgyNTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Healthcare worker" 
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">We Are Here For You</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The COVID-19 Allocation of Resources for Employees (CARE) Programme is the Government of Jamaica's response to the economic disruption caused by the pandemic. The Ministry of Health & Wellness works in tandem with the Ministry of Finance to deliver targeted relief to those who need it most.
              </p>
              <div className="bg-[#009B3A]/5 border-l-4 border-[#009B3A] p-6 rounded-r-lg">
                <p className="text-slate-800 font-medium italic">
                  "Our mission is to ensure no Jamaican is left behind as we navigate these unprecedented health challenges together."
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Detailed Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Available Assistance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#009B3A] transition-colors group">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#009B3A] transition-colors">
                  <DollarSign size={24} className="text-[#009B3A] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Compassionate Grant</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  A one-time cash transfer of J$10,000 for unemployed individuals or those informally employed who have lost income.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> Valid ID required</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> Proof of unemployment</li>
                </ul>
              </div>

              {/* Benefit 2 */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#009B3A] transition-colors group">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#009B3A] transition-colors">
                  <Package size={24} className="text-[#009B3A] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">CARE Packages</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Bi-weekly delivery of essential food items and sanitation supplies to vulnerable households and quarantined zones.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> For elderly (65+)</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> For disabled persons</li>
                </ul>
              </div>

              {/* Benefit 3 */}
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-[#009B3A] transition-colors group">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#009B3A] transition-colors">
                  <Users size={24} className="text-[#009B3A] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Business Support</h3>
                <p className="text-slate-600 mb-4 text-sm">
                  Small business grants for tourism and transport operators affected by lockdown measures and travel restrictions.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> Tax compliance req.</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-[#009B3A]" /> Industry specific</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#009B3A] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Check Your Eligibility</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              If you believe you qualify for any of the above packages, please fill out the application form. Our team will review your request within 5-7 business days.
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#009B3A] hover:bg-slate-100 px-8 py-6 text-lg font-bold rounded-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
