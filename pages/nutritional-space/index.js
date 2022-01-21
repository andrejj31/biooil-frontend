import React from "react";
import BlogArticle from "../../components/Blogs/BlogArticle";
import Head from "next/head";
import Link from "next/link";

export default function NutritionalSpace(props) {
  const { data } = props;
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
      </section>
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch(`${process.env.SERVER_API}blogs`);
  const data = await resp.json();

  return {
    props: data,
    revalidate: 1,
  };
}
