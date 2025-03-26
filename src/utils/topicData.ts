
import { 
  Atom, 
  Beaker, 
  Cog, 
  Code, 
  Dna, 
  Languages, 
  PaintBucket, 
  Radical, 
  BarChart2
} from "lucide-react";

export type Topic = {
  id: string;
  name: string;
  icon: any;
  color: string;
  description: string;
  questionCount: number;
};

export const topics: Topic[] = [
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    color: "#7660F8",
    description: "Discover the fundamental nature of energy, matter, and their interactions.",
    questionCount: 127
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: Beaker,
    color: "#26B0B0",
    description: "Explore the composition, structure, and properties of substances.",
    questionCount: 98
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: Radical,
    color: "#E85550",
    description: "Learn about numbers, quantities, and shapes through abstract concepts.",
    questionCount: 156
  },
  {
    id: "biology",
    name: "Biology",
    icon: Dna,
    color: "#3CAF56",
    description: "Study living organisms and their vital processes.",
    questionCount: 112
  },
  {
    id: "python",
    name: "Python",
    icon: Code,
    color: "#377AB9",
    description: "Master Python programming with practical examples and explanations.",
    questionCount: 143
  },
  {
    id: "statistics",
    name: "Statistics",
    icon: BarChart2,
    color: "#F9A620",
    description: "Analyze and interpret data to uncover patterns and insights.",
    questionCount: 87
  },
  {
    id: "drawing",
    name: "Drawing",
    icon: PaintBucket,
    color: "#D946EF",
    description: "Develop artistic skills and techniques for visual expression.",
    questionCount: 74
  },
  {
    id: "hindi",
    name: "Hindi",
    icon: Languages,
    color: "#F97316",
    description: "Learn one of India's official languages and its rich literature.",
    questionCount: 69
  },
  {
    id: "other",
    name: "Other Topics",
    icon: Cog,
    color: "#64748B",
    description: "Explore additional subjects and interdisciplinary knowledge.",
    questionCount: 203
  }
];

export const getTopicById = (id: string): Topic => {
  const topic = topics.find(t => t.id === id);
  return topic || topics[topics.length - 1]; // Return "Other" topic as fallback
};
