import{_ as h}from"./Typing.0ec3eb4f.js";import{o as l,c as g,a as n,t as o,f as c,e as f,r as _,w as x,b as u,d,F as k,g as v,h as y,_ as w}from"./index.a0b874eb.js";function r(e=32){const a="abcdefghijklmnopqrstuvwxyz ";let t="";for(let s=0;s<e;s++)t+=a[Math.floor(Math.random()*a.length)];return t}const b={class:"text-2xl"},j=n("br",null,null,-1),$=n("br",null,null,-1),N=n("br",null,null,-1),S={__name:"Project",props:{name:{type:String,default:"Project"},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:""},tags:{type:Array,default:()=>[]}},setup(e){return(a,t)=>(l(),g("div",null,[n("h1",b,"Name: "+o(e.name),1),c(" Description: "+o(e.description),1),j,c(" Image: "+o(e.image),1),$,c(" Link: "+o(e.link),1),N,f(h,{text:e.tags.join(" / ")},null,8,["text"])]))}},T={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},B={class:"py-2"},D={__name:"Projects",setup(e){const a=[{name:"\u88FD\u4F5C\u500B\u4EBA\u7DB2\u7AD9\uFF1F",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5BEB\u51FA AI\uFF1F",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u5B78\u6703 Linux\uFF1F",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]},{name:"\u505A\u51FA\u684C\u5E03\uFF1F",description:"This is a project description. "+r(64),image:"https://picsum.photos/640/320",link:"https://github.com",tags:["tag1","tag2","tag3"]}],t=_(0);let s=-1;return x(t,()=>{t.value>0&&s===-1&&(s=window.setInterval(()=>{t.value++,t.value>=a.length&&window.clearInterval(s)},200))}),(I,m)=>(l(),g("div",T,[t.value>=0?(l(),u(h,{key:0,onDone:m[0]||(m[0]=i=>t.value++),text:"My Projects",class:"block text-2xl sm:text-3xl lg:text-4xl"})):d("",!0),n("div",B,[(l(),g(k,null,v(a,(i,p)=>n("div",null,[f(w,null,{default:y(()=>[t.value>=p+1?(l(),u(S,{key:p,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200",name:i.name,description:i.description,image:i.image,link:i.link,tags:i.tags},null,8,["name","description","image","link","tags"])):d("",!0)]),_:2},1024)])),64))])]))}};export{D as default};
