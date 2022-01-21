import React, { Fragment } from "react";
import Head from "next/head";
import Interview from "../../components/Interviews/Interview";

export default function Interviews(props) {
  const { data } = props;

  return (
    <>
      <Head>
        <title>BioOil - Интервјуа</title>
      </Head>
      <section className="interviews">
        <div className="interviews__content center-content">
          {data.map((interview, i) => {
            return <Interview key={i} {...interview} />;
          })}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch(`${process.env.SERVER_API}interviews`);
  const data = await resp.json();

  return {
    props: data,
    revalidate: 1,
  };
}
