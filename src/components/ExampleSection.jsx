import React from 'react';
import { Lightbulb } from 'lucide-react';

const ExampleSection = ({ example, realWorld }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-yellow-500" />
        Example:
      </h3>
      <div className="space-y-4">
        <div>
          <p className="text-gray-700 italic">"{example}"</p>
        </div>
        <div className="border-t pt-4">
          <p className="font-semibold text-gray-700 mb-2">Real-world application:</p>
          <p className="text-gray-600">{realWorld}</p>
        </div>
      </div>
    </div>
  );
};

export default ExampleSection;
