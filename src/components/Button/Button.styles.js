import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 12px 24px; 
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `}

  @media (max-width: 1024px) {
    font-size: 15px;
    padding: 12px 24px; 
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 22px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 20px;
    width: 100%; /* full width on small phones */
  }
`;
