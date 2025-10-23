import React from "react";
type CheckboxProps = {
  text: string;
  htmlFor: string;
  value?: string;
};

const Checkbox = ({ text, htmlFor, value }: CheckboxProps) => {
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

export default Checkbox;
