import Product from "./Product.jsx";

export default function ProductList() {
    let options=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
  return (
    <>
      <Product title="a" price="1" features={options}/>
      <Product title="b" price="2" features={['i','am','passed','internally']}/>
      <Product title="c" price="3" />

      {/* Number ko JavaScript expression ki tarah pass karne ke liye {} use karte hain */}
      <Product title="d" price={3} />
    </>
  );
}