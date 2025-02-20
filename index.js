import{a as c,S as l,i as d}from"./assets/vendor-CNpXvI_o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function u(o){return c.get("https://pixabay.com/api/",{params:{key:"48844488-dc89d444e3fc14bdb2114dc7c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>(console.log(r),r.data.hits)).catch(r=>[])}function f(o,r){const s=document.querySelector(r),i=o.map(e=>`
        <li class="gallery-item">
            <a class='gallery-link' href="${e.largeImageURL}">
              <img class="li-img"
              src="${e.webformatURL}" 
              alt="${e.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${e.likes}</td><td>${e.views}</td><td>${e.comments}</td><td>${e.downloads}</tr>
                </table>   
                </div>
              </a>
            </li>
        `).join("");s.insertAdjacentHTML("afterbegin",i),new l(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const m=document.querySelector(".form-find-img"),a=document.querySelector(".message");m.addEventListener("submit",o=>{o.preventDefault(),a.textContent="Wait, the image is loaded";const r=o.currentTarget.elements.input.value.trim();u(r).then(s=>{s.length>0?f(s,".gallery"):d.error({position:"topRight",message:`Sorry, there are no images matching your search ${r}. Please try again!`})}),a.textContent=""});
//# sourceMappingURL=index.js.map
