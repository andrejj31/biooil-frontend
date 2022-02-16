import React from "react";
import AdminOptions from "../Reusable/AdminOptions";
export default function Order(props) {
  const {
    buyer,
    products,
    status,
    fullPrice,
    quantity,
    _id: id,
    createdAt,
  } = props;

  const d = new Date(createdAt);
  const d2 = d.toString().substring(4, 15);
  const d3 = d2.slice(0, 3) + " /" + d2.slice(3, 6) + " /" + d2.slice(6, 11);

  const date = new Date(createdAt).toLocaleString();

  const adminButtons = [
    {
      title: "Измени ја нарачката",
      type: "edit",
      location: `/admin/orders/${id}/edit`,
    },
    {
      title: "Избриши ја нарачката",
      type: "delete",
      location: `orders/${id}`,
      req: {
        method: "DELETE",
        data: { delete: true },
        options: { credentials: "include" },
      },
    },
  ];

  return (
    <div className="order">
      <div className="order__base">
        <h3 className="order__id">ID: {id}</h3>
        <p className="order__status">
          Статус:{" "}
          <span className="order__success">
            {status === "done" ? "доставено" : "на чекање"}
          </span>
        </p>
        <p className="order__date">Креирано на: {date}</p>
      </div>

      <div className="order__group">
        <h3 className="order__heading">Информации за нарачката</h3>
        <div className="order__body">
          <h3>Вкупна цена: {fullPrice} денари</h3>
          <h3>Вкупно продукти: {quantity}</h3>
        </div>
      </div>

      <div className="order__group">
        <h3 className="order__heading">Продукти</h3>
        <div className="order__body">
          {products.map((product, i) => {
            return (
              <h3 key={i}>
                {product.product.title} - {product.quantity} -{" "}
                {product.fullPrice} денари
              </h3>
            );
          })}
        </div>
      </div>
      <div className="order__group">
        <h3 className="order__heading">Информации за клиентот</h3>
        <div className="order__body">
          <h3>Име и презиме: {buyer.name}</h3>
          <h3>Адреса на живеење: {buyer.address}</h3>
          <h3>Телефон за контакт: {buyer.tel}</h3>
          <h3>Е - пошта: {buyer.email}</h3>
          <h3>Поштенски код: {buyer.postal}</h3>
        </div>
      </div>

      <AdminOptions btns={adminButtons}></AdminOptions>
    </div>
  );
}
