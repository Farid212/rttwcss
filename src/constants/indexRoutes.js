import { lazy } from "react";

const indexRoutes = [
  {
    path: "/pages/landing",
    component: lazy(() => import("../pages/Landing")),
  },
  {
    path: "/pages/login",
    component: lazy(() => import("../pages/Login")),
  },
  {
    path: "/pages/profile",
    component: lazy(() => import("../pages/Profile")),
  },
  {
    path: "/pages/register",
    component: lazy(() => import("../pages/Register")),
  },
  {
    path: "/views/admin/dashboard",
    component: lazy(() => import("../views/admin/Dashboard")),
  },
  {
    path: "/views/admin/maps",
    component: lazy(() => import("../views/admin/Maps")),
  },
  {
    path: "/views/admin/settings",
    component: lazy(() => import("../views/admin/Settings")),
  },
  {
    path: "/views/admin/tables",
    component: lazy(() => import("../views/admin/Tables")),
  },
  {
    path: "/views/auth/login",
    component: lazy(() => import("../views/auth/Login")),
  },
  {
    path: "/views/auth/register",
    component: lazy(() => import("../views/auth/Register")),
  },
  {
    path: "/views",
    component: lazy(() => import("../views/Index")),
  },
  {
    path: "/views/landing",
    component: lazy(() => import("../views/Landing")),
  },
  {
    path: "/views/profile",
    component: lazy(() => import("../views/Profile")),
  },
];

export default indexRoutes;
