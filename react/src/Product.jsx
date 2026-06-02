import "./product.css";

export default function Product({ title, price, features = [] }) {
  const list = features.map((feature, index) => <li key={index}>{feature}</li>);
  let isdicount = price > 1 ? "5%" : "";
  let styles={backgroundColor:price>1?"pink":"green"};

  return (
    <div className="product" style={styles}>
      <h1>{title}</h1>
      <h2>{price}</h2>
      {price > 1 && <p>discount of 5%</p>}

      <p>{isdicount}</p>
      <ul>{list}</ul>
    </div>
  );
}
