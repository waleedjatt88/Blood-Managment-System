import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const PageHeader = styled.div`
  background-color: #f0f0f0;
  padding: 40px 5%;
  text-align: center;
`;

const PageContent = styled.div`
  padding: 50px 5%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContactInfoColumn = styled.div`
  flex: 1;
`;

const FormColumn = styled.div`
  flex: 1.5; 
`;

const ContactImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 30px;
  object-fit: cover;
  height: 250px;
`;

const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;

  svg { // Icon styling
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 15px;
    font-size: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px;
  
  a {
    color: #333;
    font-size: 2rem;
    margin-right: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Textarea = styled.textarea`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  min-height: 150px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;


const ContactUsPage = () => {
  return (
    <>
      <PageHeader>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
      </PageHeader>

      <PageContent>
        <ContactInfoColumn>
          <ContactImage 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80" 
            alt="Community and support" 
          />
          <h3>Contact Information</h3>
          <p style={{ margin: '15px 0' }}>Feel free to contact us via the details below or fill out the form, and we will get back to you as soon as possible.</p>
          
          <InfoBlock>
            <FaMapMarkerAlt />
            <span>123 Health St, Wellness City, Pakistan</span>
          </InfoBlock>
          <InfoBlock>
            <FaPhoneAlt />
            <span>(123) 456-7890</span>
          </InfoBlock>
          <InfoBlock>
            <FaEnvelope />
            <span>contact@smartbloodbank.com</span>
          </InfoBlock>

          <SocialIcons>
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
            <a href="#" target="_blank"><FaInstagram /></a>
          </SocialIcons>

        </ContactInfoColumn>

        <FormColumn>
          <h3>Get in Touch</h3>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Subject" required />
            <Textarea placeholder="Your Message" required></Textarea>
            <Button type="submit">Send Message</Button>
          </Form>
        </FormColumn>
      </PageContent>
    </>
  );
};

export default ContactUsPage;