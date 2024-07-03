// src/data/navLinks.js
import AboutUsDropdown from '../components/AboutUsDropdown';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: <AboutUsDropdown />, path: '/about-us' },
  { label: 'Contact', path: '/contact' },
];

export default navLinks;

