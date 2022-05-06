import Head from "next/head";
import { Fragment } from "react";
import css from "css/Header.module.scss";

/**
 * Header Component
 */
const Header = () => {
  return (
    <Fragment>
      <Head>
        <title>Infinity icons</title>
        <meta name="description" content="Developed by simple neeraj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={css.row}>
        <div className={css.content}>
          <div className={css.logo}>
            <p>Infinity icons</p>
          </div>
          <div className={css.links}>
            <a href="https://www.twitter.com/simplneeraj">Twitter</a>
            <a href="https://www.github.com/neerajcodes">Github</a>
            <a href="https://www.support.com/neerajcodes">Support Me</a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
