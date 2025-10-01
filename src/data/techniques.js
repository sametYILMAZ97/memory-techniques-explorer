import { MapPin, Package, Link2, Clock, Type, Eye } from 'lucide-react';

export const techniques = [
  {
    id: 'memory-palace',
    name: 'Memory Palace',
    icon: MapPin,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    description: 'Visualize a familiar place and mentally place information in specific locations within it.',
    howTo: [
      'Choose a familiar location (your home, a route you know well)',
      'Identify specific spots or landmarks in that location',
      'Create vivid mental images of what you want to remember',
      'Place each image at a specific spot',
      'Walk through your memory palace to recall information'
    ],
    example: 'To remember a grocery list: milk at the door, bread on the stairs, eggs in the living room, etc.',
    practice: 'Try memorizing these items: keys, wallet, phone, sunglasses, water bottle',
    realWorld: 'Used by memory champions to memorize decks of cards and long sequences of numbers'
  },
  {
    id: 'chunking',
    name: 'Chunking',
    icon: Package,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    description: 'Break down large pieces of information into smaller, manageable chunks.',
    howTo: [
      'Identify patterns or groups within the information',
      'Break information into smaller segments (typically 3-5 items)',
      'Find meaningful connections between items in each chunk',
      'Practice recalling one chunk at a time',
      'Gradually combine chunks as they become familiar'
    ],
    example: 'Phone number: Instead of 5551234567, remember it as 555-123-4567 or (555) 123-4567',
    practice: 'Memorize this number using chunking: 9876543210',
    realWorld: 'Credit card numbers, social security numbers, long passwords'
  },
  {
    id: 'linking',
    name: 'Linking Method',
    icon: Link2,
    color: 'bg-gradient-to-br from-green-500 to-emerald-500',
    description: 'Create a vivid story that links items together in a memorable chain.',
    howTo: [
      'Take the first two items you need to remember',
      'Create a vivid, unusual image linking them together',
      'Link the second item to the third with another image',
      'Continue creating links until all items are connected',
      'Make the links bizarre, funny, or emotionally charged'
    ],
    example: 'Shopping list (eggs, milk, bread): Imagine an egg cracking and pouring milk, which splashes onto bread',
    practice: 'Create a story linking: dog, umbrella, coffee, book',
    realWorld: 'Remembering speeches, presentations, or sequences of events'
  },
  {
    id: 'spaced-repetition',
    name: 'Spaced Repetition',
    icon: Clock,
    color: 'bg-gradient-to-br from-orange-500 to-red-500',
    description: 'Review information at increasing intervals for long-term retention.',
    howTo: [
      'Learn the material initially',
      'Review after 1 day',
      'Review after 3 days',
      'Review after 1 week',
      'Continue increasing intervals (2 weeks, 1 month, etc.)'
    ],
    example: 'Learning vocabulary: Review new words after 1 day, 3 days, 1 week, 2 weeks, 1 month',
    practice: 'Set up a study schedule for your next exam using spaced intervals',
    realWorld: 'Language learning apps (Anki, Duolingo), studying for exams'
  },
  {
    id: 'acronyms',
    name: 'Acronyms & Mnemonics',
    icon: Type,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    description: 'Use first letters to create memorable words or phrases.',
    howTo: [
      'List the items you need to remember',
      'Take the first letter of each item',
      'Create a word (acronym) or sentence (mnemonic) using these letters',
      'Make it memorable and easy to recall',
      'Practice recalling the acronym and what each letter represents'
    ],
    example: 'HOMES for the Great Lakes: Huron, Ontario, Michigan, Erie, Superior',
    practice: 'Create an acronym for: North, East, South, West',
    realWorld: 'Medical terminology (RICE for Rest, Ice, Compression, Elevation), music (FACE, Every Good Boy Does Fine)'
  },
  {
    id: 'visualization',
    name: 'Vivid Visualization',
    icon: Eye,
    color: 'bg-gradient-to-br from-pink-500 to-rose-500',
    description: 'Create multi-sensory mental images to enhance memory retention.',
    howTo: [
      'Close your eyes and create a mental image',
      'Add color, movement, and exaggeration',
      'Include multiple senses (sight, sound, smell, touch, taste)',
      'Make it bizarre, funny, or emotionally striking',
      'The more vivid and unusual, the more memorable'
    ],
    example: 'To remember "apple": Imagine a giant, bright red apple the size of a house, with a sweet smell',
    practice: 'Visualize your own name in a creative, memorable way',
    realWorld: 'Remembering names and faces, studying for visual subjects'
  }
];
