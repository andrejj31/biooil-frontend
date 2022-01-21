import React, { useState, useEffect } from "react";
import Aform from "../Reusable/Aform";

export default function Login() {
  const fields = [
    {
      name: "username",
      label: "Корисничко име",
      placeholder: "biooil.biooil",
    },
    {
      name: "password",
      label: "Лозинка",
      type: "password",
      placeholder: "●●●●●●●",
    },
  ];

  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <>
      <Aform
        fields={fields}
        title={"Администраторска најава"}
        initialValues={initialValues}
        req={{
          url: "login",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Најави се"}
        file={false}
        login={true}
      ></Aform>
    </>
  );
}
