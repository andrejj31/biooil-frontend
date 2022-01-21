import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import Layout from "./Layout";

export function AuthGuard({ children }) {
  const { user, initializing } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [initializing, router, user]);

  if (initializing) {
    return (
      <Layout>
        <Spinner></Spinner>
      </Layout>
    );
  }

  if (!initializing && user) {
    return <>{children}</>;
  }

  return null;
}
