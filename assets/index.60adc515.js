import{j as c,F as g,a as h,V as u,b as f,M as p,r as d,R as x,c as b}from"./vendor.bbe7d1a2.js";const y=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};y();var k="/assets/hero.27f6d285.jpg";const e=c.exports.jsx,n=c.exports.jsxs,w=c.exports.Fragment;function m({children:t,id:a}){return e("h1",{id:a&&a,className:"text-3xl font-bold mb-5 text-indigo-600 dark:text-indigo-500 ",children:t})}function N(){return n("div",{className:"flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12",children:[n("div",{className:"w-full md:w-6/12",children:[e(m,{children:"About Me"}),e("p",{className:"text-md text-gray-600 dark:text-gray-300",children:"Aspiring computer science student with a passion for programming and technology, and a keen eye for design. Skilled in JavaScript, Python, and C++ with a solid understanding of data structures and algorithms. Seeking opportunities to enhance my technical and design skills and gain practical experience in the field. Dedicated to staying informed of industry advancements and eager to participate in innovative projects. Let's connect and grow together!"}),e("a",{href:"mailto:mergen.ganbaatar@gmail.com",className:"block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500",children:"mergen.ganbaatar@gmail.com"})]}),e("img",{src:k,alt:"Mergen",className:"w-full md:w-6/12 rounded-lg object-cover"})]})}function v(){return n("div",{className:"py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg",children:[e("p",{className:"block text-xl md:text-2xl font-semibold",children:"Let's connect and grow together!"}),n("div",{className:"flex justify-center my-2",children:[e("a",{href:"https://github.com/e-mergen-c?tab=repositories",children:e(g,{size:30})}),e("a",{className:"mx-3",href:"https://www.linkedin.com/in/e-mergen-c/",children:e(h,{size:30})})]}),n("p",{className:"text-xs mt-2 text-gray-500",children:["\xA9 Mergen Ganbaatar ",new Date().getFullYear(),"."]})]})}function S(){return e("div",{id:"hero",className:"flex items-center justify-center flex-col py-20",children:n("div",{className:"text-center",children:[e("h1",{className:"text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold",children:"Hi, I'm Mergen Ganbaatar"}),n("p",{className:"text-md md:text-xl max-w-md mb-8 text-gray-600 dark:text-gray-300",children:["Computer Science student at St Cloud State University"," "]}),e("a",{href:"#works",className:"inline-block mt-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md ",children:"Download CV"})]})})}var j=[{title:"Coding Languages",icon:e(u,{className:"w-full h-full"}),description:"JavaScript, Python, C++"},{title:"Frameworks",icon:e(f,{className:"w-full h-full"}),description:"Node.js, Express.js, React.js, RESTful API, jQuery, MongoDB, Mongoose, Tailwind CSS"},{title:"Tools",icon:e(p,{className:"w-full h-full"}),description:"Jira, Git, npm, Figma, Adobe Creative Suite, MS Office Suite"}];function M({title:t,icon:a,description:o}){return n("div",{className:"bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5",children:[e("div",{className:"text-gray-800 dark:text-gray-300 w-6 h-6 mb-3",children:a}),e("h1",{className:"font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1",children:t}),e("p",{className:"text-md text-gray-600 dark:text-gray-300",children:o})]})}function F(){return n("div",{className:"py-12",children:[e(m,{children:"Technologies"}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:j.map(t=>e(M,{title:t.title,icon:t.icon,description:t.description},t.title))})]})}var C=[{title:"Task Manager - MERN app with Authentication",imgUrl:"https://user-images.githubusercontent.com/110077044/219787546-2ccdf3f3-a43b-4830-a41b-90098e3f5341.png",tech:["React JS","JWT","Cookies","MongoDB","Mongoose"],workUrl:"https://github.com/e-mergen-c/task-manager"},{title:"Portfolio Website",imgUrl:"https://user-images.githubusercontent.com/110077044/219799030-7825117d-1bdb-4d1c-a3a5-62fc8b8de91a.jpg",tech:["React JS","Tailwind CSS"],workUrl:"https://github.com/e-mergen-c/portfolio"}];function T({imgUrl:t,title:a,tech:o,workUrl:s}){return n("a",{href:s,target:"_blank",rel:"noreferrer",className:"bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden",children:[e("img",{src:t,alt:"work",className:"w-full h-36 md:h-48 object-cover"}),n("div",{className:"w-full p-5 text-gray-600 dark:text-gray-300 ",children:[e("h3",{className:"text-lg md:text-xl mb-2 md:mb-3 font-semibold",children:a}),e("p",{className:"flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ",children:o.map(r=>e("span",{className:"inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md",children:r},r))})]})]})}function L(){return n("div",{className:"py-12",children:[e(m,{id:"works",children:"Featured Works"}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:C.map(t=>e(T,{imgUrl:t.imgUrl,title:t.title,tech:t.tech,workUrl:t.workUrl},t.title))})]})}function E(){const[t,a]=d.exports.useState(null);d.exports.useEffect(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches?a("dark"):a("light")},[]);const o=()=>{a(t==="dark"?"light":"dark")};return d.exports.useEffect(()=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),n(w,{children:[e("button",{type:"button",onClick:o,className:"fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md",children:t==="dark"?"\u{1F319}":"\u{1F31E}"}),e("div",{className:"bg-white dark:bg-slate-900 min-h-screen font-inter ",children:n("div",{className:"max-w-5xl w-11/12 mx-auto",children:[e(S,{}),e(F,{}),e(L,{}),e(N,{}),e(v,{})]})})]})}x.render(e(b.StrictMode,{children:e(E,{})}),document.getElementById("root"));
