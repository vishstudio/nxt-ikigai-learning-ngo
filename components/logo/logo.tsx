import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import logoPremium from "../../public/assets/logo_premium.png";

interface Props {
  className?: string;
  src?: string | StaticImageData;
}

const Logo: FunctionComponent<Props> = ({ className, src }) => {
  return (
    <Image src={src || logoPremium} alt="Ikigai Logo" width={75} height={75} className={className} />
  );
}

export default Logo;
