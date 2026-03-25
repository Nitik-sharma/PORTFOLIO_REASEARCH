import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, GraduationCap, Send, Download } from 'lucide-react';
import { AnimatedContainer } from '@/components/AnimatedContainer';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedContainer className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Get in <span className="text-burgundy">Touch</span></h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
            I am always open to academic collaborations, speaking engagements, and discussions on mathematical physics. Feel free to reach out through the form or professional channels.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedContainer className="glass p-10 rounded-3xl">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Message Sent</h3>
                <p className="text-charcoal/60 mb-8">Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-burgundy font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                      placeholder="Isaac Newton"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                      placeholder="isaac@cambridge.edu"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all"
                    placeholder="Collaboration Proposal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-charcoal/40 ml-1">Message</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full bg-cream/50 border border-charcoal/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  className="w-full bg-burgundy text-cream py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-burgundy/90 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {formState === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatedContainer>

          {/* Contact Info */}
          <div className="space-y-12">
            <AnimatedContainer delay={0.1}>
              <h3 className="text-sm uppercase tracking-[0.3em] text-gold mb-8">Professional Channels</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email</h4>
                    <p className="text-charcoal/60">a.aurelius@university.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Institution</h4>
                    <p className="text-charcoal/60">Department of Mathematical Physics<br />Institute for Advanced Studies</p>
                  </div>
                </div>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <h3 className="text-sm uppercase tracking-[0.3em] text-gold mb-8">Academic Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="glass p-4 rounded-xl flex items-center space-x-3 hover:bg-white transition-all group">
                  <Linkedin className="w-5 h-5 text-burgundy group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="#" className="glass p-4 rounded-xl flex items-center space-x-3 hover:bg-white transition-all group">
                  <Github className="w-5 h-5 text-burgundy group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href="#" className="glass p-4 rounded-xl flex items-center space-x-3 hover:bg-white transition-all group">
                  <GraduationCap className="w-5 h-5 text-burgundy group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Scholar</span>
                </a>
                <a href="#" className="glass p-4 rounded-xl flex items-center space-x-3 hover:bg-white transition-all group">
                  <div className="w-5 h-5 text-burgundy font-bold text-xs flex items-center justify-center border-2 border-burgundy rounded-full group-hover:scale-110 transition-transform">ID</div>
                  <span className="text-sm font-medium">ORCID</span>
                </a>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3} className="bg-gold/10 p-8 rounded-3xl border border-gold/20">
              <h3 className="font-serif text-2xl mb-4 text-burgundy">Curriculum Vitae</h3>
              <p className="text-sm text-charcoal/60 mb-6">Download my full academic CV including complete publication list and research history.</p>
              <a 
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-burgundy font-bold uppercase tracking-widest text-xs hover:underline"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF (Last updated Mar 2026)</span>
              </a>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
