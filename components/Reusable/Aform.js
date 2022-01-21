import React, { useState, useEffect } from "react";
import AformInput from "./AformInput";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import FormModal from "../../components/Reusable/FormModal";
export default function Aform(props) {
  const { fields, initialValues, req, title, cta, file, msg, wt } = props;
  const [body, setBody] = useState("");
  const [modal, setModal] = useState(null);

  const { formData, handleInputChange, handleTextareaChange, setFormData } =
    useForm({
      ...initialValues,
    });

  const { data, error } = useFetch(
    req.url,
    req.method,
    body,
    req.options,
    file
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.querySelector(".content-invalid")) {
      if (file) {
        const fData = new FormData();

        for (const name in formData) {
          fData.append(name, formData[name]);
        }
        setBody(fData);
      } else {
        if (wt && wt === "E-ORDER-USER") {
          setBody({ buyer: formData });
        } else {
          console.log(e.target.querySelector(".content-invalid"));
          setBody(formData);
        }
      }
    }
  };

  // Dokolku korisnikot se logira
  useEffect(() => {
    if (props.login && data) {
      // setUser(user)
    }
  }, [data, error]);

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data?.status == "success") {
        console.log(data);
        setModal({ msg: "Успешно", status: "success" });
        setBody("");
      } else if (data?.status == "fail" || "error") {
        setModal({ msg: data.message, status: "fail" });
        setBody("");
      }
    }
    if (error) {
      setModal({ msg: error.message, status: "fail" });
    }
  }, [data, error]);

  return (
    <div className="aform">
      {modal && <FormModal setModal={setModal} {...modal}></FormModal>}
      <h3 className="section-heading aform__heading">{title}</h3>
      <form
        // encType="multipart/form-data"
        className="aform__form"
        onSubmit={handleSubmit}
      >
        {fields.map((field, i) => {
          const { name, label } = field;
          return (
            <AformInput
              key={i}
              handleInputChange={handleInputChange}
              handleTextareaChange={handleTextareaChange}
              {...field}
              value={`${name !== "image" ? formData[name] : ""}`}
              setFormData={setFormData}
              formData={formData}
              req={req}
            ></AformInput>
          );
        })}
        <button className="basic-cta basic-cta-round" type="submit">
          {cta}
        </button>
      </form>
    </div>
  );
}
