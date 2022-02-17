import React from "react";
import Head from "next/head";
import Product from "../../components/PremiumProducts/Product";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay } from "swiper";
// SwiperCore.use([Autoplay]);
// Import Swiper styles
// import "swiper/css";
export default function PremiumProducts(props) {
  const { data } = props;
  console.log(data);
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
            {/* <Swiper
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
                // when window width is >= 768px

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
                <img src="/Premium/Brands/ime.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Premium/Brands/biooil.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Premium/Brands/tuf.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Premium/Brands/fedor.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Premium/Brands/jomi.png" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/Premium/Brands/su-mi.png" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/Premium/Brands/roza-kanina.png" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/Premium/Brands/zaum.png" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/Premium/Brands/saridis.png" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="/Premium/Brands/biomelan.png" alt="" />
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
        <div className="premium__products">
          <div className="center-content">
            <div className="premium__products-content">
              {data.map((product, i) => {
                return <Product key={i} {...product} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch(`${process.env.SERVER_API}premium-products`);
  const data = await resp.json();

  return {
    props: data,
    revalidate: 1,
  };
}
