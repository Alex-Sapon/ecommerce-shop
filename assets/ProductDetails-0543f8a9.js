import{s as i,B as x,r as n,P as u,C as g,u as C,j as e,S as w,a as r,f as $,b as y}from"./index-2acbe1fa.js";const P=i.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: -70px;
  row-gap: 50px;
  height: 100vh;

  @media (${t=>t.theme.device.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
  }
`,b=i.img`
  max-width: 250px;

  @media (${t=>t.theme.device.tablet}) {
    max-width: 300px;
  }
`,B=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  font-weight: ${t=>t.theme.fontWeight.regular};
  font-size: ${t=>t.theme.fontSize.text_sm};

  @media (${t=>t.theme.device.tablet}) {
    align-items: flex-start;
  }
`,j=i.h2`
  font-weight: ${t=>t.theme.fontWeight.semiBold};
  font-size: ${t=>t.theme.fontSize.text_xl};
`,v=i.span`
  font-weight: ${t=>t.theme.fontWeight.semiBold};
  color: ${t=>t.theme.color.detailsPrice};
`,S=i.p`
  margin-bottom: 10px;
`,z=i(x)`
  width: 120px;
`,W=()=>{const[t,c]=n.useState({}),{image:a,title:d,price:l,description:m}=t,{products:s}=n.useContext(u),{addToCart:h}=n.useContext(g),{id:o}=C();n.useEffect(()=>{o&&c(s.find(f=>f.id===parseInt(o,10))||{})},[s,o]);const p=()=>h(t);return t?r(P,{children:[e(b,{src:a}),r(B,{children:[e(j,{children:d}),e(v,{children:$(l)}),e(S,{children:m}),e(z,{onClick:p,children:"Add to cart"})]})]}):e(w,{})},D=()=>e(y,{children:e(W,{})});export{D as default};
