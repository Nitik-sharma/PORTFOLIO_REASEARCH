import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ExternalLink, Quote, Filter, Search } from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { publications } from '@/data/content';
import { cn } from '@/lib/utils';

export const Publications: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...new Set(publications.map(p => p.category))];

  const filteredPubs = publications.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                          p.authors.join(' ').toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <AnimatedContainer>
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Selected <span className="text-burgundy">Publications</span></h1>
            <p className="text-xl text-charcoal/70 max-w-2xl">
              A curated list of peer-reviewed journals, conference papers, and preprints.
            </p>
          </AnimatedContainer>

          {/* Metrics Panel */}
          <AnimatedContainer className="glass p-6 rounded-2xl flex space-x-8 shadow-sm">
            <div className="text-center">
              <span className="block text-3xl font-serif text-burgundy">{publications.length}</span>
              <span className="text-[10px] uppercase tracking-widest text-gold">Total Pubs</span>
            </div>
            <div className="w-px h-10 bg-charcoal/10 self-center" />
            <div className="text-center">
              <span className="block text-3xl font-serif text-burgundy">412</span>
              <span className="text-[10px] uppercase tracking-widest text-gold">Citations</span>
            </div>
            <div className="w-px h-10 bg-charcoal/10 self-center" />
            <div className="text-center">
              <span className="block text-3xl font-serif text-burgundy">12</span>
              <span className="text-[10px] uppercase tracking-widest text-gold">h-index</span>
            </div>
          </AnimatedContainer>
        </div>

        {/* Filters & Search */}
        <AnimatedContainer className="flex flex-col md:flex-row gap-6 mb-12 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by title or author..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-charcoal/10 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all bg-white/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  filter === cat ? "bg-burgundy text-cream shadow-md" : "bg-white/50 text-charcoal/60 hover:bg-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedContainer>

        {/* Publication List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredPubs.map((pub, index) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-8 rounded-2xl group hover:shadow-xl transition-all border-l-4 border-l-transparent hover:border-l-burgundy"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{pub.category}</span>
                      <span className="text-charcoal/40 text-xs font-mono">{pub.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif mb-3 group-hover:text-burgundy transition-colors">{pub.title}</h3>
                    <p className="text-sm text-charcoal/60 mb-4 italic">
                      {pub.authors.map((a, i) => (
                        <span key={a} className={a === "A. Aurelius" ? "font-bold text-charcoal" : ""}>
                          {a}{i < pub.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-6">{pub.journal}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {pub.doi && (
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-xs text-burgundy hover:underline">
                          <ExternalLink className="w-3 h-3" />
                          <span>DOI: {pub.doi}</span>
                        </a>
                      )}
                      {pub.arxiv && (
                        <a href={`https://arxiv.org/abs/${pub.arxiv}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-xs text-gold hover:underline">
                          <FileText className="w-3 h-3" />
                          <span>arXiv: {pub.arxiv}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 justify-end">
                    <button className="p-3 rounded-xl bg-charcoal/5 hover:bg-burgundy hover:text-cream transition-all group/btn" title="Copy BibTeX">
                      <Quote className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl bg-charcoal/5 hover:bg-burgundy hover:text-cream transition-all group/btn" title="Download PDF">
                      <FileText className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredPubs.length === 0 && (
            <div className="text-center py-20 text-charcoal/40 font-serif italic text-xl">
              No publications found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
