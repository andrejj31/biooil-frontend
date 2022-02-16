import React from "react";
import myLoader from "../../utils/loader";
import AdminOptions from "../Reusable/AdminOptions";

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

  const loaderUrl = myLoader(`/Premium/${image}.png`);
  return (
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
        <AdminOptions btns={adminButtons}></AdminOptions>
      </div>
    </article>
  );
}
