(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,a){e.exports=a(269)},142:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),i=a.n(s),c=a(131),r=a(87),o=a.n(r),m=a(113),d=a(35),u=a(36),p=a(41),h=a(37),f=a(42),v=(a(142),a(270)),b=a(272),E=a(273),g=v.a.create({name:"form_in_modal"})(function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.visible,n=t.onCancel,s=t.onCreate,i=t.form.getFieldDecorator;return l.a.createElement(b.a,{visible:a,title:"Basic Modal",okText:"OK",onCancel:n,onOk:s},l.a.createElement(v.a,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},l.a.createElement(v.a.Item,{label:"Name"},i("name",{initialValue:this.props.name,rules:[{required:!0,message:"Please input the title of collection!"}]})(l.a.createElement(E.a,{onChange:function(t){e.setState({name:t.target.value})}}))),l.a.createElement(v.a.Item,{label:"E-mail"},i("email",{initialValue:this.props.email,rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(l.a.createElement(E.a,{style:{width:"100%"},onChange:function(t){e.setState({email:t.target.value})}}))),l.a.createElement(v.a.Item,{label:"Phone Number"},i("phone",{initialValue:this.props.phone,rules:[{required:!0,message:"Please input your phone number!"}]})(l.a.createElement(E.a,{style:{width:"100%"},onChange:function(t){e.setState({phone:t.target.value})}}))),l.a.createElement(v.a.Item,{label:"Website"},i("website",{initialValue:this.props.website,rules:[{required:!0,message:"Please input website!"}]})(l.a.createElement(E.a,{style:{width:"100%"},onChange:function(t){e.setState({website:t.target.value})}})))))}}]),t}(l.a.Component)),k=a(18),y=a(271),C=a(11),w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={theme:"",name:a.props.data.name,phone:a.props.data.phone,website:a.props.data.website,email:a.props.data.email,visible:!1,selectedid:""},a.style={background:"none",outline:"none",border:"none"},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields(function(t,n){t||(console.log("Received values of form: ",n),e.resetFields(),a.setState({visible:!1,name:n.name,email:n.email,phone:n.phone,website:n.website}),console.log(a.props.data))})},a.saveFormRef=function(e){a.formRef=e},a.handleClick=function(){""===a.state.theme?a.setState({theme:"filled"}):a.setState({theme:""})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t="https://avatars.dicebear.com/v2/avataaars/".concat(this.props.data.username,".svg?options[mood][]=happy");return console.log(this.state.name),l.a.createElement("div",null,l.a.createElement(k.a,{xs:24,sm:24,md:12,lg:8,xl:6},l.a.createElement(y.a,{className:"ant-card",cover:l.a.createElement("img",{alt:"example",src:t,style:{backgroundColor:"#f5f5f5"}}),actions:[l.a.createElement("button",{style:this.style,onClick:this.handleClick,className:"button"},l.a.createElement(C.a,{type:"heart",theme:this.state.theme,style:{fontSize:"20px",color:"#ff0000"}})),l.a.createElement("button",{style:this.style,className:"button"},l.a.createElement(C.a,{type:"edit",style:{fontSize:"20px"},onClick:this.showModal})),l.a.createElement("button",{style:this.style,className:"button"},l.a.createElement(C.a,{type:"delete",theme:"filled",style:{fontSize:"20px"},onClick:function(){return e.props.item(e.props.e)}}))]},l.a.createElement("div",null,l.a.createElement("h3",null,this.state.name),l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{type:"mail",style:{fontSize:"18px",marginRight:"10px"}})," ",this.state.email),l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{type:"phone",style:{fontSize:"18px",marginRight:"10px"}})," ",this.state.phone),l.a.createElement("div",{className:"content"},l.a.createElement(C.a,{type:"global",style:{fontSize:"18px",marginRight:"10px"}})," http://",this.state.website)))),l.a.createElement(g,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate,name:this.state.name,phone:this.state.phone,website:this.state.website,email:this.state.email}))}}]),t}(l.a.Component),O=function(e){var t=e.data.map(function(t){return l.a.createElement(w,{data:t,e:t.id,item:e.item,updateCard:e.updateCard})});return l.a.createElement("div",{className:"ant-row"},t)},S=a(130),j=a.n(S),x=(a(268),function(){return l.a.createElement("div",{class:"sk-circle"},l.a.createElement("div",{class:"sk-circle1 sk-child"}),l.a.createElement("div",{class:"sk-circle2 sk-child"}),l.a.createElement("div",{class:"sk-circle3 sk-child"}),l.a.createElement("div",{class:"sk-circle4 sk-child"}),l.a.createElement("div",{class:"sk-circle5 sk-child"}),l.a.createElement("div",{class:"sk-circle6 sk-child"}),l.a.createElement("div",{class:"sk-circle7 sk-child"}),l.a.createElement("div",{class:"sk-circle8 sk-child"}),l.a.createElement("div",{class:"sk-circle9 sk-child"}),l.a.createElement("div",{class:"sk-circle10 sk-child"}),l.a.createElement("div",{class:"sk-circle11 sk-child"}),l.a.createElement("div",{class:"sk-circle12 sk-child"}))}),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],loading:!0},a.componentDidMount=Object(m.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,console.log(t.data),a.setState({data:t.data,loading:!1});case 5:case"end":return e.stop()}},e)})),a.deleteCard=function(e){var t=a.state.data.filter(function(t){return t.id!==e});a.setState({data:t})},a.updateCard=function(e,t,n,l,s){console.log(s);var i=a.state.data.filter(function(a){return a.id===s&&(console.log(a),a.name=e,a.email=t,a.phone=n,a.website=l,console.log(a)),a});console.log(i),a.setState({data:Object(c.a)(i)})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement(x,null):l.a.createElement("div",null,l.a.createElement(O,{data:this.state.data,item:this.deleteCard,updateCard:this.updateCard}))}}]),t}(l.a.Component);i.a.render(l.a.createElement(N,null),document.querySelector("#root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.3a0eb7fe.chunk.js.map