# js_spa

Vanilla JS for SPA

### Component

- $target => Parent Dom Node
- $state => Dom Node State
- type => Dom Node Event Type ( ex : 'click'... )
- fn => Dom Node Event ( ex : (e) => alert(e.target.value) )
- url => if Dom Node don't have $state => request url
- method => if Dom Node don't have $state => request method => default { method : "GET" }

---

### Route

- Route => window.addEvent
  - popstate
  - customEvent
- MAP_CONTAINER => {</br>
  key : url,</br>
  value : data ({</br>
  html : target Node, </br>
  className : target Node's className,</br>
  page : Rendering Page</br>
  })
  }
- routeChange => event => url change(history.pushState) => dispatch customEvent

---

### Request

- if url is undefined, return []
- if url is in cache, return cache[url]
- return fetch(url)
- default method = { method : "GET" }

---

### Webpack

- HTTP 요청 횟수 제한 => 성능저하
