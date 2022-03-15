import React from "react";
import Head from "next/head";
import Product from "../../components/PremiumProducts/Product";
import Paggination from "../../components/Reusable/Paggination";
// import Swiper from "react-id-swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Router, { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";

export default function PremiumProducts(props) {
  const router = useRouter();

  const {
    data: { data },
  } = props;

  const params = {
    slidesPerView: 5,
    spaceBetween: 10,
  };

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
      <Head>
        <title>BioOil - Премиум продукти</title>
      </Head>
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
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                1000: {
                  width: 1000,
                  slidesPerView: 4,
                  spaceBetween: 5,
                },

                600: {
                  width: 600,
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                400: {
                  width: 400,
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                200: {
                  width: 200,
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
              }}
            >
              <SwiperSlide>
                <img
                  onClick={handleBrandClick}
                  src="/Premium/Brands/ime.png"
                  data-name="ime"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  onClick={handleBrandClick}
                  src="/Premium/Brands/biooil.png"
                  data-name="biooil"
                  alt="Bio-oil"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  onClick={handleBrandClick}
                  src="/Premium/Brands/tuf.png"
                  data-name="tuf"
                  alt="Tuf"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/fedor.png"
                  onClick={handleBrandClick}
                  data-name="fedor"
                  alt="Fedor"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/jomi.png"
                  alt="Jomi"
                  data-name="jomi"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/su-mi.png"
                  alt="Su-mi"
                  data-name="Su-mi"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/roza-kanina.png"
                  alt="Roza Kanina"
                  data-name="roza-kanina"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/zaum.png"
                  alt="Zaum"
                  data-name="zaum"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/saridis.png"
                  alt="Saridis"
                  data-name="saridis"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Premium/Brands/biomelan.png"
                  alt="Biomelan"
                  data-name="biomelan"
                  onClick={handleBrandClick}
                />
              </SwiperSlide>
            </Swiper>

            {/* <img src="/Premium/Brands/ime.png" alt="" />
            <img src="/Premium/Brands/biooil.png" alt="" />
            <img src="/Premium/Brands/tuf.png" alt="" />
            <img src="/Premium/Brands/fedor.png" alt="" />
            <img src="/Premium/Brands/jomi.png" alt="" />
            <img src="/Premium/Brands/su-mi.png" alt="" />
            <img src="/Premium/Brands/roza-kanina.png" alt="" />
            <img src="/Premium/Brands/zaum.png" alt="" />
            <img src="/Premium/Brands/saridis.png" alt="" />
            <img src="/Premium/Brands/biomelan.png" alt="" /> */}
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
