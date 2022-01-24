import React from "react";
import BlogPost from "../../../components/Blogs/BlogPost";

export default function Blog(props) {
  const { author, title, slug, position, image, content } = props.data || {};
  return (
    <section className="blog">
      <div className="center-content">
        <BlogPost {...props.data}></BlogPost>
      </div>
    </section>
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
    fallback: true,
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
