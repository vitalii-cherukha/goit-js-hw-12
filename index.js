import{a as S,S as w,i as l}from"./assets/vendor-B7yatFIi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const f=(s,e)=>S.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:s,page:e,per_page:"15",orientation:"horizontal",safesearch:"true",image_type:"photo"}}).then(t=>t.data),a={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},v=new w(".gallery a",{captionsData:"alt",captionDelay:250}),p=s=>{const e=s.map(t=>`<li class="gallery-card">
  <a href="${t.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${t.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${t.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${t.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${t.downloads}</p>
    </li>
  </ul>
</li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",e),v.refresh()},B=()=>{a.galleryList.innerHTML=""},y=()=>{a.loader.classList.remove("is-hidden")},g=()=>{a.loader.classList.add("is-hidden")},L=()=>{a.loadBtn.classList.remove("is-hidden")},d=()=>{a.loadBtn.classList.add("is-hidden")},u={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let i=1,n="",h=0;const b=15,q=async s=>{try{if(s.preventDefault(),B(),d(),i=1,n=s.target.elements["search-text"].value.trim(),n===""){l.error({message:"The input field must be filled in!",position:"topRight"});return}y();const{hits:e,totalHits:t}=await f(n,i);if(h=t,e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e),i*b<h?L():d()}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{g()}},$=async s=>{try{y(),i+=1;const{hits:e}=await f(n,i);p(e),L(),i*b>=h&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const t=u.galleryList.lastElementChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{g()}};u.searchForm.addEventListener("submit",q);u.loadBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
