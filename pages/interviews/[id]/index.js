import React from "react";
import InterviewPost from "../../../components/Interviews/InterviewPost";
import { NextSeo } from "next-seo";

export default function Interview(props) {
  const { source, title, slug, link, image, content } = props.data || {};
  return (
    <>
      <NextSeo
        title={`BioOil - ${source}`}
        description={title}
        openGraph={{
          type: "article",
          url: `${process.env.NEXT_PUBLIC_SITE_LINK}/interviews/${slug}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SERVER_IMAGES}/Interviews/${image}.jpg`,
              width: 800,
              height: 600,
              alt: image,
              type: "image/jpg",
            },
          ],
        }}
      />
      <section className="blog">
        <div className="center-content">
          <InterviewPost {...props.data}></InterviewPost>
        </div>
      </section>
      );
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}interviews`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((interview) => ({
    params: {
      id: interview.slug,
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
