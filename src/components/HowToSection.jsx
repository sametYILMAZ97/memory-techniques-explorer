import React from 'react';

const HowToSection = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">How to Use:</h3>
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </span>
            <span className="text-gray-700">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowToSection;
