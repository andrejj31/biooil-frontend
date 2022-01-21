import { useState } from "react";

export default function useForm(initialState, onSubmit) {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      if (e.target.closest("[contenteditable]")) {
        console.log(e.target.innerHTML);
        if (e.target.innerText.trim().length === 0) {
          e.target.classList.add("content-invalid");
        } else {
          e.target.classList.remove("content-invalid");
        }

        setFormData({
          ...formData,
          [e.target.dataset["name"]]: e.target.innerHTML,
        });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    setFormData,
    formData,
  };
}
