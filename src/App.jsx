import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import TechniqueGrid from './components/TechniqueGrid';
import TechniqueDetail from './components/TechniqueDetail';
import QuickTips from './components/QuickTips';
import { techniques } from './data/techniques';

const App = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const handleTechniqueSelect = (techniqueId) => {
    setSelectedTechnique(techniqueId);
  };

  const handleBack = () => {
    setSelectedTechnique(null);
  };

  const currentTechnique = techniques.find(t => t.id === selectedTechnique);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Brain className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Memory Techniques Explorer</h1>
          </div>
          <p className="text-center text-xl text-white/90">
            Discover and master proven memory enhancement techniques
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {selectedTechnique ? (
          <TechniqueDetail 
            technique={currentTechnique} 
            onBack={handleBack} 
          />
        ) : (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Choose a Technique to Explore
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on any technique card to learn more, see examples, and practice with interactive exercises.
              </p>
            </div>
            
            <TechniqueGrid 
              techniques={techniques} 
              onSelectTechnique={handleTechniqueSelect} 
            />
            
            <QuickTips />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Built with ❤️ and React • Master your memory, unlock your potential
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
