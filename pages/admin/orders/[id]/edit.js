import React from "react";
import Aform from "../../../../components/Reusable/Aform";
import Head from "next/head";

export default function Edit(props) {
  const { buyer, products, status, quantity, fullPrice } = props.data;

  const { name, tel, postal, email, city, address } = buyer;

  const buyerFields = [
    {
      name: "name",
      label: "Име",
    },
    {
      name: "tel",
      label: "Телефон за контакт",
    },
    {
      name: "postal",
      label: "Поштенски број",
    },
    {
      name: "email",
      label: "Е - пошта",
    },
    {
      name: "city",
      label: "Град",
    },
    {
      name: "address",
      label: "Адреса за достава",
    },
  ];

  const buyerInitialValues = {
    name,
    tel,
    postal,
    email,
    city,
    address,
  };

  const orderFields = [
    { name: "fullPrice", label: "Цена на нарачката" },
    { name: "quantity", label: "Вкупно продукти" },
  ];

  const orderInitialValues = {
    fullPrice,
    quantity,
  };
  return (
    <>
      <Head>
        <title>BioOil - Измени ги податоците за нарачката</title>
      </Head>
      <Aform
        fields={buyerFields}
        title={"Измени ги податоците за купувачот"}
        initialValues={buyerInitialValues}
        req={{
          url: `orders/${props.data._id}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        cta={"Измени ги податоците за купувачот"}
        wt={"E-ORDER-USER"}
      ></Aform>
      <Aform
        fields={orderFields}
        title={"Измени ги податоците за нарачката"}
        initialValues={orderInitialValues}
        req={{
          url: `orders/${props.data._id}`,
          method: "PATCH",
          options: { credentials: "include" },
        }}
        cta={"Измени ги податоците за нарачката"}
      ></Aform>
      {/* {products.map((pr, i) => {
        return (
          <Aform
            key={i}
            fields={[
              { name: "quantity", label: "Количина" },
              { name: "fullPrice", label: "Вкупна цена" },
            ]}
            initialValues={{ quantity: pr.quantity, fullPrice: pr.fullPrice }}
            title={`Измени ги податоците за продуктот ${pr.product.title}`}
            req={{ url: `orders/${props.data._id}`, method: "PATCH" }}
            cta={`Измени ги податоците за продуктот ${pr.product.title}`}
            wt={"E-ORDER-ITEM"}
          ></Aform>
        );
      })} */}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.SERVER_API}orders`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((order) => ({
    params: {
      id: order._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(`${process.env.SERVER_API}orders/${id}`);
  const order = await res.json();
  return {
    props: order.data,
    revalidate: 1,
  };
}

Edit.requireAuth = true;
