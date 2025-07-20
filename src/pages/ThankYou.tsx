import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your message has been successfully sent. We'll get back to you as soon as possible.
      </p>
      <a
        href="/"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ThankYou;

