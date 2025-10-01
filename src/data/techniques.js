export const memoryTechniques = [
  {
    id: 1,
    name: "Method of Loci (Memory Palace)",
    category: "Spatial Memory",
    difficulty: "Intermediate",
    description: "A mnemonic device that relies on spatial memory to recall information. You mentally place items you want to remember in specific locations within an imaginary place.",
    howToUse: [
      "Choose a familiar place (your home, a route you walk often)",
      "Identify specific locations or 'loci' within that place",
      "Create vivid mental images of the items you want to remember",
      "Place these images at each location",
      "To recall, mentally walk through your palace and 'see' the items"
    ],
    benefits: [
      "Highly effective for memorizing lists and sequences",
      "Works for both short-term and long-term memory",
      "Can be reused for different sets of information"
    ],
    bestFor: "Memorizing speeches, lists, or sequences of information"
  },
  {
    id: 2,
    name: "Chunking",
    category: "Organization",
    difficulty: "Beginner",
    description: "Breaking down large pieces of information into smaller, manageable 'chunks' that are easier to remember.",
    howToUse: [
      "Identify patterns or groups within the information",
      "Break the information into smaller segments (typically 3-5 items per chunk)",
      "Find meaningful connections between items in each chunk",
      "Practice recalling one chunk at a time"
    ],
    benefits: [
      "Reduces cognitive load",
      "Makes complex information more digestible",
      "Improves working memory capacity"
    ],
    bestFor: "Phone numbers, passwords, long strings of data"
  },
  {
    id: 3,
    name: "Spaced Repetition",
    category: "Learning Strategy",
    difficulty: "Beginner",
    description: "A learning technique that involves reviewing information at increasing intervals over time to strengthen memory retention.",
    howToUse: [
      "Learn the material initially",
      "Review after 1 day",
      "Review after 3 days",
      "Review after 1 week",
      "Continue increasing intervals (2 weeks, 1 month, etc.)"
    ],
    benefits: [
      "Combats the forgetting curve",
      "Maximizes long-term retention",
      "Time-efficient learning method"
    ],
    bestFor: "Language learning, exam preparation, vocabulary building"
  },
  {
    id: 4,
    name: "Acronyms and Acrostics",
    category: "Verbal Memory",
    difficulty: "Beginner",
    description: "Creating words or phrases where each letter represents another word or concept you want to remember.",
    howToUse: [
      "List the items you need to remember",
      "Take the first letter of each item",
      "Create a memorable word (acronym) or sentence (acrostic) using these letters",
      "Practice recalling the acronym/acrostic and what each letter represents"
    ],
    benefits: [
      "Quick and easy to create",
      "Works well for ordered lists",
      "Particularly effective for educational content"
    ],
    bestFor: "Memorizing ordered lists, categories, or steps in a process"
  },
  {
    id: 5,
    name: "Mind Mapping",
    category: "Visual Memory",
    difficulty: "Beginner",
    description: "A visual technique that organizes information around a central concept, with branches representing related ideas.",
    howToUse: [
      "Write the main topic in the center",
      "Draw branches for major subtopics",
      "Add smaller branches for details",
      "Use colors, images, and symbols to enhance memory",
      "Review and recreate the map from memory"
    ],
    benefits: [
      "Engages both visual and logical thinking",
      "Shows relationships between concepts",
      "Encourages creative thinking"
    ],
    bestFor: "Note-taking, brainstorming, studying complex topics"
  },
  {
    id: 6,
    name: "Peg System",
    category: "Association",
    difficulty: "Advanced",
    description: "A mnemonic technique that associates numbers with words that rhyme with or resemble the numbers, creating 'pegs' to hang memories on.",
    howToUse: [
      "Learn the basic peg words (1=bun, 2=shoe, 3=tree, etc.)",
      "Create vivid mental images linking your information to peg words",
      "Use the number to recall the peg word, which triggers the associated memory",
      "Practice regularly to strengthen associations"
    ],
    benefits: [
      "Excellent for remembering numbered lists",
      "Provides a permanent framework for memorization",
      "Can memorize items in any order"
    ],
    bestFor: "Numbered lists, presentations, remembering items by their position"
  },
  {
    id: 7,
    name: "Story Method",
    category: "Narrative Memory",
    difficulty: "Intermediate",
    description: "Creating a narrative or story that links together the items you want to remember in a memorable sequence.",
    howToUse: [
      "List the items you need to remember",
      "Create a story that includes all items in sequence",
      "Make the story unusual, vivid, or humorous",
      "The more bizarre or emotional, the better",
      "Practice telling the story to reinforce memory"
    ],
    benefits: [
      "Leverages natural narrative memory",
      "Makes abstract information concrete",
      "Engaging and enjoyable to use"
    ],
    bestFor: "Lists, sequences, connecting unrelated items"
  },
  {
    id: 8,
    name: "Major System",
    category: "Number Memory",
    difficulty: "Advanced",
    description: "A phonetic number system that converts numbers into consonant sounds, then into words, making numbers easier to remember.",
    howToUse: [
      "Learn the number-sound associations (0=s/z, 1=t/d, 2=n, etc.)",
      "Convert numbers to consonant sounds",
      "Add vowels to create memorable words",
      "Create images or stories with these words",
      "Convert back to numbers when needed"
    ],
    benefits: [
      "Transform abstract numbers into concrete images",
      "Remember long sequences of numbers",
      "Widely used by memory champions"
    ],
    bestFor: "Phone numbers, dates, mathematical constants, credit card numbers"
  }
];

export const categories = [
  "All",
  "Spatial Memory",
  "Organization",
  "Learning Strategy",
  "Verbal Memory",
  "Visual Memory",
  "Association",
  "Narrative Memory",
  "Number Memory"
];

export const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
