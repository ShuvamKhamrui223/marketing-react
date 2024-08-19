import Header from "./Header";
import DetailsPageHeader from "./Header/DetailsPageHeader";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Bradcramp from "../common/Bradcramp";
const DetailsPageLayout = () => {
  return (
    <>
      <Header />
      <DetailsPageHeader />
      {/* <Bradcramp /> */}
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DetailsPageLayout;
