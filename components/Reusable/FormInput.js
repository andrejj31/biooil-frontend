import React from "react";

export default function FormInput({
  name,
  type = "text",
  placeholder = "",
  label,
  handleInputChange,
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        required
        className="form-input"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}
