import styled from 'styled-components';
import Table from '../../components/Table/Table';

const PageContent = styled.div` 
  padding: 40px 5%; 
  max-width: 1200px; 
  margin: 0 auto; 
`;

const tableHeaders = ['Patient Name', 'Contact No', 'City', 'Blood Group', 'Hospital'];

const requestsData = [
  { patient_name: 'Ahmed Raza', contact_no: '0311-333', city: 'Islamabad', blood_group: 'B+', hospital: 'Shifa International' },
  { patient_name: 'Sana Batool', contact_no: '0322-444', city: 'Lahore', blood_group: 'A-', hospital: 'Services Hospital' },
  { patient_name: 'Usman Ghani', contact_no: '0345-555', city: 'Karachi', blood_group: 'O+', hospital: 'Aga Khan' },
];

const RequestsPage = () => {
  return (
    <PageContent>
      <h1>Blood Request Records</h1>
      <Table headers={tableHeaders} data={requestsData} />
    </PageContent>
  );
};

export default RequestsPage;