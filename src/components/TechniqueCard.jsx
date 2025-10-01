import { useState } from 'react';
import './TechniqueCard.css';

function TechniqueCard({ technique }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return '#10b981';
      case 'Intermediate':
        return '#f59e0b';
      case 'Advanced':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="technique-card">
      <div className="card-header">
        <h3 className="technique-name">{technique.name}</h3>
        <div className="badges">
          <span 
            className="badge difficulty-badge"
            style={{ backgroundColor: getDifficultyColor(technique.difficulty) }}
          >
            {technique.difficulty}
          </span>
          <span className="badge category-badge">{technique.category}</span>
        </div>
      </div>

      <p className="description">{technique.description}</p>

      <div className="best-for">
        <strong>Best for:</strong> {technique.bestFor}
      </div>

      <button 
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less ▲' : 'Learn More ▼'}
      </button>

      {isExpanded && (
        <div className="expanded-content">
          <div className="section">
            <h4>How to Use:</h4>
            <ol>
              {technique.howToUse.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="section">
            <h4>Benefits:</h4>
            <ul>
              {technique.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechniqueCard;
