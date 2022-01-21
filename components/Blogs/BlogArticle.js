import React from "react";
import Link from "next/link";
import Image from "next/image";
import myLoader from "../../utils/loader";

export default function BlogArticle({ author, title, slug, position, image }) {
  const url = `/Blogs/${image}.jpg`;
  const loaderUrl = myLoader(url);
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
      {/* <img className="article__img" src="/Home/About/about_3.jpg" alt="" /> */}
      <div className="article__content">
        <div className="article__details">
          <span>АВТОР: {author}</span>
          <h3>{title}</h3>
          <Link href={`/nutritional-space/${slug}`}>
            <a className="basic-cta cta product__cta">Види го целиот прилог</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
