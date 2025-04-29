import React from "react";
import Header from "@/components/Header/marketHeader/page";
import Footer from "@/components/Footer/marketFooter/page";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
