import React from 'react';
import LandscapingFlyer from './LandscapingFlyer';

const ResponsiveFlyer = () => {
  return (
    <div className="w-full">
      {/* Desktop/Tablet View - A4 proportions */}
      <div className="hidden md:block">
        <LandscapingFlyer />
      </div>
      
      {/* Mobile View - Simplified layout */}
      <div className="md:hidden bg-white shadow-lg mx-4 rounded-lg overflow-hidden">
        {/* Mobile Header */}
        <div className="bg-gradient-to-br from-green-800 to-green-600 text-white p-6 text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1751651593722-c4ee8f05b64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGVkJTIwZ2FyZGVuJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzU1OTMyNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">IK</span>
              </div>
              <div>
                <div className="font-bold">Isaac Karanu Landscaping</div>
                <div className="text-sm opacity-90">Growing Beautiful Spaces Since 2014</div>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">TRANSFORM YOUR OUTDOOR SPACE</h1>
            <p className="text-lg opacity-95 mb-4">Professional Landscaping That Increases Property Value</p>
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
              <p className="font-bold">TIRED OF YOUR BORING YARD?<br/>We'll Fix That This Week!</p>
            </div>
          </div>
        </div>

        {/* Mobile Main Offer */}
        <div className="bg-orange-500 text-white p-4 text-center">
          <div className="font-bold text-lg mb-1">🎯 FREE CONSULTATION + 20% OFF</div>
          <div className="text-sm">Valid for calls within 48 hours • Only 5 spots left!</div>
        </div>

        {/* Mobile Services */}
        <div className="p-6 space-y-4">
          <h3 className="text-green-800 font-bold text-lg text-center">Our Expert Services</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <span className="text-2xl">🌱</span>
              <div>
                <div className="font-semibold">Garden Design & Installation</div>
                <div className="text-sm text-gray-600">"Turn your vision into reality"</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <span className="text-2xl">🌿</span>
              <div>
                <div className="font-semibold">Lawn Care & Maintenance</div>
                <div className="text-sm text-gray-600">"Always green, always gorgeous"</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
              <span className="text-2xl">💧</span>
              <div>
                <div className="font-semibold">Irrigation & Compound Beautification</div>
                <div className="text-sm text-gray-600">"Water-smart, worry-free"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Social Proof */}
        <div className="bg-gray-50 p-4 mx-4 rounded-lg mb-4">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
            <p className="font-semibold text-sm">200+ Happy Homeowners in Kajiado County</p>
            <div className="bg-white p-3 rounded mt-2 text-sm">
              <p className="italic">"Isaac transformed our compound in 3 days. Neighbors keep asking for his number!"</p>
              <p className="font-semibold mt-1">- Mary K., Ongata Rongai</p>
            </div>
          </div>
        </div>

        {/* Mobile Contact - Most Important */}
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-xl font-bold text-center mb-4">GET YOUR FREE QUOTE NOW!</h2>
          
          <div className="space-y-3">
            <a href="tel:+254792211741" className="block bg-white text-green-600 p-4 rounded-lg text-center font-bold text-lg">
              📞 CALL: +254 792 211 741
            </a>
            <a href="https://wa.me/254775269628" className="block bg-green-500 text-white p-4 rounded-lg text-center font-bold text-lg">
              💬 WhatsApp: +254 775 269 628
            </a>
            <a href="mailto:sckaranu@gmail.com" className="block bg-gray-100 text-gray-800 p-3 rounded-lg text-center font-semibold">
              ✉️ sckaranu@gmail.com
            </a>
          </div>

          <div className="text-center mt-4 space-y-2">
            <p className="text-sm opacity-90">Proudly Serving Ongata Rongai & Surrounding Areas</p>
            <p className="text-xs opacity-80">Licensed & Insured • 10+ Years Experience • Same Day Response</p>
            <div className="bg-white/20 inline-block px-3 py-1 rounded text-xs mt-2">
              Promo Code: FLYER2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFlyer;