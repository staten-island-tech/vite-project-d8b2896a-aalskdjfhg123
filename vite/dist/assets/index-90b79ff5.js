(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(i,t){i.addEventListener("click",function(){document.body.classList.remove("funky"),document.body.classList.add("tater"),t.addEventListener("click",function(){document.body.classList.remove("tater"),document.body.classList.add("funky")})})}const c={container:document.querySelector(".container"),buttonF:document.querySelector(".buttonf"),buttonH:document.querySelector(".buttont"),buttonV1:document.querySelector(".v1"),buttonClear:document.querySelector(".clear")},s=[{card:`<div class="card">
    <img src="img/OIP.jpg" alt="" class="card-img">
      <div class="card-content">
        <p class="card-title">uhh</p>
        <p class="card-description">hi</p>
      </div> `,version:1,availability:!0,type:"regular",price:40},{card:`<div class="card">
    <img src="https://th.bing.com/th/id/OIP.91xCUVmS1MD9miqMLuTVdQHaJQ?w=150&h=187&c=7&r=0&o=5&pid=1.7" class="card-img" alt="">
    <h2 class="card-title">ermm </h2>
    <h3 class="card-price">hi</h3>
    </div> `,version:1,availability:!1,type:"deka",price:110},{card:`<div class="card">
    <img src="https://th.bing.com/th/id/OIP.xt0QelIC-80GxzIQp8tgdwHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7" class="card-img" alt="">

    <h2 class="card-title">uh </h2>
    <h3 class="card-price">hi</h3>
    </div> `,version:1.5,availability:!1,type:"strap",price:20},{card:`<div class="card">
    <img src="https://th.bing.com/th/id/OIP.zsYT8dCt6GdI5f0IiivbQgHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7" class="card-img" alt="">

    <h2 class="card-title">uh </h2>
    <h3 class="card-price">hi</h3>
    </div> `,version:1.5,availability:!0,type:"regular",price:40}];function l(i){c.container.innerHTML="",i.forEach(t=>c.container.insertAdjacentHTML("beforeend",t.card)),console.log("rannone")}function u(i){c.container.innerHTML="",i.filter(t=>t.version==1).forEach(t=>c.container.insertAdjacentHTML("beforeend",t.card))}d(c.buttonH,c.buttonF);c.buttonClear.addEventListener("click",function(){l(s)});c.buttonV1.addEventListener("click",function(){u(s)});
