import { HiOutlineCalculator } from "react-icons/hi";

export default function Checkout() {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="mt-10 order-2 md:order-1 mb-4 w-full md:w-auto">
        <button className="btn btn-ghost btn-xs tracking-wider uppercase text-xs flex items-center gap-2 w-full">
          <span> Calculate shipping</span> <HiOutlineCalculator />
        </button>
      </div>
      <div className="border-t-4 border-black w-full md:w-96 order-1 md:order-2">
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
  );
}
