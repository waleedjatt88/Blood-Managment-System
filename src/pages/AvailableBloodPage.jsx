import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';
import Select from '../components/Select/Select'; 
import { toast } from 'react-toastify';
import { getDonations } from '../services/api';

const PageHeader = styled.div`
  background-color: #f0f0f0;
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


const AvailableBloodPage = () => {
  const [allDonations, setAllDonations] = useState([]); 
  const [filteredDonations, setFilteredDonations] = useState([]); 
  const [cityFilter, setCityFilter] = useState('');
  const [bloodGroupFilter, setBloodGroupFilter] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await getDonations();
        setAllDonations(response.data.data);
        setFilteredDonations(response.data.data); 
        setLoading(false);
      } catch (error) {
        toast.error("Failed to fetch donation records.");
        setLoading(false);
      }
    };

    fetchDonations();
  }, []); 

  useEffect(() => {
    let filteredData = allDonations;

    if (cityFilter) {
      filteredData = filteredData.filter(donation =>
        donation.city.toLowerCase().includes(cityFilter.toLowerCase())
      );
    }

    if (bloodGroupFilter) {
      filteredData = filteredData.filter(donation =>
        donation.bloodGroup === bloodGroupFilter
      );
    }

    setFilteredDonations(filteredData);
  }, [cityFilter, bloodGroupFilter, allDonations]);


  const tableHeaders = ['Donor Name', 'Hospital', 'Contact Number', 'Blood Group', 'City', 'Quantity', 'Cost'];
  const tableData = filteredDonations.map(d => ({
    donor_name: d.donorName,
    hospital: d.hospital,
    contact_number: d.contactNumber,
    blood_group: d.bloodGroup,
    city: d.city,
    quantity: `${d.quantity} unit(s)`,
    cost: d.cost
  }));

  return (
    <>
      <PageHeader>
        <h1>Available Blood Stock</h1>
        <p>Find the blood you need from our network of donors and hospitals.</p>
      </PageHeader>

      <PageContent>
        <FilterContainer>
          <Input 
            type="text" 
            placeholder="Search by City..." 
            style={{ flex: 2 }} 
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <Select 
            style={{ flex: 1 }}
            value={bloodGroupFilter}
            onChange={(e) => setBloodGroupFilter(e.target.value)}
          >
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Select>
        </FilterContainer>
        
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <Table headers={tableHeaders} data={tableData} />
        )}
      </PageContent>
    </>
  );
};

export default AvailableBloodPage;