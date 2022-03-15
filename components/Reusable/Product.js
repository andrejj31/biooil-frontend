import React from "react";
import Link from "next/link";
import Image from "next/image";
import myLoader from "../../utils/loader";

export default function Product({ landing, title, image, slug, translate }) {
  // landing === undefined && console.log(title);
  let boolValue = /true/i.test(translate);
  const url = `Products/${image}.png`;
  return (
    <article
      className={`product ${boolValue == true ? "product__translate" : ""}`}
    >
      <div className="product__flags">
        <img src="/Flags/mk.png" alt="Macedonia" />
        <img src="/Flags/al.png" alt="Albania" />
        <img src="/Flags/swiss.png" alt="Switzeland" />
      </div>
      {/* <img className="product__img" src={`/Products/${url}`} alt="" /> */}
      <img
        className="product__img"
        src={`${process.env.NEXT_PUBLIC_SERVER_IMAGES}/${url}`}
        alt=""
      />
      {/* <Image
        className="product__img"
        loader={() => myLoader(url)}
        src={`${process.env.SERVER_IMAGES}${url}`}
        width="95"
        height="150"
        priority={true}
      ></Image> */}
      <div className="product__content">
        <hr />
        <div className="product__about">
          <h4>{title}</h4>
          <div className="product__benefits">
            {landing &&
              landing.map((prid, id) => {
                return (
                  <div key={id} className="product__benefit">
                    <img src="/Home/benefit.png" alt="" />
                    <p>{prid}</p>
                  </div>
                );
              })}
          </div>
          <Link href={`products/${slug}`}>
            <a href={`products/${slug}`} className="product__cta btn btn-green">
              прочитај повеќе
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}
