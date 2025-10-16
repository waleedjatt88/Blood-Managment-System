import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';

const PageHeader = styled.div`
  background-color: #f0f0f0; // Light background for the banner
  padding: 40px 5%;
  text-align: center;
  border-bottom: 1px solid #ddd;
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

const bloodStockData = [
  { hospital: 'City General Hospital', contact_number: '042-1234567', blood_group: 'A+', city: 'Lahore', quantity: '2 units', cost: 'Free' },
  { hospital: 'Jinnah Hospital', contact_number: '021-9876543', blood_group: 'B-', city: 'Karachi', quantity: '5 units', cost: 'Paid' },
  { hospital: 'Shifa International', contact_number: '051-1112223', blood_group: 'O+', city: 'Islamabad', quantity: '3 units', cost: 'Free' },
  { hospital: 'Services Hospital', contact_number: '042-4445556', blood_group: 'AB+', city: 'Lahore', quantity: '1 unit', cost: 'Free' },
];

const tableHeaders = ['Hospital', 'Contact Number', 'Blood Group', 'City', 'Quantity', 'Cost'];

const AvailableBloodPage = () => {
  return (
    <>
      <PageHeader>
        <h1>Available Blood Stock</h1>
        <p>Find the blood you need from our network of hospitals.</p>
      </PageHeader>

      <PageContent>
        <FilterContainer>
          <Input type="text" placeholder="Search by City..." style={{ flex: 2 }} />
          <select style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <Button style={{ flex: 1 }}>Search</Button>
        </FilterContainer>

        <Table headers={tableHeaders} data={bloodStockData} />
      </PageContent>
    </>
  );
};

export default AvailableBloodPage;