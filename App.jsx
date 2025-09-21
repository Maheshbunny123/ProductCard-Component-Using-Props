import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, inStock: true },
    { name: "Keyboard", price: 45.5, inStock: false },
    { name: "Monitor", price: 199.99, inStock: true },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Products List</h2>
      <div style={styles.grid}>
        {products.map((prod, idx) => (
          <ProductCard
            key={idx}
            name={prod.name}
            price={prod.price}
            inStock={prod.inStock}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid black",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    marginBottom: 20,
    color: "black", 
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};

export default App;
