import styled from 'styled-components';
import Table from '../../components/Table/Table';

const PageContent = styled.div` padding: 40px 5%; max-width: 1200px; margin: 0 auto; `;
const tableHeaders = ['Name', 'Contact No', 'City', 'Blood Group', 'Hospital'];
const donationsData = [
  { name: 'Ali Khan', contact_no: '0300-111', city: 'Lahore', blood_group: 'A+', hospital: 'City General' },
  { name: 'Fatima Jilani', contact_no: '0333-222', city: 'Karachi', blood_group: 'O-', hospital: 'Jinnah Hospital' },
];

const DonationsPage = () => {
  return (
    <PageContent>
      <h1>Donation Records</h1>
      <Table headers={tableHeaders} data={donationsData} />
    </PageContent>
  );
};
export default DonationsPage;