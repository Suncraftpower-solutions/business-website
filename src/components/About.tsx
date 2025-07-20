import React from 'react';
import { Users, Target, Eye, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Suncraft Power Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading the solar revolution with innovative EPC solutions and unwavering commitment to sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pioneering Solar Excellence Since Day One
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded by visionary entrepreneurs <strong>Sanket Kulkarni</strong> and <strong>Premanand Gaikwad</strong>, 
                Suncraft Power Solutions has emerged as a trusted name in the solar energy sector. We specialize in 
                comprehensive EPC (Engineering, Procurement, and Construction) solutions that transform how businesses 
                and homes consume energy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our strategic partnership with <strong>Unisun Power Solutions</strong> amplifies our capabilities, 
                allowing us to deliver world-class solar installations across residential, commercial, and industrial sectors.
              </p>
            </div>

            {/* Partnership Highlight */}
            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-xl border border-orange-100">
              <h4 className="font-semibold text-gray-900 mb-2">Strategic Partnership</h4>
              <p className="text-gray-600 text-sm">
                In collaboration with <a href="http://www.unisunpowersolutions.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Unisun Power Solutions</a>, 
                we bring enhanced technical expertise and expanded service capabilities to our clients.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Solar installation team"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Vision, Mission, Coverage */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading solar EPC company, driving India's transition to sustainable energy 
              through innovative solutions and exceptional service quality.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide reliable, affordable, and efficient solar energy solutions that empower 
              communities while contributing to environmental conservation.
            </p>
          </div>

          {/* Service Coverage */}
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Coverage</h3>
            <p className="text-gray-600">
              Serving Maharashtra and expanding across India with comprehensive solar solutions 
              for residential, commercial, and industrial clients.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50MW+</div>
            <div className="text-gray-600">Total Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;