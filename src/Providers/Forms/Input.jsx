export default function Input({
  value,
  onChange,
  type,
  inputName,
  id,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label className="block text-neutral-400 text-xs" htmlFor={id}>
        {inputName}
      </label>
      <input
        className="w-full py-2 px-0.5 border-b-2 border-neutral-200 placeholder:text-neutral-800 outline-none"
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
