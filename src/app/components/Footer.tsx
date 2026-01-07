import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-[#FED100] rounded-full flex items-center justify-center text-black text-sm border border-white">
                JM
              </div>
              MOHW
            </div>
            <p className="text-sm leading-relaxed mb-4">
              The Ministry of Health & Wellness is committed to ensuring that every Jamaican has access to quality healthcare and support during these challenging times.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FED100] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#FED100] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#FED100] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#FED100] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Covid-19 Updates</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Vaccination Sites</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Relief Packages</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Travel Protocols</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Mental Health Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Application Forms</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Eligibility Criteria</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#FED100] transition-colors">Emergency Contacts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FED100] mt-0.5 shrink-0" />
                <span>10-16 Grenada Way,<br/>Kingston 5, Jamaica</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FED100] shrink-0" />
                <span>888-ONE-LOVE (663-5683)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FED100] shrink-0" />
                <span>covid19@moh.gov.jm</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-[#FED100] shrink-0" />
                <span>www.moh.gov.jm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ministry of Health & Wellness Jamaica. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
