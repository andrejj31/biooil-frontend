import React from "react";
import Product from "../Reusable/Product";
import ProductsData from "./../../data/ProductsData";
export default function Landing(props) {
  console.log(props);
  const products = props.data;
  return (
    <section className="landing">
      <div className="landing__content center-content">
        <div className="landing__typography">
          <h1 className="landing__heading">
            Здравиот живот е клуч за развој на секој човек!{" "}
          </h1>
          <h2 className="landing__desc">
            Ладно цедено масло од 100% ОРГАНСКИ семки од сончоглед одгледувано
            во Македонија е висококвалитетен производ, кој поради хранливите
            материи што ги содржи носи повеќекратни придобивки за целото
            семејство.
          </h2>
          <a className="landing__cta round-cta" href="#">
            Види ги сите производи
          </a>
        </div>
        <div className="landing__products">
          {products.map((product, i) => {
            return (
              <Product
                key={i}
                translate={`${i % 2 !== 0 ? true : false}`}
                {...product}
              ></Product>
            );
          })}
          {/* <Product
            translate={true}
            imgUrl={"maslo-afion.png"}
            pridobivki={ProductsData[0].landing}
            title={"Масло од афион"}
          ></Product>
          <Product
            translate={false}
            imgUrl={"namaz-afion.png"}
            pridobivki={ProductsData[1].landing}
            title={"Намаз од афион"}
          ></Product>
          <Product
            translate={true}
            imgUrl={"soncogledovo-maslo.png"}
            pridobivki={ProductsData[2].landing}
            title={"Сончогледово масло"}
          ></Product>
          <Product
            translate={false}
            imgUrl={"ekstra-virgin.png"}
            pridobivki={ProductsData[2].landing}
            title={"Сончогледово екстра вирџин масло"}
          ></Product> */}
        </div>
      </div>
    </section>
  );
}
