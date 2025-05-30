import Layout from "@/layout/Layout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { APP_ROUTES_NAMES } from "./AppRouterNames";
import ProfilePage from "@/pages/ProfilePage";
import AuthPage from "@/pages/AuthPage.tsx";
import LibraryPage from "@/pages/LibraryPage";
import BookPage from "@/pages/BookPage.tsx";
import AllBooks from "@/pages/AllBooks";
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
          },
          {
            element: <LibraryPage />,
            path: APP_ROUTES_NAMES.Root,
          },
          {
            element: <AllBooks />,
            path: APP_ROUTES_NAMES.Library,
          },
          {
            element: <>BookPage</>,
            path: APP_ROUTES_NAMES.Book + "/:bookId",
          },
        ],
      },
    ],
  },
];

export { AppRouter };
