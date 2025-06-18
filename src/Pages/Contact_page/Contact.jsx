// src/pages/Contact.jsx

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-indigo-100 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black_color">Contact Us</h1>
          <p className="text-lg text-gray_text_color">
            Get in touch with us by filling out the form below
          </p>
        </div>

        <div className="max-w-2xl p-8 mx-auto shadow-xl bg-white_text_color rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-black_color">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-black_color ">Phone</h3>
                <p className="text-black_color">+8801922293117</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-black_color">Email</h3>
                <p className="text-black_color">info@traideas.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-full">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-black_color">Address</h3>
                <p className="text-black_color">
                  6/2, S. S Alam Khandaker Road, Masdair, Narayanganj-1400.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-l-gray_text_color">
            <h3 className="mb-4 font-medium text-black_color">Office Hours</h3>
            <div className="space-y-2 text-sm text-black_color">
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
