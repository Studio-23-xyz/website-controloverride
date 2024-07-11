import Link from 'next/link';
import classes from './navbar.module.css';


type NavButtonProps = {
  href: string;
  label: string;
  targetBlank?: boolean;
  special?: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ href, label, targetBlank = false, special = false }) => (
  <Link 
    href={href}
    className={`p-2 transition-colors duration-300 rounded-lg ${special ? `bg-lime-500 hover:${classes.animateShake}` : 'bg-gray-800 text-lime-500 hover:bg-lime-500 hover:text-white'}`}
    target={targetBlank ? "_blank" : "_self"}
    rel={targetBlank ? "noopener noreferrer" : undefined}
  >
    <span className="inline-block">{label}</span>
  </Link>
);

const NavBar: React.FC = () => (
  <div className="flex justify-between items-center bg-gray-800 py-4 px-8">
    <NavButton href="https://studio-23.xyz/" label="HOME" targetBlank />
    <NavButton href="#features" label="FEATURES" />
    <NavButton href="#screenshots" label="SCREENSHOTS" />
    <NavButton href="https://drive.google.com/drive/folders/1cInz9pylfEsPm-2y3p5G-49LSlsiVw44?fbclid=IwAR0v7tcjbP1m_3iQ28pPmFCh42VNuKjlOLlIOWQ3L-xipwj19-qnXvo8s58" label="PRESS KIT" targetBlank />
    <NavButton href="https://studio-23.xyz/contact/" label="CONTACT US" targetBlank />
    <NavButton href="https://store.steampowered.com/app/1406090/ControlOverride/" label="BUY NOW" special targetBlank />
  </div>
);

export default NavBar;
