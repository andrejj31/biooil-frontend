import "../styles/css/style.css";
import { CartProvider } from "../context/cartContext";
import { AuthProvider } from "../context/authContext";
import Layout from "../components/Reusable/Layout";
import { AuthGuard } from "../components/Reusable/AuthGuard";
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  // if (pageProps.status !== "success" && Object.keys(pageProps).length !== 0) {
  //   console.log("error");
  //   return (
  //     <Error
  //       statusCode={pageProps.error.statusCode}
  //       title={pageProps.message}
  //     />
  //   );
  // }
  return (
    <AuthProvider>
      <CartProvider>
        {Component.requireAuth ? (
          <AuthGuard>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthGuard>
        ) : (
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        )}
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
