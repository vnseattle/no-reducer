import React from "react";
import { Helmet } from "react-helmet";
const Header = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta name="language" content="en" />
        <meta name="theme-color" content="white" />
      </Helmet>
    </>
  );
};

export default Header;
