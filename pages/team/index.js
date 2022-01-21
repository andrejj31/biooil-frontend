import React from "react";
import Head from "next/head";
// import Image from "next/image";
import TeamData from "../../data/TeamData";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";
import AdminOptions from "../../components/Reusable/AdminOptions";
import Employee from "../../components/Team/Employee";
export default function Team(props) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>BioOil - Тим</title>
      </Head>
      <section className="team">
        <div className="team__head"></div>
        <div className="team__main">
          <div className="team__content center-content">
            {data.map((employee, i) => {
              return <Employee key={i} {...employee}></Employee>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const resp = await fetch(`${process.env.SERVER_API}team`);
  const data = await resp.json();

  return {
    props: data,
    revalidate: 1,
  };
}
