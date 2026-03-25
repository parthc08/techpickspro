import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { StarRating } from "./StarRating";

const categoryGradients: Record<string, string> = {
  earpieces: "linear-gradient(135deg, #1a9694 0%, #0B7A78 100%)",
  powerbanks: "linear-gradient(135deg, #1a4a7a 0%, #0f2f5c 100%)",
  keyboards: "linear-gradient(135deg, #5a1a9e 0%, #3a0f6e 100%)",
  mice: "linear-gradient(135deg, #2a3a9e 0%, #1a2a7e 100%)",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Image area */}
      <div
        style={{
          background: categoryGradients[product.category] || "#15263A",
          height: 160,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontSize: 64,
        }}
      >
        {product.emoji}
        {product.isBestChoice && (
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#22B8B6",
              color: "#0B1422",
              fontSize: 11,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 20,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Best Choice
          </span>
        )}
      </div>
      {/* Content */}
      <div
        style={{
          padding: 18,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
            {product.name}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              lineHeight: 1.5,
            }}
          >
            {product.description.slice(0, 80)}...
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <StarRating rating={product.rating} size={14} />
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
            {product.rating}/5
          </span>
        </div>
        <div
          style={{ fontSize: 14, fontWeight: 600, color: "var(--text-muted)" }}
        >
          Amazon {product.price}
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 10,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Link
            to={`/products/${product.category}/${product.slug}`}
            className="outline-btn"
            style={{
              fontSize: 13,
              padding: "8px 14px",
              flex: 1,
              textAlign: "center",
            }}
          >
            Read Review
          </Link>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noreferrer nofollow noopener"
            className="teal-btn"
            style={{
              fontSize: 13,
              padding: "8px 14px",
              flex: 1,
              textAlign: "center",
            }}
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
