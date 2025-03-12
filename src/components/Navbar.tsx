
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 
      ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight transition-colors animate-fade-in"
        >
          CuriousMinds<span className="text-physics">Hub</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "text-primary font-medium" : "text-muted-foreground"}`}>
            Home
          </Link>
          <Link to="/topics" className={`nav-link ${location.pathname.includes("/topics") ? "text-primary font-medium" : "text-muted-foreground"}`}>
            Topics
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "text-primary font-medium" : "text-muted-foreground"}`}>
            About
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button className="rounded-full">Ask Question</Button>
        </div>
        
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md p-4 flex flex-col space-y-4 animate-slide-down">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-md ${location.pathname === "/" ? "bg-secondary font-medium" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/topics" 
            className={`px-4 py-2 rounded-md ${location.pathname.includes("/topics") ? "bg-secondary font-medium" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Topics
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 rounded-md ${location.pathname === "/about" ? "bg-secondary font-medium" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-2 border-t">
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              Ask Question
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
