import{a as c,S as d,i as l}from"./assets/vendor-CLAh-PDR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=o=>c.get("https://pixabay.com/api/",{params:{key:"51362773-b845efdff4000eb7d694ec90c",q:o,orientation:"horizontal",safesearch:"true",image_type:"photo"}}).then(s=>s.data),i={galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),u=o=>{const s=o.map(t=>`<li class="gallery-card">
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
</li>`).join("");i.galleryList.innerHTML=s,m.refresh()},h=()=>{i.galleryList.innerHTML=""},p=()=>{i.loader.classList.remove("is-hidden")},y=()=>{i.loader.classList.add("is-hidden")},g={searchForm:document.querySelector(".js-search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")},L=o=>{o.preventDefault(),h();const s=o.target.elements["search-text"].value.trim();if(s===""){l.error({message:"The input field must be filled in!",position:"topRight"});return}p(),f(s).then(({hits:t})=>{if(t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u(t)}).catch(t=>{l.error({message:`Error: ${t}`,position:"topRight"})}).finally(()=>{y()})};g.searchForm.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
