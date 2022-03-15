import React from "react";
import StoresData from "../../data/StoresData";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 15000, easing: (t) => t };
export default function Stores() {
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      slides: {
        perView: 6,
        spacing: 15,
      },
      rtl: true,
      loop: true,
      duration: 100,
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
    [
      // add plugins here
    ]
  );

  return (
    <section className="stores">
      <h3 className="section-heading">НАШИТЕ ПРОИЗВОДИ СЕ ДОСТАПНИ И ВО:</h3>
      <div className="stores__box">
        <div className="stores__content center-content" ref={refCallback}>
          <div className="keen-slider">
            {StoresData.map((store, id) => {
              const { name, nameLong, imgUrl, link } = store;
              return (
                <div key={id} className="keen-slider__slide">
                  <a href={link} rel="noreferrer" target="_blank">
                    <img src={`/Stores/${imgUrl}`} alt={name} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
