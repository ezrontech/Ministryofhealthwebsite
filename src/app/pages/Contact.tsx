import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    parish: '',
    needType: 'compassionate_grant', // default
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here we would connect to Supabase
    console.log('Form submitted:', formData);
    
    toast.success("Application Submitted Successfully", {
      description: "We have received your request and will contact you shortly."
    });
    
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      parish: '',
      needType: 'compassionate_grant',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact & Application</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Please fill out the form below to apply for COVID-19 relief or to get in touch with our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#009B3A]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-[#009B3A]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Headquarters</h4>
                    <p className="text-slate-600 text-sm mt-1">10-16 Grenada Way<br/>Kingston 5, Jamaica</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#009B3A]/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-[#009B3A]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone</h4>
                    <p className="text-slate-600 text-sm mt-1">888-ONE-LOVE (663-5683)</p>
                    <p className="text-slate-600 text-sm">876-542-5998</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#009B3A]/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-[#009B3A]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                    <p className="text-slate-600 text-sm mt-1">covid19@moh.gov.jm</p>
                    <p className="text-slate-600 text-sm">support@moh.gov.jm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#009B3A]/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-[#009B3A]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Hours</h4>
                    <p className="text-slate-600 text-sm mt-1">Mon - Fri: 8:30 AM - 5:00 PM</p>
                    <p className="text-slate-600 text-sm">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#009B3A] p-8 rounded-xl shadow-sm text-white">
              <h3 className="text-xl font-bold mb-4">Emergency?</h3>
              <p className="text-white/90 mb-6 text-sm">
                If you are experiencing severe symptoms such as difficulty breathing, please call the emergency hotline immediately.
              </p>
              <a href="tel:119" className="inline-block w-full bg-white text-[#009B3A] text-center py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Call 119
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-t-[#009B3A]">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Relief Application Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all"
                      placeholder="876-555-0123"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium text-slate-700">Street Address</label>
                    <input
                      required
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all"
                      placeholder="123 Hope Road"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="parish" className="text-sm font-medium text-slate-700">Parish</label>
                    <select
                      id="parish"
                      name="parish"
                      value={formData.parish}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a Parish</option>
                      <option value="Kingston">Kingston</option>
                      <option value="St. Andrew">St. Andrew</option>
                      <option value="St. Catherine">St. Catherine</option>
                      <option value="Clarendon">Clarendon</option>
                      <option value="Manchester">Manchester</option>
                      <option value="St. Elizabeth">St. Elizabeth</option>
                      <option value="Westmoreland">Westmoreland</option>
                      <option value="Hanover">Hanover</option>
                      <option value="St. James">St. James</option>
                      <option value="Trelawny">Trelawny</option>
                      <option value="St. Ann">St. Ann</option>
                      <option value="St. Mary">St. Mary</option>
                      <option value="Portland">Portland</option>
                      <option value="St. Thomas">St. Thomas</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="needType" className="text-sm font-medium text-slate-700">Type of Assistance Needed</label>
                  <select
                    id="needType"
                    name="needType"
                    value={formData.needType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="compassionate_grant">Compassionate Grant (Financial)</option>
                    <option value="care_package">CARE Package (Food/Supplies)</option>
                    <option value="business_grant">Small Business Support</option>
                    <option value="medical_assistance">Medical Assistance</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009B3A] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please describe your situation briefly..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#009B3A] hover:bg-[#007a2d] text-white py-6 text-lg font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Application <Send size={18} />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to the processing of your personal data for the purpose of relief distribution.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
