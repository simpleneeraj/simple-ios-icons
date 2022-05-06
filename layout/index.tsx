import Toast from "components/toast";
import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

/**
 * Layout Component
 */
const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
      <Toast />
    </React.Fragment>
  );
};

export default Layout;
