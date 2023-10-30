import { numberWithCommas } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
const PriceTable = ({ totalPrice = 0, payableNow = 0 }) => {
  return (
    <Table className="mt-3">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Total</TableCell>
            <TableCell className="text-right">{`₹${numberWithCommas(totalPrice)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Payable Now</TableCell>
            <TableCell className="text-right">{`₹${numberWithCommas(payableNow)}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
};

export default PriceTable;