import { lazy } from "react";
import PokemonType from "./pages/pokemon/type/[type]";
import GlobalLayout from "./_layout";

const Index = lazy(() => import("./pages/index"));
// const PokemonIndex = lazy(() => import("./pages/pokemon/index"));
const PokemonId = lazy(() => import("./pages/pokemon/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      // { path: "/pokemon", element: <PokemonIndex />, index: true },
      { path: "/pokemon/:id", element: <PokemonId /> },
      { path: "/pokemon/type/:type", element: <PokemonType /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/product" },
  { route: "/product/:id" },
  { route: "/product/:type" },
];
