(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){e.exports={forecast:"Forecast_forecast__3fScO"}},188:function(e,t,a){e.exports=a(389)},193:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(54),o=a.n(l),i=(a(193),a(57)),c=a(161),s=a(13);function u(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}var p=a(84),m=a.n(p),d=function(e){var t=Object(s.f)(),a=u(new Date(1e3*e.props.date)),n=a.slice(0,3),l="metric"===e.props.units?"C\xb0":"F\xb0";return r.a.createElement("div",{className:m.a.container,onClick:function(){return function(a){var n="/"+a.slice(0,3).toLowerCase();e.setWeatherDetail({dayOfWeek:a,humidity:e.props.humidity,pressure:e.props.pressure,speed:e.props.speed}),t.push(n)}(a)}},r.a.createElement("h4",{className:m.a.header},n),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.props.weather.icon+"@2x.png",alt:e.props.weather.description+" icon"}),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Min:\xa0"),r.a.createElement("span",null,Math.round(e.props.min)," ",l)),r.a.createElement("p",null,r.a.createElement("span",null,"Max:\xa0"),r.a.createElement("span",null,Math.round(e.props.max)," ",l))))},h=a(152),E=a.n(h),f="https://api.openweathermap.org/data/2.5",g="ae8a60a3a1f6085bd401deed5686b833",w="metric";var v,y=function(e){var t=e.forecast;return r.a.createElement("div",{className:E.a.forecast},r.a.createElement("p",null,"FORECAST"),function(){var a=[];return t.forEach(function(t,n){var l={max:t.temp.max,min:t.temp.min,date:t.dt,weather:t.weather[0],units:w,pressure:t.pressure,humidity:t.humidity,speed:t.speed};a.push(r.a.createElement(d,{setWeatherDetail:e.setWeatherDetail,props:l,key:n}))}),a}())},b=a(35),D=a(59),_=a.n(D),x=a(141),O=function(e){var t;t="POP"!==e.history.action&&e.wDetail?e.wDetail:{};var a=Object(n.useState)(void 0),l=Object(i.a)(a,2),o=l[0],c=l[1];if(o||x.get("https://api.openweathermap.org/data/2.5/forecast?appid=ae8a60a3a1f6085bd401deed5686b833",{params:{lat:e.position.coords.latitude,lon:e.position.coords.longitude,units:w}}).then(function(e){c(e.data.list)}).catch(function(e){c(null),console.log("Error while trying to get the forecast:"),console.log(e)}),void 0===o)return r.a.createElement("h3",{className:"white-center-text"},"Loading...");if(null===o)return r.a.createElement("h3",null,"Error!");var s=e.location.pathname.slice(1),p=t.dayOfWeek,m=!1,d=o.filter(function(e){var t=new Date(e.dt_txt);return s===t.toDateString().slice(0,3).toLowerCase()&&(m||p||(p=u(t),m=!0),!0)});d.map(function(e){return e.x_label=new Date(e.dt_txt).toTimeString().slice(0,5)});var h=r.a.createElement(b.c,{width:700,height:400,data:d,className:_.a.customChartWrapper},r.a.createElement(b.b,{type:"monotone",dataKey:"main.temp",stroke:"#8884d8"}),r.a.createElement(b.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(b.d,{dataKey:"x_label",dy:10,angle:-35,tick:{fill:"white",fontSize:12}}),r.a.createElement(b.e,{tickFormatter:function(e){return"".concat(e,"\xb0")},dx:-10,tick:{fill:"white",fontSize:14}}));return r.a.createElement("div",null,r.a.createElement("span",{className:_.a.title},p),r.a.createElement("div",null,h,r.a.createElement("div",{className:_.a.averageStatus},t.pressure?r.a.createElement("p",null,r.a.createElement("span",null,"Pressure:\xa0"),r.a.createElement("span",null,t.pressure,"\xa0hPa")):null,t.humidity?r.a.createElement("p",null,r.a.createElement("span",null,"Humidity:\xa0"),r.a.createElement("span",null,t.humidity,"%")):null,t.speed?r.a.createElement("p",null,r.a.createElement("span",null,"Speed:\xa0"),r.a.createElement("span",null,t.speed,"\xa0meter/sec")):null)))},W=(a(388),a(141)),k=f+"/forecast/daily?cnt=5&appid="+g;var S=function(){var e,t=Object(n.useState)(void 0),a=Object(i.a)(t,2),l=a[0],o=a[1];if(v||navigator.geolocation.getCurrentPosition(function(e){v=e,W.get(k,{params:{lat:e.coords.latitude,lon:e.coords.longitude,units:w}}).then(function(e){o(e.data.list)}).catch(function(e){o(null),console.log("Error while trying to get the forecast:"),console.log(e)},function(e){o(null),console.log("Error while trying to get the current position:"),console.log(e)})}),void 0===l)return r.a.createElement("h3",{className:"white-center-text"},"Loading...");if(null===l)return r.a.createElement("h3",{className:"white-center-text"},"Error!");var u=function(t){return e=t};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(y,Object.assign({},e,{setWeatherDetail:u,forecast:l}))}}),r.a.createElement(s.a,{path:"/sun",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/mon",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/tue",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/wed",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/thu",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/fri",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{path:"/sat",render:function(t){return r.a.createElement(O,Object.assign({},t,{wDetail:e,position:v}))}}),r.a.createElement(s.a,{component:function(){return r.a.createElement("h3",{className:"white-center-text"},"Page not found :(")}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports={customChartWrapper:"WeatherDetail_customChartWrapper__1Odnh",title:"WeatherDetail_title__1nGHz",averageStatus:"WeatherDetail_averageStatus__3bh4u"}},84:function(e,t,a){e.exports={container:"WeatherCard_container__2cvaU",header:"WeatherCard_header__2cl55"}}},[[188,1,2]]]);
//# sourceMappingURL=main.44fc1cf7.chunk.js.map