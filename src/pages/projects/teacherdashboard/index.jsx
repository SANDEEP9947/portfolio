
import React, { useState, useEffect } from 'react';
import project1Image from '../../../assets/t1.png';
import t2Image from '../../../assets/t2.png';
import t5Image from '../../../assets/t5.png';
import t6Image from '../../../assets/t6.png';
import t7Image from '../../../assets/t7.png';
import t8Image from '../../../assets/t8.png';
import t9Image from '../../../assets/t9.png';
import t10Image from '../../../assets/t10.png';
import t11Image from '../../../assets/t11.png';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Bell, 
  Calendar, 
  CreditCard, 
  Users, 
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  Minus,
  MousePointer2,
  Layers,
  MessageSquare,
  Search,
  PenTool
} from 'lucide-react';

// Custom Parallax Component
const ParallaxImage = ({ src, alt, className, speed = -0.1, showColor = false }) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div 
        className="w-full h-[120%] absolute -top-[10%] left-0 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-contain opacity-90 transition-all duration-700 ${showColor ? '' : 'grayscale hover:grayscale-0'}`} 
        />
      </div>
    </div>
  );
};


const TeacherDashboard = () => {

  const visualOutcomes = [
    {
      title: "My Classes/Home Page",
      subtitle: "surfacing the next action",
      desc: "The 'Primary Class Card' solves for back-to-back transitions, providing the direct link to the live session, student notes, and curriculum booklets in a single glance. No more searching through nested menus.",
      img: t6Image,
      label: "Interface 1.0 — The Operations Hub",
    },
    {
      title: "Schedule Planning",
      subtitle: "reducing CONFUSION",
      desc: "A fully fledged calendar added to the main menu. It allows teachers to mental-map their entire shift and check upcoming class times and reschedule without any confusion.",
      img: t7Image,
      label: "Interface 2.0 — Calendar Integration"
    },
    {
      title: "Earnings Detail",
      subtitle: "rebuilding trust",
      desc: "A refined payouts page that presents base pay, incentives, and deductions in a transparent, consistent layout. Mismatched information was eliminated to restore trust with the teaching community.",
      img: t8Image,
      label: "Interface 3.0 — Earnings Transparency"
    },
    {
      title: "Student Scannability",
      subtitle: "emotional preparation",
      desc: "The redesigned student listing prioritizes behavioral tags and past engagement metrics. Teachers can now prep for a student's specific learning pace or emotional state before the call begins.",
      img: t9Image,
      label: "Interface 4.0 — Student Roster View"
    },
    {
      title: "Earnings Detail",
      subtitle: "emotional preparation",
      desc: "The redesigned student listing prioritizes behavioral tags and past engagement metrics. Teachers can now prep for a student's specific learning pace or emotional state before the call begins.",
      img: t10Image,
      label: "Interface 5.0 — Earnings Transparency"
    },
    {
      title: "Class Preparation",
      subtitle: "immediate utility",
      desc: "High-visibility links to curriculum material and student project status. Surfacing 'last class' context ensures teachers can pick up right where the student left off, improving the learning experience.",
      img: t11Image,
      label: "Interface 6.0 — Preparation HUD"
    }
  ];

  return (
    <div className="min-h-screen bg-[#242424] text-[#b3b3b3] font-sans selection:bg-[#b3b3b3] selection:text-[#242424] overflow-x-hidden">
      
      {/* Architectural Grid System */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] pointer-events-none z-0 px-6 md:px-12 flex justify-between opacity-[0.05]">
        <div className="w-px h-full bg-[#b3b3b3]"></div>
        <div className="w-px h-full bg-[#b3b3b3] hidden md:block"></div>
        <div className="w-px h-full bg-[#b3b3b3] hidden md:block"></div>
        <div className="w-px h-full bg-[#b3b3b3]"></div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex justify-between items-center">
          <a href="/" className="group flex items-center gap-2 text-xs uppercase tracking-widest text-[#b3b3b3]/60 hover:text-[#b3b3b3] transition-all font-mono">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Go Back
          </a>
          <div className="font-serif italic text-xl text-[#b3b3b3]">Sandeep.</div>
        </div>
      </nav>

      <main className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <section className="pt-40 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-8">
              <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest">BrightCHAMPS — Product Redesign</span>
              <h1 className="font-serif text-4xl md:text-[5vw] leading-[0.9] mb-12 -ml-1 text-[#b3b3b3]">
                From Data Overload <br /> <span className="italic text-[#b3b3b3]/40">to Actionable Insights</span>
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end pb-4">
              <div className="space-y-6 md:border-l border-[#b3b3b3]/20 md:pl-12">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Role</div>
                  <div className="text-sm">Lead Product Designer</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Impact</div>
                  <div className="text-sm">Scalability, Clarity & Usability</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Timeline</div>
                  <div className="text-sm">Q4 2024 — Present</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-32">
          <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <ParallaxImage 
              src={project1Image} 
              alt="Dashboard UI Preview" 
              className="w-full aspect-[21/9] md:h-[80vh] border-y border-[#b3b3b3]/10"
              speed={-0.08}
              showColor={true}
            />
          </div>
        </section>

        {/* Section 01: Overview */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 md:pr-12 pb-12 md:pb-0">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(01) — The Context</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3]">Redesigning for Scale</h2>
            </div>
            <div className="md:col-span-8 md:pl-12 border-l border-[#b3b3b3]/10">
               <div className="space-y-12">
                  <p className="text-xl md:text-3xl font-serif text-[#b3b3b3]/90 leading-snug">
                    Instructors at BrightCHAMPS needed a core tool that could keep up with rapid student growth. Functional richness had become a burden, creating fragmented workflows and heavy cognitive load.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 pt-12 border-t border-[#b3b3b3]/10">
                    <div className="md:pr-12 pb-8 md:pb-0">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#b3b3b3]/40 mb-4">The Goal</h4>
                      <p className="text-sm leading-relaxed text-[#b3b3b3]/70">Improve usability and scalability while preserving existing flows so teachers could transition without disruption.</p>
                    </div>
                    <div className="md:pl-12 border-l border-[#b3b3b3]/10">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#b3b3b3]/40 mb-4">The Challenge</h4>
                      <p className="text-sm leading-relaxed text-[#b3b3b3]/70">Modernize the interface without breaking familiar patterns relied upon during high-pressure live sessions.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 02: Discovery & Immersion (NEW RESEARCH SECTION) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 md:pr-12 pb-12 md:pb-0 sticky top-32 h-fit">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(02) — Discovery</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3]">The Insights Wall</h2>
               <p className="text-sm text-[#b3b3b3]/50 leading-relaxed max-w-xs mt-6">
                 I conducted qualitative interviews with teachers and team leads to map the emotional and operational journey of a typical 6-hour shift.
               </p>
               
               <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#b3b3b3]/40">
                    <MessageSquare size={12} /> 1:1 Teacher Interviews
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#b3b3b3]/40">
                    <Search size={12} /> Shadowing Sessions
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#b3b3b3]/40">
                    <PenTool size={12} /> Collaborative Ideation
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-8 md:pl-12 border-l border-[#b3b3b3]/10">
               <div className="grid grid-cols-1 gap-8">
                  {/* Research Artifact 1: Miro Board / Ideation */}
                  <div className="space-y-4">
                    <div className="aspect-[16/7] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] group">
                       <img 
                          src={t2Image}
                          className="w-full h-full object-cover transition-all duration-700" 
                          alt="Research Session" 
                       />
                    </div>
                    <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest">Fig 1.1 — 1:1 Teacher Interviews</div>
                  </div>

                  {/* Research Artifact 2: Zoom Call / Interviews */}
                  <div className="space-y-4">
                    <div className="aspect-[16/7] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] group">
                       <img 
                          src="https://framerusercontent.com/images/zrwpRpnP0hgICcCVt3y1dW9tY.png?width=2062&height=880" 
                          className="w-full h-full object-cover transition-all duration-700" 
                          alt="Teacher Interviews" 
                       />
                    </div>
                    <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest">Fig 1.2 — Current User flow with insights</div>
                  </div>

                  {/* Research Artifact 3: Sketches / Early Flows */}
                  <div className="space-y-4">
                    <div className="aspect-[16/7] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] group">
                       <img 
                          src="https://framerusercontent.com/images/Zs2PwFl7EwDUtDQDbrOzfyVI2Zs.png?width=1952&height=880" 
                          className="w-full h-full object-cover transition-all duration-700" 
                          alt="Early Concepts" 
                       />
                    </div>
                    <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest">Fig 1.3 — Current User flow with insights</div>
                  </div>

                  {/* Research Artifact 4: Additional Research */}
                  <div className="space-y-4">
                    <div className="aspect-[16/7] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] group">
                       <img 
                          src={t5Image}
                          className="w-full h-full object-cover transition-all duration-700" 
                          alt="Design Insights" 
                       />
                    </div>
                    <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest">Fig 1.4 — Analysing User Testing Results</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 03: UX Structural Issues (Renumbered) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 sticky top-32 h-fit md:pr-12 pb-12 md:pb-0">
                 <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(03) — Analysis</span>
                 <h2 className="font-serif text-4xl mb-4 italic leading-tight text-[#b3b3b3]">UX Structural <br /> Issues</h2>
                 <p className="text-sm text-[#b3b3b3]/50 leading-relaxed max-w-xs">The discovery phase revealed four profound friction points in daily operations.</p>
              </div>
              <div className="md:col-span-8 md:pl-12 border-l border-[#b3b3b3]/10">
                 <div className="divide-y divide-[#b3b3b3]/10">
                    {[
                      { title: "Poor Visual Hierarchy", desc: "Important info was missed because critical links (booklets, projects) lacked visibility among oversized widgets." },
                      { title: "Workflow Pain Points", desc: "Teachers checked multiple disparate locations before every class. Preparation required unnecessary steps." },
                      { title: "Emotional Friction", desc: "Performance metrics felt punitive rather than supportive, leading to anxiety about deductions." },
                      { title: "Discoverability Issues", desc: "Teachers frequently felt 'stuck' when switching between students or navigating the calendar between sessions." }
                    ].map((item, i) => (
                      <div key={i} className="group py-12 first:pt-0 last:pb-0">
                         <div className="flex justify-between items-baseline mb-4">
                            <h3 className="text-2xl font-serif text-[#b3b3b3]/80 group-hover:text-[#b3b3b3] transition-colors">{item.title}</h3>
                            <span className="text-[10px] font-mono text-[#b3b3b3]/20">0{i+1}</span>
                         </div>
                         <p className="text-sm text-[#b3b3b3]/60 leading-relaxed max-w-xl group-hover:text-[#b3b3b3]/80 transition-colors">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Section 04: Design Direction (Renumbered) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 sticky top-32 h-fit md:pr-12 pb-12 md:pb-0">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(04) — Strategy</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3]">Design Direction</h2>
               <p className="text-sm text-[#b3b3b3]/50 mt-6 leading-relaxed max-w-xs">Restoring visual order through structural clarity and progressive disclosure.</p>
            </div>
            
            <div className="md:col-span-8 border-l border-[#b3b3b3]/10">
               <div className="grid grid-cols-1 md:grid-cols-2">
                  {[
                    { label: "Hierarchy", title: "Visual Order", desc: "Ensuring high-priority actions are never more than a glance away." },
                    { label: "System", title: "Consistency", desc: "Aligning grades, counts, and earnings into a unified visual language." },
                    { label: "Cognition", title: "Progressive Disclosure", desc: "Reducing cognitive load by hiding non-essential data until needed." },
                    { label: "Emotion", title: "Clarity & Trust", desc: "Moving away from punitive tracking towards supportive performance narratives." },
                  ].map((item, i) => (
                    <div key={i} className={`p-12 border-b border-[#b3b3b3]/10 group hover:bg-[#b3b3b3]/5 transition-colors ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#b3b3b3]/30 mb-6 flex items-center gap-3">
                         <Minus size={12} /> {item.label}
                      </div>
                      <h3 className="text-2xl font-serif text-[#b3b3b3] mb-4 group-hover:pl-2 transition-all">{item.title}</h3>
                      <p className="text-sm text-[#b3b3b3]/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                  <div className="md:col-span-2 p-12 border-b border-[#b3b3b3]/10 group hover:bg-[#b3b3b3]/5 transition-colors">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#b3b3b3]/30 mb-6 flex items-center gap-3">
                        <Minus size={12} /> Utility
                    </div>
                    <h3 className="text-2xl font-serif text-[#b3b3b3] mb-4 text-[#b3b3b3] group-hover:pl-2 transition-all">Immediate Accessibility</h3>
                    <p className="text-sm text-[#b3b3b3]/60 leading-relaxed max-w-2xl font-light">Making class-preparation materials available on the home screen to minimize friction during transitions.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 05: Visual Outcomes (Renumbered) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="flex flex-col gap-32">
              <div className="max-w-2xl">
                 <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(05) — Visual Outcomes</span>
                 <h2 className="font-serif text-4xl italic text-[#b3b3b3]">Final Design Outcomes</h2>
                 <p className="text-sm text-[#b3b3b3]/50 leading-relaxed mt-6">A narrative of clarity. The following screens demonstrate how the interface adapts to the high-velocity needs of the teaching staff.</p>
              </div>
              
              {visualOutcomes.map((item, index) => (
                <div key={index} className="space-y-16">
                  <div className="w-full border border-[#b3b3b3]/10 overflow-hidden group bg-[#1a1a1a]">
                    <img 
                      src={item.img} 
                      className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-[1.05]" 
                      alt={item.title} 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-2 md:px-0">
                    <div className="md:col-span-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#b3b3b3]/30 mb-4">{item.label}</div>
                      <h3 className="font-serif text-2xl italic text-[#b3b3b3]">{item.title}</h3>
                      <div className="text-xs font-mono text-[#b3b3b3]/40 mt-1 uppercase tracking-widest">/ {item.subtitle}</div>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-sm text-[#b3b3b3]/60 leading-relaxed max-w-2xl font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section 06: Performance Metrics (Renumbered) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-4 sticky top-32 h-fit md:pr-12 pb-12 md:pb-0">
                 <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(06) — Benchmarks</span>
                 <h2 className="font-serif text-4xl italic text-[#b3b3b3]">Design Performance</h2>
                 <p className="text-sm text-[#b3b3b3]/50 mt-6 leading-relaxed max-w-xs">Testing with high-fidelity prototypes showed significant improvements in workflow velocity and cognitive load.</p>
              </div>
              <div className="md:col-span-8 md:pl-0 border-l border-[#b3b3b3]/10">
                 <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#b3b3b3]/10">
                    {[
                       { icon: <MousePointer2 size={20} />, value: "65%", label: "Reduction in Clicks", detail: "Joining a class and accessing curriculum went from 7 steps to 2 via the Primary Class Card." },
                       { icon: <Clock size={20} />, value: "3x", label: "Faster Class Prep", detail: "Testing showed teachers could mental-map their entire shift 3x faster using the Mini-Calendar." },
                       { icon: <Layers size={20} />, value: "100%", label: "Component Coverage", detail: "Built a centralized design system, replacing 20+ inconsistent legacy UI patterns." },
                       { icon: <Users size={20} />, value: "0", label: "Navigation Friction", detail: "Zero 'pogo-sticking' (back-and-forth) observed during user testing of the sidebar-first HUD." }
                    ].map((metric, i) => (
                       <div key={i} className={`p-12 border-b border-[#b3b3b3]/10 group transition-all duration-500 ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                          <div className="text-6xl font-serif mb-4 italic text-[#b3b3b3]/90">{metric.value}</div>
                          <div className="text-[10px] uppercase tracking-widest font-mono text-[#b3b3b3]/40 mb-6">{metric.label}</div>
                          <p className="text-sm text-[#b3b3b3]/60 leading-relaxed font-light">{metric.detail}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-32 border-t border-[#b3b3b3]/10">
           <div className="flex flex-col md:flex-row justify-between items-center group cursor-pointer">
              <div className="flex flex-col">
                 <span className="text-xs uppercase tracking-widest text-[#b3b3b3]/40 mb-4 font-mono">Next Case Study</span>
                 <h2 className="font-serif text-5xl md:text-8xl group-hover:italic transition-all duration-700 leading-none text-[#b3b3b3]">Autocracy Machinery</h2>
              </div>
              <ArrowUpRight size={80} strokeWidth={0.5} className="hidden md:block group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700 opacity-20 group-hover:opacity-100 text-[#b3b3b3]" />
           </div>
        </footer>

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        
        /* Reset and Base Styles */
        html, body {
          background-color: #242424;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        body { 
          font-family: 'Inter', sans-serif; 
          -webkit-font-smoothing: antialiased; 
          color: #b3b3b3;
        }

        h1, h2, h3, h4, .font-serif { 
          font-family: 'Playfair Display', serif; 
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #242424; }
        ::-webkit-scrollbar-thumb { background: rgba(179, 179, 179, 0.2); }
      `}</style>
    </div>
  );
};

export default TeacherDashboard;
