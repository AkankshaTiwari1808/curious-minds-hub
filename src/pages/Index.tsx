
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import TopicGrid from "@/components/TopicGrid";
import QuestionCard from "@/components/QuestionCard";
import { getRecentQuestions, getPopularQuestions } from "@/utils/questionService";

const Index = () => {
  const [recentQuestions, setRecentQuestions] = useState([]);
  const [popularQuestions, setPopularQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setRecentQuestions(getRecentQuestions(3));
      setPopularQuestions(getPopularQuestions(3));
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-xs font-medium text-blue-600 mb-6 animate-fade-in">
            Learn through interactive explanations
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Curious about anything?<br />
            <span className="text-physics">Get answers that make sense.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From Science to Math to Languages — ask questions and get<br className="hidden md:inline" /> 
            clear explanations with code, visuals, and interactive elements.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <SearchBar />
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">Explore Topics</h2>
              <p className="text-gray-500 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Dive into your favorite subjects and discover new knowledge
              </p>
            </div>
          </div>
          
          <TopicGrid />
        </div>
      </section>
      
      {/* Questions Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Recent Questions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 animate-slide-left">Recently Asked</h2>
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gray-100 rounded-xl p-6 mb-6 h-40 animate-pulse"
                ></div>
              ))
            ) : (
              recentQuestions.map((question, index) => (
                <div key={question.id} className="mb-6">
                  <QuestionCard question={question} index={index} />
                </div>
              ))
            )}
          </div>
          
          {/* Popular Questions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 animate-slide-right">Popular Now</h2>
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gray-100 rounded-xl p-6 mb-6 h-40 animate-pulse"
                ></div>
              ))
            ) : (
              popularQuestions.map((question, index) => (
                <div key={question.id} className="mb-6">
                  <QuestionCard question={question} index={index} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-semibold mb-2">CuriousMindsHub</h2>
          <p className="text-gray-500 text-sm mb-6">
            An interactive platform for learning and understanding complex topics
          </p>
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} CuriousMindsHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
