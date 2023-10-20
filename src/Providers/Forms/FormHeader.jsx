export default function FormHeader({ formTitle, formType }) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        {formType}
      </h2>

      <p className="text-center text-sm font-medium text-neutral-400 mb-8">
        {formTitle}
      </p>
    </>
  );
}
