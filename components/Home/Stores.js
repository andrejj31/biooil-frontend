import React from "react";
import StoresData from "../../data/StoresData";

export default function Stores() {
  return (
    <section className="stores">
      <h3 className="section-heading">НАШИТЕ ПРОИЗВОДИ СЕ ДОСТАПНИ И ВО:</h3>
      <div className="stores__box">
        <div className="stores__content center-content">
          {StoresData.map((store, id) => {
            const { name, nameLong, imgUrl, link } = store;
            return (
              <a key={id} href={link} rel="noreferrer" target="_blank">
                <img src={`/Stores/${imgUrl}`} alt={name} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
