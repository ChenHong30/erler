import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-wide mb-8 border border-blue-100 shadow-sm">
              Applied Soft Computing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
              Evolutionary Reinforcement Learning for <br className="hidden md:block" />
              <span className="gradient-text">Explainable Recommendation</span> on Knowledge Graph
            </h1>

            <div className="mb-10 text-slate-700">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium mb-6">
                    <span>Yuanguo Lin<sup>1,2,†</sup></span>
                    <span>Hong Chen<sup>3,†</sup></span>
                    <span>Xiuze Zhou<sup>3</sup></span>
                    <span>Wei Zhang<sup>2,*</sup></span>
                    <span>Huanyu You<sup>4</sup></span>
                    <span>Fan Lin<sup>2,*</sup></span>
                    <span>Pengcheng Wu<sup>5</sup></span>
                </div>
                
                <div className="flex flex-col items-center gap-1 text-sm text-slate-500 max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-x-6">
                        <span><sup>1</sup> Jimei University</span>
                        <span><sup>2</sup> Xiamen University</span>
                        <span><sup>3</sup> The Hong Kong University of Science and Technology (Guangzhou)</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6">
                        <span><sup>4</sup> National University of Singapore</span>
                        <span><sup>5</sup> Nanyang Technological University</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-6 mt-2 text-xs text-slate-400">
                        <span><sup>†</sup> Co-first authors</span>
                        <span><sup>*</sup> Corresponding authors</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#methodology"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/20"
              >
                Our Approach
                <ArrowRight size={16} />
              </a>
              <a 
                href="https://www.sciencedirect.com/science/article/pii/S156849462501693X"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                <FileText size={16} />
                Paper PDF
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
