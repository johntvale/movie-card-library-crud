(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{15:function(e,t,a){},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),o=a.n(r),l=(a(33),a(11)),c=a(1),s=a(17),m=a(19),u=a.n(m),d=a(25),v=a(3),h=a(4),p=a(9),f=a(6),b=a(5),g=(a(15),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),a}(n.Component)),E=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.storyline,n=e.id,r=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement("img",{src:r,alt:t,className:"movie-card-img"}),i.a.createElement("h2",{className:"movie-card-title"},t),i.a.createElement("div",{className:"movie-card-info"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"movie-card-details-btn"},i.a.createElement(l.b,{to:"/movies/".concat(n)},"VER DETALHES")))}}]),a}(i.a.Component),y=a(12),k=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(k));var O=function(){return JSON.parse(localStorage.getItem("movies"))},j=function(e){return localStorage.setItem("movies",JSON.stringify(e))},S=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},N=function(){return new Promise((function(e){var t=O();S(t)(e)}))},I=function(e){var t=O().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){S(t)(e)}))},C=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).LoadingAndGettingMovies=e.LoadingAndGettingMovies.bind(Object(p.a)(e)),e.state={rendered:!0,movies:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=N,e.next=3,t();case 3:a=e.sent,this.LoadingAndGettingMovies(a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"LoadingAndGettingMovies",value:function(e){this.setState((function(t){return{movies:Object(s.a)(e),rendered:!t.rendered}}))}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.rendered?i.a.createElement(g,null):i.a.createElement("div",null,i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},t.map((function(e){return i.a.createElement(E,{key:e.title,movie:e})}))),i.a.createElement("div",{className:"movie-list-add-card-btn"},i.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR FILME")))}}]),a}(n.Component),_=a(16),w=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state=Object(y.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(_.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo",i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"form-input",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_subtitle"},"Subt\xedtulo",i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"form-input",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_image"},"Imagem",i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"form-input",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_storyline"},"Sinopse",i.a.createElement("textarea",{id:"movie_storyline",value:t,className:"form-input",onChange:function(t){return e.updateMovie("storyline",t.target.value)}})))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,className:"form-input",onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",{className:"form-item"},i.a.createElement("label",{htmlFor:"movie_rating"},"Avalia\xe7\xe3o",i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",className:"form-input",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",{className:"form-btn"},i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),A=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.state={redirect:!1},n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t,a=this;(t=e,new Promise((function(e){var a=O(),n=a[a.length-1].id+1,i=Object(y.a)(Object(y.a)({},t),{},{id:n});a=[].concat(Object(s.a)(a),[i]),j(a),S("OK")(e)}))).then((function(){a.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?i.a.createElement(c.a,{to:""}):i.a.createElement("div",{"data-testid":"new-movie",className:"form-movie-content"},i.a.createElement(w,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),M=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(p.a)(n)),n.state={movie:{},rendered:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;I(t).then((function(t){e.setState({movie:t,rendered:!1})}))}},{key:"handleClick",value:function(){var e=this;(function(e){var t=O();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),j(t),new Promise((function(e){S({status:"OK"})(e)}))})(this.props.match.params.id).then((function(){e.setState({backToMain:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.rendered,n=e.backToMain,r=t.title,o=t.storyline,s=t.imagePath,m=t.genre,u=t.rating,d=t.subtitle,v=t.id;return a?i.a.createElement(g,null):i.a.createElement("div",{"data-testid":"movie-details",className:"movie-details-content"},n&&i.a.createElement(c.a,{to:"/"}),i.a.createElement("div",{className:"movie-details-card"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(s)}),i.a.createElement("div",{className:"movie-details-card-info"},i.a.createElement("p",{className:"movie-details-card-title"},r),i.a.createElement("p",{className:"movie-details-card-info-item"},"Subtitle: ".concat(d)),i.a.createElement("p",{className:"movie-details-card-info-item"},"Storyline: ".concat(o)),i.a.createElement("p",{className:"movie-details-card-info-item"},"Genre: ".concat(m)),i.a.createElement("p",{className:"movie-details-card-info-item"},"Rating: ".concat(u))),i.a.createElement("div",{className:"movie-details-card-btn"},i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(v,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:this.handleClick},"DELETAR"))))}}]),a}(n.Component),P=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.state={movie:{},rendered:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;I(t).then((function(t){e.setState({movie:t,rendered:!1})}))}},{key:"handleSubmit",value:function(e){var t=this;(function(e){return new Promise((function(t){var a=O().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));j(a),S("OK")(t)}))})(e).then((function(){t.setState({redirect:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.rendered,a=e.redirect,n=e.movie;return t?i.a.createElement(g,null):a?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"edit-movie",className:"form-movie-content"},i.a.createElement(w,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),F=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);var x=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:C}),i.a.createElement(c.b,{exact:!0,path:"/movies/new",render:function(e){return i.a.createElement(A,e)}}),i.a.createElement(c.b,{exact:!0,path:"/movies/:id",render:function(e){return i.a.createElement(M,e)}}),i.a.createElement(c.b,{exact:!0,path:"/movies/:id/edit",render:function(e){return i.a.createElement(P,e)}}),i.a.createElement(c.b,{path:"/",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.082a330a.chunk.js.map