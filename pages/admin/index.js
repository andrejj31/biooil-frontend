import React from "react";
import Order from "../../components/Admin/Order";
import Option from "../../components/Admin/Option";
import Head from "next/head";
export default function Admin(props) {
  const orders = props.data;

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
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVER_API}orders`);
  const orders = await res.json();
  return {
    props: orders,
    revalidate: 1,
  };
}

Admin.requireAuth = true;
