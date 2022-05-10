class Route {
  constructor() {
    window.addEventListener("popstate", this.render);
  }

  push(url) {
    history.pushState(null, null, url);
    this.render(url);
  }

  pop() {
    history.back();
    this.render();
  }

  render(url = "/") {
    switch (url) {
      case "/":
        return;
      default:
        return;
    }
  }
}

export const route = new Route();
