(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{L9NX:function(L,i,e){"use strict";e.r(i);var m=e("fWQN"),E=e("mtLc"),O=e("yKVA"),D=e("879j"),M=e("q1tI"),v=e.n(M),P=e("95SA"),h=e("Ty5D"),y=e("9kvl"),d=e("s4NR"),R=e.n(d),o=e("nKUr"),U=e.n(o),p=function(a){Object(O.a)(t,a);var u=Object(D.a)(t);function t(){var s;Object(m.a)(this,t);for(var _=arguments.length,n=new Array(_),r=0;r<_;r++)n[r]=arguments[r];return s=u.call.apply(u,[this].concat(n)),s.state={isReady:!1},s}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var _=this.props.dispatch;_&&_({type:"user/fetchCurrent"})}},{key:"render",value:function(){var _=this.state.isReady,n=this.props,r=n.children,f=n.loading,l=n.currentUser,c=l&&l.userid,C=Object(d.stringify)({redirect:window.location.href});return!c&&f||!_?Object(o.jsx)(P.a,{}):!c&&window.location.pathname!=="/user/login"?Object(o.jsx)(h.c,{to:"/user/login?".concat(C)}):r}}]),t}(v.a.Component);i.default=Object(y.c)(function(a){var u=a.user,t=a.loading;return{currentUser:u.currentUser,loading:t.models.user}})(p)}}]);
