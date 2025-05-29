import Layout from "@/layout/Layout";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { APP_ROUTES_NAMES } from "./AppRouterNames";
import ProfilePage from "@/pages/ProfilePage";
import AuthPage from "@/pages/AuthPage.tsx";

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
            element: <ProfilePage/>,
            path: APP_ROUTES_NAMES.Profile,
          },
          {
            element: <>Library</>,
            path: APP_ROUTES_NAMES.Root,
          },
          {
            element: <>BookId</>,
            path: APP_ROUTES_NAMES.Book + ":bookId",
          },
        ],
      },
    ],
  },
];

export { AppRouter };
