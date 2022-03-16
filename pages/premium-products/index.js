import React from "react";
import Product from "../../components/PremiumProducts/Product";
import Paggination from "../../components/Reusable/Paggination";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Router, { useRouter } from "next/router";
import PremiumProductsData from "../../data/PremiumProductsData";
import { NextSeo } from "next-seo";

const animation = { duration: 55000, easing: (t) => t };
export default function PremiumProducts(props) {
  const router = useRouter();

  const {
    data: { data },
  } = props;

  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slides: {
        perView: 7,
        spacing: 50,
      },
      rtl: true,
      loop: true,
      duration: 100,
      breakpoints: {
        "(max-width: 1400px)": {
          slides: {
            perView: 5,
            spacing: 50,
          },
        },
        "(max-width: 1000px)": {
          slides: {
            perView: 4,
            spacing: 70,
          },
        },
        "(max-width: 800px)": {
          slides: {
            perView: 3,
            spacing: 70,
          },
        },
        "(max-width: 500px)": {
          slides: {
            perView: 2,
            spacing: 70,
          },
        },
      },
      slideChanged() {
        console.log("slide changed");
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    []
  );

  const handleBrandClick = (e) => {
    e.preventDefault();
    const selected = e.target.closest("[data-name]");
    const name = selected.dataset.name;

    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.manufacturer = name;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <>
      <NextSeo
        title={`BioOil - Премиум продукти`}
        description={"BioOil - Премиум продукти"}
      />

      <section className="premium">
        <div className="premium__head">
          <div className="center-content">
            <div className="premium__sponsored">
              <img src="/Base/premium-products.png" alt="" />
              <img src="/Base/swiss.png" alt="" />
            </div>
            <div className="premium__about">
              <h3>За проектот:</h3>
              <p>
                Биомасата е еден вид на обновливи извори што може да се
                претворат во течни горива - познати како биогорива - за
                транспорт. Биогоривата вклучуваат целулозни етанол, биодизел и
                обновливи јаглеводороди „допадни“ горива. Двата најчести типа на
                биогорива кои се користат денес се етанолот и биодизелот.
                Биогоривата може да се користат во авиони и повеќето возила што
                се на пат. Обновливите горива за транспорт што се функционално
                еквивалентни на нафтените горива го намалуваат јаглеродниот
                интензитет на нашите возила и авиони. Биомасата е еден вид на
                обновливи извори што може да се претворат во течни горива -
                познати како биогорива - за транспорт. Биогоривата вклучуваат
                целулозни етанол, биодизел и обновливи јаглеводороди „допадни“
                горива. Двата најчести типа на биогорива кои се користат денес
                се етанолот и биодизелот. Биогоривата може да се користат во
                авиони и повеќето возила што се на пат. Обновливите горива за
                транспорт што се функционално еквивалентни на нафтените горива
                го намалуваат јаглеродниот интензитет на нашите возила и авиони.
                Биомасата е еден вид на обновливи извори што може да се
                претворат во течни горива - познати како биогорива - за
                транспорт. Биогоривата вклучуваат целулозни етанол, биодизел и
                обновливи јаглеводороди „допадни“ горива. Двата најчести типа на
                биогорива кои се користат денес се етанолот и биодизелот.
                Биогоривата може да се користат во авиони и повеќето возила што
                се на пат. Обновливите горива за транспорт што се функционално
                еквивалентни на нафтените горива го намалуваат јаглеродниот
                интензитет на нашите возила и авиони.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="premium__brands">
          <div className="premium__brands-content center-content">
            <div className="keen-slider" ref={refCallback}>
              {PremiumProductsData.map((product, id) => {
                return (
                  <div key={id} className="premium__img-container">
                    <img
                      className="keen-slider__slide premium__img"
                      src={`/Premium/Brands/${product.name}.png`}
                      alt={product.alt}
                      data-name={product.name}
                      onClick={handleBrandClick}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="premium__products">
          <div className="center-content">
            <div className="premium__products-content">
              {data.map((product, i) => {
                return <Product key={`${product}-${i}`} {...product} />;
              })}
            </div>
          </div>
          <Paggination pageCount={props.pageCount}></Paggination>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = context.resolvedUrl.split("?")[1];
  const itemsPerPage = 16;
  const resp = await fetch(
    `${process.env.SERVER_API}premium-products?${query}&limit=${itemsPerPage}`
  );
  const data = await resp.json();
  const pageCount = Math.ceil(
    parseInt(data.totalCount) / parseInt(itemsPerPage)
  );
  return {
    props: { data, pageCount },
  };
}
