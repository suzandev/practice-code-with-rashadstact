import { HiMinus, HiPlus, HiX } from "react-icons/hi";

export default function TableRow() {
  return (
    <tr className="text-center">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=2065&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Blue Heaven Headphone</div>
            <div className="text-sm opacity-50 text-start">
              <span>#76fuis9f87798</span>
              <br />
              <span>Color: Blue</span>
            </div>
          </div>
        </div>
      </td>
      <td>$99.99</td>
      <td className="flex items-center justify-center my-6">
        <button className="text-sm">
          <HiMinus />
        </button>

        <span className="w-6 text-center text-sm mx-4">03</span>
        <button className="text-sm">
          <HiPlus />
        </button>
      </td>
      <td>$99.99</td>
      <th>
        <button className="btn btn-ghost btn-xs">
          <HiX />
        </button>
      </th>
    </tr>
  );
}
