import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Calendar, Calculator } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    budget: '',
    timeframe: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hello Isaac! I'm interested in your landscaping services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}
Timeframe: ${formData.timeframe}

Message: ${formData.message}

Please send me more information and a quote. Thank you!`;

    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuickWhatsApp = (message: string) => {
    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+254792211741', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:sckaranu@gmail.com', '_self');
  };

  const quickActions = [
    {
      title: 'Emergency Garden Cleanup',
      message: 'Hello Isaac! I need emergency garden cleanup services. Can you help ASAP?',
      icon: '🚨',
      color: 'bg-red-500'
    },
    {
      title: 'Free Consultation Request',
      message: 'Hello Isaac! I\'d like to schedule a free consultation for my garden. When are you available?',
      icon: '🗓️',
      color: 'bg-green-500'
    },
    {
      title: 'Quick Price Estimate',
      message: 'Hello Isaac! Can you give me a rough estimate for landscaping my compound? I can send photos.',
      icon: '💰',
      color: 'bg-blue-500'
    },
    {
      title: 'Maintenance Inquiry',
      message: 'Hello Isaac! I\'m looking for regular garden maintenance services. What packages do you offer?',
      icon: '🌿',
      color: 'bg-green-600'
    }
  ];

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp (Preferred)',
      subtitle: 'Fastest response - Usually within 30 minutes',
      contact: '+254 775 269 628',
      action: () => handleQuickWhatsApp('Hello Isaac! I\'m interested in your landscaping services.'),
      color: 'bg-green-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Call',
      subtitle: 'Available 7 days a week, 7 AM - 8 PM',
      contact: '+254 792 211 741',
      action: handleCallClick,
      color: 'bg-blue-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      subtitle: 'For detailed project discussions',
      contact: 'sckaranu@gmail.com',
      action: handleEmailClick,
      color: 'bg-gray-600'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '7:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Emergency Services', hours: 'Available 24/7' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-600 text-white">
            📞 Available 7 Days a Week • Same Day Response
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote Today
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Ready to transform your outdoor space? Get in touch for a free consultation, 
            detailed quote, or quick advice. We respond fast and always provide honest, 
            transparent pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleQuickWhatsApp('Hello Isaac! I\'d like a free consultation for my landscaping project.')}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quick WhatsApp Quote
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +254 792 211 741
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Get immediate help with these common requests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-100">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{action.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{action.title}</h3>
                <Button 
                  onClick={() => handleQuickWhatsApp(action.message)}
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Send WhatsApp
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3 mb-12 lg:mb-0">
              <Card className="p-8 border-green-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Detailed Quote & Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out this form and we'll send all the details directly to Isaac via WhatsApp. 
                  You'll get a response within 2 hours during business hours.
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+254 7XX XXX XXX"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Location *
                      </label>
                      <Input 
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Ongata Rongai, Kajiado, etc."
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="garden-design">Garden Design & Installation</SelectItem>
                          <SelectItem value="lawn-care">Lawn Care & Maintenance</SelectItem>
                          <SelectItem value="irrigation">Irrigation System</SelectItem>
                          <SelectItem value="tree-care">Tree & Shrub Services</SelectItem>
                          <SelectItem value="cleanup">Garden Cleanup</SelectItem>
                          <SelectItem value="maintenance">Regular Maintenance</SelectItem>
                          <SelectItem value="other">Other/Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="border-green-200 focus:border-green-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under KSH 10,000</SelectItem>
                          <SelectItem value="10k-25k">KSH 10,000 - 25,000</SelectItem>
                          <SelectItem value="25k-50k">KSH 25,000 - 50,000</SelectItem>
                          <SelectItem value="50k-100k">KSH 50,000 - 100,000</SelectItem>
                          <SelectItem value="100k-200k">KSH 100,000 - 200,000</SelectItem>
                          <SelectItem value="over-200k">Over KSH 200,000</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Timeframe
                    </label>
                    <Select onValueChange={(value) => handleInputChange('timeframe', value)}>
                      <SelectTrigger className="border-green-200 focus:border-green-500">
                        <SelectValue placeholder="When would you like to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="this-week">This week</SelectItem>
                        <SelectItem value="this-month">This month</SelectItem>
                        <SelectItem value="next-month">Next month</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project... What's your vision? Any specific requirements? Current challenges with your garden?"
                      className="border-green-200 focus:border-green-500 min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleWhatsAppSubmit}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    disabled={!formData.name || !formData.phone || !formData.location || !formData.projectType}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request via WhatsApp
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    By clicking send, your information will be sent directly to Isaac via WhatsApp. 
                    You'll receive a response within 2 hours during business hours.
                  </p>
                </div>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-6">
              {/* Contact Methods */}
              <Card className="p-6 border-green-100">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Methods</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{method.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                        <Button 
                          onClick={method.action}
                          variant="outline"
                          size="sm"
                          className="text-sm border-green-600 text-green-700 hover:bg-green-50"
                        >
                          {method.contact}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Operating Hours */}
              <Card className="p-6 border-green-100">
                <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Emergency services</strong> available 24/7 for urgent garden issues, 
                    storm damage, or irrigation problems.
                  </p>
                </div>
              </Card>
              
              {/* Service Area */}
              <Card className="p-6 border-green-100">
                <h3 className="font-bold text-lg mb-4 text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Service Area
                </h3>
                <p className="text-gray-700 mb-3">
                  Primary service areas with same-day visits:
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Ongata Rongai & surrounding areas</div>
                  <div>• Kajiado County</div>
                  <div>• Karen, Langata, Ngong</div>
                  <div>• Kitengela, Kiserian</div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  We also serve other areas in Central Kenya. Ask about travel fees for locations outside our primary area.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us & Service Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Based in Ongata Rongai, serving clients across Nairobi and surrounding counties
            </p>
          </div>
          
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area Coverage</h3>
              <p className="text-gray-600 mb-4">
                Based in Ongata Rongai, Kajiado County<br/>
                Serving a 50km radius including Nairobi
              </p>
              <Button 
                onClick={() => handleQuickWhatsApp('Hello Isaac! Can you service my area? I\'m located in [Your Location].')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Check Service Availability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to help you get started
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-green-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">How quickly can you start?</h3>
              <p className="text-gray-700 text-sm">
                For consultations, usually within 24-48 hours. For project start, it depends on scope 
                but typically 3-7 days after quote approval.
              </p>
            </Card>
            
            <Card className="p-6 border-green-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Do you provide free quotes?</h3>
              <p className="text-gray-700 text-sm">
                Yes! All consultations and quotes are completely free. We only charge when you 
                decide to proceed with the project.
              </p>
            </Card>
            
            <Card className="p-6 border-green-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-700 text-sm">
                M-Pesa, bank transfers, and cash. We offer flexible payment plans for larger 
                projects over KSH 50,000.
              </p>
            </Card>
            
            <Card className="p-6 border-green-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Do you guarantee your work?</h3>
              <p className="text-gray-700 text-sm">
                100% satisfaction guarantee. All plants come with growth guarantee, and we offer 
                free maintenance for 3 months on new installations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - the best time to start your landscaping project is now. 
            Get your free consultation today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleQuickWhatsApp('Hello Isaac! I\'m ready to start my landscaping project. Can we schedule a consultation?')}
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;