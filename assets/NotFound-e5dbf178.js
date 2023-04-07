import{s as o,c as a,L as i,G as s,a as n,j as t,b as r}from"./index-2acbe1fa.js";const c=o.div`
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  height: 100vh;
  color: ${e=>e.theme.color.secondary};
`,l=o.h2`
  font-weight: ${e=>e.theme.fontWeight.medium};
  font-size: ${e=>e.theme.fontSize.text_xl};
`,h=o(i).attrs({to:a.HOME})`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  transition: color 0.3s ease;
  font-weight: ${e=>e.theme.fontWeight.medium};
  font-size: ${e=>e.theme.fontSize.text_base};
  color: ${e=>e.theme.color.secondary};

  &:hover {
    color: ${e=>e.theme.color.close};
  }
`;function d(e){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}const m=()=>n(c,{children:[t(l,{children:"Page not found..."}),n(h,{children:["Go home ",t(d,{})]})]}),g=()=>t(r,{children:t(m,{})});export{g as default};
