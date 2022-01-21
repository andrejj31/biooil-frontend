import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductsData from "../../data/ProductsData";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";
export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const toggleNav = () => {
    setMobNav(!mobNav);
  };

  const { getTotalItemsLength } = useCartContext();
  const { user, initializing } = useAuthContext();
  const itemsLength = getTotalItemsLength();

  return (
    <header className="nav">
      <div className="nav__content center-content">
        <Link href="/">
          <img src="/Base/logo.png" className="nav__logo" alt="BioOil Logo" />
        </Link>
        <ul className={`${mobNav ? "nav__tabs nav__mobile" : "nav__tabs"}`}>
          <li onClick={toggleNav} className="nav__li">
            <Link href="/">ПОЧЕТНА</Link>
          </li>
          <li className="nav__li">
            <a href="#">ПРОИЗВОДИ</a>
            <ul>
              {ProductsData.map((product, i) => {
                const { title, slug } = product;
                return (
                  <li key={i} onClick={toggleNav}>
                    <Link href={`/products/${slug}`}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li onClick={toggleNav} className="nav__li">
            <Link href="/interviews">ИНТЕРВЈУА</Link>
          </li>
          <li onClick={toggleNav} className="nav__li">
            <Link href="/team">ТИМ</Link>
          </li>
          <li onClick={toggleNav} className="nav__li">
            <Link href="/nutritional-space">НУТРИТИВНО КОШЕ</Link>
          </li>
          {!initializing && user && (
            <li onClick={toggleNav} className="nav__li">
              <Link href="/admin">АДМИН</Link>
            </li>
          )}
        </ul>
        <div className="nav__additional">
          <Link href="/cart">
            <img className="nav__cart" src="/Base/shopping-cart.png" alt="" />
          </Link>
          <p className="nav__count">{itemsLength}</p>
        </div>
        <img
          onClick={toggleNav}
          className="nav__hamburger"
          src="/Base/menu.png"
          alt=""
        />
      </div>
    </header>
  );
}
