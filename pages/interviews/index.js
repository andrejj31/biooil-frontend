import React, { Fragment } from "react";
import Head from "next/head";
import Interview from "../../components/Interviews/Interview";
import Paggination from "../../components/Reusable/Paggination";

export default function Interviews(props) {
  const { data } = props;

  const itemsPerPage = 8;
  const pageCount = Math.ceil(props.totalCount / itemsPerPage);
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
        <Paggination pageCount={pageCount}></Paggination>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.resolvedUrl.split("?")[1];
  const resp = await fetch(
    `${process.env.SERVER_API}interviews?${query}&limit=8`
  );
  const data = await resp.json();

  return {
    props: data,
  };
}
