if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let f={};const c=e=>s(e,l),o={module:{uri:l},exports:f,require:c};i[l]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(r(...e),f)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0eb390ef4b5d662bf74e.svg",revision:null},{url:"22f91f10406fff56c690.svg",revision:null},{url:"59d5447d2eae98317b4d.svg",revision:null},{url:"8dc3218ec47c342a6a93.svg",revision:null},{url:"959f6d84ec2bcbaad02f.svg",revision:null},{url:"a93f193a9c15e0d889b3.svg",revision:null},{url:"cdf249efe7f4e11d3ae9.svg",revision:null},{url:"cee53ea7f363e1eb8009.svg",revision:null},{url:"index.html",revision:"66c2566ecaadaf7c6ca5edd9e793c7a8"},{url:"main.css",revision:"e408881742f70acfe139843e86c2f61f"},{url:"main.js",revision:"2d0f123a6af8cf526a80267f8e4f6c94"},{url:"main.js.LICENSE.txt",revision:"1acc6d38e269fd1a6c9d3a09593fd329"}],{})}));
