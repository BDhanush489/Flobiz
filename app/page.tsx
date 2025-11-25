'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink, Menu, X, Sparkles } from 'lucide-react';
import AnimatedSection from "../app/components/AnimatedSection";

// Data Store
const DATA = {
  products: [
    {
      id: 1,
      name: 'myBillBook',
      description: "India's #1 billing, stock management and accounting platform trusted by 1 Crore+ MSMEs.",
      tags: ['Multi-Channel', '1Cr+ Users'],
      status: 'Learn more'
    },
    {
      id: 2,
      name: 'mySandesh',
      description: 'Revolutionary communication platform connecting businesses with customers through smart messaging.',
      tags: ['Mobile First', 'Real-time'],
      status: 'Learn more'
    },
    {
      id: 3,
      name: 'AI-first Products',
      description: 'Next-generation AI solutions to automate and optimize business operations.',
      tags: ['AI Powered', 'Smart Automation'],
      status: 'Coming Soon'
    }
  ],
  stats: [
    { label: 'Businesses', value: '1 Crore+' },
    { label: 'Pincodes Covered', value: '18,353' },
    { label: 'Uptime', value: '99.9%' }
  ],
  testimonials: [
    {
      name: 'Vishwa',
      role: 'FMCG Distributor',
      location: 'Bangalore',
      quote: 'With myBillBook, we save hours daily. Barcode billing is quick, and stock levels are always accurate.'
    },
    {
      name: 'Mohit Jain',
      role: 'Electronics Retailer',
      location: 'Mumbai',
      quote: 'With myBillBook, we track 800+ SKUs effortlessly for our electricals wholesale business. Live inventory is accurate, and reordering alerts prevent stockouts.'
    },
    {
      name: 'Akhil Bhansali',
      role: 'T-Shirt Manufacturer',
      location: 'Tirupur',
      quote: 'With myBillBook, we avoid payment delays completely for our cement trading business. Live ledger sharing builds trust, and customers pay faster.'
    }
  ],
  values: [
    {
      title: "Customers' BFF",
      description: "We're obsessed with our customers and treat them like our best friends forever."
    },
    {
      title: 'Radically Candid',
      description: 'We speak truth with care, giving honest feedback that helps everyone grow.'
    },
    {
      title: 'Action Oriented',
      description: 'We believe in doing, not just talking. Ideas become reality through action.'
    },
    {
      title: 'First Principle Thinker',
      description: 'We break down complex problems and build solutions from the ground up.'
    }
  ],
  lifeAtFlobiz: [
    { title: 'Annual Offsite', description: 'Team bonding in scenic locations, building memories that last forever.' },
    { title: 'International Conference', description: 'Representing Flobiz on global stages and learning from industry leaders.' },
    { title: 'Learning & Development', description: 'Continuous upskilling through workshops, training, and knowledge sharing.' },
    { title: 'Sports Events', description: 'Healthy competition and team spirit through cricket, badminton, and more.' },
    { title: 'Hackathons', description: 'Innovation marathons where ideas turn into prototypes in 48 hours.' },
    { title: 'Cultural Festivals', description: 'Celebrating diversity through Diwali, Holi, and regional festivals.' }
  ],
  growthStories: [
    {
      name: 'Nishit Bhatt',
      role: 'Senior PM',
      journey: 'Intern → Senior PM',
      quote: "I began my journey as an intern. Today, I'm a Senior Product Manager. FloBiz believed in my potential, gave me ownership, and let me do wonders."
    },
    {
      name: 'Shamanth',
      role: 'Asst Manager, Support',
      journey: 'Support Rep → Asst Manager',
      quote: 'I joined as an executive and now lead the customer support function as a Manager. FloBiz trusted me early and helped me grow into a leader.'
    },
    {
      name: 'Vinith',
      role: 'Senior Manager, Design',
      journey: 'Designer → Sr Manager',
      quote: "I started as a designer and today I'm a Senior Manager leading design. FloBiz gave me the freedom to explore, experiment, and create meaningful impact."
    },
    {
      name: 'Sarthak Garg',
      role: 'Associate Director - Engineering',
      journey: 'Engineer → Associate Director',
      quote: "I started as a Software Engineer. Now, I'm an Associate Director of Engineering. FloBiz empowered me to innovate, lead, and drive real change."
    },
    {
      name: 'Faisal Mehtab',
      role: 'Director - Offline Sales',
      journey: 'Manager → Director',
      quote: 'I joined FloBiz as a Zonal Manager North. Today, I\'m a Director leading offline sales. The trust and opportunities here shaped my growth.'
    }
  ],
  techStack: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'GraphQL', 'TypeScript', 'Flutter', 'Firebase']
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Products', 'Vision', 'Impact', 'Culture', 'Life', 'Tech', 'Careers'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Flobiz</div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors relative group">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 hover:text-blue-600 transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-blue-600">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4 flex-1">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="pt-6 border-t border-slate-100">
            <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
