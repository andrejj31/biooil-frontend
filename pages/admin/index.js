import React, { useState } from "react";
import Order from "../../components/Admin/Order";
import Option from "../../components/Admin/Option";
import Head from "next/head";
import Paggination from "../../components/Reusable/Paggination";
export default function Admin(props) {
  const {
    orders: { data: orders },
  } = props;
  const options = [
    {
      heading: "Продукти",
      options: [{ title: "Креирај продукт", href: "/admin/create/product" }],
    },
    {
      heading: "Интервјуа",
      options: [
        { title: "Креирај интервју", href: "/admin/create/interview" },
        { title: "Измени ги интервјуата", href: "/interviews" },
      ],
    },
    {
      heading: "Тим",
      options: [
        { title: "Додај вработен", href: "/admin/create/team" },
        { title: "Измени ги вработените", href: "/team" },
      ],
    },
    {
      heading: "Блогови",
      options: [
        { title: "Додај блог", href: "/admin/create/blog" },
        { title: "Измени ги блоговите", href: "/nutritional-space" },
      ],
    },
    {
      heading: "Премиум Продукти",
      options: [
        { title: "Додај продукт", href: "/admin/create/premium-products" },
        { title: "Измени ги продуктите", href: "/premium-products" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>BioOil - Админ Мени</title>
      </Head>
      <section className="admin">
        <div className="center-content">
          <div className="admin__options">
            <h3 className="orders__head">Административни опции</h3>
            <div className="options">
              {options.map((option, i) => {
                return <Option key={i} {...option}></Option>;
              })}
            </div>
          </div>
          <div className="admin__orders">
            <h3 className="orders__head">Нарачки</h3>
            <div className="orders">
              {orders.map((order, i) => {
                return <Order key={i} {...order}></Order>;
              })}
            </div>

            <Paggination pageCount={props.pageCount}></Paggination>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps(context) {
  const query = context.resolvedUrl.split("?")[1];
  const itemsPerPage = 9;
  const res = await fetch(
    `${process.env.SERVER_API}orders?${query}&limit=${itemsPerPage}`
  );
  const orders = await res.json();
  const pageCount = Math.ceil(
    parseInt(orders.totalCount) / parseInt(itemsPerPage)
  );
  return {
    props: { orders, pageCount },
  };
}

Admin.requireAuth = true;
