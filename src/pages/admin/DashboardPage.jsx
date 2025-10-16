import styled from 'styled-components';
import { FaUsers, FaTint, FaPaperPlane } from 'react-icons/fa';

const PageContent = styled.div` padding: 40px 5%; `;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;
const StatCard = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  svg { font-size: 3rem; color: ${({ theme }) => theme.colors.primary}; margin-right: 20px; }
  h2 { font-size: 2.5rem; }
  p { color: #666; }
`;

const DashboardPage = () => {
  return (
    <PageContent>
      <h1>Admin Dashboard</h1>
      <StatsGrid>
        <StatCard> <FaUsers /> <div> <h2>150</h2> <p>Total Users</p> </div> </StatCard>
        <StatCard> <FaTint /> <div> <h2>50</h2> <p>Donation Records</p> </div> </StatCard>
        <StatCard> <FaPaperPlane /> <div> <h2>35</h2> <p>Blood Requests</p> </div> </StatCard>
      </StatsGrid>
    </PageContent>
  );
};
export default DashboardPage;