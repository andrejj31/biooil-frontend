import React from "react";
import BlogPost from "../../../components/Blogs/BlogPost";
import { NextSeo } from "next-seo";

export default function Blog(props) {
  const { author, title, slug, position, image, content } = props.data || {};
  return (
    <>
      <NextSeo
        title={`BioOil - ${title}`}
        description={title}
        openGraph={{
          type: "article",
          url: `${process.env.NEXT_PUBLIC_SITE_LINK}/nutritional-space/${slug}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SERVER_IMAGES}/Blogs/${image}.jpg`,
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
          <BlogPost {...props.data}></BlogPost>
        </div>
      </section>
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
