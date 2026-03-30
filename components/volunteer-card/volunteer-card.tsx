import { motion } from 'motion/react';
import Image from 'next/image';

interface Props {
  name: string;
  role: string;
  img: string;
  href?: string;
  index?: number;
  className?: string;
}

const VolunteerCard: React.FC<Props> = ({ name, role, img, href = '#', index = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      className={`break-inside-avoid ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} profile`}
        className="block"
      >
        <div className="bg-ikigai-bg/95 border border-ikigai-dark/10 p-3 rounded-2xl shadow-sm flex items-center gap-4 group hover:bg-ikigai-dark transition-colors duration-800 ease-in-out">
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image src={img} alt={name} width={56} height={56} className="object-cover" referrerPolicy="no-referrer" />
          </div>

          <div>
            <p className="font-serif text-base text-ikigai-dark group-hover:text-ikigai-bg">{name}</p>
            <p className="text-xs text-ikigai-accent group-hover:text-ikigai-bg uppercase tracking-[0.12em] mt-1">{role}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default VolunteerCard;
