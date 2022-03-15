import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { price, title, slug, quan, image, pridobivki } = props.data;
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
      name: "price",
      label: "Цена",
    },
    {
      name: "quan",
      label: "Количина на продуктот",
    },
    {
      name: "image",
      label: "Фотографија од продуктот",
      type: "file",
    },
    {
      name: "pridobivki",
      label: "Содржина",
      textEditor: true,
    },
  ];

  const initialValues = {
    title,
    price,
    quan,
    image,
    pridobivki,
    slug,
  };
  return (
    <>
      <Head>
        <title>Измени го продуктот</title>
      </Head>
      <Aform
        fields={fields}
        title={"Измени го продуктот"}
        initialValues={initialValues}
        req={{
          url: `products/${slug}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        file={true}
        cta={"Измени го продуктот"}
      ></Aform>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}products`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((product) => ({
    params: {
      id: product.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}products/${id}`);
  const product = await res.json();
  return {
    props: product.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
