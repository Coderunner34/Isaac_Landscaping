import React from 'react';
import { CheckCircle, MessageCircle, Phone, Star, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import SmartPricingCalculator from '../SmartPricingCalculator';
import BudgetFriendlyServices from '../BudgetFriendlyServices';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange }) => {
  const handleWhatsAppQuote = (service: string) => {
    const message = `Hello Isaac! I'm interested in getting a quote for ${service}. Please send me more details and pricing.`;
    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSmartCalculatorQuote = (projectDetails: any) => {
    const message = `Hello Isaac! I used your smart calculator and here are my project details:

Project: ${projectDetails.projectType.replace('-', ' ')} 
Location: ${projectDetails.location}
Plot Size: ${projectDetails.plotSize}m²
Budget: KSH ${projectDetails.userBudget?.toLocaleString() || 'To be discussed'}

Calculated Options:
- DIY Consultation: KSH ${projectDetails.calculatedPrice.diy.toLocaleString()}
- Budget Package: KSH ${projectDetails.calculatedPrice.minimum.toLocaleString()}
- Standard Package: KSH ${projectDetails.calculatedPrice.standard.toLocaleString()}
- Premium Package: KSH ${projectDetails.calculatedPrice.premium.toLocaleString()}

Please send me a detailed quote and let me know the next steps!`;

    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBudgetServiceContact = (service: string, budget: string) => {
    const message = `Hello Isaac! I'm interested in your ${service} (${budget}). Please tell me more about this option and how to get started.`;
    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+254792211741', '_self');
  };

  const services = [
    {
      id: 'garden-design',
      title: 'Garden Design & Installation',
      description: 'Complete landscape design and installation services tailored to your space, style, and budget.',
      image: 'https://i.roamcdn.net/hz/pi/listing-thumb-543w/45e19907848ab90b08ef3209f5e88653/-/horizon-files-prod/pi/picture/qpkrzd4/f34c0040a30d4aec07cb899bf964e79c244bed3d.jpg',
      packages: [
        {
          name: 'Basic Design',
          price: 'KSH 15,000 - 35,000',
          features: ['Site analysis', 'Basic design plan', 'Plant selection guide', 'Installation consultation'],
          popular: false
        },
        {
          name: 'Premium Design',
          price: 'KSH 40,000 - 85,000',
          features: ['Detailed site survey', '3D design visualization', 'Complete plant list', 'Installation & supervision', 'Irrigation planning'],
          popular: true
        },
        {
          name: 'Luxury Package',
          price: 'KSH 100,000+',
          features: ['Master landscape plan', '3D rendering & walkthrough', 'Premium plant selection', 'Full installation team', 'Lighting design', '6-month maintenance'],
          popular: false
        }
      ]
    },
    {
      id: 'lawn-care',
      title: 'Lawn Care & Maintenance',
      description: 'Professional lawn installation, care, and ongoing maintenance services to keep your grass green and healthy.',
      image: 'https://www.rizzomasons.com/wp-content/uploads/sites/279/bb-plugin/cache/Rizzo_23-landscape-landscape-f45f493c1f15509f162bea8c435ff833-5b79966223030.jpeg',
      packages: [
        {
          name: 'New Lawn Installation',
          price: 'KSH 200 - 400 per sqm',
          features: ['Soil preparation', 'Quality grass seed/sod', 'Initial fertilization', 'Watering setup', '30-day guarantee'],
          popular: false
        },
        {
          name: 'Monthly Maintenance',
          price: 'KSH 3,000 - 8,000/month',
          features: ['Weekly mowing', 'Fertilization', 'Weed control', 'Edge trimming', 'Seasonal care'],
          popular: true
        },
        {
          name: 'Lawn Recovery',
          price: 'KSH 5,000 - 15,000',
          features: ['Problem diagnosis', 'Soil treatment', 'Reseeding/patching', 'Fertilization program', 'Recovery monitoring'],
          popular: false
        }
      ]
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      description: 'Smart and efficient watering solutions including drip irrigation, sprinkler systems, and automated controls.',
      image: 'https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NTkzMzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      packages: [
        {
          name: 'Basic Drip System',
          price: 'KSH 25,000 - 45,000',
          features: ['Drip irrigation setup', 'Timer control', 'Garden bed coverage', 'Water-efficient design', '2-year warranty'],
          popular: false
        },
        {
          name: 'Smart Sprinkler System',
          price: 'KSH 60,000 - 120,000',
          features: ['Automated sprinkler zones', 'Smart controller', 'Weather sensors', 'Mobile app control', 'Professional installation'],
          popular: true
        },
        {
          name: 'Complete Water Management',
          price: 'KSH 150,000+',
          features: ['Comprehensive system design', 'Multiple irrigation zones', 'Rain harvesting integration', 'Soil moisture sensors', 'Full automation', 'Maintenance package'],
          popular: false
        }
      ]
    },
    {
      id: 'tree-care',
      title: 'Tree & Shrub Services',
      description: 'Professional tree planting, pruning, removal, and shrub care services for healthy and beautiful landscapes.',
      image: 'https://www.familyhandyman.com/wp-content/uploads/2021/07/shrubs-GettyImages-1148591849.jpg',
      packages: [
        {
          name: 'Tree Planting',
          price: 'KSH 5,000 - 15,000 per tree',
          features: ['Tree selection consultation', 'Proper planting techniques', 'Soil amendment', 'Initial care instructions', '1-year growth guarantee'],
          popular: false
        },
        {
          name: 'Pruning & Maintenance',
          price: 'KSH 2,000 - 8,000 per session',
          features: ['Professional pruning', 'Health assessment', 'Pest inspection', 'Fertilization', 'Debris removal'],
          popular: true
        },
        {
          name: 'Tree Removal',
          price: 'KSH 8,000 - 25,000',
          features: ['Safe tree removal', 'Stump grinding', 'Site cleanup', 'Disposal services', 'Insurance coverage'],
          popular: false
        }
      ]
    }
  ];

  const additionalServices = [
    { name: 'Garden Cleanup & Restoration', price: 'KSH 5,000 - 20,000', icon: '🧹' },
    { name: 'Compound Beautification', price: 'KSH 10,000 - 50,000', icon: '🏡' },
    { name: 'Hardscaping (Paths, Walls)', price: 'KSH 2,000 - 5,000 per sqm', icon: '🧱' },
    { name: 'Outdoor Lighting', price: 'KSH 15,000 - 80,000', icon: '💡' },
    { name: 'Water Features', price: 'KSH 25,000 - 150,000', icon: '⛲' },
    { name: 'Seasonal Plant Care', price: 'KSH 2,000 - 8,000', icon: '🌺' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-600 text-white">
            💰 Transparent Pricing • No Hidden Costs
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Landscaping Services
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            From small garden makeovers to complete landscape transformations. 
            All services come with our 100% satisfaction guarantee and competitive pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleWhatsAppQuote('general consultation')}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book  Free Consultation — Limited Slots
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              My Garden, My Design, My Plan  - Get quote
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Pricing Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600 text-white">
              🚀 NEW: AI-Powered Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Pricing Calculator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get instant, personalized quotes based on your specific needs. Our smart calculator 
              considers location, plot size, soil conditions, and your budget to provide accurate pricing.
            </p>
          </div>
          
          <SmartPricingCalculator onGetQuote={handleSmartCalculatorQuote} />
        </div>
      </section>

      {/* Budget-Friendly Services */}
      <section className="py-20 bg-gray-50">
        <BudgetFriendlyServices onWhatsAppContact={handleBudgetServiceContact} />
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Professional landscaping services with transparent pricing. All prices include consultation and basic materials.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {service.packages.map((pkg, pkgIndex) => (
                      <Card key={pkgIndex} className={`p-6 ${pkg.popular ? 'border-green-500 border-2 relative' : 'border-gray-200'}`}>
                        {pkg.popular && (
                          <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                            Most Popular
                          </Badge>
                        )}
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{pkg.name}</h4>
                        <div className="text-2xl font-bold text-green-700 mb-4">{pkg.price}</div>
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          onClick={() => handleWhatsAppQuote(`${service.title} - ${pkg.name}`)}
                          className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
                        >
                          Get Quote
                        </Button>
                      </Card>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleWhatsAppQuote(service.title)}
                    variant="outline"
                    className="border-green-600 text-green-700 hover:bg-green-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Discuss Custom Requirements
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete your outdoor transformation with our specialized services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service.name}</h3>
                <div className="text-green-700 font-semibold mb-4">{service.price}</div>
                <Button 
                  onClick={() => handleWhatsAppQuote(service.name)}
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Get Quote
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Flexible Payment Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-green-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">M-Pesa</h3>
              <p className="text-gray-600 text-sm">Pay securely using M-Pesa. We accept payments to our registered business number.</p>
            </Card>
            
            <Card className="p-6 border-green-100">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="font-bold text-lg mb-2">Bank Transfer</h3>
              <p className="text-gray-600 text-sm">Direct bank transfers for larger projects. Bank details provided upon quotation.</p>
            </Card>
            
            <Card className="p-6 border-green-100">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold text-lg mb-2">Flexible Plans</h3>
              <p className="text-gray-600 text-sm">Payment plans available for projects over KSH 50,000. Discuss terms during consultation.</p>
            </Card>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-800">💰 Special Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>10% discount for projects over KSH 100,000</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free maintenance for 3 months on new installations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Refer a friend and both get 5% discount</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Senior citizens get additional 5% off</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white"
        style={{
            backgroundImage: `url('https://st.hzcdn.com/simgs/0ff17c8b085bc25b_14-1634/_.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free consultation and detailed quote today. We respond within 2 hours!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => handleWhatsAppQuote('free consultation')}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: +254 775 269 628
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +254 792 211 741
            </Button>
          </div>
          
          <div className="text-sm opacity-80">
            <p>Available 7 days a week • Same day site visits in Ongata Rongai area • Free consultations worth KSH 5,000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;