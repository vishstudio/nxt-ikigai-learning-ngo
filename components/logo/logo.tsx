import Image from 'next/image';

const Logo = () => {
  return (
    <a href="#home" className="flex-shrink-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">
      <Image src="/assets/logo_premium.png" alt="Ikigai Logo" width={75} height={75} />
    </a>
  )
}

export default Logo;