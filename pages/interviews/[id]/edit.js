import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";
export default function Edit(props) {
  const { source, title, link, _id: id } = props.data;
  const fields = [
    {
      name: "source",
      label: "Извор",
    },
    {
      name: "title",
      label: "Наслов",
    },
    {
      name: "link",
      label: "Линк",
    },
  ];

  const initialValues = {
    source,
    title,
    link,
  };
  return (
    <>
      <Head>
        <title>BioOil - Измени ги податоците за интервјуто</title>
      </Head>
      <Aform
        fields={fields}
        title={"Измени го интервјуто"}
        initialValues={initialValues}
        req={{
          url: `interviews/${props.data._id}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        cta={"Измени го интервјуто"}
      ></Aform>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}interviews`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((interview) => ({
    params: {
      id: interview._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}interviews/${id}`);
  const interview = await res.json();
  return {
    props: interview.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
