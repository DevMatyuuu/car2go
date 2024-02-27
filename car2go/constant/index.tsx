import { FaCar } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa";



export const navLinks = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'About',
    route: '/about'
  },
  {
    id: 3,
    label: 'Vehicles',
    route: '/vehicles'
  },
  {
    id: 4,
    label: 'Contact',
    route: '/contact'
  },
]

export const services = [
  {
    id: 1,
    label: 'Aesthetic',
    icon: <FaCar size={90}/>,
    iconMobile: <FaCar size={50}/>,
    description: 'We take pride in offering an exquisite collection of sports and supercars that not only deliver exceptional performance but also turn heads with their stunning aesthetics. Whether you’re a speed enthusiast or simply appreciate the allure of finely crafted automobiles, our selection caters to discerning customers like you.'
  },
  {
    id: 2,
    label: 'Performance',
    icon: <PiLightningFill size={90}/>,
    iconMobile: <PiLightningFill size={50}/>,
    description: 'We specialize in offering an exhilarating range of high-performance vehicles designed to provide both thrilling adventures and seamless performance. Whether you crave the rush of acceleration or the precision of cornering, our curated selection caters to discerning enthusiasts like you.'
  },
  {
    id: 3,
    label: 'Reliable',
    icon: <FaThumbsUp size={90}/>,
    iconMobile: <FaThumbsUp size={50}/>,
    description: 'At our car rental service, reliability is our cornerstone. We understand that a smooth and hassle-free experience is essential for our customers.'
  },
]