import React from "react";

const FormField = ({ label, placeholder, type }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold">{label}</label>
      <input
        className="p-2 outline-none border border-gray-300"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
