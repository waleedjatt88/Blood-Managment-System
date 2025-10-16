import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 2%; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  font-weight: bold;
  white-space: nowrap;
  
  position: relative;
  padding-bottom: 5px; 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &::after {
    content: ''; 
    position: absolute;
    width: 100%;
    height: 3px; 
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 0;
    left: 0;

    transform: scaleX(0);
    transform-origin: center; 
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;