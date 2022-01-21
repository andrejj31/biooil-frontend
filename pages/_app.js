import "../styles/css/style.css";
import { CartProvider } from "../context/cartContext";
import { AuthProvider } from "../context/authContext";
import Layout from "../components/Reusable/Layout";
import { AuthGuard } from "../components/Reusable/AuthGuard";

function MyApp({ Component, pageProps }) {
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
