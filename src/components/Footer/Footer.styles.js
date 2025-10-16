import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #222; // Dark background for footer
  color: #fff; // Default text color set to white
  padding: ${({ theme }) => theme.spacing.large} 5%;
   flex-shrink: 0;

`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px; // Increased gap for better spacing
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 220px;
  h3, h4 {
    color: #fff; 
    margin-bottom: 16px;
  }

  p {
    color: #ccc; 
    line-height: 1.6;
  }

  ul {
    list-style: none; 
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary}; 
    }
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid #444;
  padding-top: ${({ theme }) => theme.spacing.medium};
  color: #aaa; 
`;