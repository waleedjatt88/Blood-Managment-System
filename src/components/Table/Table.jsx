import { TableWrapper, StyledTable, TableHead, TableHeader, TableRow, TableCell } from './Table.styles';

const Table = ({ headers, data }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <TableHead>
          <tr>
            {headers.map((header) => (
              <TableHeader key={header}>{header}</TableHeader>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell key={header}>{row[header.toLowerCase().replace(' ', '_')] || 'N/A'}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;