import { APP_ROUTES_NAMES } from "@/router/AppRouterNames";
import type { FC } from "react";
import { Link } from "react-router";

const routes = [
  {
    to: APP_ROUTES_NAMES.Root,
    name: "Бібліотека",
  },
  {
    to: APP_ROUTES_NAMES.Profile,
    name: "Профіль",
  },
];

const Navigation:FC = () => {
  return (
    <nav className="flex justify-end gap-3 xs:gap-5 md:gap-8 items-center font-semibold">
      {routes.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.to}
            className="cursor-pointer text-gr-darkest text-2xl"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
