import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1300px; /* Max width, is se zyada nahi phailega */
  margin: 0 auto; /* Center mein rakhega */
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 80px;
  display: flex;
  justify-content: center; /* NavContainer ko center karega */
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  /* Chotay mobile par padding kam kar dein */
  @media screen and (max-width: 480px) {
    padding: 0 16px; 
  }
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

  /* Chotay mobile par font size kam kar dein */
  @media screen and (max-width: 480px) {
    img {
      height: 40px; /* Logo thora chota */
    }
    span {
      font-size: 1.2rem; 
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    z-index: 10; /* Taake yeh menu ke upar rahe */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  gap: 1.5rem; 

  /* Bari screens par gap barha dein */
  @media screen and (min-width: 1200px) {
    gap: 2rem;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center; /* Items ko vertically center kar dein */
    width: 100%;
    height: 100vh; /* Poori screen ki height le le */
    position: fixed; /* Absolute ki jagah fixed taake scroll na ho */
    top: 0;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.secondary};
    gap: 0; /* Mobile par gap reset kar dein */
  }
`;

export const NavItem = styled.li`
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
    content: "";
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

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1.5rem 0;
    font-size: 1.2rem;
    &::after {
      display: none; 
    }
  }

  /* Yeh class mobile par button dikhane ke liye hai */
  &.mobile-only-btn {
    display: none; 
    @media screen and (max-width: 960px) {
      display: block;
      padding-top: 2rem;
    }
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none; 
  }
`;