import { motion } from "motion/react";

interface Props {
  className?: string;
  index: number;
  quote?: string;
  author?: string;
}

const TestimonialCard: React.FC<Props> = ({
  className,
  index,
  quote,
  author
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`break-inside-avoid ${className || ''}`}
    >
      <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm transition-all duration-500 border border-ikigai-dark/5 group hover:cursor-pointer hover:shadow-md h-full flex flex-col">
        <div className="text-ikigai-accent mb-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21L16.41 14.904C16.634 14.288 16.75 13.633 16.75 12.95V3H24V12.95C24 16.438 22.844 19.342 20.531 21.662C18.219 23.983 15.313 25.143 11.812 25.143V21H14.017ZM3.205 21L5.598 14.904C5.822 14.288 5.938 13.633 5.938 12.95V3H13.188V12.95C13.188 16.438 12.031 19.342 9.719 21.662C7.406 23.983 4.5 25.143 1 25.143V21H3.205Z" />
          </svg>
        </div>

        <p className="text-xl md:text-2xl font-serif text-ikigai-dark leading-relaxed mb-10 transition-all duration-500 ease-out flex-grow">
          &quot;{quote}&quot;
        </p>

        <div className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-ikigai-accent/30 transition-all duration-500" />
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-muted group-hover:text-ikigai-accent transition-colors duration-500">
            {author}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;