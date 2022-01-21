import React from "react";
// import Image from "next/image";
export default function Benefits() {
  return (
    <section className="benefits">
      <h3 className="section-heading">НАЧИН НА ПРОИЗВОДСТВО И ПРИДОБИВКИ</h3>
      <div className="benefits__box">
        <div className="benefits__content center-content">
          <div className="benefits__benefits">
            <div className="benefits__benefit">
              <img src="/Home/check.png" alt="" />
              <p>Еколошки сертификат</p>
            </div>
            <div className="benefits__benefit">
              <img src="/Home/check.png" alt="" />
              <p>Не содржи тешки метали, пестициди, адитиви или конзерванси</p>
            </div>
            <div className="benefits__benefit">
              <img src="/Home/check.png" alt="" />
              <p>
                Метод на екстракција со ладно цедење, кој не вклучува никаква
                термичка или хемиска обработка и затоа може да задржи неколку
                компоненти кои се корисни за здравјето
              </p>
            </div>
            <div className="benefits__benefit">
              <img src="/Home/check.png" alt="" />
              <p>
                Високата концентрација на многу други хранливи материи што може
                да се најдат во сончогледовото масло го прави значително корисно
                масло што треба да се користи и за здравјето и за нега на
                кожата.
              </p>
            </div>
          </div>
          <div className="benefits__bars">
            <div className="benefits__bar">
              <h3>ЗДРАВИ КАЛОРИИ</h3>
              <div className="benefits__progress">
                <div style={{ width: "84%" }}>
                  <span>84%</span>
                </div>
              </div>
            </div>
            <div className="benefits__bar">
              <h3>ОРГАНСКИ</h3>
              <div className="benefits__progress">
                <div>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="benefits__bar">
              <h3>КВАЛИТЕТ</h3>
              <div className="benefits__progress">
                <div>
                  <span>100%</span>
                </div>
              </div>
            </div>
            <div className="benefits__bar">
              <h3>ЕКО ФИЛТРАЦИЈА</h3>
              <div className="benefits__progress">
                <div>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
