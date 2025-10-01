import React from 'react';
import TechniqueCard from './TechniqueCard';

const TechniqueGrid = ({ techniques, onSelectTechnique }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techniques.map(technique => (
        <TechniqueCard
          key={technique.id}
          technique={technique}
          onClick={() => onSelectTechnique(technique.id)}
        />
      ))}
    </div>
  );
};

export default TechniqueGrid;
