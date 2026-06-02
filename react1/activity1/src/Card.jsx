import Price from './Price.jsx';

export default function Card({ name, desc, oldPrice, newPrice }) {
    return (
        <div className="card-item">
            <h1>{name}</h1>
            <h2>{desc}</h2>

            <Price
                oldPrice={oldPrice}
                newPrice={newPrice}
            />
        </div>
    );
}