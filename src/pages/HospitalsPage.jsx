import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';

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
    name: 'City General Hospital', 
    city: 'Lahore', 
    contact: '042-1234567',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&q=80' 
  },
  { 
    id: 2, 
    name: 'Jinnah Hospital', 
    city: 'Karachi', 
    contact: '021-9876543',
    imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 3, 
    name: 'Shifa International', 
    city: 'Islamabad', 
    contact: '051-1112223',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&q=80'
  },
  { 
    id: 4, 
    name: 'Services Hospital', 
    city: 'Lahore', 
    contact: '042-4445556',
    imageUrl: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  { 
    id: 5, 
    name: 'Aga Khan University Hospital', 
    city: 'Karachi', 
    contact: '021-34930051',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&q=80'
  },
  { 
    id: 6, 
    name: 'PIMS Hospital', 
    city: 'Islamabad', 
    contact: '051-9261170',
    imageUrl: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?w=500&q=80'
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
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
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