import { createBrowserRouter } from "react-router-dom";

import { Outlet } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import Main from "../pages/Main";

function Layout() {
  return (
    <>
      <SearchInput />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  { path: "*", element: <>404</> },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: null,
      },
      {
        path: "/s/photos/:searchvalue",
        element: <Main />,
      },
    ],
  },
]);
