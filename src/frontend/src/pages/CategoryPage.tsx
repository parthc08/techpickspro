import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/products";

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = categories.find((c) => c.id === category);
  const categoryProducts = products.filter((p) => p.category === category);

  useEffect(() => {
    if (cat) {
      document.title = `Best ${cat.label} for Professionals | TechPicksPro`;
    }
  }, [cat]);

  if (!cat) {
    return (
      <div
        className="container"
        style={{ padding: "80px 24px", textAlign: "center" }}
      >
        <h1>Category not found</h1>
        <Link
          to="/"
          className="teal-btn"
          style={{ marginTop: 24, display: "inline-block" }}
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "#0A1220",
          borderBottom: "1px solid #24364B",
          padding: "56px 24px",
        }}
      >
        <div className="container">
          <div style={{ fontSize: 48, marginBottom: 12 }}>{cat.emoji}</div>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>
            Best {cat.label} for Professionals
          </h1>
          <p
            style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 600 }}
          >
            {cat.desc}. Expert-tested and reviewed.
          </p>
          <div
            style={{ marginTop: 20, fontSize: 13, color: "var(--text-muted)" }}
          >
            <Link to="/" style={{ color: "var(--teal)" }}>
              Home
            </Link>{" "}
            / <span>{cat.label}</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <section>
        <div className="container">
          <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
            {categoryProducts.length} products reviewed
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {categoryProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Related categories */}
      <section style={{ background: "#0A1220" }}>
        <div className="container">
          <h2 style={{ fontSize: 22, marginBottom: 24 }}>
            Explore Other Categories
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {categories
              .filter((c) => c.id !== category)
              .map((c) => (
                <Link
                  key={c.id}
                  to={`/products/${c.id}`}
                  className="outline-btn"
                  style={{ fontSize: 14 }}
                >
                  {c.emoji} {c.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
