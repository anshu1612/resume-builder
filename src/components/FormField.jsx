import React from "react";

const FormField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  onFileChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold">{label}</label>
      <input
        name={name}
        value={type == "file" ? undefined : value}
        className="p-2 outline-none border border-gray-300"
        type={type}
        placeholder={placeholder}
        onChange={type == "file" ? onFileChange : onChange}
      />
    </div>
  );
};

export default FormField;
