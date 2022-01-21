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
      name: "author",
      label: "Автор",
    },
    {
      name: "position",
      label: "Работно место",
    },
    {
      name: "image",
      label: "Насловна фотографија",
      type: "file",
    },
    {
      name: "content",
      label: "Содржина",
      textEditor: true,
    },
  ];

  const initialValues = {
    title: "",
    author: "",
    position: "",
    image: "",
    content: "",
    slug: "",
  };
  return (
    <>
      <Head>
        <title>BioOil - Додај блог</title>
      </Head>
      <Aform
        fields={fields}
        title={"Креирај блог"}
        initialValues={initialValues}
        file={true}
        req={{
          url: "blogs",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Додај блог"}
      ></Aform>
    </>
  );
}

Create.requireAuth = true;
