import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("/admin", "./pages/admin.tsx"),
  route("/menu", "./pages/menu.tsx"),
] satisfies RouteConfig;
// pages settings
