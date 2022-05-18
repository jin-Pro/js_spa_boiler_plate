import { ROUTE_EVENT_NAME } from "./Constant.js";

export const routeChange = (url) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_EVENT_NAME));
};
