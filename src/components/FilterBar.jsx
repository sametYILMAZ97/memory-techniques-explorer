import './FilterBar.css';

function FilterBar({ selectedCategory, selectedDifficulty, onCategoryChange, onDifficultyChange, categories, difficulties }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="category-filter">Category:</label>
        <select 
          id="category-filter"
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
          className="filter-select"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="difficulty-filter">Difficulty:</label>
        <select 
          id="difficulty-filter"
          value={selectedDifficulty} 
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="filter-select"
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
