
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchQuestions } from "@/utils/questionService";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [results, setResults] = useState<{ id: string; title: string }[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Add click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const foundResults = searchQuestions(query)
        .map(q => ({ id: q.id, title: q.title }))
        .slice(0, 5);
      setResults(foundResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchFocused(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Ask anything or search for questions..."
            className="search-input pr-12"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button
              type="submit"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </form>

      {isSearchFocused && results.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 animate-scale-in">
          <ul className="py-2">
            {results.map((result) => (
              <li key={result.id}>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    navigate(`/question/${result.id}`);
                    setIsSearchFocused(false);
                  }}
                >
                  {result.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 px-4 py-2 text-center">
            <button
              className="text-sm text-blue-500 hover:text-blue-600"
              onClick={() => {
                navigate(`/search?q=${encodeURIComponent(query)}`);
                setIsSearchFocused(false);
              }}
            >
              See all results for "{query}"
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
