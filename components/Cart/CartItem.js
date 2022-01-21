import React from "react";
import { useCartContext } from "../../context/cartContext";
import myLoader from "../../utils/loader";

export default function CartItem(item) {
  const { removeItem, incrementItem, decrementItem } = useCartContext();
  const { title, image, quan, quantity, price, fullPrice, id } = item;
  const loader = myLoader(`/Products/${image}.png`);
  return (
    <article className="cart__product">
      <div className="cart__info">
        <div className="cart__img">
          <img src={loader} alt="" />
        </div>
        <div className="cart__item">
          <h3>{title}</h3>
          <span>Количина {quan}</span>
          <div className="cart__quan">
            <span className="cart__symbol" onClick={() => decrementItem(id)}>
              &#8722;
            </span>
            <span>{quantity}</span>
            <span className="cart__symbol" onClick={() => incrementItem(id)}>
              &#43;
            </span>
          </div>
        </div>
      </div>

      <div className="cart__prices">
        <div className="cart__price">
          <h3 className="cart__priceTitle">Единечна цена:</h3>
          <h3>{price} денари</h3>
        </div>
        <div className="cart__price">
          <h3 className="cart__priceTitle">Вкупна цена:</h3>
          <h3>{fullPrice} денари</h3>
        </div>
      </div>
      <span className="cart__remove" onClick={() => removeItem(id)}>
        &#10005;
      </span>
    </article>
  );
}
