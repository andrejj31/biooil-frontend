import React from "react";
import BlogArticle from "../../components/Blogs/BlogArticle";
import Head from "next/head";
import Link from "next/link";
import Paggination from "../../components/Reusable/Paggination";

export default function NutritionalSpace(props) {
  const {
    data: { data },
  } = props;
  console.log(props);
  return (
    <>
      <Head>
        <title>BioOil - Нутритивно ќоше</title>
      </Head>
      <section className="articles">
        <div className="articles__content center-content">
          {data.map((blog, i) => {
            return <BlogArticle key={i} {...blog} />;
          })}
        </div>
        <Paggination pageCount={props.pageCount}></Paggination>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.resolvedUrl.split("?")[1];
  const itemsPerPage = 8;
  const resp = await fetch(
    `${process.env.SERVER_API}blogs?${query}&limit=${itemsPerPage}`
  );
  const data = await resp.json();
  const pageCount = Math.ceil(
    parseInt(data.totalCount) / parseInt(itemsPerPage)
  );
  return {
    props: { data, pageCount },
  };
}
