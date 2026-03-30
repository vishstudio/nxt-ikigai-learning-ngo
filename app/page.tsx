"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Heart,
  Quote,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Carousel } from '@/components/Carousel';
import Image from 'next/image';

const navItems = [
  { name: 'About', href: '#story' },
  { name: 'Activities', href: '#activities' },
  { name: 'Stories', href: '#success-stories' },
  { name: 'Testimonials', href: '#testimonials' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const testimonials = [
  {
    quote: "Ikigai didn't just give my daughter free tutoring; they gave her confidence. She smiles when she talks about school now.",
    author: "Maria S. — Mother"
  },
  {
    quote: "Volunteering here is the highlight of my week. Seeing the 'aha' moment in a child's eyes is worth more than anything.",
    author: "David C. — Volunteer Teacher"
  },
  {
    quote: "The support from Ikigai has been life-changing for our family. My son is now excited about his future.",
    author: "Ahmed K. — Father"
  },
  {
    quote: "Teaching these children is a privilege. Their resilience and eagerness to learn inspire me every day.",
    author: "Elena R. — Volunteer"
  },
  {
    quote: "I never thought I could learn coding, but the mentors here made it so simple and fun. I feel ready for the world.",
    author: "Sanjay M. — Student"
  }
];

export default function IkigaiWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ikigai-bg flex flex-col font-sans text-ikigai-dark">
      {/* Top Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ikigai-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">
              <Heart size={20} className="text-ikigai-accent fill-ikigai-accent" aria-hidden="true" />
              <span className="text-2xl font-serif font-bold tracking-tight">Ikigai.</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 items-center" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-ikigai-dark/80 hover:text-ikigai-accent font-medium transition-colors text-[10px] uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button href="#director-call" variant="outline">
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="text-ikigai-dark hover:text-ikigai-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ikigai-accent p-2 rounded-md"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden bg-ikigai-bg fixed inset-0 z-[60] flex flex-col p-8 shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-ikigai-accent fill-ikigai-accent" aria-hidden="true" />
                <span className="text-2xl font-serif font-bold tracking-tight">Ikigai.</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-ikigai-dark p-2 hover:rotate-90 transition-transform duration-300"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col h-full justify-between">
              <nav className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-5xl font-serif text-ikigai-dark hover:text-ikigai-accent transition-all hover:translate-x-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-12 pb-12 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    href="#director-call"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-6 text-xs tracking-[0.3em]"
                  >
                    Book a Call
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-ikigai-muted mb-6 font-bold">Connect with us</p>
                  <div className="flex justify-center gap-10">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={`Follow us on ${social.name}`}
                        className="text-ikigai-dark/40 hover:text-ikigai-accent transition-all hover:scale-125 hover:-translate-y-1"
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <ActivitiesSection />
        <StorySection />
        <DirectorCallSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-ikigai-dark pt-24 pb-12 text-ikigai-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Heart size={24} className="text-ikigai-accent fill-ikigai-accent" aria-hidden="true" />
                <span className="text-3xl font-serif font-bold">Ikigai.</span>
              </div>
              <p className="text-ikigai-bg/60 font-light leading-relaxed max-w-xs">
                Nurturing potential and providing free education to those who need it most. Every child deserves a reason for being.
              </p>
              <div className="flex gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-ikigai-bg/10 flex items-center justify-center hover:bg-ikigai-accent hover:border-ikigai-accent transition-all text-ikigai-bg/80 hover:text-white hover:scale-110 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Navigation">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-ikigai-bg/70 hover:text-white transition-colors font-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Contact</h4>
              <ul className="space-y-4 text-ikigai-bg/70 font-light">
                <li>hello@ikigaingo.org</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Purpose Way<br />San Francisco, CA 94103</li>
              </ul>
            </div>

            {/* Newsletter/CTA */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Our Mission</h4>
              <p className="text-ikigai-bg/70 font-light mb-8">
                Join our community of volunteers and supporters.
              </p>
              <Button href="#director-call" variant="white">
                Get Involved
              </Button>
            </div>
          </div>

          <div className="pt-12 border-t border-ikigai-bg/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-ikigai-bg/40 text-[10px] uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} VISH studio. All rights reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-ikigai-bg/40">
              <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Privacy Policy</a>
              <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Terms of Service</a>
              <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section id="home" ref={containerRef} className="pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-ikigai-bg" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="z-10"
          >
            <h1 id="hero-title" className="text-6xl md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-serif leading-[0.8] text-ikigai-dark mb-10 tracking-tighter">
              Nurturing <br />
              <span className="italic text-ikigai-accent">potential,</span><br />
              one child<br />
              at a time.
            </h1>
            <p className="text-lg md:text-xl text-ikigai-muted font-light max-w-lg mb-14 leading-relaxed">
              We provide free, high-quality education to children facing financial hardships. Because every child deserves the chance to find their purpose.
            </p>
            <div className="flex flex-wrap gap-10 items-center">
              <Button href="#director-call">
                Speak with our Director
              </Button>
              <Button href="#story" variant="link" icon={<ArrowRight size={16} />}>
                Discover our mission
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[600px] md:h-[80vh] w-full arch-image overflow-hidden shadow-2xl group"
          >
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                alt="A group of diverse children smiling together, representing the community we serve"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-ikigai-dark/5 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white z-10 hidden xl:block">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-60">Impact Report 2026</p>
              <p className="text-2xl font-serif italic">&quot;Education is the most powerful weapon which you can use to change the world.&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DirectorCallSection() {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <section id="director-call" className="py-32 bg-ikigai-dark text-ikigai-bg relative scroll-mt-20" aria-labelledby="director-call-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">A Personal Invitation</span>
          <h2 id="director-call-title" className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 leading-tight max-w-4xl mx-auto text-ikigai-bg/90">
            &quot;I started Ikigai because I saw too much brilliance lost to poverty.&quot;
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-xl font-serif text-ikigai-bg/80 leading-relaxed mb-6 italic">
              Dear friend,
            </p>
            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-6">
              We aren&apos;t just teaching math or reading; we are providing a safe space where children feel valued, heard, and empowered to dream beyond their circumstances.
            </p>
            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-12">
              I invite you to a personal conversation. Whether you want to volunteer, donate, or simply learn more about our mission, I want to hear from you. Let&apos;s discuss how we can change lives together.
            </p>
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-20 h-20 rounded-full overflow-hidden relative border border-ikigai-bg/20 shadow-lg"
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Sarah Jenkins, Executive Director of Ikigai"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div>
                <p className="font-serif text-3xl text-ikigai-bg">Sarah Jenkins</p>
                <p className="text-xs text-ikigai-accent uppercase tracking-[0.2em] mt-1">Executive Director</p>
              </div>
            </div>
          </div>

          {/* The Booking Card */}
          <div className="lg:col-span-5 bg-ikigai-bg text-ikigai-dark p-10 md:p-12 rounded-[2rem] shadow-2xl relative transform lg:translate-y-16">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-ikigai-accent rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg">
              <span className="font-serif italic text-xl">Let&apos;s talk</span>
            </div>
            <h3 className="text-3xl font-serif mb-4">Book a Discovery Call</h3>
            <p className="text-ikigai-muted font-light mb-10 leading-relaxed">
              Schedule a 15-minute conversation directly with Sarah to explore partnership and volunteer opportunities.
            </p>

            <div className="space-y-6">
              <Button
                onClick={() => setIsBooking(true)}
                className="w-full py-6 px-10 flex justify-between items-center"
              >
                <div className="flex flex-col items-start">
                  <span className="uppercase tracking-[0.3em] text-[10px] font-black opacity-80 mb-1">Primary Action</span>
                  <span className="uppercase tracking-[0.2em] text-sm font-black">
                    {isBooking ? "Booking System Loading..." : "Find a Time"}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Button>
              {isBooking && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-ikigai-accent font-bold"
                >
                  Our booking system is currently being updated. Please email Sarah directly below.
                </motion.p>
              )}
              <p className="text-center text-sm text-ikigai-muted pt-4">
                Or email directly at <br />
                <a href="mailto:sarah@ikigaingo.org" className="text-ikigai-accent hover:underline font-black mt-2 inline-block tracking-wider">sarah@ikigaingo.org</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section id="story" ref={containerRef} className="py-32 bg-ikigai-surface scroll-mt-20" aria-labelledby="story-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[800px] w-full arch-image overflow-hidden shadow-xl"
          >
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop"
                alt="A young student focused on reading a book, symbolizing the power of education"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-8 block">Our Mission</span>
            <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[1.1] text-ikigai-dark">
              Education is not a privilege. It is a fundamental right.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-ikigai-muted font-light leading-relaxed mb-16">
              <p>
                IKIGAI has the aim to help students who are struggling financially and cannot afford private tuitions. We believe that every student, at any age, deserves access to quality learning.
              </p>
              <p className="italic">
                &quot;However, if any student from any background approaches us, our volunteers do their best to help.&quot;
              </p>
              <p>
                We connect these students with passionate volunteer teachers, creating a sanctuary for learning, growth, and boundless possibility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-ikigai-dark/10 pt-12">
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">500+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Students Reached</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">100%</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Free Access</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">50+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Volunteer Teachers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-32 pt-32 border-t border-ikigai-dark/10">
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-24">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-ikigai-dark/10 -translate-x-1/2 hidden md:block" />

              {[
                { year: "2018", title: "The Spark", description: "IKIGAI founded with 5 passionate volunteers in a small community center." },
                { year: "2020", title: "Digital Shift", description: "Launched online tutoring during the pandemic, reaching children in remote areas." },
                { year: "2022", title: "Growth", description: "Expanded to 10 communities, supporting 300+ students with holistic care." },
                { year: "2024", title: "Today", description: "A thriving community of 500+ students and 50+ dedicated volunteer teachers." },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 px-4 md:px-12">
                    <div className={`p-8 bg-white rounded-square-image shadow-sm hover:shadow-md transition-shadow duration-500 border border-ikigai-dark/5 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-ikigai-accent font-serif text-3xl font-bold block mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-serif mb-3 text-ikigai-dark">{milestone.title}</h3>
                      <p className="text-ikigai-muted font-light leading-relaxed text-base">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-ikigai-accent border-4 border-ikigai-bg -translate-x-1/2 z-10 hidden md:block shadow-sm" />

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ActivitiesSection() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | { title: string; image: string; description: string; category: string }>(null);

  const categories = ['All', 'Education', 'Arts', 'Community', 'Technology', 'Wellness'];

  const activities = [
    {
      title: "Interactive Classrooms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
      description: "Our volunteers use modern teaching methods to keep students engaged and curious.",
      category: "Education"
    },
    {
      title: "Art & Expression",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      description: "Creative workshops help children express their emotions and discover hidden talents.",
      category: "Arts"
    },
    {
      title: "Community Outreach",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      description: "We work directly with families to understand their needs and provide holistic support.",
      category: "Community"
    },
    {
      title: "Tech Literacy",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      description: "Bridging the digital divide with free access to computers and coding workshops.",
      category: "Technology"
    },
    {
      title: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
      description: "Regular health checkups and yoga sessions to ensure physical and mental well-being.",
      category: "Wellness"
    },
    {
      title: "Vocational Training",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      description: "Equipping older students with practical skills for future employment and independence.",
      category: "Education"
    },
    {
      title: "Science Discovery",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      description: "Hands-on experiments that bring scientific concepts to life for our young learners.",
      category: "Education"
    },
    {
      title: "Music & Rhythm",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
      description: "Exploring the power of music to build confidence and foster teamwork.",
      category: "Arts"
    },
    {
      title: "Coding for Kids",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
      description: "Teaching the language of the future through fun and interactive coding sessions.",
      category: "Technology"
    },
    {
      title: "Yoga & Mindfulness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop",
      description: "Helping children develop focus and emotional resilience through mindful movement.",
      category: "Wellness"
    },
    {
      title: "Food Support",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
      description: "Ensuring no child goes hungry by providing nutritious meals to families in need.",
      category: "Community"
    },
    {
      title: "Outdoor Sports",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      description: "Building character and physical health through organized team sports and play.",
      category: "Wellness"
    }
  ];

  const filteredActivities = filter === 'All'
    ? activities
    : activities.filter(a => a.category === filter);

  return (
    <section id="activities" className="py-32 bg-ikigai-bg scroll-mt-20" aria-labelledby="activities-title">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">What We Do</span>
            <h2 id="activities-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark leading-tight">
              A glimpse into our daily <span className="italic">impact.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-ikigai-muted">
            <Camera size={20} />
            <span className="text-xs uppercase tracking-widest font-bold">Activity Gallery</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-ikigai-dark/5 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                ? 'bg-ikigai-accent text-white shadow-md'
                : 'bg-white text-ikigai-muted hover:bg-ikigai-surface hover:text-ikigai-dark'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filterable Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity, index) => (
              <motion.div
                layout
                key={activity.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(activity)}
              >
                <div className="relative aspect-square w-full rounded-square-image overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ikigai-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-ikigai-accent rounded-full shadow-sm">
                      {activity.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-serif text-ikigai-dark group-hover:text-ikigai-accent transition-colors">{activity.title}</h3>
                <p className="text-sm text-ikigai-muted font-light line-clamp-1 mt-1">{activity.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-ikigai-dark/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white rounded-square-image overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative w-full md:w-2/3 aspect-square md:aspect-auto h-[400px] md:h-[600px]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-ikigai-accent mb-4 block">{selectedImage.category}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-ikigai-dark mb-6 leading-tight">{selectedImage.title}</h3>
                <p className="text-lg text-ikigai-muted font-light leading-relaxed mb-10">
                  {selectedImage.description}
                </p>
                <Button
                  onClick={() => setSelectedImage(null)}
                  variant="outline"
                  className="w-full"
                >
                  Close Preview
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TestimonialsSection() {
  const allTestimonials = [
    ...testimonials,
    {
      quote: "The mentorship program at Ikigai is unparalleled. They don't just teach subjects; they teach life skills and resilience.",
      author: "Elena R. — Education Consultant"
    },
    {
      quote: "Seeing the transformation in these children's eyes from doubt to determination is the most rewarding experience of my life.",
      author: "Marcus T. — Senior Volunteer"
    },
    {
      quote: "Ikigai provides a safe haven where creativity knows no bounds. My children have found their true voices here.",
      author: "Sarah J. — Community Member"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white scroll-mt-20 overflow-hidden" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 sticky top-32"
          >
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-ikigai-accent mb-6 block">Voices of Hope</span>
            <h2 id="testimonials-title" className="text-6xl md:text-7xl font-serif text-ikigai-dark leading-[0.9] mb-8">
              The lives <br />
              we <span className="italic">touch.</span>
            </h2>
            <p className="text-ikigai-muted font-light text-lg leading-relaxed max-w-xs">
              Direct stories from the families, volunteers, and mentors who make our mission possible every single day.
            </p>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-ikigai-surface overflow-hidden relative">
                    <Image
                      src={`https://picsum.photos/seed/user${i}/100/100`}
                      alt="User"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-ikigai-muted">500+ Lives Impacted</span>
            </div>
          </motion.div>

          {/* Right Column: Testimonials Carousel */}
          <div className="lg:col-span-8">
            <Carousel
              items={allTestimonials}
              autoScroll={true}
              itemsPerPage={{ mobile: 1, tablet: 2, desktop: 2 }}
              renderItem={(testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
                  className={`p-10 rounded-square-image border border-ikigai-dark/5 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${index === 0 ? 'bg-ikigai-surface' : 'bg-white'}`}
                >
                  <div>
                    <Quote className="w-8 h-8 text-ikigai-accent/20 mb-6" />
                    <p className={`font-serif italic text-ikigai-dark leading-snug mb-8 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-ikigai-accent/30" />
                    <span className="uppercase tracking-[0.2em] text-[9px] font-black text-ikigai-accent">{testimonial.author}</span>
                  </div>
                </motion.div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  const stories = [
    {
      name: "Aarav's Journey",
      description: "Once struggling with basic literacy, Aarav now leads his school's debate team and dreams of becoming a lawyer.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
      tag: "Academic Excellence"
    },
    {
      name: "Maya's Breakthrough",
      description: "Maya discovered her passion for coding through our free workshops. She recently won a regional tech competition.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      tag: "Technology"
    },
    {
      name: "Leo's New Chapter",
      description: "After joining our art program, Leo found a way to express his emotions and has now been accepted into a prestigious art academy.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      tag: "Creative Arts"
    },
    {
      name: "Priya's Resilience",
      description: "Priya overcame significant family challenges to complete her secondary education and is now pursuing a nursing degree.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      tag: "Higher Education"
    },
    {
      name: "Karan's Innovation",
      description: "Karan's interest in mechanics led him to develop a low-cost irrigation solution for his village's farmers.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      tag: "Innovation"
    }
  ];

  return (
    <section id="success-stories" className="py-32 bg-ikigai-bg scroll-mt-20" aria-labelledby="success-stories-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Our Impact</span>
          <h2 id="success-stories-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark">Success Stories</h2>
          <p className="text-ikigai-muted font-light mt-6 max-w-2xl mx-auto">
            Witness the transformation of our students as they overcome obstacles and reach for their dreams.
          </p>
        </div>

        <Carousel
          items={stories}
          itemsPerPage={{ mobile: 2, tablet: 4, desktop: 4 }}
          renderItem={(story, index) => (
            <div className="group h-full flex flex-col">
              <div className="relative aspect-square w-full rounded-square-image overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-700 ease-out">
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={story.image}
                    alt={`Success story: ${story.name}`}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm transform group-hover:translate-x-1 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ikigai-accent">{story.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ikigai-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {story.description}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-4 text-ikigai-dark group-hover:text-ikigai-accent transition-colors mt-auto">{story.name}</h3>
            </div>
          )}
        />
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-ikigai-surface scroll-mt-20 border-t border-ikigai-dark/5" aria-labelledby="contact-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Get in Touch</span>
            <h2 id="contact-title" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-ikigai-dark">
              Ready to make a difference?
            </h2>
            <p className="text-lg text-ikigai-muted font-light leading-relaxed mb-12 max-w-md">
              We are always looking for partners, volunteers, and students who need our help. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-10">
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Email</p>
                <a href="mailto:hello@ikigaingo.org" className="text-2xl font-serif text-ikigai-accent hover:text-ikigai-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">hello@ikigaingo.org</a>
              </div>
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Phone</p>
                <p className="text-2xl font-serif text-ikigai-muted">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Office</p>
                <p className="text-xl font-serif text-ikigai-muted leading-relaxed">123 Purpose Way<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>

          <div className="bg-ikigai-bg p-10 md:p-14 soft-image shadow-xl relative border border-ikigai-dark/5 text-center">
            <div className="w-20 h-20 bg-ikigai-surface rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="text-ikigai-accent w-10 h-10" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-serif mb-6 text-ikigai-dark">Book a Call</h3>
            <p className="text-ikigai-muted font-light mb-10 leading-relaxed">
              The fastest way to connect is to schedule a brief call with our director. We can discuss how to best support your needs or your contribution.
            </p>
            <Button
              href="#director-call"
              className="w-full py-6 gap-4"
              icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
            >
              Schedule Your Call
            </Button>
            <p className="text-xs text-ikigai-muted mt-8 uppercase tracking-widest">
              No forms. Just a real conversation.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
