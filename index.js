import{a as l,i as c,S as d}from"./assets/vendor-DH2CaQaJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function n(o){return l.get("https://pixabay.com/api/",{params:{key:"48844488-dc89d444e3fc14bdb2114dc7c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log(t),t.data.hits)).catch(t=>(c.error({position:"topRight",message:`Sorry, there are no images matching your search ${o}. Please try again!`}),[]))}n("/cat");function m(o,t){const i=document.querySelector(t),a=o.map(r=>`
        <li class="gallery-item">
            <a class='gallery-link' href="${image.largeImageURL}">
              <img class="li-img"
              src="${image.webformatURL}" 
              alt="${image.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${image.likes}</td><td>${image.views}</td><td>${image.comments}</td><td>${image.downloads}</tr>
                </table>   
                </div>
              </a>
            </li>
        `).join("");i.insertAdjacentElement("afterbegin",a),new d(t+" a",{captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector(".form-find-img");u.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements.input.value;n(t).then(i=>{i.length>0?m(i,".gallery"):console.warn("No images found")})});
//# sourceMappingURL=index.js.map
