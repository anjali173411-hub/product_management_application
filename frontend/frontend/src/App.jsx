import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [source, setSource] = useState("mongodb");

  const toggleProducts = () => {
    setSource(
      source === "mongodb" ? "fake" : "mongodb"
    );
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        <button
          onClick={toggleProducts}
          style={{
            padding: "12px 25px",
            background:
              "linear-gradient(90deg,#7c3aed,#2563eb)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {source === "mongodb"
            ? "Show Fake Store Products"
            : "Show MongoDB Products"}
        </button>
      </div>

      <ProductCard source={source} />
    </>
  );
}

export default App;