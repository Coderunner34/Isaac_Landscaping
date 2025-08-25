import React from 'react';
import { Phone, MessageCircle, Mail, Star, Award, Shield, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';

const LandscapingFlyer = () => {
  return (
    <div className="max-w-[210mm] mx-auto bg-white shadow-2xl" style={{ minHeight: '297mm' }}>
      {/* Header Section - Top 25% */}
      <div className="relative h-[74mm] bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1751651593722-c4ee8f05b64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGVkJTIwZ2FyZGVuJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzU1OTMyNDMyfDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        {/* Logo and Company Info */}
        <div className="absolute top-4 right-4 text-white text-right">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">IK</span>
              </div>
              <div>
                <div className="text-sm font-bold">Isaac Karanu</div>
                <div className="text-xs opacity-90">Landscaping</div>
              </div>
            </div>
            <div className="text-xs opacity-80">Growing Beautiful Spaces Since 2014</div>
          </div>
        </div>

        {/* Main Headlines */}
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <h1 className="text-white text-4xl font-bold mb-2 drop-shadow-lg">
            TRANSFORM YOUR OUTDOOR SPACE
          </h1>
          <p className="text-white text-xl drop-shadow-md opacity-95">
            Professional Landscaping That Increases Your Property Value
          </p>
          
          {/* Urgent Headline */}
          <div className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg inline-block w-fit">
            <p className="font-bold text-lg">TIRED OF YOUR BORING YARD? We'll Fix That This Week!</p>
          </div>
        </div>
      </div>

      {/* Main Content Area - Middle 50% */}
      <div className="p-8">
        {/* Value Propositions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Badge className="bg-lime-100 text-lime-800 p-3 justify-center text-sm">
            🎁 FREE Garden Makeover Consultation Worth KES 5,000
          </Badge>
          <Badge className="bg-orange-100 text-orange-800 p-3 justify-center text-sm">
            📞 Same Day Quotes - We Come to YOU!
          </Badge>
          <Badge className="bg-green-100 text-green-800 p-3 justify-center text-sm">
            ✅ 100% Satisfaction Guarantee or Money Back
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 p-3 justify-center text-sm">
            💳 Payment Plans Available - Start for Just KES 2,000
          </Badge>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="text-green-800 font-bold text-lg border-b-2 border-green-200 pb-1">
              Our Expert Services
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">🌱</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Garden Design & Installation</div>
                  <div className="text-sm text-gray-600">"Turn your vision into reality"</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">🌿</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Lawn Care & Maintenance</div>
                  <div className="text-sm text-gray-600">"Always green, always gorgeous"</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">🌳</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Tree & Shrub Planting</div>
                  <div className="text-sm text-gray-600">"Shade and beauty that lasts"</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-800 font-bold text-lg border-b-2 border-green-200 pb-1">
              Premium Solutions
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">💧</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Irrigation Systems</div>
                  <div className="text-sm text-gray-600">"Water-smart, worry-free"</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">🏡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Compound Beautification</div>
                  <div className="text-sm text-gray-600">"First impressions that wow"</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">🧹</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Garden Cleanup & Restoration</div>
                  <div className="text-sm text-gray-600">"From messy to magnificent"</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After and Social Proof */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <h3 className="text-green-800 font-bold mb-3">Real Transformations</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1734303023491-db8037a21f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTkzMjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Before transformation"
                  className="w-full h-20 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-tr">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1750762286053-28632f48e717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzU1OTMyNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="After transformation"
                  className="w-full h-20 object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-tr">
                  AFTER
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-1 text-center">Real Results from Real Customers</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-sm">Social Proof</span>
            </div>
            <div className="text-xs space-y-1">
              <p className="font-semibold">200+ Happy Homeowners</p>
              <p className="text-gray-600">in Kajiado County</p>
              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="bg-white p-2 rounded text-xs">
                <p className="italic">"Isaac transformed our compound in 3 days. Neighbors keep asking for his number!"</p>
                <p className="font-semibold mt-1">- Mary K., Ongata Rongai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Authority and Trust Builders */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <Shield className="w-4 h-4 text-green-600" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <Award className="w-4 h-4 text-green-600" />
            <span>10+ Years Experience</span>
          </div>
          <div className="text-xs text-gray-700">
            <span className="font-semibold">Certified Specialist</span>
          </div>
          <div className="text-xs text-gray-700">
            <span className="font-semibold">Same Day Response</span>
          </div>
        </div>

        {/* Urgent Offers */}
        <div className="bg-orange-500 text-white p-4 rounded-lg mb-6 text-center">
          <div className="text-lg font-bold mb-2">🎯 LIMITED TIME OFFER!</div>
          <div className="text-xl font-bold">FREE CONSULTATION + 20% OFF FIRST PROJECT</div>
          <div className="text-sm mt-2 opacity-90">Valid for calls made within 48 hours • Only 5 Projects Accepted This Month</div>
        </div>

        {/* Secondary Offers */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 p-3 rounded text-center text-xs">
            <div className="font-semibold text-green-800">Refer a Friend</div>
            <div className="text-green-600">Both Get 10% Discount</div>
          </div>
          <div className="bg-blue-50 p-3 rounded text-center text-xs">
            <div className="font-semibold text-blue-800">Senior Citizens</div>
            <div className="text-blue-600">Additional 5% Off</div>
          </div>
          <div className="bg-purple-50 p-3 rounded text-center text-xs">
            <div className="font-semibold text-purple-800">Same Street Discount</div>
            <div className="text-purple-600">Group Projects Save More</div>
          </div>
        </div>
      </div>

      {/* Contact Section - Bottom 25% */}
      <div className="bg-gray-50 p-6 border-t-4 border-green-500">
        <div className="text-center mb-4">
          <h2 className="text-green-800 font-bold text-xl mb-2">GET YOUR FREE QUOTE TODAY!</h2>
          <p className="text-gray-600">Proudly Serving Ongata Rongai & Surrounding Areas</p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-4 gap-4 items-center">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-3 text-center bg-white border-green-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-sm text-green-800">CALL NOW</span>
                </div>
                <div className="font-bold text-lg text-gray-800">+254 792 211 741</div>
                <div className="text-xs text-gray-600">"Speak directly with Isaac"</div>
              </Card>

              <Card className="p-3 text-center bg-white border-green-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-sm text-green-800">WHATSAPP</span>
                </div>
                <div className="font-bold text-lg text-gray-800">+254 775 269 628</div>
                <div className="text-xs text-gray-600">"Quick quotes & photos"</div>
              </Card>

              <Card className="p-3 text-center bg-white border-green-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-sm text-green-800">EMAIL</span>
                </div>
                <div className="font-bold text-sm text-gray-800 break-all">sckaranu@gmail.com</div>
                <div className="text-xs text-gray-600">"Detailed discussions"</div>
              </Card>
            </div>
          </div>

          {/* QR Code Area */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 border-2 border-green-500 rounded flex items-center justify-center mb-2">
              <div className="text-xs text-gray-600 text-center leading-tight">QR<br/>CODE</div>
            </div>
            <div className="text-xs text-gray-600">SCAN for Portfolio<br/>& Prices</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3">
            📞 CALL NOW FOR FREE QUOTE
          </Button>
          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3">
            💬 WhatsApp Me Your Garden Photo
          </Button>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-4 space-y-1">
          <p className="text-sm text-gray-700 font-semibold">Your Local Garden Expert • We Know Your Soil, We Know Your Climate</p>
          <p className="text-xs text-gray-600">Weekend & Evening Consultations Available • Mention this flyer for bonus discount</p>
          <p className="text-xs text-green-700 font-semibold">No Payment Until You're 100% Happy • Free Re-do Guarantee for 6 Months</p>
        </div>

        {/* Tracking Code */}
        <div className="text-center mt-3">
          <div className="inline-block bg-gray-800 text-white px-3 py-1 rounded text-xs">
            Promo Code: FLYER2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapingFlyer;