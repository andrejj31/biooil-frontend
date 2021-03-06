import React from "react";
// import Image from "next/image";
import TeamData from "../../data/TeamData";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";
import AdminOptions from "../../components/Reusable/AdminOptions";
import Employee from "../../components/Team/Employee";
import { NextSeo } from "next-seo";

export default function Team(props) {
  const { data } = props;
  return (
    <>
      <NextSeo
        title={`BioOil - Тим`}
        description={"BioOil - Тим"}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SITE_LINK}team`,
        }}
      />
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
