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
import NewPostPage, { action as newPost } from "./pages/Posts/NewPost";
import EditPostPage from "./pages/Posts/EditPost";

// import for todos
import ToDosRootLayout from "./pages/ToDos/ToDosRoot";
import ToDosPage, { loader as todosLoader } from "./pages/ToDos/ToDos";
import ToDosDetailPage, {
  loader as todosDetailLoader,
  action as deleteToDosAction,
} from "./pages/ToDos/ToDosDetail";
import EditToDosPage from "./pages/ToDos/EditToDos";
import NewToDosPage, { action as newToDos } from "./pages/ToDos/NewToDos";
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
              { path: "edit", element: <EditPostPage /> },
            ],
          },
          { path: "new", element: <NewPostPage />, action: newPost },
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
              { path: "edit", element: <EditToDosPage /> },
            ],
          },
          { path: "new", element: <NewToDosPage />, action: newToDos },
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
            id: "album-detail",
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
