import React from 'react';

const TechniqueCard = ({ technique, onClick }) => {
  const Icon = technique.icon;

  return (
    <div
      onClick={onClick}
      className={`${technique.color} border-2 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-white" />
        <h3 className="text-2xl font-bold text-white">{technique.name}</h3>
      </div>
      <p className="text-white/90 leading-relaxed">{technique.description}</p>
    </div>
  );
};

export default TechniqueCard;
