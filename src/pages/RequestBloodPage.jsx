import { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { createRequest } from '../services/api';
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

const RequestBloodPage = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    contact: '',
    city: '',
    hospital: '',
    bloodGroup: '',
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

    if (!formData.patientName || !formData.contact || !formData.city || !formData.hospital || !formData.bloodGroup || !formData.quantity) {
      toast.error("Please fill all the required fields.");
      return;
    }

    try {
      const response = await createRequest(formData);
      toast.success(response.data.message || "Request submitted successfully!");
      setFormData({
        patientName: '', contact: '', city: '', hospital: '', bloodGroup: '', quantity: ''
      });

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit request.");
    }
  };

  return (
    <>
      <PageHeader>
        <h1>Need Blood? Make a Request</h1>
        <p>Fill out the form below, and we'll connect you with available donors.</p>
      </PageHeader>

      <PageContent>
        <FormContainer>
          <FormTitle>Blood Request Form</FormTitle>
          <FormGrid onSubmit={handleSubmit}>
              <FormGroup>
              <Label htmlFor="patientName">Patient's Full Name</Label>
              <Input type="text" id="patientName" placeholder="Enter patient's name" value={formData.patientName} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contact">Contact Number</Label>
              <Input type="tel" id="contact" placeholder="0300-1234567" value={formData.contact} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" placeholder="e.g., Karachi" value={formData.city} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hospital">Hospital Name</Label>
              <Select id="hospital" value={formData.hospital} onChange={handleChange}>
                <option value="">Select Hospital</option>
                <option value="Sheikh Zayed Hospital">Sheikh Zayed Hospital</option>
                <option value="THQ Hospital, Khanpur">THQ Hospital, Khanpur</option>
                <option value="DHQ Hospital, RYK">DHQ Hospital, RYK</option>
                <option value="City Medical Center">City Medical Center</option>
                <option value="Al-Khidmat Hospital">Al-Khidmat Hospital</option>
                <option value="Khanpur General Hospital">Khanpur General Hospital</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="bloodGroup">Required Blood Group</Label>
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
              <Label htmlFor="quantity">Quantity (Units)</Label>
              <Input type="number" id="quantity" placeholder="e.g., 2" value={formData.quantity} onChange={handleChange}/>
            </FormGroup>
            
            <FullWidthFormGroup>
              <Button type="submit" style={{ marginTop: '20px', width: '100%', fontSize: '18px' }}>Submit Request</Button>
            </FullWidthFormGroup>
          </FormGrid>
        </FormContainer>
      </PageContent>
    </>
  );
};

export default RequestBloodPage;