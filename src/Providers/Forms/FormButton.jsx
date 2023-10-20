export default function FormButton({ title }) {
  return (
    <div className="flex items-center justify-between">
      <button className="btn bg-[#faebe8] w-full" type="submit">
        {title}
      </button>
    </div>
  );
}
