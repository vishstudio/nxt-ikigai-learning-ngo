import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const InstagramIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const navItems = [
  { name: 'About', href: '#story' },
  { name: 'Activities', href: '#activities' },
  { name: 'Stories', href: '#success-stories' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const socialLinks = [
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
];

export const testimonials = [
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

export const impactStats = [
  { value: "20+", label: "Children Educated" },
  { value: "15+", label: "Active Volunteers" },
  { value: "6", label: "Communities Served" },
  { value: "100%", label: "Free Education" },
];

export const faqs = [
  {
    question: "How can I partner with or sponsor Ikigai?",
    answer: "We welcome partnerships with corporations, foundations, and individuals who share our vision. The best way to explore partnership opportunities is to book a call with our Director using the form below. We can discuss tailored sponsorship packages, employee volunteering programs, or direct funding initiatives."
  },
  {
    question: "Is the education provided truly free?",
    answer: "Yes, absolutely. We believe that financial hardship should never be a barrier to learning. All our programs, materials, and mentoring sessions are provided completely free of charge to the children and their families."
  },
  {
    question: "How are the funds and donations utilized?",
    answer: "100% of public donations go directly toward our educational programs. This includes purchasing learning materials, maintaining our community centers, providing nutritious meals during sessions, and funding specialized workshops. Our administrative costs are covered by private benefactors."
  },
  {
    question: "Can I volunteer as a teacher or mentor?",
    answer: "Yes! We are always looking for passionate individuals to join our volunteer network. Whether you have a background in education, arts, technology, or simply a desire to help, we have a place for you. Please reach out via our contact form to learn about our onboarding process."
  },
  {
    question: "What age groups do you serve?",
    answer: "Our programs are designed for children and young adults between the ages of 6 and 18. We tailor our curriculum and activities to suit different developmental stages, from foundational literacy to advanced vocational training."
  }
];
