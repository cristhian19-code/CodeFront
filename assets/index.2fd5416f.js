var h=Object.defineProperty;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))y.call(e,t)&&m(r,t,e[t]);if(u)for(var t of u(e))v.call(e,t)&&m(r,t,e[t]);return r};import{W as E,a as C,b as M,e as a}from"./vendor.41238423.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};W();const w=document.querySelector(".container__spinner");setTimeout(()=>{w.classList.add("disabled")},2500);window.MonacoEnvironment={getWorker(r,e){if(e==="html")return new E;if(e==="css")return new C;if(e==="javascript")return new M}};const l={value:"",theme:"vs-dark",fontSize:15,minimap:!1},f=a.create(document.getElementById("html"),i({language:"html"},l)),p=a.create(document.getElementById("css"),i({language:"css"},l)),g=a.create(document.getElementById("js"),i({language:"javascript"},l));f.onDidChangeModelContent(d);p.onDidChangeModelContent(d);g.onDidChangeModelContent(d);function d(){const r=f.getValue(),e=p.getValue(),t=g.getValue(),s=L(r,e,t);preview.setAttribute("srcdoc",s)}function L(r,e,t){return`
        <!DOCTYPE html>
        <html>
            <head>
              <style>
                ${e}
              </style>
            </head>
            <body>
                <script>${t}<\/script>
                ${r}
            </body>
        </html>
    `}
