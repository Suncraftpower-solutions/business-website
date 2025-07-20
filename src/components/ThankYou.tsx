import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl text-center border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-6">
          We’ve received your message and will get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-all duration-200"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;

