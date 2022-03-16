import React from "react";
import Image from "next/image";
import myLoader from "../../utils/loader";
import FacebookShare from "../Reusable/FacebookShare";
export default function InterviewPost({ source, title, slug, image, content }) {
  const url = `/Interviews/${image}.jpg`;
  const loaderUrl = myLoader(url);
  return (
    <article className="blog__article">
      <FacebookShare url={`interviews/${slug}`}></FacebookShare>
      <div className="blog__img">
        {/* <Image
          loader={() => myLoader(url)}
          src={`${process.env.SERVER_IMAGES}${url}`}
          width="100%"
          height="500"
          layout="responsive"
          objectFit="contain"
          priority={true}
        ></Image> */}
        <img src={loaderUrl} alt={title} />
      </div>
      <div className="blog__head">
        <h3>{title}</h3>
        <span>извор: {source}</span>
      </div>
      <div
        className="blog__content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
