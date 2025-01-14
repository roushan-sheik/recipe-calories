import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="lg:w-[85%] w-[95%] max-w-[100rem] mx-auto ">
      {/* Header section  */}
      <Header />
      {/* Main content section  */}
      <main> {children}</main>
      {/* Footer section  */}
      <Footer />
    </div>
  );
};

export default Layout;
