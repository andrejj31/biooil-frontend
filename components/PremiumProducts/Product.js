import React, { useState } from "react";
import myLoader from "../../utils/loader";
import AdminOptions from "../Reusable/AdminOptions";
import { useCartContext } from "../../context/cartContext";
import Popup from "../../components/Reusable/Popup";
export default function Product({
  title,
  manufacturer,
  price,
  image,
  link,
  _id: id,
}) {
  const adminButtons = [
    {
      title: "Измени го продуктот",
      type: "edit",
      location: `/premium-products/${id}/edit`,
    },
    {
      title: "Избриши го продуктот",
      type: "delete",
      location: `premium-products/${id}`,
      req: {
        method: "DELETE",
        data: { delete: "true" },
        options: { credentials: "include" },
      },
    },
  ];

  const [popup, setPopup] = useState({ isOpen: false });
  const { addItem, isInCart } = useCartContext();
  const loaderUrl = myLoader(`/Premium/${image}.png`);
  return (
    <>
      <article className="premium-product">
        <img src={loaderUrl} alt={title} />
        <hr />
        <div className="premium-product__body">
          <div className="premium-product__content">
            <h3>{title}</h3>
            <h4>ПРОИЗВОДИТЕЛ: {manufacturer.toUpperCase()}</h4>
          </div>
          <div className="premium-product__bottom">
            <a className="btn-link" href={link}>
              Прочитај повеќе
            </a>
            <span>{price} ДЕНАРИ</span>
          </div>
          {!isInCart(id) && (
            <a
              className="btn premium-product__cta"
              onClick={(e) => {
                addItem({
                  id,
                  title,
                  image,
                  price,
                  manufacturer,
                  premium: true,
                });
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
          <AdminOptions btns={adminButtons}></AdminOptions>
        </div>
      </article>
      <Popup setPopup={setPopup} popup={popup}></Popup>
    </>
  );
}

// onClick={(e) => {
//   addItem({ id, title, quan, image, price });
//   setPopup({
//     title: `Продуктот: ${title} е успешно додаден во корпата!`,
//     msg: "Во корпата можете да го одберете квантитетот на продукти од овој тип.",
//     type: "success",
//     isOpen: true,
//   });
// }}
