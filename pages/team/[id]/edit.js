import React from "react";
import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { name, position, resume, image } = props.data;
  const fields = [
    {
      name: "name",
      label: "Име и презиме",
    },
    {
      name: "position",
      label: "Позиција",
    },
    {
      name: "resume",
      label: "Резиме",
    },
    {
      name: "image",
      label: "Слика од вработениот",
      type: "file",
    },
  ];

  const initialValues = {
    name,
    position,
    resume,
    image,
  };
  return (
    <>
      <Head>
        <title>BioOil - Измени ги податоците за вработениот</title>
      </Head>
      <Aform
        fields={fields}
        title={"Измени ги податоците на вработениот"}
        initialValues={initialValues}
        req={{
          url: `team/${props.data._id}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        file={true}
      ></Aform>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}team`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((team) => ({
    params: {
      id: team._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}team/${id}`);
  const employee = await res.json();
  return {
    props: employee.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
