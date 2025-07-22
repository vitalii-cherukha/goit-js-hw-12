import{a as w,S,i as l}from"./assets/vendor-B7yatFIi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=async(s,e)=>(await w.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:s,page:e,per_page:15,orientation:"horizontal",safesearch:!0,image_type:"photo"}})).data,a={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},v=new S(".gallery a",{captionsData:"alt",captionDelay:250}),p=s=>{const e=s.map(o=>`<li class="gallery-card">
  <a href="${o.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${o.webformatURL}"
      alt="${o.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${o.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${o.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${o.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${o.downloads}</p>
    </li>
  </ul>
</li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",e),v.refresh()},B=()=>{a.galleryList.innerHTML=""},y=()=>{a.loader.classList.remove("is-hidden")},g=()=>{a.loader.classList.add("is-hidden")},L=()=>{a.loadBtn.classList.remove("is-hidden")},d=()=>{a.loadBtn.classList.add("is-hidden")},h={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let i=1,n="",u=0;const b=15,q=async s=>{try{if(s.preventDefault(),B(),d(),i=1,n=s.target.elements["search-text"].value.trim(),n===""){l.error({message:"The input field must be filled in!",position:"topRight"});return}y();const{hits:e,totalHits:o}=await f(n,i);if(u=o,e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e),i*b<u?L():d()}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{g()}},$=async s=>{try{y(),i+=1;const{hits:e}=await f(n,i);p(e),L(),i*b>=u&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const o=h.galleryList.lastElementChild.getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{g()}};h.searchForm.addEventListener("submit",q);h.loadBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
