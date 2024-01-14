import { Outlet } from "react-router-dom"
import PostsNavigation from "../../components/Posts/PostsNavigation"

const PostsRootLayout = () => {
    return(<>
    <PostsNavigation/>
    <Outlet/> {/* This is the placeholder for child routes */}
    </>)
}
export default PostsRootLayout