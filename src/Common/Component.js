export default class Component {
  $target;
  $state;

  constructor($target, $state, type, fn) {
    this.$target = $target;
    this.$state = $state;

    this.render();
    this.setEvent(type, fn);
    this.mount();
  }

  setState(newState) {
    this.$state = { ...newState };
    this.render();
  }

  setEvent(type, fn) {
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

  subscribe(store) {
    store.subscribe(this.$target.render());
  }
}
