(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/woman1.2b03ade5.png"},36:function(e,t,a){e.exports=a.p+"static/media/woman2.52fff76d.png"},37:function(e,t,a){e.exports=a.p+"static/media/man.379574c7.png"},41:function(e,t,a){e.exports=a.p+"static/media/question-mark.9d6b40a4.jpeg"},45:function(e,t,a){e.exports=a(72)},50:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(33),s=a.n(r),l=(a(50),a(6)),c=a(7),i=a(9),u=a(8),m=a(10),d=a(13),p=a(19),h=a(3),v=a(44),b=a(5),f=a(1),O=a(35),w=a.n(O),E=a(36),g=a.n(E),j=a(37),y=a.n(j),N={user1:{id:"user1",name:"User 1",avatarURL:w.a,answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},user2:{id:"user2",name:"User 2",avatarURL:g.a,answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},user3:{id:"user3",name:"User 3",avatarURL:y.a,answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},x={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"user1",timestamp:1467166872634,optionOne:{votes:["user1"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"user2",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["user2","user1"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"user1",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["user1"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"user3",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["user1"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"user3",timestamp:1489579767190,optionOne:{votes:["user3"],text:"find $50 yourself"},optionTwo:{votes:["user2"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"user2",timestamp:1493579767190,optionOne:{votes:["user2"],text:"write JavaScript"},optionTwo:{votes:["user3"],text:"write Swift"}}};function T(e){return new Promise(function(t,a){var n=e.author,o=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout(function(){x=Object(f.a)({},x,Object(b.a)({},o.id,o)),N=Object(f.a)({},N,Object(b.a)({},n,Object(f.a)({},N[n],{questions:N[n].questions.concat([o.id])}))),t(o)},1e3)})}function q(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise(function(e,o){setTimeout(function(){N=Object(f.a)({},N,Object(b.a)({},t,Object(f.a)({},N[t],{answers:Object(f.a)({},N[t].answers,Object(b.a)({},a,n))}))),x=Object(f.a)({},x,Object(b.a)({},a,Object(f.a)({},x[a],Object(b.a)({},n,Object(f.a)({},x[a][n],{votes:x[a][n].votes.concat([t])}))))),e()},500)})}(e)}var k="RECEIVE_USERS",U="ADD_ANSWER",C="REMOVE_ANSWER",S="ADD_POLL_TO_USER";var D="RECEIVE_POLLS",A="ADD_VOTE",L="REMOVE_VOTE",R="ADD_POLL";var P=a(16),z=a.n(P);function _(e,t){return function(a,n){var o,r=n().authedUser;return a(Object(P.showLoading)()),(o={optionOneText:e,optionTwoText:t,author:r},T(o)).then(function(e){var t,n;a({type:R,poll:e}),a((t=r,n=e.id,{type:S,uid:t,qid:n}))}).catch(function(e){console.log("There was an error of type: ",e),alert("There was an error adding the poll.  Please try again")}).then(a(Object(P.hideLoading)()))}}function I(){return o.a.createElement("ul",{className:"nav-list"},o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/",exact:!0},"Home")),o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/add"},"New Poll")),o.a.createElement("li",{className:"nav-list-item"},o.a.createElement(d.b,{className:"nav-link",to:"/leaderboard"},"Leader Board")))}var V=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.avatar;return o.a.createElement("div",{className:"authed-user"},o.a.createElement("span",{className:"greeting"},"Hello, ",t),o.a.createElement("div",{className:"authed-image"},o.a.createElement("img",{className:"authed-avatar",src:a,alt:"".concat(t)})))}}]),t}(n.Component);var W=Object(h.connect)(function(e){var t=e.users[e.authedUser];return{name:t.name,avatar:t.avatarURL}})(V),Y="SET_AUTHED_USER";function M(e){return{type:Y,id:e}}var B=Object(p.f)(Object(h.connect)(null,{setAuthedUser:M})(function(e){return o.a.createElement("div",{className:"logout"},o.a.createElement("button",{className:"logout-button",onClick:function(t){t.preventDefault(),(0,e.setAuthedUser)(null),e.history.push("/login")}},"Logout"))})),F=a(39),H=a(40),J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).toggleDrawer=function(){(0,a.props.toggleDrawer)()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.displayNavLoaded)()}},{key:"render",value:function(){var e=this.props.navClass;return o.a.createElement("div",{className:"navContainer"},o.a.createElement(F.a,{icon:H.a,size:"2x",className:"bars",onClick:this.toggleDrawer}),o.a.createElement("nav",{className:e},o.a.createElement(I,null),o.a.createElement("div",{className:"authed-logout"},o.a.createElement(W,null),o.a.createElement(B,null))))}}]),t}(n.Component);function $(e){return"/login"!==(e.location.state?e.location.state.from:void 0)?o.a.createElement(p.a,{to:{pathname:"/login",state:{from:"/404"}}}):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("p",null,"The page you are looking for doesn't exist."))}var G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).toPollDetail=function(e,t){e.preventDefault(),a.props.history.push("/questions/".concat(t))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.poll,n=t.author,r=t.avatar;return o.a.createElement("div",{className:"poll"},o.a.createElement("h4",{className:"author"},n," asks:"),o.a.createElement("div",{className:"image"},o.a.createElement("img",{className:"avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"question-detail"},o.a.createElement("p",{className:"question"},"Would you rather"),o.a.createElement("span",{className:"options"},"...",a.optionOne.text,"..."),o.a.createElement("button",{className:"view-poll",onClick:function(t){return e.toPollDetail(t,a.id)}},"View Poll")))}}]),t}(n.Component);var K=Object(p.f)(Object(h.connect)(function(e,t){var a=e.polls,n=e.users,o=(e.authedUser,a[t.id]);return{poll:o,author:n[o.author].name,avatar:n[o.author].avatarURL}})(G)),Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showUnanswered:!0},a.showUnanswered=function(e){e.preventDefault(),a.setState({showUnanswered:!0})},a.showAnswered=function(e){e.preventDefault(),a.setState({showUnanswered:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.authedUser,n=this.props.pollIds,r=this.state.showUnanswered,s=Object.keys(t[a].answers),l=r?n.filter(function(e){return!s.includes(e)}):n.filter(function(e){return s.includes(e)});return o.a.createElement("div",{className:"poll-list"},o.a.createElement("button",{className:this.state.showUnanswered?"filter-polls-selected":"filter-polls-not-selected",onClick:this.showUnanswered},"Unanswered Polls"),o.a.createElement("button",{className:this.state.showUnanswered?"filter-polls-not-selected":"filter-polls-selected",onClick:this.showAnswered},"Answered Polls"),o.a.createElement("ul",{className:"polls"},o.a.createElement("li",null,0===l.length&&(this.state.showUnanswered?"You have no unanswered polls.":"You have not answered any polls.")),l.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(K,{id:e}))})))}}]),t}(n.Component);var X=Object(h.connect)(function(e){var t=e.polls,a=e.users,n=e.authedUser;return{pollIds:Object.keys(t).sort(function(e,a){return t[a].timestamp-t[e].timestamp}),users:a,authedUser:n}})(Q);function Z(){return o.a.createElement("p",null,"The poll you are looking for doesn't exist.")}var ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={option:"one",submitted:!1},a.handleChange=function(e){a.setState({option:e.target.value})},a.handleSumbit=function(e){e.preventDefault();var t,n=a.props,o=n.handleAddAnswer,r=n.poll;t="one"===a.state.option?"optionOne":"optionTwo",o(r.id,t)?a.setState({submitted:!0}):alert("There was a problem submitting the form.")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pollExists,a=e.poll,n=e.author,r=e.avatar,s=e.authedUser,l=e.answers;return t?l.includes(a.id)?o.a.createElement("div",{className:"show-results"},o.a.createElement("h4",{className:"author"},"Asked by ",n),o.a.createElement("div",{className:"detail-image"},o.a.createElement("img",{className:"detail-avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"detail-question-detail"},o.a.createElement("h3",{className:"header"},"Results:"),o.a.createElement("div",{className:"option"},o.a.createElement("h4",{className:"option-text"},"Would you rather ",a.optionOne.text,"?"),a.optionOne.votes.includes(s)&&o.a.createElement("div",{className:"vote"},o.a.createElement("span",{className:"voteText"},"Your Vote")),o.a.createElement("div",{className:"percentage"},"".concat((a.optionOne.votes.length/(a.optionOne.votes.length+a.optionTwo.votes.length)*100).toFixed(0),"%")),o.a.createElement("div",{className:"votes"},a.optionOne.votes.length>0&&"".concat(a.optionOne.votes.length," out of ").concat(a.optionOne.votes.length+a.optionTwo.votes.length," votes"))),o.a.createElement("div",{className:"option"},o.a.createElement("h4",{className:"option-text"},"Would you rather ",a.optionTwo.text,"?"),a.optionTwo.votes.includes(s)&&o.a.createElement("div",{className:"vote"},o.a.createElement("span",{className:"voteText"},"Your Vote")),o.a.createElement("div",{className:"percentage"},"".concat((a.optionTwo.votes.length/(a.optionOne.votes.length+a.optionTwo.votes.length)*100).toFixed(0),"%")),o.a.createElement("div",{className:"votes"},a.optionTwo.votes.length>0&&"".concat(a.optionTwo.votes.length," out of ").concat(a.optionOne.votes.length+a.optionTwo.votes.length," votes"))))):o.a.createElement("div",{className:"answer-poll"},o.a.createElement("h4",{className:"author"},n," asks:"),o.a.createElement("div",{className:"detail-image"},o.a.createElement("img",{className:"detail-avatar",src:r,alt:"".concat(n)})),o.a.createElement("div",{className:"detail-question-detail"},o.a.createElement("h3",null,"Would You Rather ..."),o.a.createElement("form",{className:"question-form",onSubmit:this.handleSumbit},o.a.createElement("div",{className:"radios"},o.a.createElement("label",null,o.a.createElement("input",{className:"radio",type:"radio",checked:"one"===this.state.option,onChange:this.handleChange,value:"one",id:"optionOne"}),a.optionOne.text)),o.a.createElement("div",{className:"radios"},o.a.createElement("label",null,o.a.createElement("input",{className:"radio",type:"radio",checked:"two"===this.state.option,onChange:this.handleChange,value:"two",id:"optionTwo"}),a.optionTwo.text)),o.a.createElement("button",{className:"submit-poll"},"Submit")))):o.a.createElement(Z,null)}}]),t}(n.Component);var te=Object(h.connect)(function(e,t){var a=e.polls,n=e.users,o=e.authedUser,r=t.match.params.question_id,s=Object.keys(a).includes(r),l=s?a[r]:null;return{pollExists:s,poll:l,author:s?n[l.author].name:null,avatar:s?n[l.author].avatarURL:null,authedUser:o,answers:Object.keys(n[o].answers)}},{handleAddAnswer:function(e,t){return function(a,n){var o=n().authedUser;return a(function(e,t,a){return{type:U,uid:e,qid:t,answer:a}}(o,e,t)),a(function(e,t,a){return{type:A,uid:e,qid:t,answer:a}}(o,e,t)),q({authedUser:o,qid:e,answer:t}).catch(function(n){console.log("There was an error of type: ",n),alert("There was an error answering the poll.  Please try again"),a(function(e,t,a){return{type:C,uid:e,qid:t,answer:a}}(o,e,t)),a(function(e,t,a){return{type:L,uid:e,qid:t,answer:a}}(o,e,t))})}}})(ee),ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={optionOneText:"",optionTwoText:""},a.handleChange=function(e){"one"===e.target.id?a.setState({optionOneText:e.target.value}):a.setState({optionTwoText:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch,n=a.state.optionOneText,o=a.state.optionTwoText;""!==n&&""!==o?(t(_(n,o)),a.setState({optionOneText:"",optionTwoText:""}),a.props.history.push("/")):alert("Please fill in both options.")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.optionOneText,t=this.state.optionTwoText;return o.a.createElement("div",{className:"create-poll"},o.a.createElement("h3",{className:"create"},"Create New Poll"),o.a.createElement("hr",{className:"divider"}),o.a.createElement("p",{className:"complete"},"Complete the poll:"),o.a.createElement("p",{className:"complete"},"Would you rather..."),o.a.createElement("form",{className:"enter-poll",onSubmit:this.handleSubmit},o.a.createElement("input",{id:"one",type:"text",className:"input",placeholder:"Enter option 1 text here.",value:e,onChange:this.handleChange}),o.a.createElement("span",{className:"space"},"OR"),o.a.createElement("input",{id:"two",type:"text",className:"input",placeholder:"Enter option 2 text here.",value:t,onChange:this.handleChange}),o.a.createElement("button",{className:"submit-new-poll"},"Submit")))}}]),t}(n.Component),ne=Object(h.connect)()(ae);var oe=Object(h.connect)(function(e,t){var a=e.users[t.id];return{avatar:a.avatarURL,name:a.name,answers:Object.keys(a.answers).length,questions:a.questions.length}})(function(e){var t=e.avatar,a=e.name,n=e.answers,r=e.questions;return o.a.createElement("div",{className:"user"},o.a.createElement("div",{className:"user-detail-image"},o.a.createElement("img",{className:"user-avatar",src:t,alt:"".concat(a)})),o.a.createElement("div",{className:"user-question-detail"},o.a.createElement("h3",{className:"user-name"},a),o.a.createElement("p",{className:"answered-created"},"Answered Polls",o.a.createElement("span",{className:"right"},n)),o.a.createElement("p",{className:"answered-created"},"Created Polls",o.a.createElement("span",{className:"right"},r))),o.a.createElement("div",{className:"score"},o.a.createElement("h4",{className:"score-header"},"Score"),o.a.createElement("p",null,r+n)))}),re=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.ids;return o.a.createElement("div",{className:"leader-board"},o.a.createElement("ul",{className:"user-list"},e.map(function(e){return o.a.createElement("li",{key:e,className:"user-list-item"},o.a.createElement(oe,{id:e}))})))}}]),t}(n.Component);var se=Object(h.connect)(function(e){var t=e.users;return{ids:Object.entries(t).map(function(e){return{id:e[0],sum:Object.keys(e[1].answers).length+e[1].questions.length}}).sort(function(e,t){return t.sum-e.sum}).map(function(e){return e.id})}})(re),le=a(41),ce=a.n(le),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={authedId:null,redirectToReferrer:!1},a.handleChange=function(e){a.setState({authedId:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.dispatch,n=a.state.authedId;null===n||"select"===n?alert("Please select a user."):(t(M(n)),a.setState({redirectToReferrer:!0}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,t=this.state.redirectToReferrer,a=this.props.usersArray;return!0===t?o.a.createElement(p.a,{to:{pathname:e.pathname?e.pathname:"/404",state:{from:"/login"}}}):o.a.createElement("div",{className:"login-container"},o.a.createElement("h4",{className:"welcome"},"Welcome to the Would You Rather App!"),o.a.createElement("p",{className:"login-message"},"Please log in to continue."),o.a.createElement("div",null,o.a.createElement("img",{className:"logo",src:ce.a,alt:"question mark logos"})),o.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},o.a.createElement("select",{className:"dropdown",onChange:this.handleChange,defaultValue:"select"},o.a.createElement("option",{value:"select"},"Select User"),a.map(function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.name)})),o.a.createElement("button",{className:"login-button"},"Login")))}}]),t}(n.Component);var ue=Object(h.connect)(function(e){var t=e.users,a=e.polls;return{pollIds:Object.keys(a),usersArray:Object.values(t)}})(ie),me=a(42),de=function(e){var t=e.component,a=Object(me.a)(e,["component"]);return o.a.createElement(p.b,Object.assign({},a,{render:function(e){return null!==a.authedUser?o.a.createElement(t,e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={navLoaded:!1,navClass:"drawer"},a.displayNavLoaded=function(){a.setState({navLoaded:!0})},a.toggleDrawer=function(){var e=a.state.navClass;a.setState({navClass:"drawer"===e?"drawer open":"drawer"})},a.closeDrawer=function(){var e=a.state,t=e.navLoaded,n=e.navClass;t&&"drawer open"===n&&a.setState({navClass:"drawer"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.handleInitialData)()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.authedUser,r=this.state,s=r.navClass,l=r.navLoaded;return o.a.createElement(d.a,{basename:"/projects/wouldYouRather"},o.a.createElement(n.Fragment,null,o.a.createElement(z.a,null),o.a.createElement("div",{className:"app",onClick:this.closeDrawer},!0===t?null:o.a.createElement("div",{className:"container"},null===a?null:o.a.createElement(J,{navClass:s,toggleDrawer:this.toggleDrawer,navLoaded:l,displayNavLoaded:this.displayNavLoaded}),o.a.createElement(p.d,null,o.a.createElement(de,{className:"private",authedUser:a,path:"/",exact:!0,component:X}),o.a.createElement(de,{className:"private",authedUser:a,path:"/questions/:question_id",component:te}),o.a.createElement(de,{className:"private",authedUser:a,path:"/add",component:ne}),o.a.createElement(de,{className:"private",authedUser:a,path:"/leaderboard",component:se}),o.a.createElement(p.b,{className:"private",path:"/login",component:ue}),o.a.createElement(p.b,{component:$}))))))}}]),t}(n.Component);var he=Object(h.connect)(function(e){var t=e.users,a=e.authedUser;return{loading:0===Object.keys(t).length,authedUser:a}},{handleInitialData:function(){return function(e){return e(Object(P.showLoading)()),Promise.all([new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},N))},1e3)}),new Promise(function(e,t){setTimeout(function(){return e(Object(f.a)({},x))},1e3)})]).then(function(e){var t=Object(v.a)(e,2);return{users:t[0],polls:t[1]}}).then(function(t){var a=t.users,n=t.polls;e(function(e){return{type:k,users:e}}(a)),e(function(e){return{type:D,polls:e}}(n)),e(Object(P.hideLoading)())})}}})(pe),ve=a(17);var be=Object(ve.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return t.id;default:return e}},polls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(f.a)({},e,t.polls);case A:return Object(f.a)({},e,Object(b.a)({},t.qid,"optionOne"===t.answer?Object(f.a)({},e[t.qid],{optionOne:Object(f.a)({},e[t.qid].optionOne,{votes:e[t.qid].optionOne.votes.concat([t.uid])})}):Object(f.a)({},e[t.qid],{optionTwo:Object(f.a)({},e[t.qid].optionTwo,{votes:e[t.qid].optionTwo.votes.concat([t.uid])})})));case L:return Object(f.a)({},e,Object(b.a)({},t.qid,"optionOne"===t.answer?Object(f.a)({},e[t.qid],{optionOne:Object(f.a)({},e[t.qid].optionOne,{votes:e[t.qid].optionOne.votes.filter(function(e){return e!==t.uid})})}):Object(f.a)({},e[t.qid],{optionTwo:Object(f.a)({},e[t.qid].optionTwo,{votes:e[t.qid].optionTwo.votes.filter(function(e){return e!==t.uid})})})));case R:return Object(f.a)({},e,Object(b.a)({},t.poll.id,t.poll));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(f.a)({},e,t.users);case U:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{answers:Object(f.a)({},e[t.uid].answers,Object(b.a)({},t.qid,t.answer))})));case C:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{answers:Object.keys(e[t.uid].answers).reduce(function(a,n){return n!==t.qid?Object(f.a)({},a,Object(b.a)({},n,e[t.uid].answers[n])):a},{})})));case S:return Object(f.a)({},e,Object(b.a)({},t.uid,Object(f.a)({},e[t.uid],{questions:e[t.uid].questions.concat([t.qid])})));default:return e}},loadingBar:P.loadingBarReducer}),fe=a(43),Oe=function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state is: ",e.getState()),console.groupEnd(),n}}},we=Object(ve.a)(fe.a,Oe),Ee=Object(ve.d)(be,we);s.a.render(o.a.createElement(h.Provider,{store:Ee},o.a.createElement(he,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a231707f.chunk.js.map