import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { MathBlock } from "@/components/MathBlock";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { publications, researchAreas } from "@/data/content";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    /* Added overflow-x-hidden to the main wrapper to prevent any horizontal scroll */
    <div className="pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
        {/* Background Animation - Fixed positioning for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            /* Changed -right-1/4 to -right-1/2 on small screens to ensure it doesn't push width */
            className="absolute -top-1/4 -right-1/2 md:-right-1/4"
          >
            <MathBlock
              math="\mathcal{L} = \bar{\psi}(i\gamma^\mu D_\mu - m)\psi - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}"
              className="text-[10rem] md:text-[15rem]"
            />
          </motion.div>
        </div>

        <AnimatedContainer className="text-center z-10 flex flex-col items-center w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse" />
            <motion.img
              src="https://picsum.photos/seed/academic-portrait/400/400"
              alt="Dr. Alaric Aurelius"
              referrerPolicy="no-referrer"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <h2 className="text-gold font-serif italic text-lg md:text-xl mb-4">
            Theoretical Physicist & Applied Mathematician
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tighter break-words px-2">
            Dr. Bhavna <span className="text-burgundy">Kaushik</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Exploring the intersection of differential geometry, stochastic
            processes, and high-performance computing to decode the fundamental
            patterns of our universe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
            <Link
              to="/research"
              className="bg-burgundy text-cream px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-burgundy/90 transition-all shadow-lg"
            >
              <button >
                {" "}
                <span>View Research</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <a
              href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-burgundy text-burgundy px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-burgundy hover:text-cream transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </AnimatedContainer>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-burgundy/40 hidden md:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedContainer className="text-center">
            <div className="w-20 h-1 bg-gold mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-serif mb-8">
              Research Philosophy
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-charcoal/80 leading-relaxed">
              "Mathematics is not just a tool for description, but the very
              fabric of reality."
            </p>
          </AnimatedContainer>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Latest Publication */}
          <AnimatedContainer delay={0.1}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Latest Publication
            </h3>
            <div className="glass p-6 md:p-8 rounded-2xl shadow-xl">
              <span className="text-xs font-bold text-burgundy/60 mb-2 block">
                {publications[0].year} • {publications[0].journal}
              </span>
              <h4 className="text-xl md:text-2xl font-serif mb-4">
                {publications[0].title}
              </h4>
              <p className="text-charcoal/60 text-sm mb-6 line-clamp-3">
                {publications[0].abstract}
              </p>
              <div className="flex items-center text-burgundy font-medium text-sm cursor-pointer group">
                <span>Read Paper</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </AnimatedContainer>

          {/* Current Project */}
          <AnimatedContainer delay={0.2}>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Current Project
            </h3>
            <div className="glass p-6 md:p-8 rounded-2xl shadow-xl">
              <span className="text-xs font-bold text-burgundy/60 mb-2 block">
                Ongoing Research
              </span>
              <h4 className="text-xl md:text-2xl font-serif mb-4">
                Neural Geometric Manifolds
              </h4>
              <p className="text-charcoal/60 text-sm mb-6">
                Investigating the intrinsic curvature of latent spaces in deep
                generative models using Ricci flow techniques.
              </p>
              <div className="flex items-center text-burgundy font-medium text-sm cursor-pointer group">
                <span>Project Details</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Mathematical Identity */}
      <section className="py-20 px-6 bg-burgundy text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedContainer>
              <h2 className="text-3xl md:text-5xl font-serif mb-8">
                Mathematical Identity
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-gold font-serif italic text-lg mb-2">
                    Primary Areas
                  </h4>
                  <p className="text-cream/70">
                    Differential Geometry, Stochastic Analysis, Dynamical
                    Systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-gold font-serif italic text-lg mb-2">
                    Methods
                  </h4>
                  <p className="text-cream/70">
                    Analytical proofs, Variational methods, Monte Carlo
                    simulations.
                  </p>
                </div>
              </div>
            </AnimatedContainer>

            <AnimatedContainer className="glass bg-white/5 border-white/10 p-6 md:p-10 rounded-3xl overflow-hidden">
              {/* Reduced math font size for mobile screens */}
              <div className="overflow-x-auto py-4">
                <MathBlock
                  math="R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}"
                  className="text-cream text-xl md:text-3xl math-glow"
                />
              </div>
              <p className="text-center text-[10px] md:text-xs text-cream/40 mt-8 font-mono">
                Einstein Field Equations — A cornerstone of my geometric
                framework.
              </p>
            </AnimatedContainer>
          </div>
        </div>
      </section>
    </div>
  );
};
