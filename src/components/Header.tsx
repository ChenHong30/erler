import React from 'react';
import { Logo } from './Logo';
import { FileText } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-bold text-xl text-slate-900 tracking-tight">ERLER</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#abstract" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Abstract</a>
            <a href="#methodology" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Methodology</a>
            <a href="#results" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Results</a>
            <a href="#authors" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Authors</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.sciencedirect.com/science/article/pii/S156849462501693X"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold hover:bg-blue-100 transition-colors"
            >
              <FileText size={16} />
              <span className="hidden sm:inline">Read Paper</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
