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
  // { name: 'Stories', href: '#success-stories' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const Icons = {
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedinIcon,
};


export const testimonials = [
  {
    quote: "Being both a student and a volunteer has been one of the most meaningful experiences of my journey. As a student, I felt supported, encouraged, and truly seen — not just for my academic abilities, but as a person growing and learning at my own pace. The environment created was one of kindness, patience, and genuine care, which made all the difference. Volunteering, on the other hand, allowed me to give back what I had received. It was incredibly fulfilling to support others, share knowledge, and be part of a community that uplifts one another. There is something very special about being on both sides — learning and teaching — and realizing how powerful compassion and guidance can be. This experience has not only helped me grow academically, but also personally. It has taught me empathy, responsibility, and the importance of creating safe and supportive spaces for others. I am deeply grateful to have been part of this journey, and I will always carry these lessons with me.",
    author: "Ritisha - Student and Volunteer"
  },
  {
    quote: "Joining the Ikigai NGO tuition program was a turning point for me. The tutors don't just help with homework; they actually take the time to make sure we understand the 'why' behind what we’re learning. It’s a supportive environment where I finally feel confident enough to ask questions and strive for my goals. I’m so grateful for the community they’ve built here!",
    author: "Zara - Student"
  },
  {
    quote: "Ikigai helped me grow in so many ways as an individual and also where I had the opportunity to be in an amazing team. Thank you Ikigai",
    author: "Teejasvini Bundhoo - Volunteer Teacher"
  }
];

export const impactStats = [
  { value: "20+", label: "Children Educated" },
  { value: "10+", label: "Subjects Taught" },
  { value: "15+", label: "Active Volunteers" },
  { value: "100%", label: "Free Education" },
];

export const faqs = [
  {
    question: "How can I partner with or sponsor Ikigai?",
    answer: "We welcome partnerships with corporations, foundations, and individuals who share our vision. The best way to explore partnership opportunities is to book a call with Ikigai members. We can discuss tailored sponsorship packages, employee volunteering programs, or direct funding initiatives."
  },
  {
    question: "Is the education provided truly free?",
    answer: "Yes, absolutely. We believe that financial hardship should never be a barrier to learning. All our programs, materials, and mentoring sessions are provided completely free of charge to the children and their families."
  },
  {
    question: "How are the funds and donations utilized?",
    answer: "100% of public donations go directly toward our educational programs. This includes purchasing learning materials."
  },
  {
    question: "Can I volunteer as a teacher or mentor?",
    answer: "Yes! We are always looking for passionate individuals to join our volunteer network. Whether you have a background in education, arts, technology, or simply a desire to help, we have a place for you. Please reach out via our email or book a call button to learn about our onboarding process. We are also available via Whatsapp for quick questions and support."
  },
  {
    question: "What age groups do you serve?",
    answer: "Our programs are designed for children and young adults between the ages of 6 and 18. We tailor our curriculum and activities to suit different developmental stages, from foundational literacy to advanced vocational training."
  }
];
