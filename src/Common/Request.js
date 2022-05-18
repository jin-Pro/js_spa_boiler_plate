const cache = {};

export const request = async (url, method = { method: "GET" }) => {
  try {
    if (!url) return [];
    if (url in cache) return cache[url];

    const res = await fetch(url, method);

    if (res.ok) {
      const data = await res.json();
      cache[url] = data;
      return data;
    }

    throw new Error("API 통신 에러");
  } catch (e) {
    alert(e);
  }
};
