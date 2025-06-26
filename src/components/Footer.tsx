import React from 'react';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-emerald-300" />
              <span className="text-2xl font-bold">Hot Bean</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              Empowering the next generation of web developers through comprehensive training and exciting career opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-blue-100 hover:text-white transition-colors">Web Courses</a></li>
              <li><a href="/jobs" className="text-blue-100 hover:text-white transition-colors">Job Opportunities</a></li>
              <li><a href="/team" className="text-blue-100 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/apply" className="text-blue-100 hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-300" />
                <span className="text-blue-100">hello@hotbean.dev</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-300" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-300" />
                <span className="text-blue-100">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 Hot Bean. All rights reserved. Built with passion for web development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;