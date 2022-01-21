import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";
export default function Create() {
  const fields = [
    {
      name: "name",
      label: "Име и презиме",
    },
    {
      name: "position",
      label: "Позиција",
    },
    {
      name: "resume",
      label: "Резиме",
      textArea: true,
    },
    {
      name: "image",
      label: "Слика од вработениот",
      type: "file",
    },
  ];

  const initialValues = {
    name: "",
    position: "",
    resume: "",
    image: "",
  };
  return (
    <>
      <Head>
        <title>BioOil - Додај вработен</title>
      </Head>
      <Aform
        fields={fields}
        title={"Додај член во тимот"}
        initialValues={initialValues}
        file={true}
        req={{
          url: "team",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Додај вработен"}
      ></Aform>
    </>
  );
}

Create.requireAuth = true;
