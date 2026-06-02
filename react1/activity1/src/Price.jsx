export default function Price({ oldPrice, newPrice }) {
    return (
        <div>
              <p style={{ textDecoration: "line-through" }}>
               Old Price: ₹{oldPrice}
            </p>
            <p
    style={{
        backgroundColor: "yellow"
    }}
>
    ₹{newPrice}
</p>
        </div>
    );
}