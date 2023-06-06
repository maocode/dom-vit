(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=()=>{let o=`<div class="row">
    <div class="col-md-8 mt-3">
    <div class="alert alert-danger alert-dismissible fade show">
    Campo vacio..
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
    </div>`;document.getElementById("msgNuevo").innerHTML=o},c=()=>{let o=`<div class="row">
    <div class="col-md-8 mt-3">
    <div class="alert alert-info fade show">
    Debe digitar Números
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    </div>
    </div>`;document.getElementById("msgNuevo").innerHTML=o},u=()=>{const o=document.querySelector("#resultado");let s=parseInt(numerouno.value),n=parseInt(numerodos.value),r=0;numerouno.value.length===0||numerodos.value.length===0?(a(),console.log("Campo vacio")):(r=s+n,isNaN(r)?c():o.innerText=r)},d=document.querySelector("#btnSuma"),m=document.querySelector("#resultado"),i=document.querySelector("#numerouno"),f=document.querySelector("#numerodos"),v=document.querySelector("#btnLimpiar");d.addEventListener("click",()=>{u()});v.addEventListener("click",()=>{i.value="",f.value="",m.innerText="",i.focus(),document.getElementById("msgNuevo").innerHTML=""});
