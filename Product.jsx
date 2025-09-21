import React from "react";

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.text}>Price: ${price}</p>
      <p style={styles.text}>
        Status: {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid lightgray",
    borderRadius: 8,
    padding: 15,
    width: 150,
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    margin: "5px 0",
  },
};

export default ProductCard;
