import React from 'react';
import { Heart, Sprout, BookOpen, Users, MessageCircle, CheckCircle, DollarSign, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface BudgetFriendlyServicesProps {
  onWhatsAppContact: (service: string, budget: string) => void;
}

const BudgetFriendlyServices: React.FC<BudgetFriendlyServicesProps> = ({ onWhatsAppContact }) => {
  const budgetPackages = [
    {
      title: 'Shoestring Budget Package',
      priceRange: 'KSH 500 - 2,000',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-red-50 border-red-200',
      textColor: 'text-red-700',
      description: 'Perfect for students, young families, or anyone starting small',
      features: [
        '1-hour phone/WhatsApp consultation',
        'Basic garden plan sketch',
        'Plant selection for your budget',
        'DIY planting guide with photos',
        'Soil improvement tips using kitchen waste',
        '30-day WhatsApp support'
      ],
      whatYouGet: [
        'Detailed shopping list with prices',
        'Step-by-step planting instructions',
        'Native plant recommendations',
        'Seasonal care calendar'
      ],
      realExample: 'Recent success: Transformed a 20m² balcony garden for KSH 1,200 total cost'
    },
    {
      title: 'Smart Starter Package',
      priceRange: 'KSH 2,000 - 8,000',
      icon: <Sprout className="w-6 h-6" />,
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
      description: 'Hybrid approach - professional guidance with DIY implementation',
      features: [
        'Site visit consultation (within 20km)',
        'Detailed garden design plan',
        'Material sourcing assistance',
        'Half-day hands-on training',
        'Plant installation demo',
        '60-day support & follow-up'
      ],
      whatYouGet: [
        '3D visualization of your space',
        'Phased implementation plan',
        'Supplier contacts & discounts',
        'Tool rental guidance'
      ],
      realExample: 'Recent success: Complete front yard makeover in Ongata Rongai for KSH 6,500'
    },
    {
      title: 'Community Group Special',
      priceRange: 'KSH 1,000 per person',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
      description: 'Group workshops for neighborhoods, churches, schools',
      features: [
        'Group workshop (5+ people)',
        'Hands-on training session',
        'Bulk plant purchasing power',
        'Shared tools & resources',
        'Ongoing community support',
        'Quarterly follow-up sessions'
      ],
      whatYouGet: [
        'Group discount on materials',
        'Community garden planning',
        'Skill-sharing network',
        'Seasonal workshops'
      ],
      realExample: 'Recent success: 12 families in Kajiado learned container gardening - KSH 1,000 each'
    },
    {
      title: 'Learning & Earning Package',
      priceRange: 'KSH 3,000 - 10,000',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
      description: 'Learn landscaping skills while improving your space',
      features: [
        'Intensive 2-day training program',
        'Hands-on practice in your garden',
        'Certificate of completion',
        'Business startup guidance',
        'Referral program enrollment',
        'Advanced technique workshops'
      ],
      whatYouGet: [
        'Professional skill development',
        'Income generation potential',
        'Tool kit recommendations',
        'Client acquisition strategies'
      ],
      realExample: 'Success story: 3 participants now earning KSH 20,000+ monthly as part-time landscapers'
    }
  ];

  const microServices = [
    {
      service: 'Plant Health Diagnosis',
      price: 'KSH 500',
      time: '30 mins',
      description: 'WhatsApp photo consultation for sick plants'
    },
    {
      service: 'Soil Testing & Advice',
      price: 'KSH 800',
      time: '1 hour',
      description: 'Basic soil analysis with improvement recommendations'
    },
    {
      service: 'Quick Garden Cleanup',
      price: 'KSH 1,500',
      time: '3 hours',
      description: 'Weeding, pruning, and basic tidying for small spaces'
    },
    {
      service: 'Plant Rescue Service',
      price: 'KSH 1,000',
      time: '2 hours',
      description: 'Emergency care for dying plants with recovery plan'
    },
    {
      service: 'Seasonal Planting Guide',
      price: 'KSH 600',
      time: 'Digital',
      description: 'Customized planting calendar for your location'
    },
    {
      service: 'Container Garden Setup',
      price: 'KSH 2,000',
      time: '4 hours',
      description: 'Complete container garden with plants and instructions'
    }
  ];

  const creativeSolutions = [
    {
      title: 'Seed Library Exchange',
      description: 'Trade seeds with other gardeners - free with any consultation',
      icon: '🌱'
    },
    {
      title: 'Plant Rescue Network',
      description: 'Get free plants from our network of gardeners upgrading their spaces',
      icon: '🏥'
    },
    {
      title: 'Seasonal Work Exchange',
      description: 'Help with larger projects in exchange for plants and training',
      icon: '🤝'
    },
    {
      title: 'Compost Collective',
      description: 'Join our community compost program - free soil improvement',
      icon: '♻️'
    },
    {
      title: 'Tool Sharing Program',
      description: 'Borrow tools from our community library - pay only for usage',
      icon: '🛠️'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-green-600 text-white">
          💚 No Budget Too Small • Everyone Deserves a Beautiful Garden
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Budget-Friendly Landscaping Solutions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Beautiful gardens don't have to cost a fortune. We believe everyone deserves access to 
          professional landscaping guidance, regardless of budget. From KSH 500 consultations 
          to creative payment alternatives.
        </p>
      </div>

      {/* Budget Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {budgetPackages.map((pkg, index) => (
          <Card key={index} className={`p-6 ${pkg.color} hover:shadow-lg transition-shadow`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 ${pkg.color} rounded-lg flex items-center justify-center ${pkg.textColor}`}>
                {pkg.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${pkg.textColor} mb-1`}>{pkg.title}</h3>
                <div className={`text-2xl font-bold ${pkg.textColor} mb-2`}>{pkg.priceRange}</div>
                <p className="text-gray-700 text-sm">{pkg.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <ul className="space-y-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">You'll Receive:</h4>
                <ul className="space-y-1">
                  {pkg.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <DollarSign className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-3 rounded-lg border">
                <h5 className="font-semibold text-gray-800 mb-1 text-sm">💡 Success Story:</h5>
                <p className="text-xs text-gray-600 italic">{pkg.realExample}</p>
              </div>

              <Button 
                onClick={() => onWhatsAppContact(pkg.title, pkg.priceRange)}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started - WhatsApp Isaac
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Micro Services */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro Services</h3>
          <p className="text-gray-600">Quick, affordable solutions for specific needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {microServices.map((service, index) => (
            <Card key={index} className="p-4 border-green-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-gray-900">{service.service}</h4>
                <Badge variant="outline" className="text-green-700 border-green-600">
                  {service.price}
                </Badge>
              </div>
              <p className="text-gray-700 text-sm mb-3">{service.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{service.time}</span>
              </div>
              <Button 
                onClick={() => onWhatsAppContact(service.service, service.price)}
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Creative Solutions */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Money-Saving Solutions</h3>
          <p className="text-gray-600">Alternative ways to access professional landscaping</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeSolutions.map((solution, index) => (
            <Card key={index} className="p-6 text-center border-green-100">
              <div className="text-4xl mb-3">{solution.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{solution.title}</h4>
              <p className="text-gray-700 text-sm">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Flexibility */}
      <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Flexible Payment Options
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We believe beautiful gardens should be accessible to everyone
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Micro Payments</h4>
              <p className="text-sm text-gray-600">Pay as little as KSH 100 per week for ongoing services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Work Exchange</h4>
              <p className="text-sm text-gray-600">Trade your skills or labor for landscaping services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Phased Projects</h4>
              <p className="text-sm text-gray-600">Spread your project over 6-12 months to fit any budget</p>
            </div>
          </div>
          
          <Button 
            onClick={() => onWhatsAppContact('Flexible Payment Discussion', 'Any Budget')}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Discuss Your Budget with Isaac
          </Button>
          
          <p className="text-sm text-gray-600 mt-4">
            💬 "No matter your budget, let's find a way to make your garden dreams come true" - Isaac
          </p>
        </div>
      </Card>

      {/* Testimonials from Budget Clients */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories from Small Budgets</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-green-100">
            <p className="text-gray-700 italic mb-4">
              "I only had KSH 800 but Isaac helped me create a beautiful herb garden that now saves me money on groceries!"
            </p>
            <div className="text-sm text-gray-600">
              <strong>Jane Wanjiku</strong> - Rongai<br/>
              <span className="text-green-600">Budget: KSH 800</span>
            </div>
          </Card>
          
          <Card className="p-6 border-green-100">
            <p className="text-gray-700 italic mb-4">
              "The community workshop was amazing. 8 neighbors learned together and our whole street looks beautiful now!"
            </p>
            <div className="text-sm text-gray-600">
              <strong>Peter Kamau</strong> - Kajiado<br/>
              <span className="text-green-600">Budget: KSH 1,000 per person</span>
            </div>
          </Card>
          
          <Card className="p-6 border-green-100">
            <p className="text-gray-700 italic mb-4">
              "Started with KSH 2,000 consultation, now I'm making money as a part-time landscaper myself!"
            </p>
            <div className="text-sm text-gray-600">
              <strong>Mary Nyambura</strong> - Kikuyu<br/>
              <span className="text-green-600">Started with: KSH 2,000</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BudgetFriendlyServices;