// const Hero = () => (
//   <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
//     <div className="max-w-7xl mx-auto">
//       {/* <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//           Where real innovation drives real impact
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//           We're not just building products, we're helping India's small businesses grow stronger with AI-powered software.
//         </p>
//         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
//           View open positions <ArrowRight size={20} />
//         </button>
//       </div> */}


//       <div className="max-w-6xl mx-auto text-center">

//         <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 
//                   text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
//           Where real innovation<br className="hidden md:block" />
//           drives real impact
//         </h1>

//         <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
//           We're not just building products, we're helping India's small businesses grow
//           stronger with AI-powered software.
//         </p>

//         <button className="px-10 py-4 rounded-xl text-white text-lg font-medium 
//                        bg-gradient-to-r from-indigo-500 to-purple-600 
//                        shadow-lg hover:shadow-xl transition-all hover:scale-105 
//                        inline-flex items-center gap-2">
//           View open positions
//           <ArrowRight size={22} />
//         </button>

//       </div>

//       <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
//         <div>
//           <p className="text-lg text-gray-700 italic mb-6">
//             "FloBiz was born from a simple belief that the true strength of India lies in its small and medium businesses. Our mission is to bring agentic AI into their daily workflows — intelligent software that removes friction, automates work, and frees business owners to focus on growth. When India's SMBs rise, the nation's GDP grows stronger — and so does our collective future."
//           </p>
//           <div className="border-t pt-6">
//             <p className="font-semibold text-gray-900">Rakesh Yadav</p>
//             <p className="text-gray-600 mb-3">Founder, Flobiz</p>
//             <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
//               Connect on LinkedIn <ExternalLink size={16} />
//             </a>
//           </div>
//         </div>
//         <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-64 md:h-full min-h-[300px] flex items-center justify-center">
//           <div className="text-6xl">👨‍💼</div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Hero = () => (
//   <section className="px-4 pt-24 bg-gradient-to-br from-blue-50 to-white">
//     <div className="max-w-6xl mx-auto px-2 sm:px-4">

//       <div className="min-h-[80vh] flex items-center justify-center text-center">

//         <div>

//           <h1
//             className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6
//              text-transparent bg-clip-text
//              bg-gradient-to-r from-[#6A5CFF] to-[#0D1B82] text-center"
//           >
//             Where real <wbr />
//             innovation <wbr />
//             drives real <wbr />
//             impact
//           </h1>


//           <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 px-2">
//             We're not just building products, we're helping India's small
//             businesses grow stronger with AI-powered software.
//           </p>

//           <button
//             className="w-full sm:w-auto px-6 py-4 rounded-xl text-white 
//                        text-base sm:text-lg font-medium
//                        bg-gradient-to-r from-indigo-500 to-purple-600
//                        shadow-lg hover:shadow-xl transition-all hover:scale-105
//                        inline-flex items-center justify-center gap-2">
//             View open positions <ArrowRight size={22} />
//           </button>

