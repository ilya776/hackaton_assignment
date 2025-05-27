import { ProtectedRoutes } from "./ProtectedRoutes";
import { ROUTES_NAMES } from "./routesNames";

const AppRouter = [
  {
    element: <>Auth</>,
    path: ROUTES_NAMES.Auth,
  },
  {
    element: <ProtectedRoutes/>,
    children: [
      {
        element: <>Profile</>,
        path: ROUTES_NAMES.Profile,
      },
      {
        element: <>Library</>,
        path: ROUTES_NAMES.Root,
      },
      {
        element: <>Book</>,
        path: ROUTES_NAMES.Book + ":bookId",
      },
    ]
  }
];

export { AppRouter };
