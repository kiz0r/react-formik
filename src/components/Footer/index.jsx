import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import './Footer.sass';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/khomenkokyrylo/',
    icon: <FaLinkedin />,
  },
  { name: 'GitHub', link: 'https://github.com/kiz0r', icon: <FaGithub /> },
  {
    name: 'Telegram',
    link: 'https://t.me/khomenkodev',
    icon: <FaTelegramPlane />,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="socialLinks">
        {SOCIAL_LINKS.map(({ name, link, icon }) => (
          <li key={name}>
            <a href={link}>{icon}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
