import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../contexts/Auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"shop now - Retalio App"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
