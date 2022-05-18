import Component from "../../../Common/Component.js";

export default class Item extends Component {
  constructor(args) {
    super(args);
  }

  template() {
    return `<div>${this.$state}</div>`;
  }

  render() {
    this.$target.innerHTML += this.template();
  }
}
