import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  background-color: white; // Ensures it looks right on all backgrounds

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;