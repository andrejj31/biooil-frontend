import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AboutArticle(data) {
  const { title, desc, img, cta } = data.data;
  return (
    <article className="about__item">
      <div className="about__content center-content">
        <div className="about__typography">
          <h4>{title}</h4>
          <p>{desc}</p>
          {cta && (
            <Link href={cta[1]}>
              <a className="round-cta about__cta">{cta[0]}</a>
            </Link>
          )}
        </div>
        {/* <img className="about__img" src={img} alt={title} /> */}
        <Image
          className="about__img"
          src={img}
          width={700}
          height={250}
          priority={true}
          alt={title}
        ></Image>
      </div>
    </article>
  );
}
