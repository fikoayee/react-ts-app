import { Outlet } from "react-router-dom"
import UserNavigation from "../../components/Users/UserNavigation"


const UsersRootLayout = () => {
    return(<>
    <UserNavigation/>
    <Outlet/> {/* This is the placeholder for child routes */}
    </>)
}
export default UsersRootLayout