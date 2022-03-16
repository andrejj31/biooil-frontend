import React from "react";
import Link from "next/link";
import Image from "next/image";
import myLoader from "../../utils/loader";
import AdminOptions from "../Reusable/AdminOptions";
export default function BlogArticle({ author, title, slug, position, image }) {
  const url = `/Blogs/${image}.jpg`;
  const loaderUrl = myLoader(url);

  const adminButtons = [
    {
      title: "Измени го блогот",
      type: "edit",
      location: `/nutritional-space/${slug}/edit`,
    },
    {
      title: "Избриши го блогот",
      type: "delete",
      location: `blogs/${slug}`,
      req: {
        data: { delete: "true" },
        method: "DELETE",
        options: { credentials: "include" },
      },
    },
  ];

  return (
    <article className="article">
      <Image
        className="article__img"
        loader={() => myLoader(url)}
        src={loaderUrl}
        width="500"
        height="260"
        priority={true}
      ></Image>
      <div className="article__content">
        <div className="article__details">
          <span>АВТОР: {author}</span>
          <h3>{title}</h3>
          <Link href={`/nutritional-space/${slug}`}>
            <a className="btn btn-green product__cta">Види го целиот прилог</a>
          </Link>
          <AdminOptions btns={adminButtons}></AdminOptions>
        </div>
      </div>
    </article>
  );
}
