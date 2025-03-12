
import { QuestionContent } from "@/utils/questionService";
import CodeBlock from "@/components/CodeBlock";
import VisualContent from "@/components/VisualContent";

interface AnswerSectionProps {
  content: QuestionContent;
}

const AnswerSection = ({ content }: AnswerSectionProps) => {
  // Split explanation into paragraphs
  const paragraphs = content.explanation.split("\n").filter(p => p.trim().length > 0);

  return (
    <div className="animate-fade-in" style={{ animationDuration: "0.5s" }}>
      {/* Explanation */}
      <div className="prose prose-slate max-w-none mb-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* Visual Content (if available) */}
      {content.visualContent && (
        <VisualContent content={content.visualContent} />
      )}
      
      {/* Code Block (if available) */}
      {content.code && (
        <CodeBlock code={content.code} />
      )}
    </div>
  );
};

export default AnswerSection;
