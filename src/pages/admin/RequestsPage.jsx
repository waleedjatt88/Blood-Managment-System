import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { getRequests } from '../../services/api';
import Table from '../../components/Table/Table';

const PageContent = styled.div` 
  padding: 40px 5%; 
  max-width: 1200px; 
  margin: 0 auto; 
`;

const PageHeader = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
`;


const RequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await getRequests();
        setRequests(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch blood requests.");
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const tableHeaders = ['Patient Name', 'Contact Number', 'City', 'Blood Group', 'Hospital', 'Quantity'];
  const tableData = requests.map(req => ({
    patient_name: req.patientName,
  contact_number: req.contactNumber, 
    city: req.city,
    blood_group: req.bloodGroup,
    hospital: req.hospital,
    quantity: req.quantity
  }));

  return (
    <PageContent>
      <PageHeader>Blood Request Records</PageHeader>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading requests...</p>
      ) : (
        <Table headers={tableHeaders} data={tableData} />
      )}
    </PageContent>
  );
};

export default RequestsPage;