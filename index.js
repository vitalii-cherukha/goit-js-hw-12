import{a as w,S,i as l}from"./assets/vendor-B7yatFIi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p=async(s,e)=>(await w.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:s,page:e,per_page:h,orientation:"horizontal",safesearch:!0,image_type:"photo"}})).data,h=15,a={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},B=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y=s=>{const e=s.map(r=>`<li class="gallery-card">
  <a href="${r.largeImageURL}">
    <img
      class="js-gallery-img"
      src="${r.webformatURL}"
      alt="${r.tags}"
      width="360"
  /></a>
  <ul class="info-list">
    <li class="info-item">
      <h3 class="info-item-title">Likes</h3>
      <p class="info-item-text">${r.likes}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Views</h3>
      <p class="info-item-text">${r.views}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Comments</h3>
      <p class="info-item-text">${r.comments}</p>
    </li>
    <li class="info-item">
      <h3 class="info-item-title">Downloads</h3>
      <p class="info-item-text">${r.downloads}</p>
    </li>
  </ul>
</li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",e),B.refresh()},q=()=>{a.galleryList.innerHTML=""},g=()=>{a.loader.classList.remove("is-hidden")},L=()=>{a.loader.classList.add("is-hidden")},b=()=>{a.loadBtn.classList.remove("is-hidden")},u=()=>{a.loadBtn.classList.add("is-hidden")},c={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let i=1,n="",m=0;const $=async s=>{try{if(s.preventDefault(),q(),u(),i=1,n=s.target.elements["search-text"].value.trim(),n===""){l.error({message:"The input field must be filled in!",position:"topRight"});return}g();const{hits:e,totalHits:r}=await p(n,i);if(m=r,e.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e),i*h<m?b():u()}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{L()}},v=async s=>{try{g(),s.target.blur(),i+=1;const{hits:e}=await p(n,i);y(e),b(),i*h>=m&&(c.loadBtn.removeEventListener("click",v),u(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const r=c.galleryList.lastElementChild.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}catch(e){l.error({message:`Error: ${e}`,position:"topRight"})}finally{L()}};c.searchForm.addEventListener("submit",$);c.loadBtn.addEventListener("click",v);
//# sourceMappingURL=index.js.map
