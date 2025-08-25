import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Users, DollarSign, Lightbulb, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PricingCalculatorProps {
  onGetQuote: (projectDetails: any) => void;
}

const SmartPricingCalculator: React.FC<PricingCalculatorProps> = ({ onGetQuote }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plotSize: 100,
    projectType: '',
    location: '',
    laborIntensity: 'medium',
    urgency: 'normal',
    materials: 'standard',
    userBudget: 0,
    hasTools: false,
    soilCondition: 'good',
    accessDifficulty: 'easy'
  });

  const [calculatedPrice, setCalculatedPrice] = useState({
    minimum: 0,
    standard: 0,
    premium: 0,
    diy: 0
  });

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [budgetTips, setBudgetTips] = useState<string[]>([]);

  // Smart pricing calculation algorithm
  const calculatePricing = () => {
    const { plotSize, projectType, location, laborIntensity, urgency, materials, soilCondition, accessDifficulty } = formData;
    
    // Base rates per square meter
    const baseRates = {
      'lawn-installation': 200,
      'garden-design': 300,
      'irrigation': 400,
      'tree-planting': 150,
      'cleanup': 100,
      'maintenance': 80,
      'compound-beautification': 250
    };

    const baseRate = baseRates[projectType as keyof typeof baseRates] || 200;
    let basePrice = plotSize * baseRate;

    // Location multipliers
    const locationMultipliers = {
      'ongata-rongai': 1.0,
      'karen': 1.3,
      'westlands': 1.4,
      'kiambu': 0.9,
      'kajiado': 0.85,
      'machakos': 0.8,
      'other': 1.1
    };

    const locationMultiplier = locationMultipliers[location as keyof typeof locationMultipliers] || 1.0;
    basePrice *= locationMultiplier;

    // Labor intensity adjustments
    const laborMultipliers = {
      'low': 0.7,
      'medium': 1.0,
      'high': 1.4
    };
    basePrice *= laborMultipliers[laborIntensity as keyof typeof laborMultipliers];

    // Urgency adjustments
    if (urgency === 'urgent') basePrice *= 1.2;
    if (urgency === 'flexible') basePrice *= 0.9;

    // Material quality adjustments
    const materialMultipliers = {
      'basic': 0.8,
      'standard': 1.0,
      'premium': 1.3
    };
    basePrice *= materialMultipliers[materials as keyof typeof materialMultipliers];

    // Soil and access difficulty adjustments
    if (soilCondition === 'poor') basePrice *= 1.15;
    if (accessDifficulty === 'difficult') basePrice *= 1.1;

    // Calculate different package tiers
    const minimum = Math.round(basePrice * 0.6); // Budget option
    const standard = Math.round(basePrice); // Standard option
    const premium = Math.round(basePrice * 1.4); // Premium option
    const diy = Math.round(basePrice * 0.3); // DIY consultation only

    setCalculatedPrice({ minimum, standard, premium, diy });
    
    // Generate smart recommendations
    generateRecommendations(minimum, standard, premium);
  };

  const generateRecommendations = (minimum: number, standard: number, premium: number) => {
    const userBudget = formData.userBudget;
    const newRecommendations: string[] = [];
    const newBudgetTips: string[] = [];

    if (userBudget === 0) {
      newRecommendations.push("Tell us your budget for personalized recommendations!");
    } else if (userBudget < minimum) {
      newRecommendations.push("🌱 DIY Consultation Package: Perfect for your budget!");
      newRecommendations.push("📚 We'll provide detailed plans you can implement yourself");
      newRecommendations.push("🛠️ Consider phased implementation over 3-6 months");
      
      newBudgetTips.push("Start with soil preparation and basic planting");
      newBudgetTips.push("Buy plants during off-season for 30-50% savings");
      newBudgetTips.push("Use locally sourced materials to reduce costs");
      newBudgetTips.push("Consider plant swaps with neighbors");
    } else if (userBudget < standard) {
      newRecommendations.push("💡 Budget-Friendly Full Service: We can work within your budget!");
      newRecommendations.push("🌿 Focus on native plants for lower maintenance");
      newRecommendations.push("⏰ Flexible timeline can reduce costs by 20%");
      
      newBudgetTips.push("Choose drought-resistant plants to save on irrigation");
      newBudgetTips.push("Mix DIY preparation with professional installation");
      newBudgetTips.push("Plant during rainy season to reduce watering costs");
    } else if (userBudget >= premium) {
      newRecommendations.push("🏆 Premium Experience: Full luxury treatment available!");
      newRecommendations.push("🌟 Smart irrigation systems with app control");
      newRecommendations.push("💎 Premium plants and materials included");
      
      newBudgetTips.push("Add landscape lighting for evening ambiance");
      newBudgetTips.push("Consider water features for property value increase");
      newBudgetTips.push("Include maintenance package for long-term care");
    } else {
      newRecommendations.push("✅ Standard Package: Perfect fit for your budget!");
      newRecommendations.push("🎯 Balanced approach with quality results");
      newRecommendations.push("🔧 Professional installation with quality materials");
    }

    setRecommendations(newRecommendations);
    setBudgetTips(newBudgetTips);
  };

  useEffect(() => {
    if (formData.projectType && formData.location) {
      calculatePricing();
    }
  }, [formData]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetQuote = () => {
    const projectDetails = {
      ...formData,
      calculatedPrice,
      recommendations,
      budgetTips
    };
    onGetQuote(projectDetails);
  };

  const projectTypes = [
    { value: 'lawn-installation', label: 'Lawn Installation', icon: '🌱' },
    { value: 'garden-design', label: 'Garden Design', icon: '🌺' },
    { value: 'irrigation', label: 'Irrigation System', icon: '💧' },
    { value: 'tree-planting', label: 'Tree Planting', icon: '🌳' },
    { value: 'cleanup', label: 'Garden Cleanup', icon: '🧹' },
    { value: 'maintenance', label: 'Regular Maintenance', icon: '✂️' },
    { value: 'compound-beautification', label: 'Compound Beautification', icon: '🏡' }
  ];

  const locations = [
    { value: 'ongata-rongai', label: 'Ongata Rongai' },
    { value: 'karen', label: 'Karen' },
    { value: 'westlands', label: 'Westlands' },
    { value: 'kiambu', label: 'Kiambu' },
    { value: 'kajiado', label: 'Kajiado' },
    { value: 'machakos', label: 'Machakos' },
    { value: 'other', label: 'Other Location' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6 border-green-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Smart Pricing Calculator</h2>
            <p className="text-gray-600">Get instant quotes tailored to your budget and needs</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Project Details</span>
            <span>Location & Size</span>
            <span>Budget & Preferences</span>
            <span>Results</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <Tabs value={step.toString()} className="w-full">
          {/* Step 1: Project Type */}
          <TabsContent value="1" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What type of project do you need?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <Card 
                    key={type.value}
                    className={`p-4 cursor-pointer border-2 transition-all ${
                      formData.projectType === type.value 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => handleInputChange('projectType', type.value)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{type.icon}</span>
                      <span className="font-medium">{type.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <Button 
              onClick={() => setStep(2)}
              disabled={!formData.projectType}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Next: Location & Size <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </TabsContent>

          {/* Step 2: Location & Size */}
          <TabsContent value="2" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <Select onValueChange={(value) => handleInputChange('location', value)}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Plot Size: {formData.plotSize} m²
                </label>
                <Slider
                  value={[formData.plotSize]}
                  onValueChange={(value) => handleInputChange('plotSize', value[0])}
                  max={1000}
                  min={10}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10 m²</span>
                  <span>1000 m²</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Soil Condition
                </label>
                <Select onValueChange={(value) => handleInputChange('soilCondition', value)}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Soil condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (rich, well-draining)</SelectItem>
                    <SelectItem value="good">Good (some preparation needed)</SelectItem>
                    <SelectItem value="poor">Poor (significant work required)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Site Access
                </label>
                <Select onValueChange={(value) => handleInputChange('accessDifficulty', value)}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Access difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy (vehicle access)</SelectItem>
                    <SelectItem value="moderate">Moderate (some walking required)</SelectItem>
                    <SelectItem value="difficult">Difficult (limited access)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                className="border-green-600 text-green-700"
              >
                Back
              </Button>
              <Button 
                onClick={() => setStep(3)}
                disabled={!formData.location}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Next: Budget & Preferences <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          {/* Step 3: Budget & Preferences */}
          <TabsContent value="3" className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <DollarSign className="w-4 h-4 inline mr-1" />
                Your Budget (KSH)
              </label>
              <Input
                type="number"
                value={formData.userBudget || ''}
                onChange={(e) => handleInputChange('userBudget', parseInt(e.target.value) || 0)}
                placeholder="Enter your budget (e.g., 5000, 50000)"
                className="border-green-200 focus:border-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                No budget too small! We work with any amount from KSH 500 upwards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Timeline
                </label>
                <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="When do you need this done?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">ASAP (within 1 week) +20%</SelectItem>
                    <SelectItem value="normal">Normal (2-4 weeks)</SelectItem>
                    <SelectItem value="flexible">Flexible (1-3 months) -10%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Material Quality
                </label>
                <Select onValueChange={(value) => handleInputChange('materials', value)}>
                  <SelectTrigger className="border-green-200">
                    <SelectValue placeholder="Material preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic (budget-friendly)</SelectItem>
                    <SelectItem value="standard">Standard (good quality)</SelectItem>
                    <SelectItem value="premium">Premium (high-end)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Labor Intensity
              </label>
              <Select onValueChange={(value) => handleInputChange('laborIntensity', value)}>
                <SelectTrigger className="border-green-200">
                  <SelectValue placeholder="How much work is needed?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (simple installation)</SelectItem>
                  <SelectItem value="medium">Medium (standard work)</SelectItem>
                  <SelectItem value="high">High (complex/detailed work)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hasTools"
                checked={formData.hasTools}
                onChange={(e) => handleInputChange('hasTools', e.target.checked)}
                className="rounded border-green-300"
              />
              <label htmlFor="hasTools" className="text-sm text-gray-700">
                I have basic gardening tools (can reduce labor costs by 10%)
              </label>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setStep(2)}
                className="border-green-600 text-green-700"
              >
                Back
              </Button>
              <Button 
                onClick={() => setStep(4)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                Calculate Pricing <Calculator className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          {/* Step 4: Results */}
          <TabsContent value="4" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Personalized Quote</h3>
              <p className="text-gray-600">Based on your {formData.plotSize}m² {formData.projectType.replace('-', ' ')} project in {formData.location}</p>
            </div>

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 border-2 border-blue-200 bg-blue-50">
                <div className="text-center">
                  <h4 className="font-bold text-blue-800 mb-2">DIY Consultation</h4>
                  <div className="text-2xl font-bold text-blue-700 mb-2">
                    KSH {calculatedPrice.diy.toLocaleString()}
                  </div>
                  <p className="text-xs text-blue-600">Perfect for any budget!</p>
                </div>
              </Card>

              <Card className="p-4 border-2 border-green-200 bg-green-50">
                <div className="text-center">
                  <h4 className="font-bold text-green-800 mb-2">Budget Package</h4>
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    KSH {calculatedPrice.minimum.toLocaleString()}
                  </div>
                  <p className="text-xs text-green-600">Great value option</p>
                </div>
              </Card>

              <Card className="p-4 border-2 border-orange-200 bg-orange-50">
                <div className="text-center">
                  <h4 className="font-bold text-orange-800 mb-2">Standard Package</h4>
                  <div className="text-2xl font-bold text-orange-700 mb-2">
                    KSH {calculatedPrice.standard.toLocaleString()}
                  </div>
                  <p className="text-xs text-orange-600">Most popular choice</p>
                </div>
              </Card>

              <Card className="p-4 border-2 border-purple-200 bg-purple-50">
                <div className="text-center">
                  <h4 className="font-bold text-purple-800 mb-2">Premium Package</h4>
                  <div className="text-2xl font-bold text-purple-700 mb-2">
                    KSH {calculatedPrice.premium.toLocaleString()}
                  </div>
                  <p className="text-xs text-purple-600">Luxury experience</p>
                </div>
              </Card>
            </div>

            {/* Budget-Based Recommendations */}
            {formData.userBudget > 0 && (
              <Card className="p-6 bg-green-50 border-green-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Smart Recommendations for Your KSH {formData.userBudget.toLocaleString()} Budget</h4>
                    <ul className="space-y-2">
                      {recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2 text-green-700">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Budget Tips */}
            {budgetTips.length > 0 && (
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Money-Saving Tips
                </h4>
                <ul className="space-y-2">
                  {budgetTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-blue-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                onClick={handleGetQuote}
                className="bg-green-600 hover:bg-green-700 text-white py-3"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Detailed Quote via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setStep(1)}
                className="border-green-600 text-green-700 py-3"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Recalculate with Different Options
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>✅ Free consultation included • ✅ No hidden costs • ✅ Flexible payment plans available</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SmartPricingCalculator;