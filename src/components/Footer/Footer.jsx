import { FooterContainer, FooterContent, FooterSection, FooterLogo, FooterBottom } from './Footer.styles';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <img src={logo} alt="Logo" />
            <h3>Smart Blood Bank</h3>
          </FooterLogo>
          <p>Connecting donors with recipients to save lives.</p>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Contact Info</h4>
          <p>123 Health St, Wellness City</p>
          <p>Email: contact@smartbloodbank.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Smart Blood Bank. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;