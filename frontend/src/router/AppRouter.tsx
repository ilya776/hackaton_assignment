import Layout from "@/layout/Layout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { APP_ROUTES_NAMES } from "./AppRouterNames";
import AuthPage from "@/pages/AuthPage.tsx";
import BookPage from "@/pages/BookPage.tsx";
import LibraryPage from "@/pages/LibraryPage.tsx";

const AppRouter = [
  {
    element: <AuthPage/>,
    path: APP_ROUTES_NAMES.Auth,
  },
  {
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            element: <>Profile</>,
            path: APP_ROUTES_NAMES.Profile,
          },
          {
            element: <LibraryPage/>,
            path: APP_ROUTES_NAMES.Root,
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
