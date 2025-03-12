
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { topics, Topic } from "@/utils/topicData";

interface TopicCardProps {
  topic: Topic;
  delay: number;
}

const TopicCard = ({ topic, delay }: TopicCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.animationDelay = `${delay * 0.05}s`;
    }
  }, [delay]);

  const TopicIcon = topic.icon;

  return (
    <Link to={`/topics/${topic.id}`} className="block">
      <div 
        ref={ref}
        className="topic-card h-full bg-white p-6 flex flex-col items-center animate-scale-in"
        style={{ 
          boxShadow: `0 4px 15px rgba(0, 0, 0, 0.03)`, 
          animationFillMode: 'both', 
          animationDuration: '0.4s' 
        }}
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 topic-icon"
          style={{ backgroundColor: `${topic.color}20` }}
        >
          <TopicIcon className="h-8 w-8" style={{ color: topic.color }} />
        </div>
        <h3 className="text-lg font-medium mb-2" style={{ color: topic.color }}>{topic.name}</h3>
        <p className="text-sm text-gray-500 text-center mb-4">{topic.description}</p>
        <span className="text-xs text-gray-400">{topic.questionCount} questions</span>
      </div>
    </Link>
  );
};

const TopicGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic, index) => (
        <TopicCard key={topic.id} topic={topic} delay={index} />
      ))}
    </div>
  );
};

export default TopicGrid;
