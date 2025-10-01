import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { getPracticeFeedback } from '../utils/practiceFeedback';

const PracticeSection = ({ technique }) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const result = getPracticeFeedback(technique, userInput);
    setFeedback(result);
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 shadow-md border-2 border-purple-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Try It Now!</h3>
      <p className="text-gray-700 mb-4">{technique.practice}</p>
      
      <div className="space-y-3">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none min-h-[100px] resize-none"
        />
        
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit Practice
        </button>

        {feedback && (
          <div className="bg-white p-4 rounded-lg border-2 border-green-300">
            <p className="text-gray-800 whitespace-pre-line">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;
