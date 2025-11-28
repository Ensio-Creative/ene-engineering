import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("/about", "routes/about.tsx"),
route("/contact", "routes/contact.tsx"),
route("/industries", "routes/industries.tsx"),
route("/services/cnc-milling", "routes/services/cnc-milling.tsx"),
route("/services/cnc-turning", "routes/services/cnc-turning.tsx"),
route("/services/5-axis-cnc-machining", "routes/services/5-axis-cnc-machining.tsx"),
route("/services/finishing", "routes/services/finishing.tsx"),
] satisfies RouteConfig;

