const cache = {};

export const request = (url, method = "GET") => {
  if (url in cache) return cache[url];

  return fetch(url, { method })
    .then((res) => res.json())
    .then((res) => {
      cache[url] = res;
      return res;
    })
    .catch((e) => new Error(e));
};
