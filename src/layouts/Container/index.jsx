import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

export const Layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
