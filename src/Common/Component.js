import { request } from "./Request";

export default class Component {
  $target;
  $state;

  constructor({ $target, $state, type, fn, url, method }) {
    this.$target = $target;
    this.init({ $state, type, fn, url, method });
  }

  async init({ $state, type, fn, url, method }) {
    await this.setUp({ $state, url, method });
    this.render();
    this.setEvent({ type, fn });
    this.mount();
  }

  async setUp({ $state, url, method }) {
    const data = $state ? $state : await request(url, method);
    this.$state = data;
  }

  setState(newState) {
    this.$state = newState;
    this.render();
  }

  setEvent({ type, fn }) {
    this.$target.addEventListener(type, fn);
  }

  mount() {
    // ... custome
  }

  template() {
    // ... custome
    return ``;
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  // subscribe(store) {
  //   store.subscribe(this.$target.render());
  // }
}
