(()=>{"use strict";const t={};class e{$target;$state;constructor({$target:t,$state:e,type:s,fn:a,url:n,method:r}){this.$target=t,this.init({$state:e,type:s,fn:a,url:n,method:r})}async init({$state:t,type:e,fn:s,url:a,method:n}){await this.setUp({$state:t,url:a,method:n}),this.render(),this.setEvent({type:e,fn:s}),this.mount()}async setUp({$state:e,url:s,method:a}){const n=e||await(async(e,s={method:"GET"})=>{try{if(!e)return[];if(e in t)return t[e];const a=await fetch(e,s);if(a.ok){const s=await a.json();return t[e]=s,s}throw new Error("API 통신 에러")}catch(t){alert(t)}})(s,a);this.$state=n}setState(t){this.$state=t,this.render()}setEvent({type:t,fn:e}){this.$target.addEventListener(t,e)}mount(){}template(){return""}render(){this.$target.innerHTML=this.template()}}class s extends e{constructor(t){super(t)}template(){return`<div>${this.$state}</div>`}render(){this.$target.innerHTML+=this.template()}}class a extends e{constructor(t){super(t)}template(){return'<div class="detailBody">This is DetailPage</div>'}mount(){const t=this.$target.querySelector(".detailBody");new s({$target:t,$state:"detail~~",type:"click",fn:()=>c("/")})}}class n extends e{constructor(t){super(t)}template(){return`<div>${this.$state}</div>`}render(){this.$target.innerHTML+=this.template()}}class r extends e{constructor(t){super(t)}template(){return'<div class="mainBody">This is MainPage</div>'}mount(){const t=this.$target.querySelector(".mainBody");new n({$target:t,$state:"hihi",type:"click",fn:()=>c("/detail")})}}const i="route",o={"/":{html:'<div class="MainPage"></div>',className:".MainPage",page:t=>new r({$target:t})},"/detail":{html:'<div class="DetailPage"></div>',className:".DetailPage",page:t=>new a({$target:t})}},c=t=>{history.pushState(null,null,t),window.dispatchEvent(new CustomEvent(i))};(()=>{const t=document.querySelector("#root");var e;e=()=>{const{pathname:e}=location,{html:s,className:a,page:n}=o[e];t.innerHTML=s,n(t.querySelector(a))},window.addEventListener("popstate",e),window.addEventListener(i,e),c()})()})();