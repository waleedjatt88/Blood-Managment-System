import { useState } from 'react'; 
import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';
import { toast } from 'react-toastify';
import { createDonation } from '../services/api';



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
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    bloodGroup: '',
    hospital: '',
    cost: 'Free',
    quantity: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.city || !formData.bloodGroup || !formData.hospital || !formData.quantity) {
      toast.error("Please fill all the required fields.");
      return;
    }

    try {
      const response = await createDonation(formData);
      toast.success(response.data.message || "Donation record submitted successfully!");
      
      setFormData({
        name: '', contact: '', city: '', bloodGroup: '', hospital: '', cost: 'Free', quantity: ''
      });

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit donation record.");
    }
  };

  return (
    <>
      <PageHeader>
        <h1>Become a Donor Today</h1>
        <p>A single donation can save up to three lives. Your help is invaluable.</p>
      </PageHeader>

      <PageContent>
        <FormContainer>
          <FormTitle>Donor Registration Form</FormTitle>
          <FormGrid onSubmit={handleSubmit}>
            
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contact">Contact Number</Label>
              <Input type="tel" id="contact" placeholder="0300-1234567" value={formData.contact} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="e.g., Lahore" value={formData.city} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="bloodGroup">Blood Group</Label>
              <Select id="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
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
              <Select id="hospital" value={formData.hospital} onChange={handleChange}>
                <option value="">Select Hospital</option>
                <option value="Sheikh Zayed Hospital">Sheikh Zayed Hospital</option>
                <option value="THQ Hospital, Khanpur">THQ Hospital, Khanpur</option>
                <option value="DHQ Hospital, RYK">DHQ Hospital, RYK</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="cost">Cost</Label>
              <Select id="cost" value={formData.cost} onChange={handleChange}>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </Select>
            </FormGroup>
            
            <FullWidthFormGroup>
                <Label htmlFor="quantity">Quantity (Units/Bags)</Label>
                <Input type="number" id="quantity" placeholder="e.g., 1" value={formData.quantity} onChange={handleChange} />
            </FullWidthFormGroup>

            <FullWidthFormGroup>
              <Button type="submit" style={{ marginTop: '20px', width: '100%', fontSize: '18px' }}>Register as Donor</Button>
            </FullWidthFormGroup>
          </FormGrid>
        </FormContainer>
      </PageContent>
    </>
  );
};

export default DonateBloodPage;

