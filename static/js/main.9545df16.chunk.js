(this.webpackJsonpaxeta=this.webpackJsonpaxeta||[]).push([[0],[,,,,,,function(e,t,n){e.exports={wrapper:"MainSection_wrapper__1FbnK",topInfo:"MainSection_topInfo__3VA1E",bottomInfo:"MainSection_bottomInfo__fbmQa",codeSection:"MainSection_codeSection__2UsKG",info:"MainSection_info__2q-As",mapSection:"MainSection_mapSection__10rxs",quotesSection:"MainSection_quotesSection__lTJxv",expSection:"MainSection_expSection__2qT9w"}},,,function(e,t,n){e.exports={wrapper:"Avatar_wrapper__1Yg5V",avatar:"Avatar_avatar__3TU6s",uploadButtonContainer:"Avatar_uploadButtonContainer__2PbKH",uploadButton:"Avatar_uploadButton__35BcL"}},,,,,function(e,t,n){e.exports={wrapper:"About_wrapper__1ja2-",name:"About_name__2T46X",language:"About_language__tQL81"}},function(e,t,n){e.exports={wrapper:"Skills_wrapper__1wFyW",inputFont:"Skills_inputFont__35oS6",plus:"Skills_plus__3b1XP"}},function(e,t,n){e.exports={wrapper:"ExperienceSkill_wrapper__2rJQ4",skill:"ExperienceSkill_skill__3Q5uv",input:"ExperienceSkill_input__3_CUf"}},function(e,t,n){e.exports={wrapper:"Portfolio_wrapper__b1efu",links:"Portfolio_links__3M4yG",link:"Portfolio_link__3nhhy"}},,function(e,t,n){e.exports={header:"Header_header__2QxM7",wrapper:"Header_wrapper__3VfLD"}},function(e,t,n){e.exports={location:"Location_location__2XNom",wrapper:"Location_wrapper__2lK1X"}},function(e,t,n){e.exports={wrapper:"UserInfo_wrapper__3irIH",aboutAndSkills:"UserInfo_aboutAndSkills__263xu"}},function(e,t,n){e.exports={wrapper:"Experience_wrapper__16jeU",skills:"Experience_skills__1MQvD"}},function(e,t,n){e.exports={wrapper:"SampleCode_wrapper__2Hgrh",code:"SampleCode_code__107Ls"}},function(e,t,n){e.exports={wrapper:"ClientsQoute_wrapper__1pvW8",quotes:"ClientsQoute_quotes__q_DCa"}},function(e,t,n){e.exports={wrapper:"AmazingQoute_wrapper__gYtDn",quotes:"AmazingQoute_quotes__m7Okh"}},,,,,,,,,,,function(e,t,n){e.exports={wrapper:"Layout_wrapper__3nssY"}},function(e,t,n){e.exports={wrapper:"PrintPageButton_wrapper__12YWx"}},,function(e,t,n){e.exports={wrapper:"Skill_wrapper__2-mfI"}},function(e,t,n){e.exports={wrapper:"YMap_wrapper__rWdtK"}},function(e,t,n){e.exports={wrapper:"Availability_wrapper__221KN"}},function(e,t,n){e.exports={wrapper:"PreferredEnvironment_wrapper__2MIK8"}},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(35),c=n.n(a),s=(n(50),n(36)),o=n.n(s),l=n(0),u=function(e){var t=e.children,n=e.color;return Object(l.jsx)("div",{className:o.a.wrapper,style:{backgroundColor:n},children:t})},p=n(19),j=n.n(p),d=n(37),b=n.n(d),x=function(){return Object(l.jsx)("div",{className:b.a.wrapper,children:Object(l.jsx)("button",{children:"Print this page"})})},f=n(2),O=function(e){return/^([\x08-\r ,\xA0\u0430-\u044F\u0451\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\x08-\r ,a-z\xA0\u017F\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u212A\u3000\uFEFF]+)$/i.test(e)},h=function(e){return/^-?[0-9][0-9,.]*$/.test(e.toString())},m=n(8),v=n.n(m),_=n(13),w=n(3),k=n(7),g=function e(t){Object(k.a)(this,e),this.httpClient=t,this.instance=void 0,this.instance=this.httpClient.instance,this.instance.interceptors.request.use((function(e){return e.url+="&format=json&apikey=".concat("d188e5ac-9d6f-4cc0-b525-8dfd7c95f1b2"),e}),(function(e){Promise.reject(e)}))},A=n(45),S=n(44),N=n(38),C=n.n(N),F=new(function(e){Object(A.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).geocode=function(){var t=Object(_.a)(v.a.mark((function t(n){var r,i,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.instance.get("?geocode=".concat(n.split(" ").join("+")));case 2:if(i=t.sent,a={},null===(r=i.data.response.GeoObjectCollection)||void 0===r?void 0:r.featureMember[0]){t.next=6;break}return t.abrupt("return",!1);case 6:return c=i.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ").reverse(),a.latitude=c[0],a.longitude=c[1],t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return n}(g))(new function e(t){Object(k.a)(this,e),this.baseUrl=t,this.instance=void 0,this.instance=C.a.create({baseURL:this.baseUrl,headers:{"Content-Type":"application/json"}})}("https://geocode-maps.yandex.ru/1.x")),I=function(e){var t=e.isValid,n=e.onInput,i=e.onKeyDown,a=e.value,c=e.inputCustomStyle,s=e.inputRef,o=e.onBlur,u=e.onFocus,p=Object(r.useState)(a),j=Object(f.a)(p,2),d=j[0],b=j[1];Object(r.useEffect)((function(){b(a)}),[a]);var x=null===t,O=function(){var e=.5+1e3*Math.random();return Math.round(e)}().toString();return Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"fit-content"},children:[Object(l.jsx)("span",{className:x?"":t?"inputCorrect":"inputIncorrect",children:Object(l.jsx)("input",{name:O,value:d,onInput:n,onKeyDown:i,className:x?"".concat(c||""," textInput"):"".concat(c||""," textInput ").concat(t?"inputFocusCorrect":"inputFocusIncorrect"),onFocus:u,onBlur:o,ref:s,style:{}})}),function(){if(!x)return t?"":Object(l.jsx)("label",{id:O,className:"errDesc"})}()]})},y=n(20),B=n.n(y),P=function(){var e=Object(r.useState)("Portland, Oregon, USA"),t=Object(f.a)(e,2),n=t[0],i=t[1],a=Object(w.b)("location").dispatch,c=Object(r.useState)(!0),s=Object(f.a)(c,2),o=s[0],u=s[1],p=function(){var e=Object(_.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=7;break}if(O(n)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,F.geocode(n);case 5:(r=e.sent)?a("location/set/location",{location:r}):u(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:B.a.wrapper,children:Object(l.jsx)(I,{inputCustomStyle:B.a.location,isValid:o,value:n,onInput:function(e){O(e.target.value)?u(!0):u(!1),i(e.target.value)},onKeyDown:p})})},E=n(14),L=n.n(E),Q=function(){var e=Object(r.useState)("John Smith"),t=Object(f.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!0),c=Object(f.a)(a,2),s=c[0],o=c[1];return Object(l.jsxs)("div",{className:L.a.wrapper,children:[Object(l.jsx)(I,{inputCustomStyle:L.a.name,isValid:s,value:n,onInput:function(e){O(e.target.value)?o(!0):o(!1),i(e.target.value)}}),Object(l.jsx)(P,{}),Object(l.jsxs)("div",{className:L.a.language,children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgB7VVrTBRXGD3z2scsbBekwG6pUAiC+MBo1PrA0haKFdFKzVobFRvjo61YofGBqDFRY2xttdqq+CoVa0xtU6OpiTUpYCoIDQWriC8EBBZ5LCyPnd2dmZ3pZUgk/dH+6Y+miSeZe2eS737nfuc7cy/wDP81KPwLqKpKLdtQxJv8bkuH6GZXzBntc0dGdtvHjhX/QlAwaRK3uqpK+qdEl1bvMOoD5BGcLI1qSJw+sbi6baIo+6P7+n1Wk4nj1yyawDD1D2TnxZ+d+sgXb1BTxhVkZGWVs4MJZGvM8jNzY2dEbM+tHOhw1h+/cEsICzIZ/ZIaoYKKyv/8fMw8CxL9TR0j2b6BQGY0i8o6NzweH6aNsWH3+iQ079oJV81NvLBubYgtPTWuorKmgaQeInAmvWJL6HyS5d1/OCsmLxcfLgnGF6cqUN/cCzAc4mULlne2wfOoBZBk+BUKvb1e7PgoBRlmF+4tXAzLymUI256H00Xl+P7to+h0tWrV04PDjp2X8J0QCnPiOLSs34BYnYqT+xZj7ZKZMHI6+ESFBFKgqaHHEmDEub3zMaf+GjoLChF39msU66KQaT+CT06VwylIMBh0GgGjaczHJ1fVDyR3cSFImZ+E9rxt0Bt5zHw3Ffb0RESEWzCisgz+vn5Qfj+m5mbBqnqgSD5Y5qbB1dwK1tGK5IlWpL0Wj5iEaAwIfSWP666VahJttsdDMr2Ee50ydpV2YePxQgiHD6Ktw4mRG7ORMiYETV6fVgU4Ds3Z+ZBdvRBdLngEDzwy8YfHS+QTYFYVJNsiMC4uCr+S3BoBf7oQCaFhyBgVA95mBXumCXSgGb77jbj/1nugBAE00Z5mOeI7CnKPa8iCvBE0TYP2CFplNMUP6gFZ9sN156EWoxFAZ4AyIKLv1kP47jaCJYn0ZKcs0Z9jWfJNlGSYYduKIhSR7JqhwRgN0Jl58iqj39kD4Uk3FFIVjLphApPNAnT5yCIv8bxe6z2xJxS/CoXxQzXqQXFDC1RZRljuGpimTIC3xYHu8kowr87CyYp2tLV3IzbchDi9DN3v14ETNUMEpePn4PXEeMQZJFjcAvSKDJM5APzzIaAkCfzICHQdLYLU7AClAs3WSKiSAQlTJ4FraELjBzmYl5GGs75QbN5dAj74OQQFeIdtevGXu1j/ZRkyPqtG3g03elLTEbxwHrp/ugqh4jfcMoZC0dQFmVVU1bVjwZpvsSL/IrpeTsboH09DqH+I1NoL+GafHUYSI5JKnxLwZJw53oYTezNRVLgSEe2PUDfXDv2sGdhrnobdx2+QPtBQVFUjoUi8SgxVVtOEtCUFyPm0GKatWxFiz0Tgvi0oWDcdNt4wTHBozwIc2b8IU+KD0PDxVnQc/ArYlI/3i/tw5foDsAbmafLBeQikJtVPfnQVl0pvI2PhAZSJFkTt3wP+zGFsSAkfbrJQfROPLl+FUl0N69KluBL3Bg7sKtHcwRIXkcMOPsUPp+RFj8+LxsY6xd11p4WB9Njn9ThE0ecQZFHZsq02OD0tYdTszPQJrWd/GD5NVzDm2c/PmJzHJL8Ze+5C7YhWl6jTG3UqQysemlK6raGmJ+946v5wOTpu90ueai5pcu2h8+c78TfIyckxhkdHB23KznY8vQ9WrVrFHTt2OdAYHG1S9awmHS1xIse7vb0060FjiRfP8L/En48FE2r5i4nQAAAAAElFTkSuQmCC",alt:"English Flag"}),Object(l.jsx)("p",{children:"English"})]})]})},D=n.p+"static/media/avatarImg.b8dbd9dc.png",K=n(9),M=n.n(K),T=function(){var e=Object(r.useState)(),t=Object(f.a)(e,2),n=t[0],i=t[1];return Object(l.jsxs)("div",{className:M.a.wrapper,children:[Object(l.jsx)("div",{className:M.a.avatar,children:n?Object(l.jsx)("img",{src:n,alt:"avatar",className:M.a.uploadedImg}):Object(l.jsx)("img",{alt:"avatar",src:D})}),Object(l.jsx)("div",{className:M.a.uploadButtonContainer,children:Object(l.jsx)("label",{className:M.a.uploadButton,children:Object(l.jsx)("input",{type:"file",onChange:function(e){if(e.target.files&&e.target.files[0]){if("image/png"!==e.target.files[0].type)return;i(URL.createObjectURL(e.target.files[0]))}}})})})]})},U=n(39),V=n.n(U),Y=function(e){var t=e.skill,n=e.index,r=Object(w.b)("skills").dispatch;return Object(l.jsxs)("div",{className:V.a.wrapper,children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("span",{onClick:function(){return r("skills/remove/skill",{index:n})}})]})},G=n(15),H=n.n(G),z=function(){var e=Object(w.b)("skills"),t=e.dispatch,n=e.skills,i=Object(r.useState)(!0),a=Object(f.a)(i,2),c=a[0],s=a[1],o=Object(r.useState)(!1),u=Object(f.a)(o,2),p=u[0],j=u[1],d=Object(r.useRef)(null),b=Object(r.useState)({skill:"",experience:0}),x=Object(f.a)(b,2),h=x[0],m=x[1];return Object(r.useEffect)((function(){var e;p&&(null===(e=d.current)||void 0===e||e.focus())}),[p]),Object(l.jsxs)("div",{className:H.a.wrapper,children:[n.map((function(e,t){return Object(l.jsx)(Y,{index:t,skill:e.skill},t)})),p?Object(l.jsx)(I,{inputRef:d,isValid:c,value:h.skill,onInput:function(e){O(e.target.value)?s(!0):s(!1),m({skill:e.target.value,experience:0})},onKeyDown:function(e){if("Enter"===e.key){if(!O(h.skill))return;t("skills/set/skill",{newSkill:h}),m({skill:"",experience:0}),s(!1),j(!1)}},inputCustomStyle:H.a.inputFont,onBlur:function(){j(!1)}}):Object(l.jsx)("button",{onClick:function(){return j(!0)},className:H.a.plus})]})},q=n(21),J=n.n(q),Z=function(){return Object(l.jsxs)("div",{className:J.a.wrapper,children:[Object(l.jsx)("div",{children:Object(l.jsx)(T,{})}),Object(l.jsxs)("div",{className:J.a.aboutAndSkills,children:[Object(l.jsx)(Q,{}),Object(l.jsx)(z,{})]})]})},R=function(){return Object(l.jsx)("header",{className:j.a.header,children:Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:j.a.wrapper,children:[Object(l.jsx)(Z,{}),Object(l.jsx)(x,{})]})})})},W=(n(71),n(16)),X=n.n(W),$=function(e){var t=Object(w.b)("skills").dispatch,n=Object(r.useState)(e.experience),i=Object(f.a)(n,2),a=i[0],c=i[1],s=Object(r.useState)(!1),o=Object(f.a)(s,2),u=o[0],p=o[1];Object(r.useEffect)((function(){c(e.experience)}),[e.experience]);var j=function(){h(a)&&(t("skills/change/skill",{newSkill:{experience:a,skill:e.skill},index:e.index}),p(!1))};return Object(l.jsxs)("div",{className:X.a.wrapper,children:[Object(l.jsx)("p",{className:X.a.skill,children:e.skill}),Object(l.jsx)(I,{isValid:null,inputCustomStyle:X.a.input,value:u?a.toString():a+" years",onFocus:function(){p(!0),c(Number(a.toString().split(" ")[0]))},onKeyDown:function(e){p(!0),"Enter"===e.key&&j()},onInput:function(e){h(Number(e.target.value))?c(Number(e.target.value)):e.preventDefault()},onBlur:function(){j(),p(!1)}})]})},ee=n(22),te=n.n(ee),ne=function(){var e=Object(w.b)("skills").skills;return Object(l.jsxs)("div",{className:te.a.wrapper,children:[Object(l.jsx)("h1",{children:"Experience"}),Object(l.jsx)("div",{className:te.a.skills,children:e.map((function(e,t){return Object(l.jsx)($,{experience:e.experience,index:t,skill:e.skill},t)}))})]})},re=n(17),ie=n.n(re),ae=function(){return Object(l.jsxs)("div",{className:ie.a.wrapper,children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("div",{className:ie.a.links,children:["Bootstrap 4 Material Design (Sample Link)","Modern JavaScript stack","Datepicker for twitter bootstrap","Fast and reliable Bootstrap widgets in Angular "].map((function(e,t){return Object(l.jsx)("a",{className:ie.a.link,href:"https://google.com",target:"_blank",rel:"noreferrer",children:e},t)}))})]})},ce=n(11),se=n(40),oe=n.n(se),le=function(){var e=Object(w.b)("location").location;return Object(l.jsx)("div",{className:oe.a.wrapper,children:Object(l.jsx)(ce.a,{state:{center:[e.latitude,e.longitude],zoom:10},width:"100%",height:"100%",children:Object(l.jsx)(ce.b,{geometry:[e.latitude,e.longitude]})})})},ue=n(6),pe=n.n(ue),je=n(23),de=n.n(je),be=function(){return Object(l.jsxs)("div",{className:de.a.wrapper,children:[Object(l.jsx)("h1",{children:"Sample Code"}),Object(l.jsx)("div",{className:de.a.code,children:Object(l.jsx)("pre",{children:"1. <div class='golden-grid'>\n2.    <div style='grid-area:\n3.      11 /  1 / span 10 / span\n4.      12;'>\n5.    </div> \n6. </div>\n"})})]})},xe=n(41),fe=n.n(xe),Oe=function(){return Object(l.jsxs)("div",{className:fe.a.wrapper,children:[Object(l.jsx)("h1",{children:"Availability"}),Object(l.jsx)("h2",{children:"Full-time"})]})},he=n(42),me=n.n(he),ve=function(){return Object(l.jsxs)("div",{className:me.a.wrapper,children:[Object(l.jsx)("h1",{children:"Preferred Environment"}),Object(l.jsx)("h2",{children:"GitHub, Mac OSX"})]})},_e=n(24),we=n.n(_e),ke=function(){return Object(l.jsxs)("div",{className:we.a.wrapper,children:[Object(l.jsx)("h1",{children:"The Most Amazing..."}),Object(l.jsx)("span",{className:we.a.quotes,children:Object(l.jsx)("h2",{children:"The only true wisdom is in knowing you know nothing..."})})]})},ge=n(25),Ae=n.n(ge),Se=function(){return Object(l.jsxs)("div",{className:Ae.a.wrapper,children:[Object(l.jsx)("h1",{children:"In clients I look for..."}),Object(l.jsx)("span",{className:Ae.a.quotes,children:Object(l.jsx)("h2",{children:"There is only one good, knowledge, and one evil, ignorance."})})]})},Ne=function(){return Object(l.jsxs)("section",{className:pe.a.wrapper,children:[Object(l.jsxs)("div",{className:pe.a.topInfo,children:[Object(l.jsxs)("div",{className:pe.a.expSection,children:[Object(l.jsx)(ae,{}),Object(l.jsx)(ne,{})]}),Object(l.jsxs)("div",{className:pe.a.codeSection,children:[Object(l.jsx)(be,{}),Object(l.jsxs)("div",{className:pe.a.info,children:[Object(l.jsx)(Oe,{}),Object(l.jsx)(ve,{})]})]})]}),Object(l.jsxs)("div",{className:pe.a.bottomInfo,children:[Object(l.jsxs)("div",{className:pe.a.quotesSection,children:[Object(l.jsx)(ke,{}),Object(l.jsx)(Se,{})]}),Object(l.jsx)("div",{className:pe.a.mapSection,children:Object(l.jsx)(le,{})})]})]})},Ce=n(43),Fe=n(26),Ie=Object(Ce.a)([function(e){e.on("@init",(function(){return{skills:[{skill:"PHP",experience:6},{skill:"Java Script",experience:4.5},{skill:"Ruby",experience:2}]}})),e.on("skills/set/skill",(function(e,t){return{skills:[].concat(Object(Fe.a)(e.skills),[t.newSkill]).sort((function(e,t){return t.experience-e.experience}))}})),e.on("skills/remove/skill",(function(e,t){return{skills:e.skills.filter((function(e,n){return n!==t.index}))}})),e.on("skills/change/skill",(function(e,t){e.skills[t.index]=t.newSkill;var n=e.skills.sort((function(e,t){return t.experience-e.experience}));return{skills:Object(Fe.a)(n)}}))},function(e){e.on("@init",(function(){return{location:{latitude:45.523064,longitude:-122.676483}}})),e.on("location/set/location",(function(e,t){return{location:t.location}}))}]),ye=function(){return Object(l.jsx)(ce.c,{children:Object(l.jsx)(w.a.Provider,{value:Ie,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(R,{}),Object(l.jsx)("main",{children:Object(l.jsx)(u,{children:Object(l.jsx)(Ne,{})})})]})})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(ye,{})}),document.getElementById("root")),Be()}],[[73,1,2]]]);
//# sourceMappingURL=main.9545df16.chunk.js.map