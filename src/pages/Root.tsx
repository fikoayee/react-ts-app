import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation"

const RootLayout = () => {

  

  return (
    <>
      <MainNavigation />
      <main>
      <Outlet /> {/* This is the placeholder for child routes */}
      </main>
     
    </>
  );
};
export default RootLayout;
