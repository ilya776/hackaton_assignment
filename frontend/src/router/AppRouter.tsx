import Layout from "@/layout/Layout";
import { userApi } from "@/modules/user/API/userApi";
import AuthPage from "@/pages/AuthPage.tsx";
import BookPage from "@/pages/BookPage.tsx";
import LibraryPage from "@/pages/LibraryPage";
import ProfilePage from "@/pages/ProfilePage";
import { store } from "@/redux/store";
import { APP_ROUTES_NAMES } from "./AppRouterNames";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AppRouter = [
  {
    element: <AuthPage />,
    path: APP_ROUTES_NAMES.Auth,
  },
  {
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
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
            element: <BookPage />,
            path: APP_ROUTES_NAMES.Book + ":bookId",
          },
        ],
      },
    ],
  },
];

export { AppRouter };
