import styled from 'styled-components';
import Button from '../components/Button/Button';
import heroImage from '../assets/your-banner-image.png';
import missionBanner from '../assets/mission-banner.png';

const PageContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: flex-start;
  padding: 0 5%;
`;

const HeroContent = styled.div`
  padding-top: 390px; 
`;

const MissionSection = styled.section`
  position: relative;
  line-height: 0; 
`;

const MissionImage = styled.img`
  width: 100%;
  height: auto;
`;

const MissionContent = styled.div`
  position: absolute;
  bottom: 25%;
  left: 14%;
  display: flex;
  gap: 16px;
`;


const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Button>Donate Blood</Button>
        </HeroContent>
      </HeroSection>
      
      <MissionSection>
        <MissionImage src={missionBanner} alt="Our Mission" />
        <MissionContent>
          <Button>Join Us</Button>
          <Button variant="secondary">Learn More</Button>
        </MissionContent>
      </MissionSection>
    </PageContainer>
  );
};

export default HomePage;