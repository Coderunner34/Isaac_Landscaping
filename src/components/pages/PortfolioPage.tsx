import React, { useState } from 'react';
import { Filter, MessageCircle, MapPin, Calendar, DollarSign, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PortfolioPageProps {
  onPageChange: (page: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleWhatsAppInquiry = (projectType: string) => {
    const message = `Hello Isaac! I saw your ${projectType} project in your portfolio and I'm interested in something similar for my property. Can you provide a quote?`;
    window.open(`https://wa.me/254775269628?text=${encodeURIComponent(message)}`, '_blank');
  };

  const portfolioProjects = [
    {
      id: 1,
      title: 'Modern Family Garden Transformation',
      category: 'garden-design',
      location: 'Ongata Rongai',
      budget: 'KSH 85,000',
      duration: '5 days',
      year: '2024',
      beforeImage: 'https://images.unsplash.com/photo-1734303023491-db8037a21f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc1NTkzMzEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW5kc2NhcGUlMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzU1ODcyNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete transformation of a neglected backyard into a stunning family garden with native plants, modern pathways, and efficient irrigation system.',
      features: ['Native plant garden', 'Stone pathways', 'Drip irrigation', 'Outdoor seating area', 'LED lighting'],
      testimonial: {
        text: 'Isaac exceeded our expectations! Our garden is now the pride of our home.',
        author: 'Mary Wanjiku',
        rating: 5
      }
    },
    {
      id: 2,
      title: 'Luxury Estate Landscaping',
      category: 'luxury',
      location: 'Karen',
      budget: 'KSH 250,000',
      duration: '12 days',
      year: '2024',
      beforeImage: 'https://images.unsplash.com/photo-1558969330-ce91b84b1348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBtYWludGVuYW5jZSUyMHRvb2xzfGVufDF8fHx8MTc1NTkzMzEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1562886695-0f3c22a48bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NTU5MzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'High-end landscape design for a luxury estate featuring water features, premium plants, sophisticated lighting, and entertainment areas.',
      features: ['Water feature', 'Premium plant selection', 'Smart irrigation', 'Landscape lighting', 'Entertainment zones'],
      testimonial: {
        text: 'The attention to detail was remarkable. Our property value increased significantly.',
        author: 'David Kiprotich',
        rating: 5
      }
    },
    {
      id: 3,
      title: 'Smart Irrigation System Installation',
      category: 'irrigation',
      location: 'Kajiado',
      budget: 'KSH 45,000',
      duration: '3 days',
      year: '2024',
      beforeImage: 'https://images.unsplash.com/photo-1675415782443-32685e238b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBsYW5kc2NhcGluZ3xlbnwxfHx8fDE3NTU5MzMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1738598665698-7fd7af4b5e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcnJpZ2F0aW9uJTIwc3lzdGVtJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NTkzMzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Installation of automated irrigation system with weather sensors and mobile app control, reducing water usage by 40%.',
      features: ['Smart controllers', 'Weather sensors', 'Zone-based watering', 'Mobile app control', 'Water conservation'],
      testimonial: {
        text: 'Water bills cut in half and my garden has never looked better!',
        author: 'Grace Muthoni',
        rating: 5
      }
    },
    {
      id: 4,
      title: 'Corporate Office Landscape',
      category: 'commercial',
      location: 'Westlands',
      budget: 'KSH 120,000',
      duration: '7 days',
      year: '2023',
      beforeImage: 'https://images.unsplash.com/photo-1561282186-302b83aad794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kc2NhcGluZyUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTU5MzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1657554378558-efc5479a9dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBvdXRkb29yJTIwcGF0aW8lMjBkZXNpZ258ZW58MXx8fHwxNzU1OTMzMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional landscaping for corporate office building with low-maintenance plants and modern design elements.',
      features: ['Low-maintenance plants', 'Modern design', 'Professional appearance', 'Drought-resistant species', 'Minimal upkeep'],
      testimonial: {
        text: 'Perfect for our office environment. Employees love the new outdoor spaces.',
        author: 'John Mburu - Facilities Manager',
        rating: 5
      }
    },
    {
      id: 5,
      title: 'Lawn Restoration Project',
      category: 'lawn-care',
      location: 'Kiambu',
      budget: 'KSH 35,000',
      duration: '4 days',
      year: '2023',
      beforeImage: 'https://images.unsplash.com/photo-1734303023491-db8037a21f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc1NTkzMzEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1562886695-0f3c22a48bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjB0cmFuc2Zvcm1hdGlvbnxlbnwxfHx8fDE3NTU5MzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete lawn restoration from patchy, weed-infested grass to lush, green carpet using proven techniques.',
      features: ['Soil treatment', 'Quality grass seed', 'Fertilization program', 'Weed control', 'Growth guarantee'],
      testimonial: {
        text: 'My lawn went from embarrassing to amazing in just one month!',
        author: 'Peter Kinyua',
        rating: 5
      }
    },
    {
      id: 6,
      title: 'Rooftop Garden Design',
      category: 'specialty',
      location: 'Kilimani',
      budget: 'KSH 65,000',
      duration: '6 days',
      year: '2024',
      beforeImage: 'https://images.unsplash.com/photo-1675415782443-32685e238b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBsYW5kc2NhcGluZ3xlbnwxfHx8fDE3NTU5MzMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      afterImage: 'https://images.unsplash.com/photo-1657554378558-efc5479a9dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBvdXRkb29yJTIwcGF0aW8lMjBkZXNpZ258ZW58MXx8fHwxNzU1OTMzMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Creative rooftop garden solution with container planting, wind-resistant plants, and space optimization.',
      features: ['Container gardens', 'Wind-resistant plants', 'Space optimization', 'Drainage solutions', 'Urban design'],
      testimonial: {
        text: 'Transformed our unused rooftop into a beautiful retreat!',
        author: 'Sarah Wanjiru',
        rating: 5
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: portfolioProjects.length },
    { id: 'garden-design', label: 'Garden Design', count: portfolioProjects.filter(p => p.category === 'garden-design').length },
    { id: 'luxury', label: 'Luxury Projects', count: portfolioProjects.filter(p => p.category === 'luxury').length },
    { id: 'irrigation', label: 'Irrigation', count: portfolioProjects.filter(p => p.category === 'irrigation').length },
    { id: 'lawn-care', label: 'Lawn Care', count: portfolioProjects.filter(p => p.category === 'lawn-care').length },
    { id: 'commercial', label: 'Commercial', count: portfolioProjects.filter(p => p.category === 'commercial').length },
    { id: 'specialty', label: 'Specialty', count: portfolioProjects.filter(p => p.category === 'specialty').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-600 text-white">
            🏆 500+ Completed Projects • 200+ Happy Clients
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio of Transformations
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            See real before-and-after transformations from our landscaping projects across Kenya. 
            Every project showcases our commitment to quality, creativity, and client satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleWhatsAppInquiry('portfolio project')}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Request Similar Design
            </Button>
            <Button 
              onClick={() => onPageChange('contact')}
              variant="outline" 
              size="lg"
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-4"
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of landscaping projects
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${selectedCategory === category.id 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'border-green-600 text-green-700 hover:bg-green-50'
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-green-100 hover:shadow-lg transition-shadow">
                {/* Before & After Images */}
                <div className="relative">
                  <Tabs defaultValue="before" className="w-full">
                    <div className="relative">
                      <TabsContent value="before" className="m-0">
                        <div className="relative">
                          <ImageWithFallback 
                            src={project.beforeImage}
                            alt={`${project.title} - Before`}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-500 text-white">BEFORE</Badge>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="after" className="m-0">
                        <div className="relative">
                          <ImageWithFallback 
                            src={project.afterImage}
                            alt={`${project.title} - After`}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-green-500 text-white">AFTER</Badge>
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                    <TabsList className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm">
                      <TabsTrigger value="before" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">Before</TabsTrigger>
                      <TabsTrigger value="after" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">After</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <Badge variant="outline" className="text-green-700 border-green-600">
                      {project.year}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  {/* Project Info */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-2">"{project.testimonial.text}"</p>
                    <p className="text-gray-600 text-xs">- {project.testimonial.author}</p>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    onClick={() => handleWhatsAppInquiry(project.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Similar Design
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">Try selecting a different category to see more projects.</p>
              <Button 
                onClick={() => setSelectedCategory('all')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600">
              How we ensure every project exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-bold text-lg mb-2">1. Consultation</h3>
              <p className="text-gray-600 text-sm">Free site visit and detailed discussion of your vision and requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">2. Design</h3>
              <p className="text-gray-600 text-sm">Custom design plan with 3D visualization and detailed project timeline.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔨</span>
              </div>
              <h3 className="font-bold text-lg mb-2">3. Installation</h3>
              <p className="text-gray-600 text-sm">Professional installation by experienced team with quality materials.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">4. Care</h3>
              <p className="text-gray-600 text-sm">Follow-up care instructions and ongoing support to ensure success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our portfolio of satisfied clients! Get your free consultation and 
            personalized design proposal today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => handleWhatsAppInquiry('consultation')}
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project - WhatsApp
            </Button>
            <Button 
              onClick={() => onPageChange('services')}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              View Services & Pricing
            </Button>
          </div>
          
          <div className="text-sm opacity-80">
            <p>Free consultations • Same day quotes • 100% satisfaction guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;