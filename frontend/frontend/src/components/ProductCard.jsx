import { useEffect, useState } from "react";
import axios from "axios";

function ProductCard({ source }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let apiUrl = "";

    if (source === "mongodb") {
      apiUrl = "http://localhost:5000/products";
    } else {
      apiUrl = "https://fakestoreapi.com/products";
    }

    axios
      .get(apiUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [source]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product._id || product.id}
          style={{
            backgroundColor: "#faf7ff",
            border: "1px solid #ede9fe",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "contain",
                marginBottom: "10px",
            }}
          />

          <h3
            style={{
    minHeight: "50px",
    color: "#4c1d95",
  }}
>{product.title}</h3>

          <p
             style={{
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
            <strong>Price:</strong> ₹ {product.price}
          </p>

          <p>
            <strong>Rating:</strong> ⭐{" "}
            {product.rating?.rate || product.rating}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;