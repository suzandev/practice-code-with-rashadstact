import TableRow from "./TableRow";
export default function CartTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase text-center">
            <th className="text-start">Products</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
