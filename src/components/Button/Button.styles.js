import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Default (Primary) Styles */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  /* Secondary Styles */
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `}
`;