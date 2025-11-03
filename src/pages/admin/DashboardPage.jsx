import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { FaUsers, FaTint, FaPaperPlane } from 'react-icons/fa';
import { getDashboardStats } from '../../services/api';

const PageContent = styled.div` 
  padding: 40px 5%; 
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const StatCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }

  svg { 
    font-size: 3rem; 
    color: ${({ theme }) => theme.colors.primary}; 
    margin-right: 20px; 
    flex-shrink: 0;
  }
  
  div {
    line-height: 1.4;
  }

  h2 { 
    font-size: 2.5rem; 
    margin: 0;
  }

  p { 
    color: #666; 
    margin: 0;
  }
`;


const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDonations: 0,
    totalRequests: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardStats();
        setStats(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load dashboard data.");
        setLoading(false);
      }
    };

    fetchStats();
  }, []); 

  return (
    <PageContent>
      <DashboardHeader>Admin Dashboard</DashboardHeader>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading stats...</p>
      ) : (
        <StatsGrid>
          <StatCard> <FaUsers /> <div> <h2>{stats.totalUsers}</h2> <p>Total Users</p> </div> </StatCard>
          <StatCard> <FaTint /> <div> <h2>{stats.totalDonations}</h2> <p>Donation Records</p> </div> </StatCard>
          <StatCard> <FaPaperPlane /> <div> <h2>{stats.totalRequests}</h2> <p>Blood Requests</p> </div> </StatCard>
        </StatsGrid>
      )}
    </PageContent>
  );
};
export default DashboardPage;