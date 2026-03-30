import Image from 'next/image';
import { FunctionComponent } from 'react';


interface Props {
  className?: string;
}

const Logo: FunctionComponent<Props> = ({
  className = '',
}) => {
  return (
    <a href="#home" className={`flex-shrink-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent ${className}`}>
      <Image src="/assets/logo_premium.png" alt="Ikigai Logo" width={75} height={75} />
    </a>
  )
}

export default Logo;