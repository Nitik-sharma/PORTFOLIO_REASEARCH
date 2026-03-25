import React from 'react';
import { MathBlock } from './MathBlock';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <MathBlock math="\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}" className="text-[10rem]" />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div>
          <h3 className="font-serif text-2xl mb-6">Aurelius Research</h3>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Advancing the frontiers of mathematical physics and computational science through rigorous analysis and innovative modeling.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-cream/60">
            <li><a href="/research" className="hover:text-cream transition-colors">Research Areas</a></li>
            <li><a href="/publications" className="hover:text-cream transition-colors">Publications</a></li>
            <li><a href="/teaching" className="hover:text-cream transition-colors">Teaching</a></li>
            <li><a href="/contact" className="hover:text-cream transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6 text-gold">Connect</h4>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all">G</a>
            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all">L</a>
            <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all">S</a>
          </div>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Dr. Aurelius. Last updated: March 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};
