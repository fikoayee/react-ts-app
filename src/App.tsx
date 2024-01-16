import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import PostsPage, { loader as postsLoader } from "./pages/Posts/Posts";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import PostDetailPage, {
  loader as postDetailLoader,
  action as deletePostAction,
} from "./pages/Posts/PostDetail";
import PostsRootLayout from "./pages/Posts/PostsRoot";
import NewPostPage from "./pages/Posts/NewPost";
import EditPostPage from "./pages/Posts/EditPost";

// import for todos
import ToDosRootLayout from "./pages/ToDos/ToDosRoot";
import ToDosPage, { loader as todosLoader } from "./pages/ToDos/ToDos";
import ToDosDetailPage, {
  loader as todosDetailLoader,
  action as deleteToDosAction,
  action as updateToDosAction,
} from "./pages/ToDos/ToDosDetail";
import EditToDosPage from "./pages/ToDos/EditToDos";
import NewToDosPage from "./pages/ToDos/NewToDos";
import { action as addAndEditToDosAction } from "./components/ToDos/ToDosForm";

// import for users
import { action as addAndEditPostAction } from "./components/Posts/PostForm";
import UsersPage, {loader as usersLoader} from "./pages/Users/Users";
import UserDetailPage, {loader as userDetailLoader, action as deleteUserAction} from "./pages/Users/UserDetail";
import { action as addAndEditUsertAction } from "./components/Users/UserForm";
import EditUserPage from "./pages/Users/EditUser";
import NewUserPage from "./pages/Users/NewUser";

// import for albums
import AlbumsRootLayout from "./pages/Albums/AlbumsRoot";
import AlbumsPage, { loader as albumsLoader } from "./pages/Albums/Albums";
import AlbumsDetailPage, {
  loader as albumsDetailLoader,
  action as deleteAlbumsAction,
} from "./pages/Albums/AlbumsDetail";
import EditAlbumPages from "./pages/Albums/EditAlbums";
import NewAlbumPages, { action as newAlbum } from "./pages/Albums/NewAlbums";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        element: <PostsRootLayout />,
        children: [
          {
            index: true,
            element: <PostsPage />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            id: "post-detail",
            loader: postDetailLoader,
            children: [
              {
                index: true,
                element: <PostDetailPage />,
                action: deletePostAction,
              },
              {
                path: "edit",
                element: <EditPostPage />,
                action: addAndEditPostAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewPostPage />,
            action: addAndEditPostAction,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <UsersPage />,
            loader: usersLoader,
          },
          {
            path: ":userId",
            id: "user-detail",
            loader: userDetailLoader,
            children: [
              {
                index: true,
                element: <UserDetailPage/>,
                action: deleteUserAction,
              },
              {
                path: "edit",
                element: <EditUserPage/>,
                action: addAndEditUsertAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewUserPage/>,
            action: addAndEditUsertAction,
          },
        ],
      },
      {
        path: "todos",
        element: <ToDosRootLayout />,
        children: [
          {
            index: true,
            element: <ToDosPage />,
            loader: todosLoader,
          },
          {
            path: ":todoId",
            id: "todos-detail",
            loader: todosDetailLoader,
            children: [
              {
                index: true,
                element: <ToDosDetailPage />,
                action: deleteToDosAction,
              },
              { 
                path: "edit",
                element: <EditToDosPage /> ,
                action: addAndEditToDosAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewToDosPage />,
            action: addAndEditToDosAction,
          },
        ],
      },
      {
        path: "albums",
        element: <AlbumsRootLayout />,
        children: [
          {
            index: true,
            element: <AlbumsPage />,
            loader: albumsLoader,
          },
          {
            path: ":albumId",
            id: "albums-detail",
            loader: albumsDetailLoader,
            children: [
              {
                index: true,
                element: <AlbumsDetailPage />,
                action: deleteAlbumsAction,
              },
              { path: "edit", element: <EditAlbumPages /> },
            ],
          },
          { path: "new", element: <NewAlbumPages />, action: newAlbum},
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
