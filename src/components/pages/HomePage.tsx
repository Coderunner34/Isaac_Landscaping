import React from 'react';
import { ArrowRight, CheckCircle, Star, MessageCircle, Phone, Award, Users, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage = ({ onPageChange }: HomePageProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254775269628?text=Hello%20Isaac!%20I%27m%20interested%20in%20a%20free%20consultation%20for%20my%20garden.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+254792211741', '_self');
  };

  const services = [
    {
      icon: '🌱',
      title: 'Garden Design & Installation',
      description: 'Custom landscape designs tailored to your space and style',
      price: 'From KSH 15,000'
    },
    {
      icon: '🌿',
      title: 'Lawn Care & Maintenance',
      description: 'Keep your lawn green and healthy year-round',
      price: 'Starting from KSH 3,000/month'
    },
    {
      icon: '💧',
      title: 'Irrigation Systems',
      description: 'Smart watering solutions for efficient garden care',
      price: 'plans from KSH 25,000'
    },
    {
      icon: '🌳',
      title: 'Tree & Shrub Care',
      description: 'Professional planting, pruning, and maintenance',
      price: 'From KSH 5,000'
    }
  ];

  const testimonials = [
    {
      name: 'Mary Wanjiku',
      location: 'Ongata Rongai',
      text: 'His team transformed our compound in just 3 days. The irrigation system he installed has saved us so much time and water. Highly recommend!',
      rating: 5,
      project: 'Complete Garden Makeover'
    },
    {
      name: 'David Kiprotich',
      location: 'Kajiado',
      text: 'Professional work and fair pricing. Our lawn has never looked better. Isaac really knows his craft.',
      rating: 5,
      project: 'Lawn Installation & Maintenance'
    },
    {
      name: 'Grace Muthoni',
      location: 'Karen',
      text: 'It was a good investment we made for our home. The garden design exceeded our expectations and increased our property value.',
      rating: 5,
      project: 'Landscape Design'
    }
  ];

  const stats = [
    { number: '20+', label: 'Happy Clients' },
    { number: '4+', label: 'Years Experience' },
    { number: '19+', label: 'Projects Completed' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://st.hzcdn.com/simgs/0ff17c8b085bc25b_14-1634/_.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-green-600/90 text-white border-green-500">
         🌱 Trusted Landscaping & Renovation Services You Can Rely On
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your
            <span className="block text-green-400">Outdoor Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional landscaping that increases your property value and brings your vision to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book in 2 Minutes
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +254 792 211 741
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Same Day Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>99.9% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From design to maintenance, we provide comprehensive landscaping solutions for homes and businesses across Kenya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-green-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="font-semibold text-green-700">{service.price}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onPageChange('services')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              View All Services & Pricing <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Transformations
            </h2>
            <p className="text-lg text-gray-600">
              See how we've transformed outdoor spaces across Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative group">
              <ImageWithFallback 
                src="https://bestcarecleaning.co.ke/wp-content/uploads/2023/09/301957007_503963318400971_7667422548469977273_n-1.jpg"
                alt="Modern landscape design"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="font-bold text-lg mb-2">Modern Garden Design</h4>
                  <p className="text-sm">Ongata Rongai • From KSH 15,000 – 85,000</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <ImageWithFallback 
                src="https://5.imimg.com/data5/SELLER/Default/2021/4/LQ/YC/AY/59072755/lawn-installation-service.jpg"
                alt="Luxury garden transformation"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="font-bold text-lg mb-2">Luxury Transformation</h4>
                 <p className="text-sm">Karen • From KSH 45,000</p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <ImageWithFallback 
                src="https://i.pinimg.com/474x/cf/e6/f6/cfe6f670c972429c743eb60a2941436b.jpg"
                alt="Outdoor patio design"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="font-bold text-lg mb-2">Outdoor Living Space</h4>
                  <p className="text-sm">Nairobi West • From KSH 30,000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onPageChange('portfolio')}
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3"
            >
              View Complete Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">4.9/5 from 200+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-green-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-xs text-green-600 mt-1">{testimonial.project}</div>
                </div>
              </Card>
            ))}
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
        <div className="max-w-4xl mx-auto px-4 text-center" >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote today. Available 7 days a week including evenings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start My Transformation
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              <span>Over 20+ Happy Clients</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Same Day Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;