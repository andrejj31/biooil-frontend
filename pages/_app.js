import "../styles/css/style.css";
import { CartProvider } from "../context/cartContext";
import { AuthProvider } from "../context/authContext";
import Layout from "../components/Reusable/Layout";
import { AuthGuard } from "../components/Reusable/AuthGuard";
import Error from "next/error";
import { DefaultSeo } from "next-seo";

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
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          url: "https://biooil-frontend.vercel.app/",
          site_name: "BioOil",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
    </>
  );
}

export default MyApp;
