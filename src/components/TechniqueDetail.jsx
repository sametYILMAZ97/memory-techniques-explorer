import React from 'react';
import { ArrowLeft } from 'lucide-react';
import HowToSection from './HowToSection';
import ExampleSection from './ExampleSection';
import PracticeSection from './PracticeSection';

const TechniqueDetail = ({ technique, onBack }) => {
  const Icon = technique.icon;

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to all techniques
      </button>

      <div className={`${technique.color} rounded-xl p-8 mb-6 shadow-lg`}>
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-12 h-12 text-white" />
          <h2 className="text-4xl font-bold text-white">{technique.name}</h2>
        </div>
        <p className="text-white/90 text-lg leading-relaxed">{technique.description}</p>
      </div>

      <div className="space-y-6">
        <HowToSection steps={technique.howTo} />
        <ExampleSection example={technique.example} realWorld={technique.realWorld} />
        <PracticeSection technique={technique} />
      </div>
    </div>
  );
};

export default TechniqueDetail;
