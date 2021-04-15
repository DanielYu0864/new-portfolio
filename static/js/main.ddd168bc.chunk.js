(this.webpackJsonpfile=this.webpackJsonpfile||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"a":[{"id":1,"title":"Employee Management System","category":"Employee management system built with NodeJS","language":"JavaScript, ExpressJs, and NodeJS","image":"https://user-images.githubusercontent.com/66336525/105122353-e5a95a80-5a8a-11eb-8343-967e6920d521.png","repo":"https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System","deploy":""},{"id":2,"title":"Family App","category":"Family App built with MERN (MongoDB, ExpressJS, ReactJS, NodeJS)","language":"MongoDB, ExpressJS, ReactJS, NodeJS, JavaScript, and SCSS","image":"https://user-images.githubusercontent.com/66336525/105122362-e9d57800-5a8a-11eb-9385-c4cb68e8bf28.png","repo":"https://github.com/DanielYu0864/Project-03","deploy":"https://project03familyapp.herokuapp.com/"},{"id":3,"title":"Sk8Tool","category":"A app to help user find skateparks built with MVC (Model\u2013view\u2013controller)","language":"MySQL, ExpressJS, HandlebarJS, NodeJS, JavaScript, CSS, and googleAPI","image":"https://user-images.githubusercontent.com/66336525/105122364-ec37d200-5a8a-11eb-8564-8c9daa13747c.jpg","repo":"https://github.com/DanielYu0864/Project-02-Sk8Tool","deploy":"https://sk8fndr.herokuapp.com/"},{"id":4,"title":"Weather App","category":"A sample weather dashboard with current weather and nextfive days weather forecast","language":"HTML, JavaScript, CSS, and OpenWeatherAPI","image":"https://user-images.githubusercontent.com/66336525/105122371-efcb5900-5a8a-11eb-9cbb-01313d9d3168.png","repo":"https://github.com/DanielYu0864/DanielYu-HomeWork-06-Weather-Dashboard","deploy":"https://danielyu0864.github.io/DanielYu-HomeWork-06-Weather-Dashboard/"}]}')},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),a=c.n(n),s=c(4),r=c.n(s);c(11),c(12),c(13);var l=function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#about-me-container",children:"ABOUT"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"blank",href:"https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing",children:"RESUME"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#portfolio",children:"PORTFOLIO"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#contact",children:"CONTACT"})})]})})};c(14);var o=function(){return Object(i.jsxs)("div",{className:"main-contaner",id:"main-contaner",children:[Object(i.jsx)(l,{}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h1",{children:"I am Daniel A. Yu"}),Object(i.jsx)("p",{children:"A lifelong learner of knowledge who presently has sight set on a full-stack developer position."})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"media",children:[Object(i.jsx)("a",{title:"Linkedin",target:"blank",href:"https://www.linkedin.com/in/daniel-yu-264360199/",children:Object(i.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/linkedin.png",alt:""})}),Object(i.jsx)("a",{title:"Github",target:"blank",href:"https://github.com/DanielYu0864",children:Object(i.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/github.png",alt:""})})]})]})},j=c.p+"static/media/IMG_20190620_093845_094.609af057.jpg";c(15);var d=function(){return Object(i.jsxs)("div",{className:"about-me-container .col-10",id:"about-me-container",children:[Object(i.jsx)("div",{className:"my-p",children:Object(i.jsx)("img",{className:"mypicture",src:j,alt:""})}),Object(i.jsx)("p",{children:"I am Daniel Yu from Taiwan"}),Object(i.jsx)("p",{children:"Completed the Advanced Basic English program at Bellevue College"}),Object(i.jsxs)("p",{children:["Graduated"," the Full-Stack Web Development Certificate from the University of Washington"]}),Object(i.jsx)("p",{children:"love in swimming but haven't swum once since came here"}),Object(i.jsx)("p",{children:"love cooking but only know how to cook Taiwanese food"})]})},h=c(2),b=(c(16),c(5));var u=function(e){var t=e.url;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("img",{src:t,alt:""})})};var m=function(e){var t=e.project,c=t.title,n=t.category,a=t.language,s=(t.image,t.repo),r=t.deploy;return Object(i.jsxs)("div",{className:"project-container",children:[Object(i.jsx)("h2",{children:c}),Object(i.jsxs)("div",{className:"category",children:["Project Summary: ",Object(i.jsx)("p",{children:n})]}),Object(i.jsxs)("div",{className:"language",children:["Language: ",Object(i.jsx)("p",{children:a})]}),Object(i.jsxs)("div",{className:"a-tags",children:[Object(i.jsx)("a",{className:"link underline1",target:"_blank",href:s,children:"Github-Repository"}),Object(i.jsx)("a",{className:"link underline2",target:"_blank",href:r||s,children:"Deployed-Application"})]})]})};var p=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(h.a)(s,2),l=r[0],o=r[1],j=Object(n.useState)([]),d=Object(h.a)(j,2),p=d[0],O=d[1],g=Object(n.useState)(!0),x=Object(h.a)(g,2),f=x[0],v=x[1],S=function(e){var t=p.filter((function(t){return t.id===e}));e==c.id?(a(""),o(!1)):(a(t[0]),o(!0))};return Object(n.useEffect)((function(){!function(){var e=b.a;O(e),v(!1)}()}),[]),Object(n.useEffect)((function(){}),[l]),l?Object(i.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(i.jsx)("h2",{children:"Portfolio"}),Object(i.jsx)("div",{className:"projects top",children:p.map((function(e){return Object(i.jsxs)("div",{className:"project-card",children:[Object(i.jsx)(u,{url:e.image}),Object(i.jsx)("a",{onClick:function(){return S(e.id)},children:Object(i.jsx)("div",{className:e.title===c.title?"hover none":"hover",children:Object(i.jsxs)("h2",{children:["#",e.title]})})})]},e.id)}))}),Object(i.jsx)(m,{project:c})]}):f?Object(i.jsx)("h1",{children:"Loading..."}):Object(i.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(i.jsx)("h2",{children:"Portfolio"}),Object(i.jsx)("div",{className:"projects",children:p.map((function(e){return Object(i.jsxs)("div",{className:"project-card",children:[Object(i.jsx)(u,{url:e.image}),Object(i.jsx)("a",{onClick:function(){return S(e.id)},children:Object(i.jsx)("div",{className:"hover",children:Object(i.jsxs)("h2",{children:["#",e.title]})})})]},e.id)}))})]})};c(17);var O=function(){return Object(i.jsxs)("div",{className:"contact",id:"contact",children:[Object(i.jsx)("div",{className:"line"}),Object(i.jsx)("div",{className:"info",children:Object(i.jsxs)("ul",{children:["Contact Me:",Object(i.jsxs)("li",{children:["Phone: ",Object(i.jsx)("a",{href:"tel:+14256254073",children:"425-625-4073"})]}),Object(i.jsxs)("li",{children:["Email: ",Object(i.jsx)("a",{href:"mailto:adam741963@gmail.com",children:"adam741963@gmail.com"})]}),Object(i.jsxs)("li",{children:["Linkedin: ",Object(i.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/daniel-yu-264360199/",children:"Daniel Yu"})]}),Object(i.jsxs)("li",{children:["Github: ",Object(i.jsx)("a",{target:"blank",href:"https://github.com/DanielYu0864",children:"DanielYu0864"})]}),Object(i.jsxs)("li",{children:["Resume: ",Object(i.jsx)("a",{target:"blank",href:"https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing",children:"Google docs"})]})]})}),Object(i.jsx)("div",{className:"line"})]})};c(18);var g=function(){return Object(i.jsx)("div",{className:"footer",children:"DANIEL YU \xa9 2021"})};c(19);var x=function(){return Object(i.jsx)("div",{className:"go-top",children:Object(i.jsx)("a",{href:"#main-contaner",children:"TOP"})})};var f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(d,{}),Object(i.jsx)(p,{}),Object(i.jsx)(O,{}),Object(i.jsx)(x,{}),Object(i.jsx)(g,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.ddd168bc.chunk.js.map