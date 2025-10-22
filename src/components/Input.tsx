type InputFieldProps = {
  type: string;
  id: string;
  htmlFor: string;
  text: string;
  placeholder: string;
  required: boolean;
};

const InputField = ({
  type,
  id,
  htmlFor,
  text,
  placeholder,
  required,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-secondary50 "
      >
        {text}
      </label>
      <input
        type={type}
        id={id}
        className="bg-secondary550 border border-white text-secondary300 text-sm rounded-lg focus:ring-secondary400 focus:border-secondary400 block w-full px-3 py-2 "
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
