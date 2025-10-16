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
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const FullWidthFormGroup = styled(FormGroup)`
  grid-column: 1 / -1; 
`;

const DonateBloodPage = () => {
  return (
    <>
      <PageHeader>
        <h1>Become a Donor Today</h1>
        <p>A single donation can save up to three lives. Your help is invaluable.</p>
      </PageHeader>

      <PageContent>
        <FormContainer>
          <FormTitle>Donor Registration Form</FormTitle>
          <FormGrid>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Enter your full name" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contact">Contact Number</Label>
              <Input type="tel" id="contact" placeholder="0300-1234567" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="e.g., Lahore" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="quantity">Quantity (ml)</Label>
              <Select id="quantity">
                <option value="250ml">250 ml</option>
                <option value="450ml">450 ml</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="blood-group">Blood Group</Label>
              <Select id="blood-group">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="hospital">Hospital / Donation Center</Label>
              <Select id="hospital">
                <option value="">Select Hospital</option>
                <option value="City General Hospital">City General Hospital</option>
                <option value="Jinnah Hospital">Jinnah Hospital</option>
                <option value="Shifa International">Shifa International</option>
              </Select>
            </FormGroup>

            <FullWidthFormGroup>
              <Button style={{ marginTop: '20px', width: '100%', fontSize: '18px' }}>Register as Donor</Button>
            </FullWidthFormGroup>
          </FormGrid>
        </FormContainer>
      </PageContent>
    </>
  );
};

export default DonateBloodPage;