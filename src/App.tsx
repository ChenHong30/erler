import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TLDR } from './components/TLDR';
import { Methodology } from './components/Methodology';
import { Results } from './components/Results';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TLDR />
        <Methodology />
        <Results />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-center md:text-left">
            <p>© 2026 ERLER Project. Published in Applied Soft Computing.</p>
            <p className="mt-1 opacity-75">Page Developed by Gemini CLI</p>
          </div>
          <div className="flex items-center gap-6">
             <a href="mailto:vvcheung@stu.xmu.edu.cn" className="hover:text-white transition-colors flex items-center gap-2">
               <Mail size={16} />
               Contact
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;