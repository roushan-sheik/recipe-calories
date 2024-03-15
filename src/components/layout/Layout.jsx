import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header section  */}
      <Header />
      {/* Main content section  */}
      <main> {children}</main>
      {/* Footer section  */}
      <Footer />;
    </div>
  );
};

export default Layout;
