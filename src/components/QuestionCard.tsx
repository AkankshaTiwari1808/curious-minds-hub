
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Question } from "@/utils/questionService";
import { getTopicById } from "@/utils/topicData";

interface QuestionCardProps {
  question: Question;
  index?: number;
}

const QuestionCard = ({ question, index = 0 }: QuestionCardProps) => {
  const topic = getTopicById(question.topic);
  const TopicIcon = topic.icon;

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  // Truncate text
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div 
      className="bg-white rounded-xl p-6 transition-all hover:shadow-md animate-fade-in border border-gray-100"
      style={{ 
        animationDelay: `${index * 0.05}s`,
        animationFillMode: 'both' 
      }}
    >
      <div className="flex items-center space-x-2 mb-3">
        <div 
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${topic.color}20` }}
        >
          <TopicIcon className="h-4 w-4" style={{ color: topic.color }} />
        </div>
        <span className="text-sm font-medium" style={{ color: topic.color }}>{topic.name}</span>
      </div>
      
      <Link to={`/question/${question.id}`}>
        <h3 className="text-lg font-medium mb-3 hover:text-gray-700 transition-colors">
          {question.title}
        </h3>
      </Link>
      
      <p className="text-gray-500 text-sm mb-4">
        {truncate(question.content.explanation, 120)}
      </p>
      
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="text-xs text-gray-400 flex items-center space-x-3">
          <span>{formatDate(question.createdAt)}</span>
          <span>{question.viewCount.toLocaleString()} views</span>
        </div>
        
        <Link 
          to={`/question/${question.id}`}
          className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read answer
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
