(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{183:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(15),r=n(17),c=n(16),i=n(0),o=n.n(i),l=n(50),u=n.n(l),d=n(250),h=(n(183),n(247)),j=n(241),p=n(237),f=n(226),m=n(3),g=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(h.a,{as:j.a,icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"very thin",children:[Object(m.jsx)(p.a,{}),Object(m.jsx)(f.a,{icon:"add",size:"small",color:"blue"})]})}}]),n}(i.Component),b=n(251),O=n(74),v=n(240),C=n(167),x=n(140);n(190),n(225),n(192);x.a.initializeApp({apiKey:"AIzaSyBp7NMMZnv3dLhc3R_xblCrJWh80sXobo8",authDomain:"react-slack-clone-4c909.firebaseapp.com",databaseURL:"https://react-slack-clone-4c909-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-slack-clone-4c909",storageBucket:"react-slack-clone-4c909.appspot.com",messagingSenderId:"746440793495",appId:"1:746440793495:web:3ae9974fe926f6e6d778d2",measurementId:"G-SKVLWJY5S3"});var y=x.a,S=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.currentUser},e.Dropdownoptions=function(){return[{key:"user",text:Object(m.jsxs)("span",{children:["signed in as ",Object(m.jsx)("strong",{children:e.state.user.displayName})]}),disabled:!0},{key:"Avatar",text:Object(m.jsx)("span",{children:"Change Avatar"})},{key:"signout",text:Object(m.jsx)("span",{onClick:e.handleSignout,children:"Sign Out"})}]},e.handleSignout=function(){y.auth().signOut().then((function(){return console.log("signed out")}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.user;return Object(m.jsx)(d.a,{style:{background:"#4c3c4c"},children:Object(m.jsx)(d.a.Column,{children:Object(m.jsxs)(d.a.Row,{style:{padding:"1.2em",margin:0},children:[Object(m.jsxs)(b.a,{inverted:!0,floated:"left",as:"h2",children:[Object(m.jsx)(O.a,{name:"code"}),Object(m.jsx)(b.a.Content,{children:"PING ME"})]}),Object(m.jsx)(b.a,{style:{padding:"0.25em"},as:"h4",inverted:!0,children:Object(m.jsx)(v.a,{trigger:Object(m.jsxs)("span",{children:[Object(m.jsx)(C.a,{src:e.photoURL,spaced:"right",avatar:!0}),e.displayName]}),options:this.Dropdownoptions()})})]})})})}}]),n}(i.Component),k=n(123),U=n(45),N=n(99),w=n(244),M=n(242),R=n(238),L=n(51),P="SET_USER",A="SIGN_OUT_USER",E="SET_CURRENT_CHANNEL",I="SET_PRIVATE_CHANNEL",F=function(e){return{type:E,payload:{currentChannel:e}}},T=function(e){return{type:I,payload:{isPrivateChannel:e}}},D=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={channel:null,notifications:[],messageRef:y.database().ref("messages"),activeChannel:"",firstLoad:!0,channels:[],channelName:"",channelDetails:"",modal:!1,channelRef:y.database().ref("channels"),user:e.props.currentUser},e.removeListener=function(){e.state.channelRef.off()},e.addListener=function(){var t=[];e.state.channelRef.on("child_added",(function(n){t.push(n.val()),e.setState({channels:t},(function(){return e.setFirstChannel()})),e.addNotificationsListener(n.key)}))},e.addNotificationsListener=function(t){e.state.messageRef.on("value",(function(n){e.state.channel&&e.handleNotifications(t,e.state.channel.id,e.state.notifications,n)}))},e.handleNotifications=function(t,n,a,s){var r=0,c=a.findIndex((function(e){return e.id===t}));-1!==c?(t!==n&&(r=a[c].total,s.numChildren()-r>0&&(a[c].count=s.numChildren()-r)),a[c].lastKnownTotal=s.numChildren()):a.push({id:t,total:s.numChildren(),lastKnownTotal:s.numChildren(),count:0}),e.setState({notifications:a})},e.setFirstChannel=function(){var t=e.state,n=t.firstLoad,a=t.channels,s=a[0];n&&a.length>0&&(e.props.setCurrentChannel(s),e.setActiveChannel(s),e.setState({channel:s})),e.setState({firstLoad:!1})},e.handleSubmit=function(t){t.preventDefault(),e.isFormValid(e.state)&&e.addChannel()},e.addChannel=function(){var t=e.state,n=t.channelRef,a=t.channelName,s=t.channelDetails,r=t.user,c=n.push().key,i={id:c,name:a,details:s,createdBy:{name:r.displayName,avatar:r.photoURL}};n.child(c).update(i).then((function(){e.setState({channelName:"",channelDetails:""}),e.closeModal(),console.log("channel added")})).catch((function(e){console.error(e)}))},e.isFormValid=function(e){var t=e.channelName,n=e.channelDetails;return t&&n},e.openModal=function(){e.setState({modal:!0})},e.closeModal=function(){e.setState({modal:!1})},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.name,t.target.value))},e.changeChannel=function(t){e.clearNotifications(),e.setActiveChannel(t),e.props.setCurrentChannel(t),e.props.setPrivateChannel(!1),e.setState({channel:t})},e.clearNotifications=function(){var t=e.state.notifications.findIndex((function(t){return t.id===e.state.channel.id}));if(-1!==t){var n=Object(k.a)(e.state.notifications);n[t].total=e.state.notifications[t].total,n[t].count=0,e.setState({notifications:n})}},e.setActiveChannel=function(t){e.setState({activeChannel:t.id})},e.getNotificationCount=function(t){var n=0;if(e.state.notifications.forEach((function(e){e.id===t.id&&(n=e.count)})),n>0)return n},e.displayChannels=function(t){return t.length>0&&t.map((function(t){return Object(m.jsxs)(j.a.Item,{active:t.id===e.state.activeChannel,name:t.name,onClick:function(){return e.changeChannel(t)},style:{opacity:.7},children:[e.getNotificationCount(t)&&Object(m.jsx)(N.a,{color:"red",children:e.getNotificationCount(t)})," ","#",t.name]},t.id)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.addListener()}},{key:"componentWillUnmount",value:function(){this.removeListener()}},{key:"render",value:function(){var e=this.state,t=e.channels,n=e.modal;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsxs)(j.a.Menu,{className:"menu",children:[Object(m.jsxs)(j.a.Item,{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)(O.a,{name:"exchange"})," CHANNELS"]}),"  ","(",t.length,")"," ",Object(m.jsx)(O.a,{name:"add",onClick:this.openModal})]}),this.displayChannels(t)]}),Object(m.jsxs)(w.a,{basic:!0,open:n,onClose:this.closeModal,children:[Object(m.jsx)(w.a.Header,{children:"Add a Channel"}),Object(m.jsx)(w.a.Content,{children:Object(m.jsxs)(M.a,{onSubmit:this.handleSubmit,children:[Object(m.jsx)(M.a.Field,{children:Object(m.jsx)(R.a,{fluid:!0,name:"channelName",label:"Name of the Channel",onChange:this.handleChange})}),Object(m.jsx)(M.a.Field,{children:Object(m.jsx)(R.a,{fluid:!0,name:"channelDetails",label:"About the Channel",onChange:this.handleChange})})]})}),Object(m.jsxs)(w.a.Actions,{children:[Object(m.jsxs)(f.a,{color:"green",inverted:!0,onClick:this.handleSubmit,children:[Object(m.jsx)(O.a,{name:"checkmark"}),"ADD"]}),Object(m.jsxs)(f.a,{color:"red",inverted:!0,onClick:this.closeModal,children:[Object(m.jsx)(O.a,{name:"remove"}),"CANCEL"]})]})]})]})}}]),n}(i.Component),_=Object(L.b)(null,{setCurrentChannel:F,setPrivateChannel:T})(D),z=n(162),B=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeChannel:"",user:e.props.currentUser,users:[],usersRef:y.database().ref("users"),connectedRef:y.database().ref(".info/connected"),presenceRef:y.database().ref("presence")},e.addListeners=function(t){var n=[];e.state.usersRef.on("child_added",(function(a){if(t!==a.key){var s=a.val();s.uid=a.key,s.status="offline",n.push(s),e.setState({users:n})}})),e.state.connectedRef.on("value",(function(n){if(!0===n.val()){var a=e.state.presenceRef.child(t);a.set(!0),a.onDisconnect().remove((function(e){null!==e&&console.log(e)}))}})),e.state.presenceRef.on("child_added",(function(n){t!==n.key&&e.addStatusTousers(n.key)})),e.state.presenceRef.on("child_removed",(function(n){t!==n.key&&e.addStatusTousers(n.key,!1)}))},e.addStatusTousers=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=e.state.users.reduce((function(e,a){return a.uid===t&&(a.status="".concat(n?"online":"offline")),e.concat(a)}),[]);e.setState({users:a})},e.IsUserOnline=function(e){return"online"===e.status},e.changeChannel=function(t){var n={id:e.getUserId(t.uid),name:t.name};e.props.setCurrentChannel(n),e.props.setPrivateChannel(!0),e.setActiveChannel(t.uid)},e.setActiveChannel=function(t){e.setState({activeChannel:t})},e.getUserId=function(t){var n=e.state.user.uid;return t<n?"".concat(t,"/").concat(n):"".concat(n,"/").concat(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.state.user&&(this.addListeners(this.state.user.uid),console.log(this.state.user.uid))}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.activeChannel;return Object(m.jsxs)(j.a.Menu,{className:"menu",children:[Object(m.jsxs)(j.a.Item,{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)(O.a,{name:"mail"})," DIRECT MESSAGES"]})," ","(",n.length,")"]}),n.map((function(t){return Object(m.jsxs)(j.a.Item,{active:t.uid===a,onClick:function(){e.changeChannel(t)},style:{opacity:.7,fontStyle:z.italic},children:[Object(m.jsx)(O.a,{name:"circle",color:e.IsUserOnline(t)?"green":"red"}),"@",t.name]},t.uid)}))]})}}]),n}(i.Component),G=Object(L.b)(null,{setCurrentChannel:F,setPrivateChannel:T})(B),W=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.currentUser;return Object(m.jsxs)(j.a,{size:"large",vertical:!0,inverted:!0,fixed:"left",style:{background:"#4c3c4c",fontSize:"1.2rem"},children:[Object(m.jsx)(S,{currentUser:e}),Object(m.jsx)(_,{currentUser:e}),Object(m.jsx)(G,{currentUser:e})]})}}]),n}(i.Component),q=n(252),V=n(243),H=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.channelName,n=e.numUniqueUsers,a=e.handleSearchChange,s=e.searchLoading,r=e.isPrivateChannel;return Object(m.jsxs)(q.a,{clearing:!0,children:[Object(m.jsxs)(b.a,{fluid:"true",as:"h2",floated:"left",style:{marginBottom:0},children:[Object(m.jsxs)("span",{children:[t,!r&&Object(m.jsx)(O.a,{name:"star outline",color:"black"})]}),Object(m.jsx)(b.a.Subheader,{children:n})]}),Object(m.jsx)(b.a,{floated:"right",children:Object(m.jsx)(R.a,{loading:s,name:"searchterm",size:"mini",icon:"search",placeholder:"Search Messages",onChange:a})})]})}}]),n}(i.Component),J=n(141),K=n.n(J),X=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={file:null,authorized:["image/jpeg","image/png"]},e.addFile=function(t){var n=t.target.files[0];n&&e.setState({file:n})},e.sendFile=function(){var t=e.state.file,n=e.props,a=n.uploadFile,s=n.closeModal;null!==t&&(e.isAuthorized(t.name)&&(a(t,{contentType:K.a.lookup(t.name)}),s(),e.clearFile()))},e.isAuthorized=function(t){return e.state.authorized.includes(K.a.lookup(t))},e.clearFile=function(){return e.setState({file:null})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.modal,n=e.closeModal;return Object(m.jsxs)(w.a,{basic:!0,open:t,onClose:n,children:[Object(m.jsx)(w.a.Header,{children:"Select an image File"}),Object(m.jsx)(w.a.Content,{children:Object(m.jsx)(R.a,{onChange:this.addFile,label:"File types : jpg,png",fluid:!0,type:"file",name:"file"})}),Object(m.jsxs)(w.a.Actions,{children:[Object(m.jsxs)(f.a,{color:"green",inverted:!0,onClick:this.sendFile,children:[Object(m.jsx)(O.a,{name:"checkmark"}),"SEND"]}),Object(m.jsxs)(f.a,{color:"red",inverted:!0,onClick:n,children:[Object(m.jsx)(O.a,{name:"remove"})," CANCEL"]})]})]})}}]),n}(i.Component),Y=n(245),Z=function(e){var t=e.uploadState,n=e.percentUploaded;return"uploading"===t&&Object(m.jsx)(Y.a,{className:"progress__bar",percent:n,progress:!0,indicating:!0,size:"medium",inverted:!0})},Q=n(163),$=n.n(Q),ee=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={uploadState:"",uploadTask:null,storageRef:y.storage().ref(),percentUploaded:0,message:"",channel:e.props.currentChannel,user:e.props.currentUser,loading:!1,errors:[],modal:!1},e.getPath=function(){if(e.props.isPrivateChannel)return"chat/private-".concat(e.state.channel.id)},e.uploadFile=function(t,n){var a=e.state.channel.id,s=e.props.getMessageRefs(),r="".concat(e.getPath(),"/").concat($()(),".jpg");e.setState({uploadState:"uploading",uploadTask:e.state.storageRef.child(r).put(t,n)},(function(){e.state.uploadTask.on("state changed",(function(t){var n=100*Math.round(t.bytesTransferred/t.totalBytes);e.props.isProgressBar(n),e.setState({percentUploaded:n})}),(function(t){console.log(t),e.setState({errors:e.state.errors.concat(t),uploadState:"error",uploadTask:null})}),(function(){e.state.uploadTask.snapshot.ref.getDownloadURL().then((function(t){e.sendFileMessage(t,a,s)})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),uploadState:"error",uploadTask:null})}))}))}))},e.sendFileMessage=function(t,n,a){a.child(n).push().set(e.createMessage(t)).then((function(){e.setState({uploadState:"done"})})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t)})}))},e.openModal=function(){return e.setState({modal:!0})},e.closeModal=function(){return e.setState({modal:!1})},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.name,t.target.value))},e.createMessage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n={timestamp:y.database.ServerValue.TIMESTAMP,user:{id:e.state.user.uid,name:e.state.user.displayName,avatar:e.state.user.photoURL}};return null!==t?n.image=t:n.content=e.state.message,n},e.sendMessage=function(){var t=e.props.getMessageRefs,n=e.state,a=n.message,s=n.channel;a?(e.setState({loading:!0}),t().child(s.id).push().set(e.createMessage()).then((function(){e.setState({loading:!1,message:"",errors:[]})})).catch((function(t){console.error(t),e.setState({loading:!1,errors:e.state.errors.concat(t)})}))):e.setState({errors:e.state.errors.concat({message:"Add a message"})})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.errors,n=e.message,a=e.loading,s=e.modal,r=e.uploadState,c=e.percentUploaded;return Object(m.jsxs)(q.a,{className:"message__form",children:[Object(m.jsx)(R.a,{fluid:!0,name:"message",onChange:this.handleChange,value:n,style:{marginBottom:"0.7em"},label:Object(m.jsx)(f.a,{icon:"add"}),labelPosition:"left",className:t.some((function(e){return e.message.includes("message")}))?"error":"",placeholder:"Write your message"}),Object(m.jsxs)(f.a.Group,{icon:!0,widths:"2",children:[Object(m.jsx)(f.a,{onClick:this.sendMessage,disabled:a,color:"orange",content:"Add Reply",labelPosition:"left",icon:"edit"}),Object(m.jsx)(f.a,{color:"teal",onClick:this.openModal,disabled:"uploading"===r,content:"Upload Media",labelPosition:"right",icon:"cloud upload"})]}),Object(m.jsx)(X,{uploadFile:this.uploadFile,modal:s,closeModal:this.closeModal}),Object(m.jsx)(Z,{uploadState:r,percentUploaded:c})]})}}]),n}(o.a.Component),te=n(164),ne=n.n(te),ae=function(e,t){return e.user.id===t.uid?"message_self":""},se=function(e){return e.hasOwnProperty("image")&&!e.hasOwnProperty("content")},re=function(e){var t,n=e.message,a=e.user;return Object(m.jsxs)(V.a,{children:[Object(m.jsx)(V.a.Avatar,{src:n.user.avatar}),Object(m.jsxs)(V.a.Content,{className:ae(n,a),children:[Object(m.jsx)(V.a.Author,{as:"a",children:n.user.name}),Object(m.jsx)(V.a.Metadata,{children:(t=n.timestamp,ne()(t).fromNow())}),se(n)?Object(m.jsx)(C.a,{src:n.image,className:"message_image"}):Object(m.jsx)(V.a.Text,{children:n.content})]})]})},ce=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={privateChannel:e.props.isPrivateChannel,privateMessagesRef:y.database().ref("PrivateMessages"),messageRef:y.database().ref("messages"),channel:e.props.currentChannel,user:e.props.currentUser,messages:[],messagesLoading:!0,progressBar:!1,numUniqueUsers:"",searchTerm:"",searchLoading:!1,searchResults:[]},e.addListeners=function(t){e.addMessageListener(t)},e.addMessageListener=function(t){var n=[];e.getMessageRefs().child(t).on("child_added",(function(t){n.push(t.val()),e.setState({messages:n,messagesLoading:!1}),e.countUniqueUsers(n)}))},e.getMessageRefs=function(){var t=e.state,n=t.messageRef,a=t.privateMessagesRef;return t.privateChannel?a:n},e.countUniqueUsers=function(t){var n=t.reduce((function(e,t){return e.includes(t.user.name)||e.push(t.user.name),e}),[]),a=n.length>1||0===n.length,s="".concat(n.length," user").concat(a?"s":"");e.setState({numUniqueUsers:s})},e.displayMessages=function(t){return t.length>0&&t.map((function(t){return Object(m.jsx)(re,{user:e.state.user,message:t},t.timestamp)}))},e.isProgressBar=function(t){t>0&&e.setState({progressBar:!0})},e.displayChannel=function(t){return t?"".concat(e.state.privateChannel?"@":"#").concat(t.name):""},e.handleSearchChange=function(t){e.setState({searchTerm:t.target.value,searchLoading:!0},(function(){e.handleSearchMessage()}))},e.handleSearchMessage=function(){var t=Object(k.a)(e.state.messages),n=new RegExp(e.state.searchTerm,"gi"),a=t.reduce((function(e,t){return(t.content&&t.content.match(n)||t.user.name.match(n))&&e.push(t),e}),[]);e.setState({searchResults:a}),setTimeout((function(){e.setState({searchLoading:!1})}),1e3)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.state,t=e.channel,n=e.user;t&&n&&this.addListeners(t.id)}},{key:"render",value:function(){var e=this.state,t=e.messageRef,n=e.channel,a=e.user,s=e.messages,r=e.numUniqueUsers,c=e.searchTerm,i=e.searchResults,l=e.searchLoading,u=e.privateChannel;return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)(H,{channelName:this.displayChannel(n),numUniqueUsers:r,handleSearchChange:this.handleSearchChange,searchLoading:l,isPrivateChannel:u}),Object(m.jsx)(q.a,{children:Object(m.jsx)(V.a.Group,{className:"messages",children:c?this.displayMessages(i):this.displayMessages(s)})}),Object(m.jsx)(ee,{messageRef:t,currentChannel:n,currentUser:a,isProgressBar:this.isProgressBar,isPrivateChannel:u,getMessageRefs:this.getMessageRefs})]})}}]),n}(i.Component),ie=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"Metapanel"})}}]),n}(i.Component),oe=Object(L.b)((function(e){return{currentUser:e.user.currentUser,currentChannel:e.channel.currentChannel,isPrivateChannel:e.channel.isPrivateChannel}}))((function(e){var t=e.currentUser,n=e.currentChannel,a=e.isPrivateChannel;return Object(m.jsxs)(d.a,{columns:"equal",className:"app",style:{background:"#eee"},children:[Object(m.jsx)(g,{}),Object(m.jsx)(W,{currentUser:t},t&&t.id),Object(m.jsx)(d.a.Column,{style:{marginLeft:320},children:Object(m.jsx)(ce,{currentChannel:n,currentUser:t,isPrivateChannel:a},n&&n.id)}),Object(m.jsx)(d.a.Column,{width:4,children:Object(m.jsx)(ie,{})})]})})),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},ue=n(246),de=n(83),he=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",errors:[],loading:!1},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.name,t.target.value))},e.isFormvalid=function(e){var t=e.email,n=e.password;return t&&n},e.handleSubmit=function(t){t.preventDefault(),e.isFormvalid(e.state)&&(e.setState({errors:[],loading:!0}),y.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){console.log(e)})).catch((function(t){console.error(t),e.setState({erros:e.state.errors.concat(t),loading:!1})})))},e.displayErrors=function(e){return e.map((function(e,t){return Object(m.jsx)("p",{children:e.message},t)}))},e}return Object(s.a)(n,[{key:"handleInputError",value:function(e,t){return e.some((function(e){return e.message.toLowerCase().includes(t)}))?"error":""}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.errors,s=e.loading;return Object(m.jsx)(d.a,{textAlign:"center",verticalAlign:"middle",className:"app",children:Object(m.jsxs)(d.a.Column,{style:{maxWidth:450},children:[Object(m.jsxs)(b.a,{as:"h2",icon:!0,color:"violet",textAlign:"center",children:[Object(m.jsx)(O.a,{name:"code branch",color:"violet"}),"LOGIN FOR PINGME"]}),Object(m.jsx)(M.a,{size:"large",onSubmit:this.handleSubmit,children:Object(m.jsxs)(q.a,{stacked:!0,children:[Object(m.jsx)(M.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email address",onChange:this.handleChange,type:"email",value:t,className:this.handleInputError(a,"email")}),Object(m.jsx)(M.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"password",onChange:this.handleChange,type:"password",value:n,className:this.handleInputError(a,"password")}),Object(m.jsx)(f.a,{disabled:s,className:s?"loading":"",color:"violet",fluid:!0,size:"large",children:"SIGN IN"})]})}),a.length>0&&Object(m.jsxs)(ue.a,{error:!0,children:[Object(m.jsx)("h3",{children:"error"}),this.displayErrors(a)]}),Object(m.jsxs)(ue.a,{children:["Dont have an account?  ",Object(m.jsx)(de.b,{to:"/register",children:"  Register"})]})]})})}}]),n}(i.Component),je=n(165),pe=n.n(je),fe=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,userRef:y.database().ref("users")},e.isFormEmpty=function(e){var t=e.email,n=e.username,a=e.password,s=e.passwordConfirmation;return!n.length||!t.length||!a.length||!s.length},e.isPasswordValid=function(e){var t=e.password,n=e.passwordConfirmation;return!(t.length<6||n.length<6)&&t===n},e.isFormvalid=function(){var t,n=[];return e.isFormEmpty(e.state)?(t={message:"Fill in all fields"},e.setState({errors:n.concat(t)}),!1):!!e.isPasswordValid(e.state)||(t={message:"Entered password is invalid"},e.setState({errors:n.concat(t)}),!1)},e.handleChange=function(t){e.setState(Object(U.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.isFormvalid()&&(e.setState({errors:[],loading:!0}),y.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){console.log(t),t.user.updateProfile({displayName:e.state.username,photoURL:"http://gravatar.com/avatar/".concat(pe()(t.user.email),"?d=identicon")}).then((function(){e.saveUser(t).then((function(){console.log("user saved")}))})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),loading:!1})}))})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),loading:!1})})))},e.saveUser=function(t){return e.state.userRef.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.displayErrors=function(e){return e.map((function(e,t){return Object(m.jsx)("p",{children:e.message},t)}))},e}return Object(s.a)(n,[{key:"handleInputError",value:function(e,t){return e.some((function(e){return e.message.toLowerCase().includes(t)}))?"error":""}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password,s=e.passwordConfirmation,r=e.errors,c=e.loading;return Object(m.jsx)(d.a,{textAlign:"center",verticalAlign:"middle",className:"app",children:Object(m.jsxs)(d.a.Column,{style:{maxWidth:450},children:[Object(m.jsxs)(b.a,{as:"h2",icon:!0,color:"blue",textAlign:"center",children:[Object(m.jsx)(O.a,{name:"puzzle piece",color:"blue"}),"REGISTER FOR PINGME"]}),Object(m.jsx)(M.a,{size:"large",onSubmit:this.handleSubmit,children:Object(m.jsxs)(q.a,{stacked:!0,children:[Object(m.jsx)(M.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"Username",onChange:this.handleChange,type:"text",value:t,className:this.handleInputError(r,"username")}),Object(m.jsx)(M.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email address",onChange:this.handleChange,type:"email",value:n,className:this.handleInputError(r,"email")}),Object(m.jsx)(M.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"password",onChange:this.handleChange,type:"password",value:a,className:this.handleInputError(r,"password")}),Object(m.jsx)(M.a.Input,{fluid:!0,name:"passwordConfirmation",icon:"repeat",iconPosition:"left",placeholder:"Confirm Password",onChange:this.handleChange,type:"password",value:s,className:this.handleInputError(r,"password")}),Object(m.jsx)(f.a,{disabled:c,className:c?"loading":"",color:"blue",fluid:!0,size:"large",children:"SUBMIT"})]})}),r.length>0&&Object(m.jsxs)(ue.a,{error:!0,children:[Object(m.jsx)("h3",{children:"error"}),this.displayErrors(r)]}),Object(m.jsxs)(ue.a,{children:["Already a user ? ",Object(m.jsx)(de.b,{to:"/login",children:"Login"})]})]})})}}]),n}(i.Component),me=n(18),ge=(n(223),n(93)),be=n(166),Oe=n(49),ve={currentUser:null,isLoading:!0},Ce={currentChannel:null,isPrivateChannel:!1},xe=Object(ge.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{currentUser:t.payload.currentUser,isLoading:!1};case A:return Object(Oe.a)(Object(Oe.a)({},e),{},{isLoading:!1});default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(Oe.a)(Object(Oe.a)({},e),{},{currentChannel:t.payload.currentChannel});case I:return Object(Oe.a)(Object(Oe.a)({},e),{},{isPrivateChannel:t.payload.isPrivateChannel});default:return e}}}),ye=n(249),Se=n(239),ke=function(){return Object(m.jsx)(ye.a,{active:!0,children:Object(m.jsx)(Se.a,{size:"huge",content:"preparing chat..."})})},Ue=Object(ge.createStore)(xe,Object(be.composeWithDevTools)()),Ne=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.auth().onAuthStateChanged((function(t){t?(e.props.setUser(t),e.props.history.push("/")):(e.props.history.push("/login"),e.props.clearUser())}))}},{key:"render",value:function(){return this.props.isLoading?Object(m.jsx)(ke,{}):Object(m.jsxs)(me.c,{children:[Object(m.jsx)(me.a,{exact:!0,path:"/",component:oe}),Object(m.jsx)(me.a,{path:"/login",component:he}),Object(m.jsx)(me.a,{path:"/register",component:fe}),Object(m.jsx)(me.a,{})]})}}]),n}(i.Component),we=Object(me.f)(Object(L.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:P,payload:{currentUser:e}}},clearUser:function(){return{type:A}}})(Ne));u.a.render(Object(m.jsx)(L.a,{store:Ue,children:Object(m.jsx)(de.a,{children:Object(m.jsx)(we,{})})}),document.getElementById("root")),le()}},[[224,1,2]]]);
//# sourceMappingURL=main.1c65626a.chunk.js.map