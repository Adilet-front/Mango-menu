import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("pages/home.tsx"),
	route("/admin", "./pages/admin.tsx")
] satisfies RouteConfig;
// pages settings