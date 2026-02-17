import React, { useState, useEffect, useRef } from 'react';
import s1Image from '../../../assets/s1.png';
import s2Image from '../../../assets/s2.png';
import s3Image from '../../../assets/s3.png';
import s4Image from '../../../assets/s4.png';
import s5Image from '../../../assets/s5.png';
import s6Image from '../../../assets/s6.png';
import s7Image from '../../../assets/s7.png';
import s8Image from '../../../assets/s8.png';
import s9Image from '../../../assets/s9.png';
import s10Image from '../../../assets/s10.png';
import s11Image from '../../../assets/s11.png';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Target,
  Layout,
  Users, 
  Gamepad2,
  TrendingUp,
  Clock,
  CheckCircle2,
  Minus,
  MousePointer2,
  Layers,
  MessageSquare,
  Search,
  PenTool,
  CalendarDays,
  Zap,
  Globe,
  Database,
  Smartphone,
  Award,
  BookOpen,
  Image as ImageIcon
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
          className={`w-full h-full object-cover opacity-90 transition-all duration-700 ${showColor ? '' : 'grayscale hover:grayscale-0'}`} 
        />
      </div>
    </div>
  );
};


const StudentDashboard = () => {
  const [impactInView, setImpactInView] = useState(false);
  const [contextInView, setContextInView] = useState(false);
  const impactRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const impactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactInView(true);
        } else {
          setImpactInView(false);
        }
      },
      { threshold: 0.3 }
    );

    const contextObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContextInView(true);
        } else {
          setContextInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (impactRef.current) {
      impactObserver.observe(impactRef.current);
    }
    if (contextRef.current) {
      contextObserver.observe(contextRef.current);
    }

    return () => {
      if (impactRef.current) {
        impactObserver.unobserve(impactRef.current);
      }
      if (contextRef.current) {
        contextObserver.unobserve(contextRef.current);
      }
    };
  }, []);

  const impactMetrics = [
     { value: "62%", label: "Engagement Increase", detail: "Surge in post-class activity" },
     { value: "40%", label: "Quiz Completion", detail: "Improved compliance via new UI" },
     { value: "18%", label: "Support Reduction", detail: "Fewer scheduling tickets" },
     { value: "4.8/5", label: "CSAT Score", detail: "Positive parent feedback" }
  ];

  // Expanded to 12 placeholders as requested
  const visualOutcomes = [
    {
      title: "The Global Feed",
      subtitle: "social discovery",
      desc: "Moving from isolated learning to a community stream. Students can see peer projects, class updates, and featured creative work, fostering a sense of belonging.",
      img: s7Image,
      label: "Interface 1.0 — Community",
    },
    {
      title: "Practice Zone",
      subtitle: "retention mechanics",
      desc: "A dedicated hub for chapter-wise worksheets and practice material. This addressed the 'forgetting curve' by making offline practice accessible and trackable.",
      img: s8Image,
      label: "Interface 2.0 — Learning Hub"
    },
    {
      title: "Assessment Tracker",
      subtitle: "visible progress",
      desc: "Quizzes were previously buried. The new design surfaces them in a 'To-Do' list with clear deadlines and status indicators, improving completion rates significantly.",
      img: s9Image,
      label: "Interface 3.0 — Assessment UI"
    },
    {
      title: "Smart Calendar",
      subtitle: "scheduling utility",
      desc: "A self-serve scheduling module allowing parents to view upcoming sessions and reschedule conflicts without contacting support.",
      img: s10Image,
      label: "Interface 4.0 — Calendar"
    },
    {
      title: "Course Switcher",
      subtitle: "navigation structure",
      desc: "As students enrolled in multiple verticals (Coding, Math, Music), the sidebar allowed for seamless context switching without losing state.",
      img: s11Image,
      label: "Interface 5.0 — Navigation"
    },
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
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Index
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
              <h1 className="font-serif text-4xl md:text-[5vw] leading-[0.9] mb-12 -ml-1 text-[#b3b3b3]"> Redesigning the student dashboard <br />
                 <span className="italic text-[#b3b3b3]/40">for Clarity, Action & Momentum</span>
              </h1>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end pb-4">
              <div className="space-y-6 md:border-l border-[#b3b3b3]/20 md:pl-12">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Role</div>
                  <div className="text-sm">Product Designer</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Impact</div>
                  <div className="text-sm">Engagement & Retention</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#b3b3b3]/40 mb-1 font-mono">Platform</div>
                  <div className="text-sm">Web Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
            <ParallaxImage 
              src={s1Image} 
              alt="Student Dashboard UI" 
              className="w-full aspect-[21/9] md:h-[65vh] border-y border-[#b3b3b3]/10"
              speed={-0.08}
              showColor={true}
            />
          </div>
        </section>

        {/* Impact Section at Top */}
        <section className="py-12 border-b border-[#b3b3b3]/10 mb-24">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {impactMetrics.map((metric, i) => (
                 <div key={i} className={`md:px-8 ${i !== 0 ? 'md:border-l border-[#b3b3b3]/10' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-4xl md:text-5xl font-serif italic text-[#b3b3b3]">{metric.value}</div>
                      <Zap size={16} className="text-[#b3b3b3]/20" />
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-mono text-[#b3b3b3]/50 mb-1">{metric.label}</div>
                    <p className="text-xs text-[#b3b3b3]/40 font-light hidden md:block">{metric.detail}</p>
                 </div>
              ))}
           </div>
        </section>

        {/* Section 01: The Context */}
        <section 
          ref={contextRef}
          className={`py-32 md:py-48 flex items-center justify-center relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] transition-all duration-1000 ease-in-out ${
            contextInView ? 'bg-[#b3b3b3]' : 'bg-[#242424]'
          }`}
        >
           <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
              <span className={`text-xs font-mono mb-6 block uppercase tracking-widest font-mono transition-colors duration-1000 ${
                contextInView ? 'text-[#242424]/60' : 'text-[#b3b3b3]/60'
              }`}>(01) — The Context</span>
              <h2 className={`font-serif text-4xl md:text-5xl italic mb-12 transition-colors duration-1000 ${
                contextInView ? 'text-[#242424]' : 'text-[#b3b3b3]'
              }`}>The Post-Class Void</h2>
              <p className={`text-xl md:text-2xl font-serif leading-relaxed transition-colors duration-1000 ${
                contextInView ? 'text-[#242424]/80' : 'text-[#b3b3b3]/80'
              }`}>
                The platform worked during live classes, but engagement flatlined the moment the call ended. Students had no reason to return, and parents had no visibility into progress.
              </p>
           </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 md:pr-12 pb-12 md:pb-0">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(02) — The Challenge</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3] mb-8">A Dashboard That Lost Its Way</h2>
               
               <p className="text-sm text-[#b3b3b3]/70 leading-relaxed mb-6">
                 As BrightCHAMPS scaled, the dashboard became a <span className="text-[#b3b3b3] font-medium">content library</span> instead of a <span className="text-[#b3b3b3] font-medium">learning journey</span>. Students logged in daily but faced decision fatigue—too many options, too little guidance.
               </p>

               <div className="space-y-3 mb-8">
                 <div className="flex items-start gap-3">
                   <span className="text-[#b3b3b3]/40 mt-0.5">→</span>
                   <p className="text-sm text-[#b3b3b3]/60"><span className="text-[#b3b3b3]">Low activation</span> after course purchase</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="text-[#b3b3b3]/40 mt-0.5">→</span>
                   <p className="text-sm text-[#b3b3b3]/60"><span className="text-[#b3b3b3]">Weak momentum</span> between lessons</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="text-[#b3b3b3]/40 mt-0.5">→</span>
                   <p className="text-sm text-[#b3b3b3]/60"><span className="text-[#b3b3b3]">No behavioral nudges</span> for learning streaks</p>
                 </div>
                 <div className="flex items-start gap-3">
                   <span className="text-[#b3b3b3]/40 mt-0.5">→</span>
                   <p className="text-sm text-[#b3b3b3]/60"><span className="text-[#b3b3b3]">Important updates</span> lost in clutter</p>
                 </div>
               </div>

               <div className="border-l-2 border-[#b3b3b3]/30 pl-4 py-2">
                 <p className="text-sm text-[#b3b3b3]/80 italic font-serif leading-relaxed">
                   "How might we redesign the dashboard to drive clarity, increase activation, and make daily learning feel effortless?"
                 </p>
               </div>
            </div>
            <div className="md:col-span-7 border-l border-[#b3b3b3]/10 md:pl-12">
               <div className="space-y-4">
                  <div className="aspect-[16/9] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a]">
                     <img src={s2Image} alt="Challenge Visualization" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest">Old Design</div>
               </div>
            </div>
          </div>
        </section>

        {/* Redesigned Experience - Full Width Image */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="mb-12">
              <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(3) — Redesigned Experience</span>
              <h2 className="font-serif text-4xl italic text-[#b3b3b3]">The New Dashboard</h2>
              <p className="text-sm text-[#b3b3b3]/50 mt-6 leading-relaxed max-w-xl">A unified experience that bridges the gap between live sessions—keeping students engaged and parents informed.</p>
           </div>
           <div className="w-full border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] aspect-[21/9] md:h-[85vh]">
              <img src={s3Image} alt="The New Dashboard" className="w-full h-full object-cover" />
           </div>
        </section>

        {/* Section 02: Core Problems (Previously 03) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="mb-16">
              <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(04) — Analysis</span>
              <h2 className="font-serif text-4xl italic text-[#b3b3b3]">The Core Problems</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#b3b3b3]/10 border border-[#b3b3b3]/10">
              {[
                { title: "Engagement Void", desc: "No fun or rewarding experience outside of live classes. Once the Zoom call ended, the learning stopped." },
                { title: "Fragmented Continuity", desc: "No global curriculum view. Practice, quizzes, and assessments were scattered across different pages." },
                { title: "Navigation Debt", desc: "Poor navigation structure meant important actions (like rescheduling) were buried, causing high support ticket volume." },
                { title: "Invisible Outcomes", desc: "Parents had no clear dashboard to understand what their child had actually learned or achieved." }
              ].map((item, i) => (
                <div key={i} className="bg-[#242424] p-12 group hover:bg-[#b3b3b3]/5 transition-colors">
                   <div className="text-[10px] font-mono text-[#b3b3b3]/20 mb-6">0{i+1}</div>
                   <h3 className="text-2xl font-serif text-[#b3b3b3] mb-4">{item.title}</h3>
                   <p className="text-sm text-[#b3b3b3]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Section 03: Ideation (Renumbered from 04) - Modified Layout */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 md:pr-12 pb-12 md:pb-0">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(05) — Exploration</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3]">From Insight to Direction</h2>
               <p className="text-sm text-[#b3b3b3]/50 mt-6 leading-relaxed max-w-xs">Explaining the evolution of the interface from low-fidelity wireframes to the final gamified structure.</p>
            </div>
            <div className="md:col-span-8 border-l border-[#b3b3b3]/10">
              {/* Editorial Points - Static Images */}
              {(() => {
                const points = [
                  {
                    title: "Behavioral Insights",
                    desc: "Heatmaps and usage data revealed scattered attention and low activation. Students explored content but lacked clear direction, resulting in hesitation and reduced learning momentum.",
                    img: s4Image,
                    imgAlt: "Behavioral Insights"
                  },
                  {
                    title: "Information Restructuring",
                    desc: "Through feedback and card sorting, we reorganized the dashboard around priority-based actions instead of feature blocks — reducing cognitive load and clarifying the next step.",
                    img: s5Image,
                    imgAlt: "Information Restructuring"
                  },
                  {
                    title: "Iterative Wireframing",
                    desc: "Low-fidelity explorations focused on hierarchy, visibility, and guided progression — transforming the dashboard from a content hub into a momentum-driven learning experience.",
                    img: s6Image,
                    imgAlt: "Iterative Wireframing"
                  }
                ];
                return (
                  <div className="flex flex-col gap-16">
                    {points.map((point, idx) => (
                      <div key={idx} className="">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-2xl font-serif text-[#b3b3b3]/60">{idx + 1}.</div>
                          <div>
                            <div className="text-xl font-serif text-[#b3b3b3] mb-2">{point.title}</div>
                            <p className="text-sm text-[#b3b3b3]/70 leading-relaxed font-light">{point.desc}</p>
                          </div>
                        </div>
                        <div className="w-full aspect-[21/9] border border-[#b3b3b3]/10 overflow-hidden bg-[#1a1a1a] rounded-none">
                          <img
                            src={point.img}
                            alt={point.imgAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="text-[10px] font-mono text-[#b3b3b3]/30 uppercase tracking-widest mt-2 px-2">{point.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Section 04: Product Strategy (Renumbered from 05) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 md:pr-12 pb-12 md:pb-0">
               <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(06) — Strategy</span>
               <h2 className="font-serif text-4xl italic text-[#b3b3b3]">Experience Shifts</h2>
               <p className="text-sm text-[#b3b3b3]/50 mt-6 leading-relaxed max-w-xs">Redesigning the ecosystem to ensure learning is visible, rewarding, and continuous.</p>
            </div>
            
            <div className="md:col-span-8 border-l border-[#b3b3b3]/10">
               <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#b3b3b3]/10">
                  {[
                    { label: "Community", title: "Social Learning", desc: "Transforming the dashboard from a static list to a dynamic feed of peer projects and updates." },
                    { label: "Habit", title: "Practice Zone", desc: "Creating a dedicated space for worksheets and quizzes to combat the 'forgetting curve'." },
                    { label: "Clarity", title: "Global View", desc: "Unifying multi-course management into a single, effortless sidebar navigation." },
                    { label: "Transparency", title: "Parent Oversight", desc: "Ensuring parents can understand progress at a glance without needing to ask the teacher." },
                  ].map((item, i) => (
                    <div key={i} className={`p-12 border-b border-[#b3b3b3]/10 group hover:bg-[#b3b3b3]/5 transition-colors ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#b3b3b3]/30 mb-6 flex items-center gap-3">
                         <Minus size={12} /> {item.label}
                      </div>
                      <h3 className="text-2xl font-serif text-[#b3b3b3] mb-4 group-hover:pl-2 transition-all">{item.title}</h3>
                      <p className="text-sm text-[#b3b3b3]/60 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* Section 05: Visual Outcomes (Renumbered from 06) */}
        <section className="py-24 border-t border-[#b3b3b3]/10">
           <div className="max-w-2xl mb-24">
              <span className="text-xs font-mono text-[#b3b3b3]/60 mb-6 block uppercase tracking-widest font-mono">(07) — Designs</span>
              <h2 className="font-serif text-4xl italic text-[#b3b3b3]">The Final Experience</h2>
              <p className="text-sm text-[#b3b3b3]/50 leading-relaxed mt-6">A unified platform that balances gamification for students with utility for parents.</p>
           </div>
           
           <div className="flex flex-col gap-32">
              {visualOutcomes.map((item, index) => (
                <div key={index} className="space-y-16">
                  <div className="w-full border border-[#b3b3b3]/10 overflow-hidden group bg-[#1a1a1a]">
                    <img 
                      src={item.img} 
                      className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-[1.01]" 
                      alt={item.title} 
                    />
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section 06: Impact Summary */}
        <section 
          ref={impactRef}
          className={`min-h-screen flex items-center justify-center border-t border-[#b3b3b3]/10 transition-all duration-1000 ease-in-out relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] ${
            impactInView ? 'bg-[#b3b3b3]' : 'bg-[#242424]'
          }`}
        >
           <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
              <span className={`text-xs font-mono mb-8 block uppercase tracking-widest transition-colors duration-1000 ${
                impactInView ? 'text-[#242424]/60' : 'text-[#b3b3b3]/60'
              }`}>(06) — Impact</span>
              <p className={`text-2xl md:text-4xl font-serif italic leading-relaxed transition-colors duration-1000 ${
                impactInView ? 'text-[#242424]' : 'text-[#b3b3b3]'
              }`}>
                The redesigned dashboard transformed passive users into engaged learners—driving a <span className={`not-italic font-semibold transition-colors duration-1000 ${impactInView ? 'text-[#242424]' : 'text-white'}`}>62% increase</span> in post-class activity and earning a <span className={`not-italic font-semibold transition-colors duration-1000 ${impactInView ? 'text-[#242424]' : 'text-white'}`}>4.8/5 satisfaction score</span> from parents.
              </p>
           </div>
        </section>

        {/* Footer */}
        <footer className="py-32 border-t border-[#b3b3b3]/10">
           <div className="flex flex-col md:flex-row justify-between items-center group cursor-pointer">
              <div className="flex flex-col">
                 <span className="text-xs uppercase tracking-widest text-[#b3b3b3]/40 mb-4 font-mono">Next Case Study</span>
                 <h2 className="font-serif text-5xl md:text-8xl group-hover:italic transition-all duration-700 leading-none text-[#b3b3b3]">Teacher Dashboard</h2>
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

export default StudentDashboard;
