import Component from "../../Common/Component.js";
import { routeChange } from "../../Common/Route.js";
import Item from "./Item/Item.js";

export default class Main extends Component {
  constructor(args) {
    super(args);
  }

  template() {
    return `<div class="mainBody">This is MainPage</div>`;
  }

  mount() {
    const $nextTarget = this.$target.querySelector(".mainBody");
    new Item({
      $target: $nextTarget,
      $state: "hihi",
      type: "click",
      fn: () => routeChange("/detail"),
    });
  }
}
