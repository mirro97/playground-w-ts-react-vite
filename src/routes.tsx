
import React from 'react';
import { Outlet } from 'react-router-dom';


const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicProductIndex = React.lazy(() => import('./pages/product/index'));
const DynamicProductId = React.lazy(() => import('./pages/product/[id]'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true },
      { path: '/product', element: <DynamicProductIndex />, index: true },
      { path: '/product/:id', element: <DynamicProductId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/product' },
  { route: '/product/:id' },
]
