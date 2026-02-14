import React, { useState, useEffect, useRef } from 'react'; import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Minus, 
  ArrowDown,
  Circle
} from 'lucide-react';
import project1Image from './assets/h1.png';
import project2Image from './assets/h2.png';
import myPhoto from './assets/myphoto.png';

// Custom Hook for Parallax
const useParallax = (speed = 0.1) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Only calculate if in view to save performance
        if (rect.top < windowHeight && rect.bottom > 0) {
           const distanceFromCenter = rect.top - (windowHeight / 2);
           setOffset(distanceFromCenter * speed);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
};

const ParallaxImage = ({ src, alt, className, speed = -0.1 }) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div 
        ref={ref}
        className="w-full h-[120%] absolute -top-[10%] left-0 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

// Hero Image with soft scroll parallax
const HeroImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="absolute top-32 right-0 hidden md:block z-10 transition-transform duration-300 ease-out will-change-transform"
      style={{ transform: `translateY(${scrollY * 0.15}px)` }}
    >
      <img 
        src={myPhoto} 
        alt="Hero" 
        className="w-[280px] h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
    </div>
  );
};

const BridgeTimeline = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && stickyRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollDist = -containerRect.top;
        const maxDist = containerRect.height - window.innerHeight;
        
        let progress = 0;
        if (containerRect.top <= 0) {
          progress = Math.min(1, Math.max(0, scrollDist / maxDist));
        }
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chronological Order: Oldest (Left) -> Newest (Right)
  const career = [
    {
      company: "Pikkol",
      role: "Graphic Designer",
      period: "May 2017 - Mar 2018",
      location: "Bangalore",
      desc: "Designed high-performing social media graphics and brand campaigns. Contributed to internal dashboard designs, gaining first exposure to product workflows.",
      highlight: "Visual Storytelling"
    },
    {
      company: "Dreamscape Media",
      role: "UI Designer",
      period: "Mar 2018 - Jul 2019",
      location: "Mumbai",
      desc: "Designed mobile apps for fintech and edtech. Built end-to-end user journeys and produced prototypes/visual guidelines to support agile dev.",
      highlight: "Mobile First"
    },
    {
      company: "Trustt",
      role: "UI/UX Designer",
      period: "Jul 2019 - Nov 2021",
      location: "Bangalore",
      desc: "Led the UI design team, creating a system that improved handoff efficiency by 30%. Designed B2B SaaS dashboards and conducted field user research.",
      highlight: "Handoff Efficiency ↑ 30%"
    },
    {
      company: "CampK12",
      role: "Product Designer",
      period: "Nov 2021 - Jan 2023",
      location: "Bangalore",
      desc: "Designed student/parent dashboards to boost retention. Shipped SEO-focused landing pages and mobile-first coding course interfaces.",
      highlight: "Increased Lead Gen"
    },
    {
      company: "BrightCHAMPS",
      role: "Lead Designer",
      period: "Jan 2023 - Present",
      location: "Bangalore",
      desc: "Led interactive learning platform design (K-10). Improved conversion 6.5% -> 19.2%. Redesigned payroll workflows and scaled a centralized design system.",
      highlight: "Conversion ↑ 19.2%"
    }
  ];

  const cardWidth = 400;
  const gap = 100;
  // Increased buffer significantly to ensure the last item is fully visible on all screen sizes
  const totalWidth = career.length * (cardWidth + gap) + 700; 

  return (
    <div ref={containerRef} className="relative h-[400vh] hidden md:block border-t border-[#b3b3b3]/10 bg-[#242424]">
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header - aligned with page grid */}
          <div className="absolute top-24 left-0 z-20 md:px-12 px-6">
            <h2 className="font-serif text-4xl text-[#b3b3b3]">Career Roadmap</h2>
          </div>

        {/* Moving Container */}
        <div 
           className="relative h-full flex items-center will-change-transform"
           style={{ 
             // Clamp scroll so last card is always visible
             transform: `translateX(${-scrollProgress * Math.max(0, totalWidth - window.innerWidth)}px)`,
             width: `${totalWidth}px`,
             transition: 'transform 0.1s linear'
           }}
        >
           {/* Bridge Structure - SVG Background */}
           <svg className="absolute top-[60%] left-0 w-full h-[400px] -translate-y-[60%] pointer-events-none z-0" overflow="visible">
              {/* Main Deck Line */}
              <line x1="0" y1="50" x2="100%" y2="50" stroke="#b3b3b3" strokeWidth="1" strokeOpacity="0.4" />
              
              {/* Suspension Cables & Pylons */}
              {career.map((_, i) => {
                 const xPos = 200 + i * (cardWidth + gap) + cardWidth / 2;
                 const nextX = 200 + (i + 1) * (cardWidth + gap) + cardWidth / 2;
                 
                 return (
                   <g key={i}>
                      {/* Pylon/Support */}
                      <line x1={xPos} y1="-100" x2={xPos} y2="250" stroke="#b3b3b3" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
                      <rect x={xPos - 1} y="-100" width="2" height="160" fill="#b3b3b3" fillOpacity="0.4" />
                      
                      {/* Cable to next pylon (if exists) */}
                      {i < career.length - 1 && (
                        <path 
                          d={`M ${xPos} -90 Q ${(xPos + nextX) / 2} 100 ${nextX} -90`} 
                          fill="none" 
                          stroke="#b3b3b3" 
                          strokeWidth="1"
                          strokeOpacity="0.5" 
                        />
                      )}
                      
                      {/* Vertical Dropline to Card */}
                      <line x1={xPos} y1="50" x2={xPos} y2="180" stroke="#b3b3b3" strokeWidth="1" strokeOpacity="0.4" />
                      <circle cx={xPos} cy="180" r="2" fill="#b3b3b3" />
                   </g>
                 );
              })}

              {/* The Minimal Motorcycle (SVG Group moving along the line) */}
              <g transform={`translate(${scrollProgress * (totalWidth - 100)}, 49)`}>
                 {/* Back Wheel */}
                 <circle cx="8" cy="-4" r="4" fill="#242424" stroke="#b3b3b3" strokeWidth="1" />
                 {/* Front Wheel */}
                 <circle cx="28" cy="-4" r="4" fill="#242424" stroke="#b3b3b3" strokeWidth="1" />
                 
                 {/* Chassis/Body */}
                 <path 
                   d="M8 -4 L16 -10 H22 L28 -4" 
                   fill="none" 
                   stroke="#b3b3b3" 
                   strokeWidth="1"
                   strokeLinejoin="round"
                 />
                 
                 {/* Seat/Tank area */}
                 <path 
                    d="M14 -10 L16 -14 H24 L26 -10"
                    fill="none"
                    stroke="#b3b3b3"
                    strokeWidth="1"
                 />
                 
                 {/* Handlebars */}
                 <path 
                    d="M28 -4 L26 -16 L22 -18"
                    fill="none"
                    stroke="#b3b3b3"
                    strokeWidth="1"
                 />
              </g>

           </svg>

           {/* Career Cards */}
           <div className="flex gap-[100px] px-[60px] mt-[180px] relative z-10">
              {career.map((job, i) => {
                const xPos = 200 + i * (cardWidth + gap) + cardWidth / 2;
                const [visible, setVisible] = React.useState(false);
                const cardRef = React.useRef();
                React.useEffect(() => {
                  const handleScroll = () => {
                    if (cardRef.current) {
                      const rect = cardRef.current.getBoundingClientRect();
                      const inView = rect.left < window.innerWidth && rect.right > 0;
                      if (inView) setVisible(true);
                    }
                  };
                  window.addEventListener('scroll', handleScroll);
                  handleScroll();
                  return () => window.removeEventListener('scroll', handleScroll);
                }, []);
                return (
                  <div
                    key={i}
                    ref={cardRef}
                    className="w-[400px] group absolute transition-all duration-700"
                    style={{
                      left: `${xPos + 30}px`,
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0px)' : 'translateY(60px)',
                      transitionDelay: visible ? `${i * 80}ms` : '0ms',
                    }}
                  >
                    <div className="text-xs font-mono text-[#b3b3b3]/60 mb-2 border-b border-[#b3b3b3]/20 pb-2 inline-block">
                      {job.period}
                    </div>
                    <h3 className="text-3xl font-serif text-[#b3b3b3] mb-1 group-hover:italic transition-all duration-75">{job.company}</h3>
                    <div className="text-sm uppercase tracking-widest text-[#b3b3b3]/80 mb-6">{job.role}</div>
                    <p className="text-sm text-[#b3b3b3]/70 leading-relaxed mb-6 pl-4 border-l border-[#b3b3b3]/30">
                      {job.desc}
                    </p>
                    <div className="inline-block px-3 py-1 bg-[#b3b3b3]/5 border border-[#b3b3b3]/20 rounded-sm text-[10px] uppercase tracking-widest text-[#b3b3b3]/80">
                      {job.highlight}
                    </div>
                  </div>
                );
              })}
           </div>
           
           {/* Water/Waves at bottom */}
           <div className="absolute bottom-0 left-0 w-full h-[100px] opacity-10" 
                style={{ backgroundImage: 'radial-gradient(circle, #b3b3b3 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
           </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Version of Story (Simple Vertical List)
const MobileStory = () => {
  // Ordered Newest -> Oldest for Mobile readability
  const career = [
    {
      company: "BrightCHAMPS",
      role: "Lead Designer",
      period: "2023 - Present",
      desc: "Led design of interactive self-learning platform (K-10). Improved conversion 6.5% -> 19.2%."
    },
    {
      company: "CampK12",
      role: "Product Designer",
      period: "2021 - 2023",
      desc: "Designed student/parent dashboards and SEO landing pages to boost lead gen."
    },
    {
      company: "Trustt",
      role: "UI/UX Designer",
      period: "2019 - 2021",
      desc: "Created design system improving handoff by 30%. Built B2B SaaS dashboards."
    },
    {
      company: "Dreamscape",
      role: "UI Designer",
      period: "2018 - 2019",
      desc: "Designed mobile apps for fintech and edtech. Built end-to-end user journeys."
    },
    {
      company: "Pikkol",
      role: "Graphic Designer",
      period: "2017 - 2018",
      desc: "Designed social media graphics and brand campaigns."
    }
  ];

  return (
     <div className="md:hidden py-24 px-6 border-t border-[#b3b3b3]/10 text-[#b3b3b3]">
        <h2 className="font-serif text-4xl mb-8 block text-[#b3b3b3]">Career Roadmap</h2>
        <div className="space-y-12 border-l border-[#b3b3b3]/20 ml-2 pl-8 relative">
           {career.map((job, i) => (
              <div key={i} className="relative">
                 <div className="absolute -left-[37px] top-1.5 w-4 h-px bg-[#b3b3b3]/30"></div>
                 <h3 className="text-xl font-serif text-[#b3b3b3]">{job.company}</h3>
                 <div className="text-xs uppercase tracking-widest text-[#b3b3b3]/70 mb-2">{job.role}</div>
                 <div className="text-xs font-mono text-[#b3b3b3]/50 mb-2">{job.period}</div>
                 <p className="text-sm text-[#b3b3b3]/80">{job.desc}</p>
              </div>
           ))}
        </div>
     </div>
  );
}

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [introInView, setIntroInView] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const introObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroInView(true);
        } else {
          setIntroInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        introObserver.unobserve(introRef.current);
      }
    };
  }, []);

 const projects = [
  {
    id: "01",
    client: "Teacher Dashboard",
    category: "Dashboard Design",
    description: "A comprehensive dashboard designed for educators to manage classes, track student progress, and streamline administrative tasks.",
    image: project1Image,
    link: "/teacher-dashboard"
  },
  {
    id: "02",
    client: "Student Dashboard",
    category: "Learning Platform",
    description: "An intuitive interface for students to access coursework, track progress, collaborate with peers, and submit assignments in real-time.",
    image: project2Image,
    link: "/pages/projects/studentdashboard"
  }
];

  const thoughts = [
    { title: "Designing for Trust in the Age of AI", date: "Oct 12", link: "https://medium.com/@chembrathsandeep/designing-for-trust-in-the-age-of-ai-what-food-delivery-apps-can-learn-from-refund-scams-ec1b8b3cd365?postPublishedType=repub" },
    { title: "Strange Phase of Design Right Now", date: "Jan 06", link: "https://medium.com/@chembrathsandeep/strange-phase-of-design-right-now-9005c3e60d9f" },
    { title: "The UX of Failed Screens", date: "Jul 14, 2024", link: "https://medium.com/@chembrathsandeep/the-ux-of-failed-screens-turning-frustration-into-a-fun-ish-experience-26f0bb36ec67" }
  ];

  return (
    <div className="min-h-screen bg-[#242424] text-[#b3b3b3] selection:bg-[#b3b3b3] selection:text-[#242424] font-sans">
      
      {/* Grid Lines Background (Subtle Texture) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 max-w-[1600px] mx-auto opacity-[0.05]">
        <div className="w-px h-full bg-[#b3b3b3]"></div>
        <div className="w-px h-full bg-[#b3b3b3] hidden md:block"></div>
        <div className="w-px h-full bg-[#b3b3b3] hidden md:block"></div>
        <div className="w-px h-full bg-[#b3b3b3]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference transition-all duration-700 ${scrolled ? 'py-4 bg-[#242424]/80 backdrop-blur-sm' : ''}`}>
        <div className="font-serif italic text-xl tracking-tighter text-[#b3b3b3]">Sandeep.</div>
        <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-[#b3b3b3]/60">
          <a href="#work" className="hover:text-[#b3b3b3] transition-colors duration-500">Projects</a>
          <a href="#story" className="hover:text-[#b3b3b3] transition-colors duration-500">Story</a>
          <a href="#contact" className="hover:text-[#b3b3b3] transition-colors duration-500">Contact</a>
        </div>
        <div className="text-xs font-mono text-[#b3b3b3]/60 hidden md:block">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
        </div>
      </nav>

      <main className="relative z-10 max-w-[1600px] mx-auto md:px-12 border-l border-r border-[#b3b3b3]/0 ">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 md:px-0 relative">
          {/* Hero Image - Top Right with Parallax */}
          <HeroImage />
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#b3b3b3]/30"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#b3b3b3]/60">Product Designer</span>
            </div>
            <h1 className="font-serif text-6xl md:text-[9vw] leading-[0.9] text-[#b3b3b3] mb-12 relative z-20">
              Crafting <br />
              <span className="italic text-[#b3b3b3]/50 pl-12 md:pl-24">clarity</span> <br />
              from complex <br />
              <span className="italic text-[#b3b3b3]/50 pl-12 md:pl-24">chaos.</span>
            </h1>

            <div>
              <a 
                href="#work" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#b3b3b3] border border-[#b3b3b3]/20 px-8 py-4 rounded-full hover:bg-[#b3b3b3] hover:text-[#242424] transition-all duration-500 group"
              >
                View Selected Works
                <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Intro Statement - Full Width Inverted Section */}
        <section 
          ref={introRef}
          className={`min-h-screen flex items-center justify-center relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] transition-all duration-1000 ease-in-out ${
            introInView ? 'bg-[#b3b3b3]' : 'bg-[#242424]'
          }`}
        >
           <div className="max-w-[1200px] mx-auto text-left px-6 md:px-12">
              <p className={`text-3xl md:text-5xl font-serif !leading-[1.4em] transition-colors duration-1000 ${
                introInView ? 'text-[#242424]/80' : 'text-[#b3b3b3]/80'
              }`}>
                I craft digital products that balance strict utility <br className="hidden md:block" />with subtle emotional resonance. <br className="hidden md:block" />Currently leading design at BrightCHAMPS.
              </p>
              <a 
                href="#story" 
                className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] mt-12 border px-8 py-4 rounded-full transition-all duration-500 group ${
                  introInView 
                    ? 'text-[#242424] border-[#242424]/20 hover:bg-[#242424] hover:text-[#b3b3b3]' 
                    : 'text-[#b3b3b3] border-[#b3b3b3]/20 hover:bg-[#b3b3b3] hover:text-[#242424]'
                }`}
              >
                Know More
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
              </a>
           </div>
        </section>

        {/* Selected Works - The "Index" */}
        <section id="work" className="py-24 md:py-40 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-3">
              <span className="text-xs font-mono text-[#b3b3b3]/60 sticky top-32">Selected Works</span>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 text-[#b3b3b3]">
                A curation of interfaces <br /> designed for scale.
              </h2>
            </div>
          </div>

          <div className="border-t border-[#b3b3b3]/10">
            {projects.map((project, index) => (
              <Link key={index} to={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="group relative border-b border-[#b3b3b3]/10 py-16 transition-colors duration-700 hover:bg-[#1a1a1a] cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                    
                    {/* ID */}
                    <div className="md:col-span-1 text-xs font-mono text-[#b3b3b3]/60 group-hover:text-[#b3b3b3] transition-colors duration-500 self-start md:self-center">
                      /{project.id}
                    </div>

                    {/* Client & Info */}
                    <div className="md:col-span-4 self-start md:self-center z-10">
                      <h3 className="text-3xl font-serif mb-4 group-hover:italic transition-all duration-75 text-[#b3b3b3]">{project.client}</h3>
                      <div className="text-xs uppercase tracking-widest text-[#b3b3b3]/60 mb-6">{project.category}</div>
                      <p className="text-sm text-[#b3b3b3]/70 leading-relaxed max-w-xs group-hover:text-[#b3b3b3] transition-colors duration-500 mb-8">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b3b3b3] border-b border-[#b3b3b3]/20 pb-1 group-hover:border-[#b3b3b3] transition-all">
                        VIEW PROJECT <ArrowUpRight size={12} />
                      </div>
                    </div>

                    {/* Parallax Image */}
                    <div className="md:col-span-7 h-[300px] md:h-[400px] w-full">
                      <ParallaxImage 
                        src={project.image} 
                        alt={project.client}
                        className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* The Journey - Horizontal Scroll Story */}
        <div id="story">
          <BridgeTimeline />
          <MobileStory />
        </div>

        {/* Beyond my Day Job */}
        <section id="studio" className="py-24 md:py-40 border-t border-[#b3b3b3]/10 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-3">
              <span className="text-xs font-mono text-[#b3b3b3]/60 sticky top-32">Beyond my Day Job</span>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#b3b3b3]">
                Side Ventures
              </h2>
            </div>
            <div className="md:col-span-5 md:flex md:items-end md:justify-end">
              <p className="text-[#b3b3b3]/70 max-w-sm md:text-right">
                Beyond my design work, I channel creativity into passion projects that keep the entrepreneurial spirit alive.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3"></div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Side Business Card 1 */}
              <a href="https://www.poppymellow.com" target="_blank" rel="noopener noreferrer" className="group relative bg-[#1a1a1a] border border-[#b3b3b3]/10 overflow-hidden hover:border-[#b3b3b3]/30 transition-all duration-500 cursor-pointer block">
                <div className="aspect-[4/3] bg-[#2a2a2a] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" 
                    alt="Business 1" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[#b3b3b3]/50 mb-2">Side Business</div>
                  <h3 className="text-2xl font-serif text-[#b3b3b3] mb-3 group-hover:italic transition-all duration-75">poppymellow.com</h3>
                  <p className="text-sm text-[#b3b3b3]/60 leading-relaxed">
                    A brief description of your first side business venture and what makes it special.
                  </p>
                </div>
              </a>

              {/* Side Business Card 2 */}
              <a href="https://www.xpedition.store" target="_blank" rel="noopener noreferrer" className="group relative bg-[#1a1a1a] border border-[#b3b3b3]/10 overflow-hidden hover:border-[#b3b3b3]/30 transition-all duration-500 md:mt-32 cursor-pointer block">
                <div className="aspect-[4/3] bg-[#2a2a2a] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" 
                    alt="Business 2" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-[#b3b3b3]/50 mb-2">Side Business</div>
                  <h3 className="text-2xl font-serif text-[#b3b3b3] mb-3 group-hover:italic transition-all duration-75">xpedition.store</h3>
                  <p className="text-sm text-[#b3b3b3]/60 leading-relaxed">
                    A brief description of your second side business venture and what makes it special.
                  </p>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Journal / Thoughts - Minimal List */}
        <section className="py-24 border-t border-[#b3b3b3]/10 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
               <span className="text-xs font-mono text-[#b3b3b3]/60">Thoughts</span>
            </div>
            <div className="md:col-span-9">
               {thoughts.map((item, i) => (
                 item.link ? (
                   <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-baseline justify-between py-6 border-b border-[#b3b3b3]/10 group cursor-pointer hover:pl-4 transition-all duration-500 block">
                      <h3 className="text-xl md:text-2xl text-[#b3b3b3]/70 group-hover:text-[#b3b3b3] group-hover:italic font-serif transition-all duration-300">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#b3b3b3]/60 group-hover:text-[#b3b3b3]">{item.date}</span>
                   </a>
                 ) : (
                   <div key={i} className="flex items-baseline justify-between py-6 border-b border-[#b3b3b3]/10 group cursor-pointer hover:pl-4 transition-all duration-500">
                      <h3 className="text-xl md:text-2xl text-[#b3b3b3]/70 group-hover:text-[#b3b3b3] group-hover:italic font-serif transition-all duration-300">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#b3b3b3]/60 group-hover:text-[#b3b3b3]">{item.date}</span>
                   </div>
                 )
               ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-32 border-t border-[#b3b3b3]/10 px-6 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#b3b3b3]/60 mb-8">Initiate Dialogue</div>
                <a href="mailto:csandeepc9947@gmail.com" className="font-serif text-5xl md:text-8xl hover:italic hover:text-[#b3b3b3]/80 transition-all duration-75 block text-[#b3b3b3]">
                  hello@sandeep
              </a>
            </div>
            
            <div className="flex gap-8 text-xs uppercase tracking-widest text-[#b3b3b3]/60">
              <a href="https://www.linkedin.com/in/chembrath-sandeep-5b9a8740/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b3b3b3] transition-colors">LinkedIn</a>
              <a href="https://dribbble.com/ChembrathSandeep" target="_blank" rel="noopener noreferrer" className="hover:text-[#b3b3b3] transition-colors">Dribbble</a>
              <a href="#" className="hover:text-[#b3b3b3] transition-colors">Read.cv</a>
            </div>
          </div>
          
          <div className="mt-24 flex justify-between text-[10px] text-[#b3b3b3]/50 font-mono uppercase tracking-widest">
             <div>Based in India</div>
             <div>© 2026 Chembrath Sandeep</div>
          </div>
        </footer>

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --cursor-size: 20px;
        }

        body {
          font-family: 'Inter', sans-serif;
          cursor: default;
        }

        h1, h2, h3, h4, .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom Selection Color */
        ::selection {
          background-color: #b3b3b3;
          color: #242424;
        }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Home;