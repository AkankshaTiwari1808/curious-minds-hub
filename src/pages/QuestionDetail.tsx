
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnswerSection from "@/components/AnswerSection";
import { getQuestionById } from "@/utils/questionService";
import { getTopicById } from "@/utils/topicData";

const QuestionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
    
    // Simulate data loading
    const timer = setTimeout(() => {
      if (id) {
        const fetchedQuestion = getQuestionById(id);
        setQuestion(fetchedQuestion || null);
      }
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
          <div className="h-8 bg-gray-200 w-36 rounded-md mb-4 animate-pulse"></div>
          <div className="h-12 bg-gray-200 w-full rounded-md mb-8 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-100 w-full rounded-md animate-pulse"></div>
            <div className="h-4 bg-gray-100 w-full rounded-md animate-pulse"></div>
            <div className="h-4 bg-gray-100 w-5/6 rounded-md animate-pulse"></div>
          </div>
          <div className="h-64 bg-gray-200 w-full rounded-xl my-8 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Question not found</h1>
          <p className="text-gray-500 mb-8">The question you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const topic = getTopicById(question.topic);
  const TopicIcon = topic.icon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back navigation */}
        <div className="mb-6 animate-fade-in">
          <Link 
            to={`/topics/${topic.id}`}
            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {topic.name}
          </Link>
        </div>
        
        {/* Topic badge */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Link 
            to={`/topics/${topic.id}`}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm"
            style={{ backgroundColor: `${topic.color}15`, color: topic.color }}
          >
            <TopicIcon className="h-4 w-4 mr-2" />
            {topic.name}
          </Link>
        </div>
        
        {/* Question title */}
        <h1 className="text-3xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {question.title}
        </h1>
        
        {/* Question metadata */}
        <div className="flex items-center text-sm text-gray-500 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{question.viewCount.toLocaleString()} views</span>
          </div>
          <span className="mx-3">•</span>
          <div>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            }).format(question.createdAt)}
          </div>
        </div>
        
        {/* Answer content */}
        <div style={{ animationDelay: "0.4s" }}>
          <AnswerSection content={question.content} />
        </div>
      </main>
      
      {/* Related questions (could be implemented in the future) */}
    </div>
  );
};

export default QuestionDetail;
