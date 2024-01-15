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

import ToDosRootLayout from "./pages/ToDos/ToDosRoot";
import ToDosPage, { loader as todosLoader } from "./pages/ToDos/ToDos";
import { Children } from "react";
import ToDosDetailPage, {
  loader as todosDetailLoader,
  action as deleteToDosAction,
} from "./pages/ToDos/ToDosDetail";
import EditToDosPage from "./pages/ToDos/EditToDos";
import NewToDosPage, { action as newToDos } from "./pages/ToDos/NewToDos";

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
