
export type QuestionContent = {
  explanation: string;
  code?: string;
  visualContent?: VisualContent;
};

export type VisualContent = {
  type: 'image' | 'chart' | 'animation';
  url?: string;
  chartData?: any;
  altText?: string;
};

export type Question = {
  id: string;
  title: string;
  topic: string;
  content: QuestionContent;
  createdAt: Date;
  viewCount: number;
};

// Sample questions data - In a real application, this would come from an API
const sampleQuestions: Question[] = [
  {
    id: "q1",
    title: "How does Newton's Third Law of Motion work?",
    topic: "physics",
    content: {
      explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction. This means that when one object exerts a force on another object, the second object exerts an equal force in the opposite direction on the first object. This law explains many everyday phenomena, from how we walk to how rockets work.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Illustration of Newton's Third Law showing action and reaction forces"
      }
    },
    createdAt: new Date("2023-09-10"),
    viewCount: 1284
  },
  {
    id: "q2",
    title: "How do you balance chemical equations?",
    topic: "chemistry",
    content: {
      explanation: "Balancing chemical equations involves ensuring that the number of atoms of each element is the same on both the reactant and product sides of the equation. This follows the law of conservation of mass, which states that matter cannot be created or destroyed in a chemical reaction. Start by counting atoms on both sides, then add coefficients (numbers in front of formulas) to balance the equation.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Example of balancing a chemical equation"
      }
    },
    createdAt: new Date("2023-09-12"),
    viewCount: 978
  },
  {
    id: "q3",
    title: "How do you solve quadratic equations?",
    topic: "mathematics",
    content: {
      explanation: "Quadratic equations can be solved using several methods. The most common methods include factoring, completing the square, and using the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a, where ax² + bx + c = 0. Each method has its advantages depending on the specific equation.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Quadratic formula and graphical representation"
      }
    },
    createdAt: new Date("2023-09-15"),
    viewCount: 1456
  },
  {
    id: "q4",
    title: "How does photosynthesis work?",
    topic: "biology",
    content: {
      explanation: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. It involves the conversion of light energy into chemical energy, which is then stored in the bonds of glucose. The process takes place in chloroplasts, specifically in structures called thylakoids.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Diagram showing the process of photosynthesis in a plant cell"
      }
    },
    createdAt: new Date("2023-09-18"),
    viewCount: 1089
  },
  {
    id: "q5",
    title: "How to implement a binary search algorithm in Python?",
    topic: "python",
    content: {
      explanation: "Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.",
      code: `def binary_search(arr, x):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        
        # Check if x is present at mid
        if arr[mid] == x:
            return mid
        
        # If x is greater, ignore left half
        elif arr[mid] < x:
            low = mid + 1
        
        # If x is smaller, ignore right half
        else:
            high = mid - 1
    
    # Element was not present
    return -1

# Example usage
sorted_array = [2, 3, 4, 10, 40]
result = binary_search(sorted_array, 10)
print(f"Element found at index {result}")`,
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Visual representation of binary search algorithm"
      }
    },
    createdAt: new Date("2023-09-20"),
    viewCount: 1876
  },
  {
    id: "q6",
    title: "How to calculate the mean and standard deviation?",
    topic: "statistics",
    content: {
      explanation: "The mean is the average of a data set, calculated by summing all values and dividing by the number of values. The standard deviation measures the amount of variation or dispersion in a set of values. A low standard deviation indicates values close to the mean, while a high standard deviation indicates values spread out over a wider range.",
      code: `import numpy as np

# Sample data
data = [12, 15, 18, 22, 25, 30, 35, 40]

# Calculate mean
mean = np.mean(data)

# Calculate standard deviation
std_dev = np.std(data)

print(f"Mean: {mean}")
print(f"Standard Deviation: {std_dev}")`,
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Graph showing normal distribution with mean and standard deviation"
      }
    },
    createdAt: new Date("2023-09-22"),
    viewCount: 932
  },
  {
    id: "q7",
    title: "How to create perspective in drawing?",
    topic: "drawing",
    content: {
      explanation: "Perspective in drawing creates the illusion of depth and distance on a flat surface. One-point perspective has a single vanishing point on the horizon line, two-point has two, and three-point adds a third vanishing point above or below the horizon. Understanding perspective helps artists create more realistic and dimensional artwork.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        altText: "Diagram showing one-point, two-point, and three-point perspective in drawing"
      }
    },
    createdAt: new Date("2023-09-25"),
    viewCount: 765
  },
  {
    id: "q8",
    title: "What are the basic Hindi vowels and their pronunciations?",
    topic: "hindi",
    content: {
      explanation: "Hindi has 11 vowels (svar) that can be written as independent letters or as vowel signs with consonants. The basic vowels include अ (a), आ (aa), इ (i), ई (ee), उ (u), ऊ (oo), ए (e), ऐ (ai), ओ (o), and औ (au). Each vowel has a distinct sound that affects pronunciation in Hindi words.",
      visualContent: {
        type: "image",
        url: "https://images.unsplash.com/photo-1555698692-e5a222034019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        altText: "Hindi vowels chart showing symbols and pronunciations"
      }
    },
    createdAt: new Date("2023-09-28"),
    viewCount: 621
  }
];

// Get questions by topic
export const getQuestionsByTopic = (topicId: string): Question[] => {
  return sampleQuestions.filter(q => q.topic === topicId);
};

// Get question by ID
export const getQuestionById = (id: string): Question | undefined => {
  return sampleQuestions.find(q => q.id === id);
};

// Search questions
export const searchQuestions = (query: string): Question[] => {
  const lowerCaseQuery = query.toLowerCase().trim();
  if (!lowerCaseQuery) return [];
  
  return sampleQuestions.filter(q => 
    q.title.toLowerCase().includes(lowerCaseQuery) || 
    q.content.explanation.toLowerCase().includes(lowerCaseQuery)
  );
};

// Get recent questions
export const getRecentQuestions = (limit: number = 5): Question[] => {
  return [...sampleQuestions]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
};

// Get popular questions
export const getPopularQuestions = (limit: number = 5): Question[] => {
  return [...sampleQuestions]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit);
};
