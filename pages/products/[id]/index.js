import Head from "next/head";
import ProductsData from "../../../data/ProductsData";
// import Image from "next/image";
import myLoader from "../../../utils/loader";
import { useCartContext } from "../../../context/cartContext";
export default function DynamicProduct(props) {
  const {
    title,
    quan,
    image,
    description,
    pridobivki,
    _id: id,
    price,
  } = props.data;
  const { addItem, isInCart } = useCartContext();
  const loaderUrl = myLoader(`/Products/${image}.png`);
  return (
    <>
      <Head>
        <title>{`BioOil - ${title}`}</title>
      </Head>
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
                <a href="#more" className="basic-cta">
                  Прочитај повеќе
                </a>
                {!isInCart(id) && (
                  <a
                    className="basic-cta"
                    onClick={() => addItem({ id, title, quan, image, price })}
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
