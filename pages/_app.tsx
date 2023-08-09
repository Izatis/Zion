import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import "@/styles/antd.scss";
import "@/styles/MyModal.scss";

import { Provider } from "react-redux";
import store from "@/redux/store";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
