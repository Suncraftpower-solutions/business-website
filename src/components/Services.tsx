import React from 'react';
import { Home, Building, Factory, Settings, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete rooftop solar solutions for homes with premium panels and inverters.',
      features: ['Rooftop Installation', 'Grid-Tie Systems', 'Battery Backup', 'Smart Monitoring'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      icon: Building,
      title: 'Commercial Solar',
      description: 'Scalable solar solutions for businesses to reduce operational costs significantly.',
      features: ['Large Scale Systems', 'Energy Audits', 'ROI Analysis', 'Maintenance Plans'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Factory,
      title: 'Industrial Installations',
      description: 'High-capacity solar installations for manufacturing and industrial facilities.',
      features: ['Mega Watt Projects', 'Ground Mount', 'Power Purchase Agreements', '24/7 Support'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Settings,
      title: 'AMC & Net Metering',
      description: 'Comprehensive maintenance and net metering services for optimal performance.',
      features: ['Annual Maintenance', 'Performance Monitoring', 'Net Metering Setup', 'Troubleshooting'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive EPC services tailored to meet diverse energy needs across all sectors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Suncraft Power Solutions?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with customer-centric approach to deliver exceptional solar solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h4>
              <p className="text-gray-600">
                We use only tier-1 solar panels and inverters from globally recognized manufacturers, 
                ensuring maximum efficiency and longevity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Warranty</h4>
              <p className="text-gray-600">
                25-year performance warranty on panels and 5-year comprehensive warranty on installation 
                with dedicated after-sales support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">End-to-End Service</h4>
              <p className="text-gray-600">
                From initial consultation to post-installation maintenance, we handle every aspect 
                of your solar journey with professional expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;