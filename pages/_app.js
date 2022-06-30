import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { ContextProvider } from "../context/ContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
