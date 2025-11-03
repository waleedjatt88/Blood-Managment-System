import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';

import sheikhZayedImg from '../assets/hospitals/sheikh-zayed.jpg';
import RykhosptalImg from "../assets/hospitals/rykhospital.jpg";
import millatSadiqabadImg from '../assets/hospitals/millathospital.jpg';
import thqKhanpurImg from '../assets/hospitals/thq-khanpur.jpg';
import hubspokemodelhospitalImg from '../assets/hospitals/hub&spoke hospital.jpg';
import thqHospitalImg from '../assets/hospitals/thq hospital.jpg';

const PageHeader = styled.div`
  background-color: #f0f0f0;
  padding: 40px 5%;
  text-align: center;
`;

const PageContent = styled.div`
  padding: 40px 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const HospitalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const HospitalCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover; 
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const HospitalName = styled.h3`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const HospitalInfo = styled.p`
  margin-bottom: 20px;
  color: #666;
`;

const hospitalsData = [
  { 
    id: 1, 
    name: 'Sheikh Zayed Hospital', 
    city: 'Rahim Yar Khan', 
    contact: '068-9230111',
    imageUrl: sheikhZayedImg
  },
  { 
    id: 2, 
    name: 'RYK Hospital', 
    city: 'Rahim Yar Khan', 
    contact: '068-9239000',
    imageUrl: RykhosptalImg
  },

  { 
    id: 3, 
    name: 'Millat Hospital', 
    city: 'Sadiqabad', 
    contact: '068-5801234',
    imageUrl: millatSadiqabadImg
  },
  { 
    id: 4, 
    name: 'THQ Hospital', 
    city: 'Khanpur', 
    contact: '068-5551234',
    imageUrl: thqKhanpurImg
  },

  { 
    id: 5, 
    name: 'Hub & Spoke Model Hospital', 
    city: 'Zahir Pir', 
    contact: '0300-1122334',
    imageUrl: hubspokemodelhospitalImg
  },
  
  { 
    id: 6, 
    name: 'THQ Hospital', 
    city: 'Liaqatpur', 
    contact: '0311-5566778',
    imageUrl: thqHospitalImg
  },
];
const HospitalsPage = () => {
  return (
    <>
      <PageHeader>
        <h1>Our Partner Hospitals</h1>
        <p>Find trusted hospitals and donation centers in our network.</p>
      </PageHeader>

      <PageContent>
        <FilterContainer>
          <Input type="text" placeholder="Search by hospital name..." style={{ flex: 2 }} />
          <Select style={{ flex: 1 }}>
            <option value="">All Cities</option>
            <option value="Lahore">Rahim Yar Khan</option>
            <option value="Karachi">KhanPur</option>
            <option value="Islamabad">Sadiqabad</option>
            <option value="Islamabad">Liaqatpur</option>
            <option value="Islamabad">Zahir Pir</option>
            


          </Select>
          <Button style={{ flex: 1 }}>Search</Button>
        </FilterContainer>

        <HospitalsGrid>
          {hospitalsData.map((hospital) => (
            <HospitalCard key={hospital.id}>
              <CardImage src={hospital.imageUrl} alt={hospital.name} />
              
              <CardContent>
                <HospitalName>{hospital.name}</HospitalName>
                <HospitalInfo>
                  <strong>City:</strong> {hospital.city}<br />
                  <strong>Contact:</strong> {hospital.contact}
                </HospitalInfo>
                <Button style={{ marginTop: 'auto' }}>View Details</Button>
              </CardContent>
            </HospitalCard>
          ))}
        </HospitalsGrid>
      </PageContent>
    </>
  );
};

export default HospitalsPage;