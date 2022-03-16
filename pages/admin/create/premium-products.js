import Aform from "../../../components/Reusable/Aform";
import Head from "next/head";
export default function Create() {
  const fields = [
    {
      name: "title",
      label: "Име на продуктот",
      placeholder: "Име на продуктот",
    },
    {
      name: "manufacturer",
      label: "Производител",
      placeholder: "Производител на продуктот",
    },
    {
      name: "link",
      label: "Линк до производителот",
      placeholder: "Линк за повеќе информации",
    },
    {
      name: "price",
      label: "Цена на продуктот во денари",
      placeholder: "Цена на продуктот во денари",
    },
    {
      name: "quan",
      label: "Количина на пакување",
      placeholder: "Количина на пакување",
    },
    {
      name: "image",
      label: "Слика од продуктот",
      type: "file",
    },
  ];

  const initialValues = {
    manufacturer: "",
    title: "",
    price: "",
    link: "",
    image: "",
    quan: "",
  };

  return (
    <>
      <Head>
        <title>BioOil - Додај премиум продукт</title>
      </Head>
      <Aform
        fields={fields}
        title={"Креирај премиум продукт"}
        initialValues={initialValues}
        file={true}
        req={{
          url: "premium-products",
          method: "POST",
          options: { credentials: "include" },
        }}
        cta={"Креирај продукт"}
        msg={"Продуктот е успешно креиран"}
      ></Aform>
    </>
  );
}

Create.requireAuth = true;
