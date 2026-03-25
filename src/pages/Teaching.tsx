import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Users, Award, CheckCircle } from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';
import { courses } from '@/data/content';
import { MathBlock } from '@/components/MathBlock';

export const Teaching: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Pedagogy & <span className="text-burgundy">Mentorship</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            I believe that the beauty of mathematics lies in its clarity. My teaching philosophy centers on building intuition before formalizing rigor, utilizing visual and computational tools to bring abstract concepts to life.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Philosophy Box */}
          <AnimatedContainer className="lg:col-span-2 glass p-12 rounded-3xl">
            <h2 className="text-3xl font-serif mb-8 text-burgundy">Teaching Philosophy</h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                My approach to education is rooted in the Socratic method, encouraging students to discover mathematical truths through guided inquiry. I emphasize the historical context of theorems to show that mathematics is a living, evolving human endeavor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-charcoal">Intuition First</h4>
                    <p className="text-sm">Visualizing complex analysis and geometry before diving into epsilons and deltas.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-charcoal">Computational Rigor</h4>
                    <p className="text-sm">Using Python and Julia to verify theoretical results and explore numerical stability.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Pedagogical Box */}
          <AnimatedContainer delay={0.2} className="bg-burgundy text-cream p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-gold">Instructional Toolkit</h3>
              <ul className="space-y-4 text-sm text-cream/80">
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Real-time LaTeX live-coding</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Interactive Jupyter Notebooks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Manim-based animations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Collaborative Overleaf projects</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 pt-10 border-t border-white/10">
               <MathBlock math="\int_a^b f(x)dx = F(b) - F(a)" className="text-cream text-2xl" />
            </div>
          </AnimatedContainer>
        </div>

        {/* Courses List */}
        <h2 className="text-4xl font-serif mb-12">Courses <span className="text-burgundy">Taught</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {courses.map((course, index) => (
            <AnimatedContainer key={course.id} delay={index * 0.1} className="glass p-8 rounded-2xl group hover:bg-white transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-gold uppercase tracking-widest">{course.code}</span>
                  <h3 className="text-2xl font-serif mt-1 group-hover:text-burgundy transition-colors">{course.title}</h3>
                </div>
                <span className="text-xs bg-charcoal/5 px-3 py-1 rounded-full font-medium">{course.period}</span>
              </div>
              <p className="text-charcoal/60 text-sm mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold border border-burgundy/20 text-burgundy px-2 py-0.5 rounded uppercase">{tag}</span>
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Mentoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedContainer className="glass p-10 rounded-3xl">
            <div className="flex items-center space-x-4 mb-8">
              <Users className="text-burgundy w-8 h-8" />
              <h2 className="text-3xl font-serif">Mentoring Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-gold pl-6">
                <h4 className="font-serif text-lg">PhD Candidates</h4>
                <p className="text-sm text-charcoal/60">Supervising 3 doctoral students in the field of Geometric Deep Learning.</p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <h4 className="font-serif text-lg">Undergraduate Research</h4>
                <p className="text-sm text-charcoal/60">Mentored 12+ students through the Summer Research Fellowship program.</p>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} className="glass p-10 rounded-3xl flex flex-col justify-center items-center text-center">
            <Award className="text-gold w-12 h-12 mb-6" />
            <h3 className="text-2xl font-serif mb-4">Teaching Recognition</h3>
            <p className="text-charcoal/60 italic">
              "Dr. Aurelius has a unique ability to make the most daunting theorems feel accessible and even beautiful. His lectures are a highlight of the curriculum."
            </p>
            <span className="mt-4 text-xs font-bold uppercase tracking-widest text-burgundy">— Dean's Award for Excellence in Instruction</span>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};
