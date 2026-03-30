import Image from "next/image";
import { FunctionComponent } from "react";


interface Props {
  className?: string;
  src?: string;
}


const Logo: FunctionComponent<Props> = ({ className, src }) => {
  return (
    <Image src={src || "/assets/logo_premium.png"} alt="Ikigai Logo" width={75} height={75} className={className} />
  );
}


export default Logo;