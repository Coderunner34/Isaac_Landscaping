import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Leaf, Star, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254775269628?text=Hello%20Isaac!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20your%20landscaping%20services.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+254792211741', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:sckaranu@gmail.com', '_self');
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Isaac' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'contact', label: 'Get Quote' }
  ];

  const services = [
    'Garden Design & Installation',
    'Lawn Care & Maintenance', 
    'Irrigation Systems',
    'Tree & Shrub Care',
    'Garden Cleanup',
    'Compound Beautification'
  ];

  const serviceAreas = [
    'Ongata Rongai',
    'Kajiado County',
    'Karen & Langata',
    'Ngong & Kiserian',
    'Kitengela',
    'Machakos'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Isaac Karanu</div>
                <div className="text-sm text-green-400">Landscaping Expert</div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              Professional landscaping services across Kenya. Transforming outdoor spaces 
              with creativity, quality, and care since 2014.
            </p>
            
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-300">4.9/5 from 200+ reviews</span>
            </div>
            
            <div className="space-y-2">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: +254 775 269 628
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline" 
                className="w-full border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: +254 792 211 741
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onPageChange(link.id)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-semibold text-white mb-2">Get Started</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div>🆓 Free Consultation</div>
                <div>📞 Same Day Response</div>
                <div>✅ 100% Satisfaction Guarantee</div>
                <div>🔒 Licensed & Insured</div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  {service}
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button 
                onClick={() => onPageChange('services')}
                size="sm"
                variant="outline"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
              >
                View All Services & Pricing
              </Button>
            </div>
          </div>
          
          {/* Contact & Service Areas */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white">Contact & Service Areas</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">WhatsApp (Preferred)</div>
                  <div className="text-gray-300">+254 775 269 628</div>
                  <div className="text-gray-400 text-xs">Usually responds within 30 minutes</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+254 792 211 741</div>
                  <div className="text-gray-400 text-xs">7 AM - 8 PM, 7 days a week</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300 break-all">sckaranu@gmail.com</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-1 text-xs text-gray-300">
                {serviceAreas.map((area, index) => (
                  <div key={index}>• {area}</div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                + Other areas in Central Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Isaac Karanu Landscaping. All rights reserved. Licensed & Insured Professional Landscaper.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for Kenya's gardens</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center text-xs text-gray-500">
              <p className="mb-2">
                <strong>Professional Landscaping Services:</strong> Garden Design, Lawn Care, Irrigation Systems, 
                Tree Care, Garden Maintenance, Compound Beautification
              </p>
              <p>
                <strong>Service Areas:</strong> Ongata Rongai, Kajiado, Karen, Langata, Ngong, Kiserian, 
                Kitengela, Machakos, Kiambu, Kikuyu, Ruiru, Ruaka, and surrounding areas in Central Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;