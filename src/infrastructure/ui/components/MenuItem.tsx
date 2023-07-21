import React from "react";
import { Product } from "../../../domain/models/products";

interface MenuItemProps {
  product: Product;
  handleAvailability: (productId: string, availability: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ product, handleAvailability }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>
        Status:{" "}
        {product.availability === "AVAILABLE" ? "Available" : "Not Available"}
      </p>
      <button
        onClick={() => handleAvailability(product.uuid, product.availability)}
      >
        {product.availability === "AVAILABLE" ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default MenuItem;
