import Detail from "../Component/Detail/Detail.js";
import Main from "../Component/Main/Main.js";
import { ROUTE_EVENT_NAME } from "./Constant.js";

export const Route = (routing) => {
  window.addEventListener("popstate", routing);
  window.addEventListener(ROUTE_EVENT_NAME, routing);
};

export const MAP_CONTAINER = {
  "/": {
    html: `<div class="MainPage"></div>`,
    className: ".MainPage",
    page: ($target) => new Main({ $target }),
  },
  "/detail": {
    html: `<div class="DetailPage"></div>`,
    className: ".DetailPage",
    page: ($target) => new Detail({ $target }),
  },
};

export const routeChange = (url) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_EVENT_NAME));
};
