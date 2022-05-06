import "css/globals.scss";
import Layout from "layout/index";
import store from "store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default RootApp;
