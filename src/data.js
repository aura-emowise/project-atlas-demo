import { 
  FaBook, FaBalanceScale, FaBrain, 
  FaAtom, FaDna, FaChartLine, FaRecycle 
} from 'react-icons/fa';
import { GiRazor } from "react-icons/gi";

export const atlasData = [
  {
    id: 1,
    title: "Level 1: The Thinker's Toolkit",
    description: "Master the tools. Before you map the world, you must learn to draw a straight line.",
    checkpoints: [
      {
        id: '1.1',
        title: "Occam's Razor",
        icon: GiRazor,
        concept: `"Among competing hypotheses, the one with the fewest assumptions should be selected." In simple terms: The simplest explanation is usually the right one.`,
        importance: `This is your mental "clutter-remover." It protects you from conspiracy theories and over-engineered solutions by helping you focus on what's probable.`,
        deeperDiveLink: 'https://en.wikipedia.org/wiki/Occam%27s_razor'
      },
      {
        id: '1.2',
        title: 'Confirmation Bias',
        icon: FaBook,
        concept: `The tendency to search for, interpret, and recall information in a way that confirms or supports one's prior beliefs or values.`,
        importance: `This is the main engine of "information bubbles." Understanding it helps you seek out opposing views and make more objective decisions, breaking free from your own echo chamber.`,
        deeperDiveLink: 'https://en.wikipedia.org/wiki/Confirmation_bias'
      },
      {
        id: '1.3',
        title: 'First-Principles Thinking',
        icon: FaBalanceScale,
        concept: 'Breaking down a complex problem into its most basic, fundamental truths and reasoning up from there. It is the opposite of reasoning by analogy.',
        importance: `This is the ultimate tool for innovation. It frees your mind from the constraints of conventional wisdom, allowing you to see new possibilities and create truly original solutions.`,
        deeperDiveLink: 'https://fs.blog/first-principles/'
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: The Rules of Reality",
    description: "Understand the fundamental laws governing the physical and biological world.",
    checkpoints: [
      { id: '2.1', title: 'Thermodynamics & Entropy', icon: FaAtom, concept: 'Coming Soon...', importance: null, lab: null },
      { id: '2.2', title: 'Evolution by Natural Selection', icon: FaDna, concept: 'Coming Soon...', importance: null, lab: null },
    ]
  },
  {
    id: 3,
    title: "Level 3: The Human System",
    description: "Understand the systems we create: economics, psychology, and history.",
    checkpoints: [
      { id: '3.1', title: 'Supply & Demand', icon: FaChartLine, concept: 'Coming Soon...', importance: null, lab: null },
      { id: '3.2', title: 'Cognitive Biases Revisited', icon: FaBrain, concept: 'Coming Soon...', importance: null, lab: null }
    ]
  },
  {
    id: 4,
    title: "Level 4: Sustainable Future (Google Maps API)",
    description: "Use your thinking tools to make decisions that positively impact the world around you.",
    checkpoints: [
      { 
        id: '4.1', 
        title: 'The Daily Commute Choice', 
        icon: FaRecycle,
        concept: 'Your daily choices have compounding effects on your health and the environment. Let\'s visualize them using Google Maps Platform APIs.', 
        importance: 'This demonstrates how APIs can transform abstract data into powerful, persuasive visual narratives, promoting sustainable choices.',
        lab: {
          scenario: 'It\'s time to go to work. How will you get there?',
          task: 'Choose your method of transportation to see its hidden impact.',
          options: [
            { text: "Option A: By Car, the shortest route.", isCorrect: false, mapPlaceholder: 'car' },
            { text: "Option B: By Bicycle, through the park.", isCorrect: true, mapPlaceholder: 'bicycle' }
          ],
          feedback: 'Notice how a seemingly small daily decision impacts your stress, health, and finances. This is long-term, first-principles thinking in action.'
        },
        deeperDiveLink: 'https://mapsplatform.google.com/solutions/sustainability/'
      },
    ]
  }
];

// Re-populating lab data for clarity
atlasData[0].checkpoints[0].lab = {
  scenario: 'You hear a rustling sound in the bushes at night.', task: `Which explanation should you investigate first, according to Occam's Razor?`, options: [{ text: "The wind is shaking the leaves, or a cat is passing by.", isCorrect: true }, { text: "It's secret agents setting up hidden surveillance equipment.", isCorrect: false }], feedback: `Correct! The 'secret agents' theory requires far more assumptions to be true. The 'wind/cat' theory relies on common, everyday occurrences.`
};
atlasData[0].checkpoints[1].lab = {
  scenario: 'You believe electric cars are the future. You want to research your first purchase.', task: 'Which Google search is the most effective for overcoming Confirmation Bias?', options: [{ text: '"reasons to buy an electric car"', isCorrect: false }, { text: '"problems and disadvantages of electric cars"', isCorrect: true }, { text: '"why electric cars are better than gas cars"', isCorrect: false }], feedback: `Exactly! To fight your bias, you must actively seek out disconfirming evidence.`
};
atlasData[0].checkpoints[2].lab = {
  scenario: 'You want to improve a standard suitcase.', task: 'Which approach uses First-Principles Thinking?', options: [{ text: 'Look at popular suitcase models and add a new pocket or a different color.', isCorrect: false }, { text: "Ask: 'What is the fundamental purpose? To move belongings. What are the basic components? A container, wheels, a handle. Could we reimagine these parts from scratch?'", isCorrect: true }], feedback: `Correct! The second option deconstructs the problem to its core truths, opening the door for real innovation.`
};