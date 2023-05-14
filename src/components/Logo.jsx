import Image from "next/image";
import logo from "../images/logo.png";

export function Logo(props) {
  return(<Image 
      src={logo}
      height={50}
      width={250}
      alt="logo" />)
  
}
