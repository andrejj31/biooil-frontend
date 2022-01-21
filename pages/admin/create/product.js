import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Create() {
  // return <TextEditor></TextEditor>;
  const fields = [
    {
      name: "title",
      label: "Наслов",
    },
    {
      name: "slug",
      label: "Slug",
      placeholder: "naslov-naslov",
    },
    {
      name: "description",
      label: "Опис за продуктот",
      textArea: true,
    },
    {
      name: "price",
      label: "Цена",
      type: "number",
    },
    {
      name: "image",
      label: "Фотографија од продуктот",
      type: "file",
    },
    {
      name: "pridobivki",
      label: "Дополнителни информации",
      textEditor: true,
    },
  ];

  const initialValues = {
    title: "",
    slug: "",
    description: "",
    price: "",
    image: "",
    pridobivki: "",
  };
  return (
    <>
      <Head>
        <title>BioOil - Додај блог</title>
      </Head>
      <Aform
        fields={fields}
        title={"Креирај продукт"}
        initialValues={initialValues}
        file={true}
        req={{
          url: "products",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Додај продукт"}
      ></Aform>
    </>
  );
}

Create.requireAuth = true;
