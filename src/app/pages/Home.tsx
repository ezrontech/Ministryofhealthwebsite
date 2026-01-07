import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1579798005776-108ca3baf42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYW1haWNhJTIwZmxhZyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njc4MjUwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080")' 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#FED100] text-black px-4 py-1 rounded-full font-bold mb-4 text-sm uppercase tracking-wide">
              Official Government Initiative
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              COVID-19 Relief Fund<br/>
              <span className="text-[#009B3A]">Supporting Jamaica</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-100">
              Providing financial assistance and health packages to vulnerable families and individuals affected by the pandemic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-[#009B3A] hover:bg-[#007a2d] text-white px-8 py-6 text-lg rounded-full"
              >
                Apply for Relief
              </Button>
              <Button 
                onClick={() => onNavigate('about')}
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The Ministry of Health has established comprehensive support systems to ensure the well-being of our citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<ShieldCheck size={40} className="text-[#009B3A]" />}
              title="Financial Aid"
              description="One-off compassionate grants for those who have lost income due to COVID-19 restrictions."
            />
            <Card 
              icon={<Heart size={40} className="text-[#009B3A]" />}
              title="Care Packages"
              description="Food and sanitation supplies distributed to the elderly, disabled, and quarantined communities."
            />
            <Card 
              icon={<Activity size={40} className="text-[#009B3A]" />}
              title="Health Support"
              description="Free testing, vaccination access, and mental health counseling services for all Jamaicans."
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Stay Informed, Stay Safe</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Understanding how to protect yourself and your loved ones is the first step in fighting the spread of COVID-19. Watch this message from the Ministry of Health regarding safety protocols and relief distribution efforts.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-[#009B3A]/10 flex items-center justify-center text-[#009B3A]">✓</div>
                  Wear a mask in public spaces
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-[#009B3A]/10 flex items-center justify-center text-[#009B3A]">✓</div>
                  Sanitize hands frequently
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-[#009B3A]/10 flex items-center justify-center text-[#009B3A]">✓</div>
                  Maintain social distance (6 feet)
                </li>
              </ul>
              <Button onClick={() => onNavigate('about')} className="text-[#009B3A] font-bold p-0 h-auto hover:bg-transparent hover:underline flex items-center gap-2">
                View detailed guidelines <ArrowRight size={16} />
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/bPITHEiFWLc" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
      <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
