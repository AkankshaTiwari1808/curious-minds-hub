
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import { getQuestionsByTopic } from "@/utils/questionService";
import { getTopicById } from "@/utils/topicData";

const TopicQuestions = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
    
    // Simulate data loading
    const timer = setTimeout(() => {
      if (topicId) {
        const fetchedQuestions = getQuestionsByTopic(topicId);
        setQuestions(fetchedQuestions);
      }
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [topicId]);

  if (!topicId) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
          <p className="text-gray-500 mb-8">The topic you're looking for doesn't exist.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const topic = getTopicById(topicId);
  const TopicIcon = topic.icon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Back navigation */}
        <div className="mb-6 animate-fade-in">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
        
        {/* Topic header */}
        <div className="flex items-center mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mr-6 topic-icon"
            style={{ backgroundColor: `${topic.color}20` }}
          >
            <TopicIcon className="h-8 w-8" style={{ color: topic.color }} />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: topic.color }}>
              {topic.name}
            </h1>
            <p className="text-gray-500">{topic.description}</p>
          </div>
        </div>
        
        {/* Questions list */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 animate-slide-up">Questions</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gray-100 rounded-xl p-6 h-56 animate-pulse"
                ></div>
              ))}
            </div>
          ) : questions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questions.map((question, index) => (
                <QuestionCard key={question.id} question={question} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-xl">
              <p className="text-gray-500 mb-4">No questions found for this topic.</p>
              <p className="text-sm text-gray-400">Check back later or explore other topics.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TopicQuestions;
