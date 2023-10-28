"use strict";(self.webpackChunktickets_front=self.webpackChunktickets_front||[]).push([[319],{7363:function(n,e,i){i.d(e,{Z:function(){return j}});i(2791);var r,a,s,l,o,t=i(5705),d=i(6727),u=i(168),c=i(1087),p=i(5867),h=i(7662),m=(0,p.ZP)(c.OL)(r||(r=(0,u.Z)(["\n  cursor: pointer;\n  color: #b29f7e;\n  font-size: 14px;\n  line-height: 22px;\n  align-self: flex-end;\n  margin-top: -10px;\n"]))),x=p.ZP.form(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  & .form-center-align {\n    align-self: center;\n  }\n  & .blue-regular-text {\n    font-size: 14px;\n    line-height: 22px;\n    cursor: pointer;\n    color: #172234;\n  }\n"]))),f=p.ZP.div(s||(s=(0,u.Z)(["\n  font-size: 14px;\n  line-height: calc(14 / 12);\n  color: #da1414;\n"]))),g=p.ZP.div(l||(l=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  & label {\n    font-size: 14px;\n    font-weight: 700;\n    font-family: Merriweather;\n    line-height: 20px;\n  }\n  & input {\n    font-family: Lato;\n    font-size: 14px;\n    line-height: 22px;\n    width: 220px;\n    @media screen and (min-width: ",") {\n      width: 260px;\n    }\n    @media screen and (min-width: ",") {\n      width: 308px;\n    }\n    padding: 14px 20px 12px 20px;\n    background-color: #e0e0e0;\n    outline: none;\n    border: unset;\n    color: #172234;\n    border-radius: 5px;\n    /* border: 1px solid\n      ","; */\n    color: #172234;\n  }\n  & input::placeholder {\n    /* font-size: 14px;\n    font-family: Lato;\n    line-height: 22px;\n    color: #172234; */\n  }\n"])),h.M,h.g,(function(n){return n.isvalid?"green":!1===n.isvalid?"red":"transparent"})),w=p.ZP.button(o||(o=(0,u.Z)(["\n  background-color: #b29f7e;\n  outline: none;\n  border: unset;\n  border-radius: 5px;\n  padding: 11px 0;\n  cursor: pointer;\n  color: #fff;\n  transition: all 0.3s ease-in-out;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 700;\n  font-family: Merriweather;\n  margin-top: 30px;\n  width: 260px;\n  @media screen and (min-width: ",") {\n    width: 308px;\n  }\n  @media screen and (min-width: ",") {\n    width: 348px;\n  }\n\n  &:hover {\n    background-color: #172234;\n  }\n"])),h.M,h.g),b=i(3329),j=function(n){var e=n.isLogin,i=n.onSubmit,r=e?d.Ry({email:d.Z_().email("Invalid email address").required("Required"),password:d.Z_().min(8,"Must be at least 8 characters").required("Required")}):d.Ry({username:d.Z_().min(3,"Must be at least 3 characters").required("Required"),email:d.Z_().email("Invalid email address").required("Required"),password:d.Z_().min(8,"Must be at least 8 characters").required("Required")}),a=(0,t.TA)({initialValues:{username:"",email:"",password:""},validationSchema:r,onSubmit:function(n,e){i(n,e)}});return(0,b.jsxs)(x,{onSubmit:a.handleSubmit,children:[!e&&(0,b.jsxs)(g,{children:[(0,b.jsx)("label",{htmlFor:"username",children:"Username"}),(0,b.jsx)("input",{type:"text",id:"username",name:"username",placeholder:"Username",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.username}),a.touched.username&&a.errors.username?(0,b.jsx)(f,{children:a.errors.username}):null]}),(0,b.jsxs)(g,{children:[(0,b.jsx)("label",{htmlFor:"email",children:"Email"}),(0,b.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email}),a.touched.email&&a.errors.email?(0,b.jsx)(f,{children:a.errors.email}):null]}),(0,b.jsxs)(g,{children:[(0,b.jsx)("label",{htmlFor:"password",children:"Password"}),(0,b.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password}),a.touched.password&&a.errors.password?(0,b.jsx)(f,{children:a.errors.password}):null]}),e&&(0,b.jsx)("p",{className:"forgot-password",children:(0,b.jsx)("span",{children:"Forgot password?"})}),(0,b.jsx)(w,{type:"submit",children:e?"Login":"Signup"}),e&&(0,b.jsxs)("p",{className:"form-center-align",children:[(0,b.jsx)("span",{className:"blue-regular-text",children:" Don\u2019t have account? "}),(0,b.jsx)("span",{className:"forgot-password",children:(0,b.jsx)(m,{to:"/signup",children:"Sign Up"})})]})]})}},3319:function(n,e,i){i.r(e),i.d(e,{default:function(){return d}});i(2791);var r=i(9434),a=i(779),s=i(9226),l=i(7363),o=i(6048),t=i(3329);function d(){var n=(0,r.I0)();return(0,t.jsx)(a.oJ,{children:(0,t.jsxs)("div",{className:"main-container",children:[(0,t.jsx)(a.Yv,{src:s,alt:"hero-background"}),(0,t.jsxs)(a.bv,{children:[(0,t.jsx)("h2",{className:"login-title",children:"Login"}),(0,t.jsx)(l.Z,{isLogin:!0,onSubmit:function(e,i){var r=e.email,a=e.password;n(o.Z.logIn({email:r,password:a})),i.resetForm()}})]})]})})}},779:function(n,e,i){i.d(e,{Yv:function(){return d},bv:function(){return c},oJ:function(){return u}});var r,a,s,l=i(168),o=i(5867),t=i(7662),d=o.ZP.img(r||(r=(0,l.Z)(["\n  display: inline-block;\n"]))),u=o.ZP.main(a||(a=(0,l.Z)(["\n  & .main-container {\n    display: flex;\n    flex-direction: column;\n    @media screen and (min-width: ",") {\n      margin: 0 auto;\n      max-width: 1440px;\n      flex-direction: row;\n    }\n  }\n"])),t.g),c=o.ZP.div(s||(s=(0,l.Z)(["\n  @media screen and (min-width: ",") {\n    padding: 255px 100px;\n  }\n  margin: 0 auto;\n  padding: 50px;\n  & .login-title {\n    font-size: 28px;\n    color: #172234;\n    font-weight: 700;\n    font-family: Merriweather;\n    line-height: 34px;\n    margin-bottom: 20px;\n  }\n"])),t.g)},9226:function(n,e,i){n.exports=i.p+"static/media/signup-image.92fbdd8f6c6b4fef778d.jpg"}}]);
//# sourceMappingURL=319.9295ea98.chunk.js.map