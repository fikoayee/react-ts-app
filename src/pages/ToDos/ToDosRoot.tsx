import { Outlet } from "react-router-dom"
import ToDosNavigation from "../../components/ToDos/ToDosNavigation"

const ToDosRootLayout = () => {
    return(<>
    <ToDosNavigation/>
    <Outlet/> {/* This is the placeholder for child routes */}
    </>)
}
export default ToDosRootLayout