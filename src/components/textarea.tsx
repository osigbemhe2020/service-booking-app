type textAreaProps = {
  htmlFor: string;
  text: string;
  placeholder: string;
};

const Textarea = ({ htmlFor, text, placeholder }: textAreaProps) => {
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
        className="block p-2.5 w-full text-sm text-secondary50 bg-secondary300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
