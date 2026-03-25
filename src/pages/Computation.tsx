import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Database, Cpu, GitBranch, Share2 } from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { MathBlock } from '@/components/MathBlock';

const tools = [
  { name: 'Python', category: 'Language', level: 95, icon: <Code2 /> },
  { name: 'Julia', category: 'Language', level: 85, icon: <Code2 /> },
  { name: 'MATLAB', category: 'Software', level: 90, icon: <Terminal /> },
  { name: 'Mathematica', category: 'Software', level: 80, icon: <Terminal /> },
  { name: 'C++', category: 'Language', level: 75, icon: <Cpu /> },
  { name: 'LaTeX', category: 'Typesetting', level: 100, icon: <FileText /> },
];

import { FileText } from 'lucide-react';

export const Computation: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Computation & <span className="text-burgundy">Tools</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            Theoretical insights are validated through rigorous computational experiments. I utilize high-performance computing and modern programming paradigms to solve complex mathematical problems.
          </p>
        </AnimatedContainer>

        {/* Languages & Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {tools.map((tool, index) => (
            <AnimatedContainer key={tool.name} delay={index * 0.05} className="glass p-8 rounded-2xl group hover:bg-white transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-cream transition-all">
                  {tool.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{tool.category}</span>
              </div>
              <h3 className="text-2xl font-serif mb-4">{tool.name}</h3>
              <div className="h-1.5 w-full bg-charcoal/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-burgundy"
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-charcoal/40 uppercase">Proficiency</span>
                <span className="text-[10px] font-bold text-burgundy">{tool.level}%</span>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Infrastructure & Reproducibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <AnimatedContainer className="glass p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
              <Cpu className="w-64 h-64" />
            </div>
            <h2 className="text-3xl font-serif mb-8 flex items-center">
              <Database className="mr-4 text-burgundy" />
              Infrastructure
            </h2>
            <div className="space-y-8 relative z-10">
              <div>
                <h4 className="font-serif text-xl mb-2">High Performance Computing</h4>
                <p className="text-sm text-charcoal/60">Experience with SLURM-managed clusters, GPU acceleration (CUDA), and distributed computing frameworks.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Version Control & CI/CD</h4>
                <p className="text-sm text-charcoal/60">Strict adherence to Git workflows, automated testing for numerical stability, and containerization (Docker).</p>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} className="bg-charcoal text-cream p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 opacity-10 pointer-events-none">
              <MathBlock math="\text{Reproducibility} = \frac{\text{Code} + \text{Data}}{\text{Documentation}}" className="text-4xl" />
            </div>
            <h2 className="text-3xl font-serif mb-8 flex items-center text-gold">
              <Share2 className="mr-4" />
              Reproducibility
            </h2>
            <p className="text-cream/70 leading-relaxed mb-8">
              I am a strong advocate for Open Science. All my research is accompanied by documented code repositories and open-access data statements.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-burgundy flex items-center justify-center text-[10px] font-bold">
                    <GitBranch className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <span className="text-xs text-cream/40 italic">42 Public Repositories on GitHub</span>
            </div>
          </AnimatedContainer>
        </div>

        {/* Code Snippet / Math Visual */}
        <AnimatedContainer className="glass p-10 rounded-3xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl">Numerical Integration Example</h3>
            <span className="text-xs font-mono text-charcoal/40">julia_script.jl</span>
          </div>
          <pre className="bg-charcoal/5 p-8 rounded-2xl overflow-x-auto font-mono text-sm text-burgundy leading-relaxed">
{`function solve_pde(mesh, initial_condition)
    # Spectral decomposition of the operator
    eigenvalues, eigenvectors = decompose(mesh.operator)
    
    # Time evolution in spectral space
    solution_coeffs = eigenvectors' * initial_condition
    evolved_coeffs = solution_coeffs .* exp.(-eigenvalues * dt)
    
    return eigenvectors * evolved_coeffs
end`}
          </pre>
        </AnimatedContainer>
      </div>
    </div>
  );
};
