import { HiX } from "react-icons/hi";
import { HiMinus, HiOutlineCalculator, HiPlus } from "react-icons/hi2";
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
          {/* row 1 */}
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
        </tbody>
      </table>
      <div className="flex justify-between">
        <div className="mt-10">
          <button className="btn btn-ghost btn-xs tracking-wider uppercase text-xs flex items-center gap-2">
            <span> Calculate shipping</span> <HiOutlineCalculator />
          </button>
        </div>
        <div className="border-t-4 border-black w-96">
          <div className="mt-10">
            <div className="flex gap-4 items-center justify-center">
              <div className="text-sm text-neutral-500">Subtotal:</div>
              <div className="text-xl font-semibold">$99.99</div>
            </div>
            <label
              htmlFor="terms"
              className="flex items-center my-4 gap-1 justify-center">
              <input id="terms" type="checkbox" />{" "}
              <span className="text-sm text-neutral-400">
                I Agree to the terms and conditions
              </span>
            </label>
            <div className="flex justify-center">
              <button className="btn bg-[#fae8e5] btn-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
