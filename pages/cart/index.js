import React, { useState, useEffect } from "react";
import CartItem from "../../components/Cart/CartItem";
import FormInput from "../../components/Reusable/FormInput";
import Popup from "../../components/Reusable/Popup";
import { useCartContext } from "../../context/cartContext";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Cart() {
  const { getItems, clearCart } = useCartContext();
  const cartItems = getItems();
  const router = useRouter();
  const fields = [
    {
      name: "name",
      label: "Име и презиме",
      placeholder: "Андреј Велков",
    },
    {
      name: "tel",
      label: "Телефонски број за контакт",
      placeholder: "071498230",
    },
    {
      name: "postal",
      label: "Поштенски број",
      placeholder: "1060",
    },
    {
      name: "email",
      label: "Е - пошта",
      placeholder: "velkovandrej819@gmail.com",
    },
    {
      name: "city",
      label: "Град",
      placeholder: "Скопје",
    },
    {
      name: "address",
      label: "Адреса на достава",
      placeholder: "Борис Сарафов 45г 1/6",
    },
  ];

  const initialValues = {
    name: "",
    tel: "",
    postal: "",
    email: "",
    city: "",
    address: "",
  };

  const [popup, setPopup] = useState({ isOpen: false });

  const [body, setBody] = useState("");

  const { formData, handleInputChange } = useForm({
    ...initialValues,
  });
  const { data, error } = useFetch("orders", "POST", body, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCartItems = cartItems.items.map((item) => {
      return {
        product: item.id,
        quantity: item.quantity,
        fullPrice: item.fullPrice,
      };
    });
    const postObject = {
      fullPrice: cartItems.fullPrice,
      quantity: cartItems.quantity,
      buyer: { ...formData },
      products: [...newCartItems],
    };
    setBody(postObject);
  };

  useEffect(() => {
    if (data) {
      if (data?.status === "success") {
        setPopup({
          title: "Нарачката е потврдена",
          msg: "На внесената е-пошта ви е испратен mail со сите детали за нарачката како и код со кој можете да го пратите статусот на нарачката!",
          type: "success",
          isOpen: true,
        });
        setBody("");
        setTimeout(() => {
          clearCart();
        }, 2000);
      } else if (data?.status == "fail" || "error") {
        setPopup({
          title: "Настана грешка",
          msg: data.message,
          type: "fail",
          isOpen: true,
        });
        setBody("");
      }
    }
    if (error) {
      setPopup({
        title: "Настана грешка",
        msg: error.message,
        type: "fail",
        isOpen: true,
      });
      setBody("");
    }
  }, [data, error]);

  // useEffect(() => {
  //   if (data) {
  //     if (data?.status == "success") {
  //       console.log(data);
  //       setModal({ msg: "Успешно", status: "success" });
  //       setBody("");
  //     } else if (data?.status == "fail" || "error") {
  //       setModal({ msg: data.message, status: "fail" });
  //       setBody("");
  //     }
  //   }
  //   if (error) {
  //     setModal({ msg: error.message, status: "fail" });
  //   }
  // }, [data, error]);

  if (!cartItems.items.length) {
    return (
      <>
        <Head>
          <title>BioOil - Шопинг Картичка</title>
        </Head>
        <div className="cart__empty">
          <h3>Вашата корпа е празна !</h3>
          <p>Додајте продукти за да продолжите.</p>

          <button
            onClick={() => router.back()}
            className="basic-cta basic-cta-round"
          >
            Врати се назад
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>BioOil - Шопинг Картичка</title>
      </Head>
      <section className="cart">
        {cartItems.items.length > 0 && (
          <div className="cart_container">
            <div className="cart__products center-content">
              <ul className="cart__bar">
                <li>Информации за продуктот</li>
              </ul>
              <div className="cart__items">
                {cartItems.items.map((item, i) => {
                  return <CartItem key={i} {...item}></CartItem>;
                })}
              </div>
              <div className="cart__resume">
                <h3>Вкупна цена: {cartItems.fullPrice} денари</h3>
              </div>
            </div>
            <div className="cart__form center-content">
              <ul className="cart__bar">
                <li>Лични податоци</li>
              </ul>
              <form onSubmit={handleSubmit}>
                {fields.map((field, i) => {
                  const { name } = field;
                  return (
                    <FormInput
                      key={i}
                      handleInputChange={handleInputChange}
                      {...field}
                      value={formData[name]}
                    ></FormInput>
                  );
                })}
                <button type="submit" className="basic-cta basic-cta-round">
                  Направи нарачка
                </button>
              </form>
              <h3 className="cart__form-warning">
                <span>Напомена:</span> Сите податоци кои се бараат се
                задолжителни и ве молиме обрнете внимание истите да бидат
                веродостојни за да нема никаков проблем при достава на вашата
                нарачка !
              </h3>
            </div>
          </div>
        )}
      </section>
      <Popup setPopup={setPopup} popup={popup}></Popup>
    </>
  );
}
