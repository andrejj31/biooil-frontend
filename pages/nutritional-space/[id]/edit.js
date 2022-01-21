import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { author, title, slug, position, image, content } = props.data;
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
    title,
    author,
    position,
    image,
    content,
    slug,
  };
  return (
    <>
      <Head>
        <title>Измени го продуктот</title>
      </Head>
      <Aform
        fields={fields}
        title={"Измени го блогот"}
        initialValues={initialValues}
        req={{
          url: `blogs/${slug}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        file={true}
        cta={"Измени го блогот"}
      ></Aform>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}blogs`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((blog) => ({
    params: {
      id: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}blogs/${id}`);
  const blog = await res.json();
  return {
    props: blog.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
