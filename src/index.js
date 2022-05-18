import Route from "./Common/Route.js";
import { routeChange } from "./Common/Util.js";

const init = (() => {
  const route = () => {
    const { pathname } = location;
    if (pathname === "/web/") {
      $target.innerHTML = `<div class="ProductListPage"></div>`;
      const ProductListPage = $target.querySelector(".ProductListPage");
      return new Main(ProductListPage);
    } else if (pathname.includes("/web/products")) {
      const id = pathname.split("/")[3];
      $target.innerHTML = `<div class="ProductDetailPage"></div>`;
      const ProductDetailPage = $target.querySelector(".ProductDetailPage");
      return new Detail(ProductDetailPage, id);
    } else if (pathname === "/web/cart") {
      $target.innerHTML = `<div class="CartPage"></div>`;
      const CartPage = $target.querySelector(".CartPage");
      return new Cart(CartPage);
    } else {
      $target.innerHTML = `<div class="ProductListPage"></div>`;
      const ProductListPage = $target.querySelector(".ProductListPage");
      return new Main(ProductListPage);
    }
  };

  Route(route);
  routeChange();
})();
