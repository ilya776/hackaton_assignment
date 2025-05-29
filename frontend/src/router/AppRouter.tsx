import Layout from "@/layout/Layout";
import { userApi } from "@/modules/user/API/userApi";
import AuthPage from "@/pages/AuthPage.tsx";
import BookPage from "@/pages/BookPage.tsx";
import LibraryPage from "@/pages/LibraryPage";
import ProfilePage from "@/pages/ProfilePage";
import { store } from "@/redux/store";
import { APP_ROUTES_NAMES } from "./AppRouterNames";
import { ProtectedRoutes } from "./ProtectedRoutes";
import AllBooks from "@/pages/AllBooks.tsx";

const AppRouter = [
  {
    element: <AuthPage />,
    path: APP_ROUTES_NAMES.Auth,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <ProfilePage />,
            path: APP_ROUTES_NAMES.Profile,
            loader: async () => {
              const result = store.dispatch(userApi.endpoints.getUser.initiate());
              await result;
              result.unsubscribe();
            },
          },
          {
            element: <LibraryPage />,
            path: APP_ROUTES_NAMES.Root,
          },
          {
            element: <AllBooks/>,
            path: APP_ROUTES_NAMES.Library,
          },
          {
            element: <BookPage/>,
            path: APP_ROUTES_NAMES.Book + ":bookId",
          },
        ],
      },
    ],
  },
];

export { AppRouter };
