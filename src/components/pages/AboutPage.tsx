import React from 'react';
import { Award, Users, Calendar, Shield, MessageCircle, Phone, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onPageChange }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254775269628?text=Hello%20Isaac!%20I%27d%20like%20to%20know%20more%20about%20your%20landscaping%20services.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+254792211741', '_self');
  };

  const achievements = [
    { number: '200+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <Shield className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We use only the best materials and proven techniques to ensure your landscape stands the test of time.',
      icon: '🏆'
    },
    {
      title: 'Environmental Responsibility',
      description: 'Sustainable practices and water-efficient designs that benefit both your garden and the environment.',
      icon: '🌍'
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of Kenyan climate, soil conditions, and native plants for optimal results.',
      icon: '🌱'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprises. Clear, upfront pricing with detailed breakdowns for every project.',
      icon: '💰'
    }
  ];

  const serviceAreas = [
    'Ongata Rongai', 'Kajiado', 'Karen', 'Langata', 'Kiserian', 'Ngong', 
    'Kitengela', 'Machakos', 'Kikuyu', 'Ruiru', 'Kiambu', 'Ruaka'
  ];

  const certifications = [
    { name: 'Licensed Landscaping Contractor', authority: 'Kenya Association of Landscapers', year: '2014' },
    { name: 'Irrigation Systems Specialist', authority: 'East Africa Irrigation Institute', year: '2016' },
    { name: 'Sustainable Landscaping Certificate', authority: 'Green Building Council Kenya', year: '2018' },
    { name: 'Small Business License', authority: 'Kajiado County Government', year: '2024' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <Badge className="mb-6 bg-green-600 text-white">
                🌟 Trusted Local Expert Since 2014
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Isaac Karanu
              </h1>
              
              <p className="text-xl text-gray-700 mb-6">
                Your dedicated landscaping professional transforming outdoor spaces across Kenya with 
                over 10 years of experience and a passion for creating beautiful, sustainable gardens.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Connect on WhatsApp
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline" 
                  size="lg"
                  className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1734303023491-db8037a21f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc1NTkzMzEyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Isaac Karanu at work"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-green-700">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Isaac's Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Journey in Landscaping
            </h2>
            <p className="text-lg text-gray-600">
              From a passion for plants to Kenya's trusted landscaping expert
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 border-green-100">
              <h3 className="font-bold text-xl mb-4 text-green-800">The Beginning (2014)</h3>
              <p className="text-gray-700 leading-relaxed">
                My journey started with a simple love for plants and outdoor spaces. After completing my studies in 
                horticulture, I began helping neighbors in Ongata Rongai transform their gardens. What started as 
                weekend projects quickly grew into a full-time passion as word spread about the quality of my work.
              </p>
            </Card>
            
            <Card className="p-8 border-green-100">
              <h3 className="font-bold text-xl mb-4 text-green-800">Building Expertise (2015-2018)</h3>
              <p className="text-gray-700 leading-relaxed">
                I invested heavily in training and certifications, learning advanced irrigation techniques, 
                sustainable landscaping practices, and modern garden design principles. This period taught me 
                that successful landscaping isn't just about plants—it's about understanding each client's 
                unique needs, soil conditions, and lifestyle.
              </p>
            </Card>
            
            <Card className="p-8 border-green-100">
              <h3 className="font-bold text-xl mb-4 text-green-800">Growing the Business (2019-2022)</h3>
              <p className="text-gray-700 leading-relaxed">
                As client referrals increased, I expanded my services to include complete landscape design, 
                irrigation systems, and ongoing maintenance. I built a network of trusted suppliers and learned 
                to work efficiently while maintaining the highest quality standards. Every project taught me 
                something new about Kenya's diverse climates and soil conditions.
              </p>
            </Card>
            
            <Card className="p-8 border-green-100">
              <h3 className="font-bold text-xl mb-4 text-green-800">Today & Beyond (2023-Present)</h3>
              <p className="text-gray-700 leading-relaxed">
                Today, I'm proud to have transformed over 500 outdoor spaces across Kenya. My focus remains on 
                delivering exceptional value, using sustainable practices, and building lasting relationships with 
                my clients. Every garden tells a story, and I'm honored to help write yours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Values & Approach
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide every project and client relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-green-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Credentials
            </h2>
            <p className="text-lg text-gray-600">
              Licensed, insured, and certified for your peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 border-green-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600 text-sm mb-1">{cert.authority}</p>
                    <p className="text-green-600 text-sm font-semibold">Certified {cert.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-4 text-green-800">Why Choose a Licensed Professional?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Full liability insurance coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Adherence to industry standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Continuous professional development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Professional landscaping services across Nairobi and surrounding counties
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We travel throughout Central Kenya for larger projects.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask About Your Location
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Than Just Landscaping
          </h2>
          
          <div className="text-xl mb-8 opacity-90 space-y-4">
            <p>
              When you work with me, you're not just hiring a contractor—you're partnering with someone 
              who genuinely cares about creating spaces that bring joy to your daily life.
            </p>
            <p>
              I take pride in building lasting relationships with my clients, many of whom have become 
              friends over the years. Your satisfaction isn't just my goal; it's my guarantee.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project Today
            </Button>
            <Button 
              onClick={() => onPageChange('portfolio')}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              View My Work
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            <p>Available 7 days a week • Same day response • Free consultations in Ongata Rongai area</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;