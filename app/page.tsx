'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink, Menu, X } from 'lucide-react';
import Reveal from "../app/components/Reveal";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">Flobiz</div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {link}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-700 hover:text-blue-600">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
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

const Hero = () => (
  <section className="px-4 bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-7xl mx-auto">

      {/* FULL PAGE HERO SECTION */}
      <div className="min-h-screen flex items-center justify-center text-center">

        <div className="max-w-6xl mx-auto">

          <h1
            className="text-4xl md:text-7xl font-bold leading-tight mb-8
             text-transparent bg-clip-text 
             bg-gradient-to-r from-[#6A5CFF] to-[#0D1B82]">
            Where real innovation<br className="hidden md:block" />
            drives real impact
          </h1>


          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're not just building products, we're helping India's small businesses grow
            stronger with AI-powered software.
          </p>

          <button className="px-10 py-4 rounded-xl text-white text-lg font-medium 
                             bg-gradient-to-r from-indigo-500 to-purple-600 
                             shadow-lg hover:shadow-xl transition-all hover:scale-105 
                             inline-flex items-center gap-2">
            View open positions
            <ArrowRight size={22} />
          </button>

        </div>
      </div>

      {/* BELOW SECTION (NOT FULL SCREEN) */}
      {/* <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center "> */}

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
  <section className="w-full px-4 py-24 bg-gradient-to-br from-blue-50 to-white flex justify-center">

    <Reveal delay={0.1}>
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl 
                      p-10 md:p-12 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              "FloBiz was born from a simple belief that the true strength of India lies in its small
              and medium businesses. Our mission is to bring agentic AI into their daily workflows —
              intelligent software that removes friction, automates work, and frees business owners
              to focus on growth. When India's SMBs rise, the nation's GDP grows stronger — and so
              does our collective future."
            </p>
          </Reveal>

          <hr className="my-6" />

          <Reveal delay={0.3}>
            <p className="font-semibold text-gray-900">Rakesh Yadav</p>
            <p className="text-gray-600 mb-3">Founder, Flobiz</p>
          </Reveal>

        </div>

        <Reveal delay={0.4}>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl 
                          h-64 md:h-full min-h-[300px] flex items-center justify-center">
            <div className="text-6xl">👨‍💼</div>
          </div>
        </Reveal>

      </div>
    </Reveal>

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
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our products</h2>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 ${product.borderColor} overflow-hidden group`}
            >
              <div className={`p-8 bg-gradient-to-br ${product.bgGradient}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{product.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed min-h-[80px]">
                  {product.description}
                </p>



                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 flex items-center justify-center gap-2 ${product.buttonStyle}`}
                  disabled={product.comingSoon}
                >
                  {product.buttonText} {!product.comingSoon && <ArrowRight size={18} />}
                </button>

                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                        <span className="text-lg">{feature.icon}</span>
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Stats
const ImpactStats = () => (
  <section id="impact" className="py-16 bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Delivering real impact</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {DATA.stats.map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl font-bold mb-2">{stat.value}</div>
            <div className="text-xl text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials
const Testimonials = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-600 text-center mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {DATA.testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Culture Values
const CultureValues = () => (
  <section id="culture" className="py-16 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-600 text-center mb-4">Meet CRAFt</h2>
      <p className="text-center text-gray-600 mb-12 text-lg">Our Cultural Values</p>
      <div className="grid md:grid-cols-2 gap-8">
        {DATA.values.map((value, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">{value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Life at FloBiz
const LifeAtFloBiz = () => (
  <section id="life" className="py-16 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-600 text-center mb-12">Life at FloBiz</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {DATA.lifeAtFlobiz.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 flex items-center justify-center text-6xl">
              {['🏖️', '🌍', '📚', '🏏', '💻', '🎉'][idx]}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
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

// Tech Stack
const TechStack = () => {
  const techStackData = [
    { name: 'React', color: 'bg-blue-500', icon: '⚛️' },
    { name: 'Node.js', color: 'bg-green-600', icon: '🟢' },
    { name: 'Python', color: 'bg-yellow-500', icon: '🐍' },
    { name: 'AWS', color: 'bg-orange-500', icon: '☁️' },
    { name: 'MongoDB', color: 'bg-green-500', icon: '🍃' },
    { name: 'Redis', color: 'bg-red-500', icon: '⚡' },
    { name: 'Docker', color: 'bg-blue-600', icon: '🐳' },
    { name: 'Kubernetes', color: 'bg-purple-500', icon: '☸️' },
    { name: 'GraphQL', color: 'bg-pink-500', icon: '📊' },
    { name: 'TypeScript', color: 'bg-blue-700', icon: '📘' },
    { name: 'Flutter', color: 'bg-cyan-500', icon: '🦋' },
    { name: 'Firebase', color: 'bg-orange-400', icon: '🔥' }
  ];

  return (
    <section id="tech" className="py-20 px-4 bg-white-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tech@mBB</h2>
        <p className="text-gray-300 mb-16 text-lg md:text-xl">Modern stack, scalable architecture, and cutting-edge technologies</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {techStackData.map(tech => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`${tech.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {tech.icon}
              </div>
              <p className="text-white font-semibold text-sm md:text-base">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CareersCTA = () => (
  <section id="careers" className="py-20 px-4 bg-gradient-to-br from-blue-500 to-blue-400 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
      <p className="text-xl mb-8 text-blue-100">Your next adventure starts here.</p>
      <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
        View open positions <ArrowRight size={24} />
      </button>
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