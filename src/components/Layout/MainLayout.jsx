import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styled from 'styled-components'; 

const MainContent = styled.main`
  flex: 1 0 auto;
`;

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default MainLayout;