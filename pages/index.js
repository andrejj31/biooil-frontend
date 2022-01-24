import Head from "next/head";
// import Image from "next/image";
import Landing from "../components/Home/Landing";
import About from "../components/Home/About";
import Benefits from "../components/Home/Benefits";
import Find from "../components/Home/Find";
import Stores from "../components/Home/Stores";
export default function Home(props) {
  return (
    <main>
      <>
        <Head>
          <title>BioOil - Почетна</title>
        </Head>
        <Landing {...props} />
        <About />
        <Benefits />
        <Find />
        <Stores />
      </>
    </main>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVER_API}products`);
  const products = await res.json();
  return {
    props: products,
    revalidate: 1,
  };
}
