
import { useState, useEffect } from "react";
import { VisualContent as VisualContentType } from "@/utils/questionService";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VisualContentProps {
  content: VisualContentType;
}

const VisualContent = ({ content }: VisualContentProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset loaded state when content changes
    setIsLoaded(false);
  }, [content]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (content.type === 'image' && content.url) {
    return (
      <div className="rounded-xl overflow-hidden mb-6 bg-gray-100 transition-all duration-300">
        <AspectRatio ratio={16 / 9}>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <img
            src={content.url}
            alt={content.altText || "Visual explanation"}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
          />
        </AspectRatio>
        {content.altText && (
          <div className="p-3 bg-gray-50 text-sm text-gray-500">
            {content.altText}
          </div>
        )}
      </div>
    );
  }

  // Future: implement chart and animation types

  return null;
};

export default VisualContent;
