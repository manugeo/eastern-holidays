import { Table, TableBody, TableCell, TableRow } from "./ui/table";
const PriceTable = () => {
  return (
    <Table className="mt-3">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Total</TableCell>
            <TableCell className="text-right">₹10,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Payable Now</TableCell>
            <TableCell className="text-right">₹2,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};

export default PriceTable;