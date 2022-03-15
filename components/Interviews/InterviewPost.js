import React from "react";
import Image from "next/image";
import myLoader from "../../utils/loader";

export default function InterviewPost({ source, title, slug, image, content }) {
  const url = `/Interviews/${image}.jpg`;
  const loaderUrl = myLoader(url);
  return (
    <article className="blog__article">
      <iframe
        className="blog__facebook"
        src="https://www.facebook.com/plugins/share_button.php?href=https://biooil-frontend.vercel.app/nutritional-space/naslov-naslov&layout=button_count&size=large&width=110&height=28&appId"
        width={110}
        height={28}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
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
