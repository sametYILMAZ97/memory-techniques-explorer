export const getPracticeFeedback = (technique, userInput) => {
  if (!userInput || userInput.trim().length === 0) {
    return 'Please enter your answer to practice this technique!';
  }

  if (technique.id === 'memory-palace') {
    const items = userInput.toLowerCase().split(',').map(item => item.trim());
    if (items.length >= 3) {
      return `Great! Now visualize each of these items in specific locations:\n${items.map((item, i) => `${i + 1}. ${item} → (choose a spot in your memory palace)`).join('\n')}\n\nTip: Make the images vivid and unusual!`;
    }
    return 'Try listing at least 3 items separated by commas.';
  }
  
  if (technique.id === 'chunking' && userInput.includes('9876543210')) {
    return 'Good examples:\n• 987-654-3210 (phone format)\n• 98-76-54-32-10 (pairs)\n• 987-65-4321-0 (social security format)\n\nThe key is finding a pattern that makes sense to you!';
  }
  
  if (technique.id === 'linking') {
    if (userInput.length > 50) {
      return 'Excellent story! The more creative and vivid, the better it works. Key linking words I see help connect the ideas together!';
    }
    return 'Try creating a more detailed story. Remember: make it unusual, funny, or bizarre!';
  }

  if (technique.id === 'acronyms') {
    if (userInput.toUpperCase().includes('NEWS') || userInput.includes('Never Eat Soggy Waffles')) {
      return '🎯 Perfect! NEWS is a classic example. These simple word tricks make information stick!';
    }
    return 'Good try! A popular one is NEWS (North, East, West, South) or "Never Eat Soggy Waffles"!';
  }
  
  return `Excellent practice! Remember, the more you personalize these techniques, the better they work. Keep experimenting with ${technique.name}!`;
};
