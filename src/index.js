import { Route, MAP_CONTAINER, routeChange } from "./Common/Route.js";

(() => {
  const $target = document.querySelector("#root");

  const route = () => {
    const { pathname } = location;

    const { html, className, page } = MAP_CONTAINER[pathname];
    $target.innerHTML = html;
    const $nextTarget = $target.querySelector(className);
    page($nextTarget);
  };

  Route(route);
  routeChange();
})();
