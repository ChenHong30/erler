import React from 'react';
import { motion } from 'framer-motion';
import { GitMerge, BrainCircuit, Search, ArrowRight, Layers, Sliders } from 'lucide-react';

const StepCard: React.FC<{ 
    step: number; 
    title: string; 
    desc: string; 
    icon: React.ReactNode;
}> = ({ step, title, desc, icon }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: step * 0.1 }}
        className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
    >
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-slate-50">
            {step}
        </div>
        <div className="mb-4 text-slate-500 group-hover:text-blue-600 transition-colors">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
);

export const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The ERLER Framework</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A hybrid approach combining evolutionary mechanisms with reinforcement learning for efficient path reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>

            <StepCard 
                step={1}
                title="State Encoding"
                desc="Encodes user state and candidate actions from KG relations. Uses a multi-hop scoring function for pruning."
                icon={<Layers size={28} />}
            />
            <StepCard 
                step={2}
                title="Action Mutation"
                desc="Applies evolutionary mutation to the action space. Prunes redundant actions while maintaining diversity."
                icon={<GitMerge size={28} />}
            />
            <StepCard 
                step={3}
                title="Policy Learning"
                desc="Actor-Critic network guides learning. Entropy-guided advantage prevents premature convergence."
                icon={<BrainCircuit size={28} />}
            />
            <StepCard 
                step={4}
                title="Path Reasoning"
                desc="Generates explicit explanation paths (e.g., User → Item A → Item B) for recommendations."
                icon={<Search size={28} />}
            />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Sliders className="text-blue-600" />
                    Adaptive Critic Mechanism
                </h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-full bg-slate-100 rounded-lg p-4">
                            <div className="flex justify-between text-sm font-semibold text-slate-700 mb-2">
                                <span>Standard Advantage</span>
                                <span className="text-slate-400">Fixed</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-slate-400"></div>
                            </div>
                        </div>
                        <div className="shrink-0 pt-2">
                            <ArrowRight className="text-slate-400" />
                        </div>
                        <div className="w-full bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="flex justify-between text-sm font-semibold text-blue-900 mb-2">
                                <span>Entropy-Guided</span>
                                <span className="text-blue-600">Dynamic</span>
                            </div>
                            <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-blue-600 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600">
                        Unlike traditional critics, ERLER integrates <strong>policy entropy</strong> into advantage calculation. 
                        This dynamically adjusts update magnitude: higher entropy (uncertainty) leads to more cautious updates, stabilizing training.
                    </p>
                </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Why it works?</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">✓</div>
                        <p className="text-slate-300 text-sm"><strong>Handles Large Action Spaces:</strong> Mutation reduces complexity effectively.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">✓</div>
                        <p className="text-slate-300 text-sm"><strong>Exploration vs. Exploitation:</strong> Hybrid nature balances finding new paths vs. optimizing known ones.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">✓</div>
                        <p className="text-slate-300 text-sm"><strong>Explainability:</strong> Explicit path generation builds user trust.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};