import Card from './Card.jsx';

export default function CardList() {
    return (
        <div>
            <Card
                name="apple iPhone 15"
                desc="6.1-inch display, A16 Bionic chip, 48MP camera"
                oldPrice={70000}
                newPrice={65000}
            />

            <Card
                name="Samsung Galaxy S24"
                desc="Powerful Android"
                oldPrice={80000}
                newPrice={75000}
            />
        </div>
    );
}