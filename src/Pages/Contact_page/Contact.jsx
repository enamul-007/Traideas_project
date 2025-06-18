// src/pages/Contact.jsx

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us by filling out the form below
          </p>
        </div>

        <div className="max-w-2xl p-8 mx-auto bg-white shadow-xl rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+8801922293117</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">info@traideas.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-full">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-600">
                  6/2, S. S Alam Khandaker Road, Masdair, Narayanganj-1400.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-200">
            <h3 className="mb-4 font-medium text-gray-900">Office Hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