//         </div>

//       </div>

//     </div>
//   </section>
// );

const Hero = () => (
  <section className="relative px-4 pt-32 pb-20 overflow-hidden bg-slate-50">
    {/* Futuristic Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-[120px]" />
    </div>

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <AnimatedSection type="scale-up" duration={0.8}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles size={16} />
          <span>Revolutionizing SMB Growth</span>
        </div>
      </AnimatedSection>

      <AnimatedSection type="fade-up" delay={0.2}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Where Innovation
          </span>
          <br />
          <span className="text-slate-800">Drives Impact</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection type="fade-up" delay={0.4}>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 px-4 leading-relaxed">
          Empowering India's small businesses with intelligent, <span className="text-blue-600 font-semibold">AI-first software</span> that automates work and accelerates growth.
        </p>
      </AnimatedSection>

      <AnimatedSection type="fade-up" delay={0.6}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
            View Opportunities
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-700 text-lg font-semibold bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

// const RY = () => (
//   <section className="w-full px-4 py-24 bg-gradient-to-br from-blue-50 to-white flex justify-center">

//     <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl 
//                     p-10 md:p-12 grid md:grid-cols-2 gap-12 items-center">

//       {/* LEFT SECTION */}
//       <div>
//         <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
//           "FloBiz was born from a simple belief that the true strength of India lies in its small 
//           and medium businesses. Our mission is to bring agentic AI into their daily workflows — 
//           intelligent software that removes friction, automates work, and frees business owners 
//           to focus on growth. When India's SMBs rise, the nation's GDP grows stronger — and so 
//           does our collective future."
//         </p>

//         <hr className="my-6" />

//         <p className="font-semibold text-gray-900">Rakesh Yadav</p>
//         <p className="text-gray-600 mb-3">Founder, Flobiz</p>

//         <a
//           href="#"
//           className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
//         >
//           Connect on LinkedIn <ExternalLink size={16} />
//         </a>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl 
//                       h-64 md:h-full min-h-[300px] flex items-center justify-center">
//         <div className="text-6xl">👨‍💼</div>
//       </div>
//     </div>

//   </section>
// );

const RY = () => (
  <section className="w-full px-4 py-24 bg-white relative overflow-hidden">
    <div className="max-w-6xl w-full mx-auto">
      <AnimatedSection>
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center border border-slate-100 shadow-sm">
          <div>
            <AnimatedSection type="slide-right" delay={0.2}>
              <div className="text-5xl text-blue-200 mb-6">❝</div>
              <p className="text-lg md:text-xl text-slate-700 italic mb-8 leading-relaxed relative z-10">
                FloBiz was born from a simple belief that the true strength of India lies in its small
                and medium businesses. Our mission is to bring agentic AI into their daily workflows —
                intelligent software that removes friction, automates work, and frees business owners
                to focus on growth.
              </p>
            </AnimatedSection>

            <div className="h-px w-full bg-slate-200 my-8" />

            <AnimatedSection type="fade-up" delay={0.4}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                  👨‍💼
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Rakesh Yadav</p>
                  <p className="text-slate-500">Founder, Flobiz</p>
                </div>
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                Connect on LinkedIn
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection type="scale-up" delay={0.3}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20 rounded-full" />
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl h-[400px] w-full flex items-center justify-center relative z-10 shadow-2xl shadow-blue-900/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-9xl filter drop-shadow-lg">👨‍💼</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  </section>
);


// Investor Banner
const InvestorBanner = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-center text-gray-600 mb-8 text-lg">Backed by Leading Investors</h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {['Peak XV Partners', 'BEENEXT', 'Elevation', 'Green Oaks Capital Partners'].map(investor => (
          <div key={investor} className="text-xl font-semibold text-gray-700">{investor}</div>
        ))}
      </div>
    </div>
  </section>
);

