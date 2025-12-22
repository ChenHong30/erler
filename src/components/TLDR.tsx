import React from 'react';
import { Lightbulb, Target, Zap, TrendingUp } from 'lucide-react';

export const TLDR: React.FC = () => {
  const points = [
    {
      icon: <Target className="w-5 h-5 text-rose-500" />,
      title: "Problem",
      text: "Explainable recommendation on Knowledge Graphs suffers from large action spaces, making Reinforcement Learning hard to converge."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
      title: "Solution",
      text: "ERLER: A framework combining Evolutionary Strategies with RL to dynamically optimize recommendation policies."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Key Tech",
      text: "Novel mutation mechanism for action pruning + Entropy-guided adaptive critic for stable training."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      title: "Results",
      text: "Outperforms SOTA on 3 datasets. Higher accuracy (Precision/HR) and better path reasoning quality."
    }
  ];

  return (
    <section id="tldr" className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <div className="shrink-0">
                <h2 className="text-2xl font-bold text-slate-900">TL;DR</h2>
                <p className="text-slate-500 text-sm mt-1">Too Long; Didn't Read</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {points.map((point, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="shrink-0 mt-1">
                            {point.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1">{point.title}</h3>
                            <p className="text-slate-600 text-xs leading-relaxed">
                                {point.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
