import { useState } from "react";
import ProductsData from "../../../data/ProductsData";
import Popup from "../../../components/Reusable/Popup";
// import Image from "next/image";
import myLoader from "../../../utils/loader";
import { useCartContext } from "../../../context/cartContext";
import { NextSeo } from "next-seo";

export default function DynamicProduct(props) {
  const [popup, setPopup] = useState({ isOpen: false });
  const {
    title,
    quan,
    image,
    description,
    pridobivki,
    _id: id,
    price,
    slug,
  } = props.data || {};

  const { addItem, isInCart } = useCartContext();
  const loaderUrl = myLoader(`/Products/${image}.png`);
  return (
    <>
      <NextSeo
        title={`BioOil - ${title}`}
        description={`BioOil - ${title}`}
        openGraph={{
          type: "article",
          url: `${process.env.NEXT_PUBLIC_SITE_LINK}/products/${slug}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SERVER_IMAGES}/Products/${image}.png`,
              alt: image,
              type: "image/jpg",
            },
          ],
        }}
      />
      <section className="item">
        <div className="item__head">
          <div className="item__headcontent center-content">
            {/* <img
              className="item__img"
              src={`${img}.png`}
              alt="афионово масло"
            /> */}
            <img className="item__img " src={loaderUrl} alt={title}></img>
            <div className="item__headtypography">
              <h3>{title}</h3>
              <span>{quan}</span>
              <p>{description}</p>
              <div className="item__btns">
                <a href="#more" className="btn btn-round btn-green">
                  Прочитај повеќе
                </a>
                {!isInCart(id) && (
                  <a
                    className="btn btn-round btn-green"
                    onClick={(e) => {
                      addItem({ id, title, quan, image, price });
                      setPopup({
                        title: `Продуктот: "${title}" е успешно додаден во корпата!`,
                        msg: "Во корпата можете да го одберете квантитетот на продукти од овој тип.",
                        type: "success",
                        isOpen: true,
                      });
                    }}
                  >
                    Додај во кошничка
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="item__more" id="more">
          <div
            className="item__list center-content"
            dangerouslySetInnerHTML={{ __html: pridobivki }}
          ></div>
        </div>
        {/* <div id="more" className="item__more">
          <div className="item__list center-content">
            {pridobivki.map((p, i) => {
              const { title, desc } = p;
              return (
                <article key={i} className="item__article">
                  <h3>{title}</h3>

                  <p>{desc}</p>
                </article>
              );
            })}
          </div>
        </div> */}
      </section>
      <Popup setPopup={setPopup} popup={popup}></Popup>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}products`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((product) => ({
    params: {
      id: product.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}products/${id}`);
  const product = await res.json();
  return {
    props: product.data,
    revalidate: 1,
  };
}
