import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { title, manufacturer, link, image, price, quan } = props.data;
  const fields = [
    {
      name: "title",
      label: "Име на продуктот",
    },
    {
      name: "manufacturer",
      label: "Производител",
    },
    {
      name: "link",
      label: "Линк до производителот",
    },
    {
      name: "price",
      label: "Цена на продуктот во денари",
    },
    {
      name: "quan",
      label: "Количина на пакување",
    },
    {
      name: "image",
      label: "Слика од продуктот",
      type: "file",
    },
  ];

  const initialValues = {
    title,
    manufacturer,
    link,
    price,
    image,
    quan,
  };
  return (
    <>
      <Head>
        <title>BioOil - Измени ги податоците за продуктот</title>
      </Head>
      <Aform
        fields={fields}
        title={"Измени ги податоците за продуктот"}
        initialValues={initialValues}
        req={{
          url: `premium-products/${props.data._id}`,
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
  const res = await fetch(`${process.env.SERVER_API}premium-products`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((product) => ({
    params: {
      id: product._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}premium-products/${id}`);
  const product = await res.json();
  return {
    props: product.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
