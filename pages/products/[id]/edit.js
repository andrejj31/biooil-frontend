import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { title, description, price, quan, slug } = props.data;
  const fields = [
    [
      {
        name: "title",
        label: "Име на продуктот",
      },
      {
        name: "slug",
        label: "Slug",
      },
      {
        name: "quan",
        label: "Количина",
      },
      {
        name: "description",
        label: "Краток опис",
      },
    ],
  ];
  const initialValues = [
    {
      title,
      description,
      price,
      quan,
      slug,
    },
  ];
  return (
    <>
      <Head>
        <title>Измени го продуктот</title>
      </Head>
      <Aform
        fields={fields[0]}
        title={"Измени го продуктот"}
        initialValues={initialValues[0]}
        file={true}
        req={{
          url: `products/${props.slug}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
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
