import React, { useState, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function Find() {
  const [viewport, setViewport] = useState({
    longitude: 21.443114341104454,
    latitude: 42.06499469849213,
    zoom: 14,
  });

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const [showPopup, setShowPopup] = useState(true);
  return (
    <section className="find">
      <h3 className="section-heading">ЛОКАЦИЈА И КОНТАКТ</h3>
      <div className="find__box">
        <ReactMapGL
          mapboxApiAccessToken={
            "pk.eyJ1IjoiYW5kcmVqajMxIiwiYSI6ImNrdnBwNml5ZzJiZncybnRrb3Fmc2VodzYifQ.6hmRboNFm9maB6MwHQdm_w"
          }
          {...viewport}
          width="100vw"
          height="400px"
          onViewportChange={handleViewportChange}
        >
          <Marker
            latitude={42.06499469849213}
            longitude={21.443114341104454}
            offsetLeft={-20}
            offsetTop={-42}
          >
            <img
              onClick={() => setShowPopup(!showPopup)}
              className="find__marker"
              src="/Home/pin.png"
              alt=""
            />
          </Marker>
          {showPopup && (
            <Popup
              latitude={42.06499469849213}
              longitude={21.443114341104454}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
              anchor="top"
            >
              <div className="find__popup">
                <h3>ул.е - радишанска лево бр 304</h3>
                <p>Работно време: 8:00 - 16:00</p>
              </div>
            </Popup>
          )}
        </ReactMapGL>
        <div className="find__informations center-content">
          <div className="find__info">
            <img src="/Icons/telephone.png" alt="" />
            <article>
              <h3>Телефон за контакт</h3>
              <p>+ 389 713 355 93</p>
            </article>
          </div>
          <div className="find__info">
            <img src="/Icons/mail.png" alt="" />
            <article>
              <h3>E - пошта</h3>
              <p>info@biooil.com.mk</p>
            </article>
          </div>
          <div className="find__info">
            <img src="/Icons/social-media.png" alt="" />
            <article className="find__logos">
              <h3>Социјални мрежи</h3>
              <div className="find__icons">
                <a
                  href="https://www.facebook.com/biooilMK/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Icons/facebook.png" alt="" />
                </a>
                <a
                  href="https://www.instagram.com/biooilmk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Icons/instagram.png" alt="" />
                </a>
                <a
                  href="https://www.facebook.com/biooilMK/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/Icons/messenger.png" alt="" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
