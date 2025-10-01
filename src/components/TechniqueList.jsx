import TechniqueCard from './TechniqueCard';
import './TechniqueList.css';

function TechniqueList({ techniques }) {
  if (techniques.length === 0) {
    return (
      <div className="no-results">
        <p>No techniques found matching your filters.</p>
        <p>Try adjusting your filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="technique-list">
      {techniques.map((technique) => (
        <TechniqueCard key={technique.id} technique={technique} />
      ))}
    </div>
  );
}

export default TechniqueList;
