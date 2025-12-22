import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Data from the paper (Tables 2, 3, 4)

const datasets = [

  {

    name: 'Amazon Clothing',

    metrics: [

        { name: 'ERLER (Ours)', precision: 0.763, hr: 7.340, ndcg: 2.971, isOurs: true },

        { name: 'SSRL', precision: 0.746, hr: 7.195, ndcg: 2.938, isSota: { precision: true, hr: true } },

        { name: 'REKS', precision: 0.599, hr: 5.992, ndcg: 3.107, isSota: { ndcg: true } },

        { name: 'PGPR', precision: 0.739, hr: 7.142, ndcg: 2.889 },

        { name: 'JRL', precision: 0.449, hr: 4.715, ndcg: 1.754 },

    ]

  },

  {

    name: 'Amazon Beauty',

    metrics: [

        { name: 'ERLER (Ours)', precision: 1.784, hr: 14.785, ndcg: 5.654, isOurs: true },

        { name: 'SSRL', precision: 1.741, hr: 14.601, ndcg: 5.650, isSota: { precision: true, hr: true } },

        { name: 'PGPR', precision: 1.723, hr: 14.488, ndcg: 5.574 },

        { name: 'REKS', precision: 1.119, hr: 11.189, ndcg: 6.124, isSota: { ndcg: true } },

        { name: 'JRL', precision: 1.560, hr: 12.853, ndcg: 4.497 },

    ]

  },

  {

    name: 'Amazon Cell',

    metrics: [

        { name: 'ERLER (Ours)', precision: 1.316, hr: 12.336, ndcg: 5.187, isOurs: true },

        { name: 'PGPR', precision: 0.871, hr: 8.437, ndcg: 3.822, isSota: { precision: true } },

        { name: 'SSRL', precision: 0.846, hr: 8.178, ndcg: 3.662 },

        { name: 'REKS', precision: 0.854, hr: 8.539, ndcg: 4.619, isSota: { hr: true, ndcg: true } },

        { name: 'CKE', precision: 0.732, hr: 7.661, ndcg: 3.028 },

    ]

  }

];



const BarChart: React.FC<{ data: any[], dataKey: string, color: string, label: string }> = ({ data, dataKey, color, label }) => {

    // Determine the max value for scaling

    const maxVal = Math.max(...data.map(d => d[dataKey]));

    

    // Sort data for visualization (descending)

    const sortedData = [...data].sort((a, b) => b[dataKey] - a[dataKey]);



    return (

        <div className="flex flex-col gap-3">

            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</h4>

            {sortedData.map((item, index) => {

                const isMetricSota = item.isSota && item.isSota[dataKey.toLowerCase()];

                

                return (

                    <div key={index} className="relative flex items-center gap-4 h-8">

                        <div className={`w-24 text-xs font-medium text-right shrink-0 truncate ${item.isOurs ? 'text-blue-700 font-bold' : (isMetricSota ? 'text-amber-600 font-bold' : 'text-slate-500')}`}>

                            {item.name}

                            {isMetricSota && <span className="ml-1 text-[10px] px-1 rounded border text-amber-600 border-amber-200 bg-amber-50">SOTA</span>}

                        </div>

                        <div className="flex-1 bg-slate-100 rounded-full h-full relative overflow-hidden">

                            <motion.div 

                                initial={{ width: 0 }}

                                whileInView={{ width: `${(item[dataKey] / maxVal) * 100}%` }}

                                transition={{ duration: 0.8, ease: "easeOut" }}

                                className={`h-full rounded-full flex items-center justify-end px-2 ${

                                    item.isOurs 

                                        ? color 

                                        : (isMetricSota ? 'bg-amber-500' : 'bg-slate-300')

                                }`}>

                                <span className={`text-[10px] font-bold ${

                                    item.isOurs || isMetricSota ? 'text-white' : 'text-slate-600'

                                }`}>

                                    {item[dataKey].toFixed(3)}

                                </span>

                            </motion.div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Performance Evaluation</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comparison against state-of-the-art baselines including PGPR, SSRL, and REKS on three real-world Amazon datasets.
          </p>
        </div>

        {/* Dataset Tabs */}
        <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 p-1 rounded-xl">
                {datasets.map((d, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            activeTab === idx 
                            ? 'bg-white text-slate-900 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        {d.name}
                    </button>
                ))}
            </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <BarChart 
                data={datasets[activeTab].metrics} 
                dataKey="precision" 
                color="bg-blue-600" 
                label="Precision@10 (%)"
            />
            <BarChart 
                data={datasets[activeTab].metrics} 
                dataKey="hr" 
                color="bg-indigo-600" 
                label="Hit Ratio@10 (%)"
            />
            <BarChart 
                data={datasets[activeTab].metrics} 
                dataKey="ndcg" 
                color="bg-emerald-600" 
                label="NDCG@10 (%)"
            />
        </div>

        <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
             <p className="text-sm text-slate-600">
                <strong>Key Insight:</strong> ERLER achieves <span className="text-blue-600 font-bold">+51.09%</span> improvement in Precision on the <strong>Amazon Cell</strong> dataset compared to previous SOTA, demonstrating exceptional robustness in sparse data scenarios.
             </p>
        </div>
      </div>
    </section>
  );
};