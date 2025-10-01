import { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import TechniqueList from './components/TechniqueList';
import { memoryTechniques, categories, difficulties } from './data/techniques';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredTechniques = useMemo(() => {
    return memoryTechniques.filter((technique) => {
      const categoryMatch = selectedCategory === 'All' || technique.category === selectedCategory;
      const difficultyMatch = selectedDifficulty === 'All' || technique.difficulty === selectedDifficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [selectedCategory, selectedDifficulty]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <FilterBar
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          onCategoryChange={setSelectedCategory}
          onDifficultyChange={setSelectedDifficulty}
          categories={categories}
          difficulties={difficulties}
        />
        <TechniqueList techniques={filteredTechniques} />
      </main>
      <footer className="footer">
        <p>Explore and master memory techniques to enhance your learning and recall abilities.</p>
      </footer>
    </div>
  );
}

export default App;
