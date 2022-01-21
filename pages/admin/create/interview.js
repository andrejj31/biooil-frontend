import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";
export default function Create() {
  const fields = [
    {
      name: "source",
      label: "Извор",
      placeholder: "izvor.com",
    },
    {
      name: "title",
      label: "Наслов",
      placeholder: "Наслов на интервјуто",
    },
    {
      name: "link",
      label: "Линк",
      placeholder: "Линк за пристап",
    },
  ];

  const initialValues = {
    source: "",
    title: "",
    link: "",
  };

  return (
    <>
      <Head>
        <title>BioOil - Додај интервју</title>
      </Head>
      <Aform
        fields={fields}
        title={"Креирај интервју"}
        initialValues={initialValues}
        req={{
          url: "interviews",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Направи интервју"}
        msg={"Интервјуто е успешно креирано"}
      ></Aform>
    </>
  );
}

Create.requireAuth = true;
