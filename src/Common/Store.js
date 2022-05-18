// class Store {
//   #state;
//   #observers = new Set();

//   constructor(state) {
//     this.$state = state;
//     Object.keys(state).forEach((key) =>
//       Object.defineProperties(this, key, {
//         get: () => this.$state[key],
//       })
//     );
//   }

//   subscribe(callback) {
//     this.#observers.add(callback);
//   }

//   setState(newState) {
//     this.$state = { ...this.$state, ...newState };
//     this.notify();
//   }

//   notify() {
//     this.#observers.forEach((fn) => fn());
//   }
// }

// export const store = new Store();