// Product Cards
const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'myBillBook',
      icon: '📊',
      bgGradient: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-t-blue-400',
      description: "India's #1 billing, stock management and accounting platform trusted by 1 Crore+ MSMEs",
      features: [
        { icon: '📦', label: 'Multi-Channel' },
        { icon: '📈', label: '1Cr+ Users' }
      ],
      buttonText: 'Learn more',
      buttonStyle: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30'
    },
    {
      id: 2,
      name: 'mySandesh',
      icon: '✉️',
      bgGradient: 'from-emerald-500/20 to-emerald-600/10',
      borderColor: 'border-t-emerald-400',
      description: 'Revolutionary communication platform connecting businesses with customers through smart messaging',
      features: [
        { icon: '📱', label: 'Mobile First' },
        { icon: '⚡', label: 'Real-time' }
      ],
      buttonText: 'Learn more',
      buttonStyle: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
    },
    {
      id: 3,
      name: 'AI-first Products',
      icon: '🤖',
      bgGradient: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-t-purple-400',
      description: 'Next-generation AI solutions to automate and optimize business operations',
      features: [
        { icon: '🧠', label: 'AI Powered' },
        { icon: '🎯', label: 'Smart Automation' }
      ],
      buttonText: 'Coming Soon',
      buttonStyle: 'bg-purple-500/60 text-white cursor-not-allowed',
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">Our Ecosystem</h2>
          <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto text-lg">
            A suite of powerful tools designed to modernize every aspect of your business
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <AnimatedSection key={product.id} delay={idx * 0.2} type="fade-up" className="h-full">
              <div
                className={`h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden group flex flex-col`}
              >
                <div className={`p-8 flex-1 flex flex-col`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {product.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>

                  <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-medium bg-slate-50 p-3 rounded-lg">
                        <span className="text-lg">{feature.icon}</span>
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${product.buttonStyle}`}
                    disabled={product.comingSoon}
                  >
                    {product.buttonText} {!product.comingSoon && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Stats
const ImpactStats = () => (
  <section id="impact" className="py-20 bg-blue-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Delivering real impact</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-12 md:gap-8">
        {DATA.stats.map((stat, idx) => (
          <AnimatedSection key={stat.label} delay={idx * 0.2} type="scale-up">
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-blue-100 font-medium">{stat.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials
const Testimonials = () => (
  <section className="py-24 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">What Our Customers Say</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {DATA.testimonials.map((testimonial, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.2} type="fade-up" className="h-full">
            <div className="h-full bg-white rounded-3xl shadow-sm p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="text-4xl text-blue-200 mb-6">❝</div>
              <p className="text-slate-600 mb-8 italic text-lg leading-relaxed flex-1">"{testimonial.quote}"</p>
              <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

// Culture Values
const CultureValues = () => (
  <section id="culture" className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">Meet CRAFt</h2>
        <p className="text-center text-slate-500 mb-16 text-xl">Our Cultural Values</p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-8">
        {DATA.values.map((value, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1} type={idx % 2 === 0 ? "slide-right" : "slide-left"}>
            <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 hover:border-blue-200 transition-colors group">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 group-hover:translate-x-2 transition-transform">{value.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{value.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

// Life at FloBiz
const LifeAtFloBiz = () => (
  <section id="life" className="py-24 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">Life at FloBiz</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {DATA.lifeAtFlobiz.map((item, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1} type="scale-up" className="h-full">
            <div className="h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-56 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-700">
                {['🏖️', '🌍', '📚', '🏏', '💻', '🎉'][idx]}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

// Growth Stories Carousel
const GrowthStories = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % DATA.growthStories.length);
  const prev = () => setCurrent((current - 1 + DATA.growthStories.length) % DATA.growthStories.length);

  const story = DATA.growthStories[current];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Growth Stories</h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 relative">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⭐</div>
            <p className="text-sm font-semibold text-blue-200 mb-2">{story.journey}</p>
            <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
            <p className="text-blue-200">{story.role}</p>
          </div>
          <p className="text-lg italic text-center mb-8">"{story.quote}"</p>

          <div className="flex justify-center items-center gap-4">
            <button onClick={prev} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {DATA.growthStories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
            <button onClick={next} className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  ReactIcon, NodeIcon, PythonIcon, AWSIcon, MongoDBIcon, RedisIcon,
  DockerIcon, KubernetesIcon, GraphQLIcon, TypeScriptIcon, FlutterIcon, FirebaseIcon
} from '../app/components/TechIcons';

// ... (previous code)

// Tech Stack
const TechStack = () => {
  const techStackData = [
    { name: 'React', color: 'bg-blue-500', icon: <ReactIcon className="w-8 h-8 text-white" /> },
    { name: 'Node.js', color: 'bg-green-600', icon: <NodeIcon className="w-8 h-8 text-white" /> },
    { name: 'Python', color: 'bg-yellow-500', icon: <PythonIcon className="w-8 h-8 text-white" /> },
    { name: 'AWS', color: 'bg-orange-500', icon: <AWSIcon className="w-8 h-8 text-white" /> },
    { name: 'MongoDB', color: 'bg-green-500', icon: <MongoDBIcon className="w-8 h-8 text-white" /> },
    { name: 'Redis', color: 'bg-red-500', icon: <RedisIcon className="w-8 h-8 text-white" /> },
    { name: 'Docker', color: 'bg-blue-600', icon: <DockerIcon className="w-8 h-8 text-white" /> },
    { name: 'Kubernetes', color: 'bg-purple-500', icon: <KubernetesIcon className="w-8 h-8 text-white" /> },
    { name: 'GraphQL', color: 'bg-pink-500', icon: <GraphQLIcon className="w-8 h-8 text-white" /> },
    { name: 'TypeScript', color: 'bg-blue-700', icon: <TypeScriptIcon className="w-8 h-8 text-white" /> },
    { name: 'Flutter', color: 'bg-cyan-500', icon: <FlutterIcon className="w-8 h-8 text-white" /> },
    { name: 'Firebase', color: 'bg-orange-400', icon: <FirebaseIcon className="w-8 h-8 text-white" /> }
  ];

  return (
    <section id="tech" className="py-24 px-4 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Tech@mBB</h2>
          <p className="text-slate-400 mb-16 text-lg md:text-xl max-w-2xl mx-auto">Modern stack, scalable architecture, and cutting-edge technologies powering our mission</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {techStackData.map((tech, idx) => (
            <AnimatedSection key={tech.name} delay={idx * 0.05} type="scale-up">
              <div
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`${tech.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <p className="text-white font-semibold text-sm md:text-base">{tech.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CareersCTA = () => (
  <section id="careers" className="py-32 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-white/10 blur-[100px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[120px]" />
    </div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <AnimatedSection type="scale-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Make an Impact?</h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
          Join us in building the future of Indian SMBs. Your next adventure starts here.
        </p>
        <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20 inline-flex items-center gap-2 group">
          View open positions <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </AnimatedSection>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Flobiz</h3>
        <p className="text-gray-400">Empowering India's businesses with AI-powered solutions</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Products</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">myBillBook</a></li>
          <li><a href="#" className="hover:text-white transition-colors">mySandesh</a></li>
          <li><a href="#" className="hover:text-white transition-colors">AI Products</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-gray-400">
          <li>support@flobiz.in</li>
          <li>+91 740041 7400</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>© 2025 Flobiz. All rights reserved.</p>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RY />
      <InvestorBanner />
      <ProductShowcase />
      <ImpactStats />
      <Testimonials />
      <CultureValues />
      <LifeAtFloBiz />
      <GrowthStories />
      <TechStack />
      <CareersCTA />
      <Footer />
    </div>
  );
};

export default App;