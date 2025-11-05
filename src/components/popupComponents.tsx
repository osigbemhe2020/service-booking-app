type textAreaProps = {
  htmlFor: string;
  text: string;
  placeholder: string;
};

type InputFieldProps = {
  type: string;
  id: string;
  htmlFor: string;
  text: string;
  placeholder: string;
  required: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxProps = {
  text: string;
  htmlFor: string;
  value?: string;
};

export const Heading = ({ text }: { text: string }) => {
  return <p className=" text-secondary50 capitalize">{text}</p>;
};

export const SubHeading = ({ title }: { title: string }) => {
  return <p className="text-secondary300 text-sm">{title}</p>;
}

export const Textarea = ({ htmlFor, text, placeholder }: textAreaProps) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-secondary50"
      >
        {text}
      </label>
      <textarea
        id={htmlFor}
        rows={4}
        className="block p-2.5 w-full text-sm text-secondary50 bg-secondary900 rounded-lg border border-gray-300"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export const InputField = ({
  type,
  id,
  htmlFor,
  text,
  placeholder,
  required,
  value,
  onChange
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
       value={value}
       onChange={onChange}
        type={type}
        id={id}
        className="bg-secondary550 border border-white text-secondary300 text-sm rounded-lg focus:ring-secondary400 focus:border-secondary400 block w-full px-3 py-2 "
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export const Checkbox = ({ text, htmlFor, value }: CheckboxProps) => {
  return (
    <div className="flex items-center">
      <input
        id={htmlFor}
        type="checkbox"
        value={value}
        className="w-4 h-4 text-secondary50 bg-secondary550 border-secondary300 rounded-sm focus:ring-secondary300"
      />
      <label
        htmlFor={htmlFor}
        className="w-full py-1 ms-2 text-sm font-medium text-label"
      >
        {text}
      </label>
    </div>
  );
};
