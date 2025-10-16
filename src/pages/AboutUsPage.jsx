import styled from 'styled-components';
import Button from '../components/Button/Button';
import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

const PageHeader = styled.div`
  background-color: #f0f0f0;
  padding: 40px 5%;
  text-align: center;
`;

const PageContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const InfoSection = styled.section`
  padding: 60px 5%;
  display: flex;
  align-items: center;
  gap: 50px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important; // Stack on mobile
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const SectionImage = styled.img`
  flex: 1;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const HowItWorksSection = styled.section`
  padding: 60px 5%;
  text-align: center;
  background-color: #fff;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  padding: 20px;
  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    margin: 15px 0;
  }
`;

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 60px 5%;
  text-align: center;
`;

const AboutUsPage = () => {
  return (
    <>
      <PageHeader>
        <h1>About Our Mission</h1>
        <p>Connecting lives through the gift of blood donation.</p>
      </PageHeader>
      
      <PageContent>
        <InfoSection>
          <TextContent>
            <SectionTitle>Who We Are</SectionTitle>
            <p>Smart Blood Bank is a digital platform dedicated to solving the problem of blood shortages in Pakistan. We connect voluntary blood donors with those in need, creating a network of heroes who are ready to save lives. Our mission is to make the process of finding and donating blood simple, transparent, and efficient for everyone.</p>
          </TextContent>
          <SectionImage src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Smiling blood donor" />
        </InfoSection>

        <HowItWorksSection>
          <SectionTitle>How It Works</SectionTitle>
          <StepsGrid>
            <StepCard>
              <FaUserPlus />
              <h3>Register as a Donor</h3>
              <p>Create a profile in minutes and become a part of our life-saving community.</p>
            </StepCard>
            <StepCard>
              <FaSearch />
              <h3>Find Blood</h3>
              <p>Search for available blood stock in your city and connect with donors or hospitals.</p>
            </StepCard>
            <StepCard>
              <FaHandshake />
              <h3>Save a Life</h3>
              <p>Connect seamlessly and facilitate a donation that can save a precious life.</p>
            </StepCard>
          </StepsGrid>
        </HowItWorksSection>

        <InfoSection>
          <TextContent>
            <SectionTitle>Our Vision for the Future</SectionTitle>
            <p>We envision a future where no life is lost due to the unavailability of blood. By leveraging technology, we aim to build the largest digital blood bank in the region, promoting a culture of regular, voluntary blood donation and ensuring that help is always just a few clicks away.</p>
          </TextContent>
 <SectionImage src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Senior doctor overseeing a modern hospital, representing vision." /> </InfoSection>
      </PageContent>

      <CTASection>
        <h2>Join Our Community of Heroes</h2>
        <p style={{ margin: '20px 0' }}>Whether you want to donate blood or need it for a loved one, you are in the right place.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button variant="secondary">Request Blood</Button>
          <Button>Become a Donor</Button>
        </div>
      </CTASection>
    </>
  );
};

export default AboutUsPage;