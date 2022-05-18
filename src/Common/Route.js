import { ROUTE_EVENT_NAME } from "./Constant.js";

const Route = (routing) => {
  window.addEventListener("popstate", routing);
  window.addEventListener(ROUTE_EVENT_NAME, routing);
};

export default Route;
