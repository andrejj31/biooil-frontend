import React from "react";
import Link from "next/link";
import Image from "next/image";
import myLoader from "../../utils/loader";

export default function Product({
  title,
  translate,
  imgUrl,
  link,
  pridobivki,
}) {
  // console.log(process.env.SERVER_IMAGES);
  // console.log(loader);
  const url = `/Products/${imgUrl}`;
  return (
    <article className={`product ${translate ? "product__translate" : ""}`}>
      {/* <img className="product__img" src={`/Products/${imgUrl}`} alt="" /> */}
      {/* <img
        className="product__img"
        src={`${process.env.SERVER_IMAGES}Products/${imgUrl}`}
        alt=""
      /> */}
      <Image
        className="product__img"
        loader={() => myLoader(url)}
        src={`${process.env.SERVER_IMAGES}${url}`}
        width="115"
        height="200"
        priority={true}
      ></Image>
      <div className="product__content">
        <hr />
        <div className="product__about">
          <h4>{title}</h4>
          <div className="product__benefits">
            {pridobivki.map((prid, id) => {
              return (
                <div key={id} className="product__benefit">
                  <img src="/Home/benefit.png" alt="" />
                  <p>{prid}</p>
                </div>
              );
            })}
          </div>
          <Link href={`products/${link}`}>
            <a className="product__cta basic-cta">прочитај повеќе</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
