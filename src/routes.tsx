import { lazy } from "react";
import GlobalLayout from "./_layout";

const Index = lazy(() => import("./pages/index"));
const ProductIndex = lazy(() => import("./pages/product/index"));
const ProdictId = lazy(() => import("./pages/product/[id]"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/product", element: <ProductIndex />, index: true },
      { path: "/product/:id", element: <ProdictId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/product" },
  { route: "/product/:id" },
];
