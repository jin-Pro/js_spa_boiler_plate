import Component from "../../Common/Component.js";
import { routeChange } from "../../Common/Route.js";
import Item from "./Item/Item.js";

export default class Detail extends Component {
  constructor(args) {
    super(args);
  }

  template() {
    return `<div class="detailBody">This is DetailPage</div>`;
  }

  mount() {
    const $nextTarget = this.$target.querySelector(".detailBody");
    new Item({
      $target: $nextTarget,
      $state: "detail~~",
      type: "click",
      fn: () => routeChange("/"),
    });
  }
}
