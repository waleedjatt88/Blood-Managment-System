import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: auto; 
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  text-align: left;
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const TableCell = styled.td`
  padding: 12px 15px;
`;