import React, { useState } from "react";
import TextEditor from "./TextEditor";

export default function AformInput({
  name,
  value = "",
  label,
  type = "text",
  handleInputChange,
  placeholder = "",
  setFormData,
  formData,
  req,
  textArea = false,
  maxLength = 5000,
  textEditor = false,
}) {
  const [val, setVal] = useState("");
  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });

    setVal(e.target.value);
  };

  const handleChange = type !== "file" ? handleInputChange : handlePhotoChange;
  return (
    <div className="form-group aform__group">
      <label className="form-label aform__label" htmlFor={name}>
        {label}
      </label>
      {!textArea && !textEditor && (
        <input
          // {req.method === 'PATCH' ? 'required': ''}
          placeholder={placeholder}
          className="form-input aform__input"
          type={type}
          name={name}
          value={`${type !== "file" ? value : val}`}
          onChange={handleChange}
        />
      )}
      {textArea && !textEditor && (
        <textarea
          required
          className="form-textarea aform__textarea"
          name={name}
          placeholder={placeholder}
          maxLength={maxLength}
          resize="vertical"
          onChange={handleInputChange}
        ></textarea>
      )}
      {textEditor && !textArea && (
        <TextEditor
          required
          name={name}
          value={value}
          placeholder={placeholder}
          handleInputChange={handleInputChange}
        ></TextEditor>
      )}
    </div>
  );
}
