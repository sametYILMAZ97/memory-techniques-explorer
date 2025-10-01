import React from 'react';
import { Zap, Target, Repeat } from 'lucide-react';

const QuickTips = () => {
  const tips = [
    {
      icon: Zap,
      title: 'Make it Vivid',
      description: 'The more unusual and exaggerated your mental images, the easier they are to remember.'
    },
    {
      icon: Target,
      title: 'Practice Daily',
      description: 'Like any skill, memory techniques improve with regular practice and use.'
    },
    {
      icon: Repeat,
      title: 'Combine Techniques',
      description: 'Use multiple techniques together for even better memory retention.'
    }
  ];

  return (
    <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        💡 Quick Memory Tips
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <Icon className="w-10 h-10 text-purple-500 mb-3" />
              <h4 className="font-bold text-lg text-gray-800 mb-2">{tip.title}</h4>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickTips;
