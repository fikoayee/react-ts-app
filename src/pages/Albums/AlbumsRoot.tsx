import { Outlet } from "react-router-dom";
import AlbumsNavigation from "../../components/Albums/AlbumsNavigation";

const AlbumsRootLayout = () => {
  return (
    <>
      <AlbumsNavigation />
      <Outlet /> {/* This is the placeholder for child routes */}
    </>
  );
};
export default AlbumsRootLayout;