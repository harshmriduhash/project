import React from 'react';
import { Brain, Code2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DevAI Hub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Find Work</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Hire Talent</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">AI Matching</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Post a Job
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Find Work</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Hire Talent</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">AI Matching</a>
            <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Post a Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}