import React from 'react';
import { motion } from 'motion/react';
import { MathBlock } from '@/components/MathBlock';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { researchAreas } from '@/data/content';
import { Beaker, Cpu, Globe, Layers } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Research <span className="text-burgundy">Agenda</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            My research focuses on the mathematical foundations of complex systems. I bridge the gap between abstract theoretical frameworks and practical computational implementation.
          </p>
        </AnimatedContainer>

        {/* Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {researchAreas.map((area, index) => (
            <AnimatedContainer key={area.id} delay={index * 0.1} className="glass p-10 rounded-3xl group hover:bg-white transition-all">
              <h3 className="text-3xl font-serif mb-4 group-hover:text-burgundy transition-colors">{area.title}</h3>
              <p className="text-charcoal/60 mb-8">{area.description}</p>
              
              <div className="bg-cream/50 p-6 rounded-2xl mb-8">
                <h4 className="text-xs uppercase tracking-widest text-gold mb-3">Mathematical Framework</h4>
                <MathBlock math={area.math} className="text-2xl" />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-serif italic text-burgundy">Key Results</h4>
                  <p className="text-sm text-charcoal/70">{area.results}</p>
                </div>
                <div>
                  <h4 className="font-serif italic text-burgundy">Methodology</h4>
                  <p className="text-sm text-charcoal/70">{area.framework}</p>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Methodology Strip */}
        <AnimatedContainer className="bg-charcoal text-cream rounded-3xl p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <MathBlock math="\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}" className="text-[12rem]" />
          </div>
          
          <h2 className="text-3xl font-serif mb-12 text-gold">Methodological Framework</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
                <Layers className="text-cream" />
              </div>
              <h4 className="font-serif text-xl">Analytical Proofs</h4>
              <p className="text-sm text-cream/60">Rigorous derivation of existence and uniqueness theorems in functional spaces.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
                <Cpu className="text-cream" />
              </div>
              <h4 className="font-serif text-xl">Numerical Methods</h4>
              <p className="text-sm text-cream/60">High-order finite difference and spectral methods for non-linear PDEs.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
                <Beaker className="text-cream" />
              </div>
              <h4 className="font-serif text-xl">Stochastic Modeling</h4>
              <p className="text-sm text-cream/60">Monte Carlo simulations and Bayesian inference for parameter estimation.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center">
                <Globe className="text-cream" />
              </div>
              <h4 className="font-serif text-xl">HPC Optimization</h4>
              <p className="text-sm text-cream/60">Parallelized computation using MPI/OpenMP for large-scale simulations.</p>
            </div>
          </div>
        </AnimatedContainer>

        {/* Interactive Placeholder */}
        <AnimatedContainer className="mt-24 text-center">
          <h2 className="text-3xl font-serif mb-8">Simulation Preview</h2>
          <div className="glass h-96 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
               {/* Simple animated background to simulate a plot */}
               <svg width="100%" height="100%" viewBox="0 0 800 400">
                  <motion.path
                    d="M0 200 Q 200 100 400 200 T 800 200"
                    fill="none"
                    stroke="#6b1f2b"
                    strokeWidth="2"
                    animate={{ d: ["M0 200 Q 200 50 400 200 T 800 200", "M0 200 Q 200 350 400 200 T 800 200", "M0 200 Q 200 50 400 200 T 800 200"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0 200 Q 200 300 400 200 T 800 200"
                    fill="none"
                    stroke="#c9a227"
                    strokeWidth="1"
                    animate={{ d: ["M0 200 Q 200 350 400 200 T 800 200", "M0 200 Q 200 50 400 200 T 800 200", "M0 200 Q 200 350 400 200 T 800 200"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  />
               </svg>
            </div>
            <div className="z-10 text-charcoal/40 font-mono text-sm">
              [ Interactive Phase Portrait Simulation Placeholder ]
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};
