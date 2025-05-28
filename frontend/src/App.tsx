import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { AppRouter } from "./router/AppRouter";

const router = createBrowserRouter(AppRouter);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
