
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "python" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div className="bg-gray-950 rounded-xl overflow-hidden mb-6 animate-fade-in">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
        <span className="text-gray-400 text-sm">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              <span className="text-xs">Copy code</span>
            </>
          )}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-gray-300 text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
