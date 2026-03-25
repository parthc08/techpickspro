import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { StarRating } from "../components/StarRating";
import { products } from "../data/products";

const categoryGradients: Record<string, string> = {
  earpieces: "linear-gradient(135deg, #1a9694 0%, #0B7A78 100%)",
  powerbanks: "linear-gradient(135deg, #1a4a7a 0%, #0f2f5c 100%)",
  keyboards: "linear-gradient(135deg, #5a1a9e 0%, #3a0f6e 100%)",
  mice: "linear-gradient(135deg, #2a3a9e 0%, #1a2a7e 100%)",
};

export function ProductPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const product = products.find(
    (p) => p.slug === slug && p.category === category,
  );
  const related = products
    .filter((p) => p.category === category && p.slug !== slug)
    .slice(0, 3);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} Review | TechPicksPro`;
      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        description: product.description,
        offers: {
          "@type": "Offer",
          price: product.price.replace("$", ""),
          priceCurrency: "USD",
          url: product.amazonUrl,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          bestRating: 5,
          reviewCount: 47,
        },
      };
      let script = document.getElementById(
        "product-schema",
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "product-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    }
    return () => {
      document.getElementById("product-schema")?.remove();
    };
  }, [product]);

  if (!product) {
    return (
      <div
        className="container"
        style={{ padding: "80px 24px", textAlign: "center" }}
      >
        <h1>Product not found</h1>
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
      <div
        style={{
          background: "#0A1220",
          borderBottom: "1px solid #24364B",
          padding: "16px 24px",
        }}
      >
        <div
          className="container"
          style={{ fontSize: 13, color: "var(--text-muted)" }}
        >
          <Link to="/" style={{ color: "var(--teal)" }}>
            Home
          </Link>
          {" / "}
          <Link
            to={`/products/${product.category}`}
            style={{ color: "var(--teal)", textTransform: "capitalize" }}
          >
            {product.category}
          </Link>
          {" / "}
          {product.name}
        </div>
      </div>

      <section>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div>
              <div
                className="card"
                style={{
                  background: categoryGradients[product.category] ?? "#15263A",
                  height: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 120,
                  position: "relative",
                }}
              >
                {product.emoji}
                {product.isBestChoice && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: "var(--teal)",
                      color: "#0B1422",
                      fontWeight: 700,
                      fontSize: 12,
                      padding: "5px 14px",
                      borderRadius: 20,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Best Choice
                  </div>
                )}
              </div>
              <div
                style={{
                  marginTop: 16,
                  padding: "12px 16px",
                  background: "rgba(34,184,182,0.06)",
                  border: "1px solid rgba(34,184,182,0.2)",
                  borderRadius: 10,
                  fontSize: 12,
                  color: "var(--text-muted)",
                }}
              >
                <strong style={{ color: "var(--teal)" }}>
                  Affiliate Disclosure:
                </strong>{" "}
                As an Amazon Associate, TechPicksPro earns from qualifying
                purchases.
              </div>
            </div>

            <div>
              <h1 style={{ fontSize: 32, marginBottom: 12 }}>{product.name}</h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <StarRating rating={product.rating} size={20} />
                <span style={{ fontWeight: 600 }}>{product.rating}/5</span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  (47 reviews)
                </span>
              </div>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {product.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--teal)",
                  }}
                >
                  {product.price}
                </span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  on Amazon
                </span>
              </div>
              <div style={{ marginBottom: 32 }}>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noreferrer nofollow noopener"
                  className="teal-btn"
                  style={{ padding: "14px 28px", fontSize: 15 }}
                >
                  Check Price on Amazon
                </a>
              </div>
              <div>
                <h3 style={{ fontSize: 16, marginBottom: 12 }}>Key Features</h3>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {product.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: "var(--text-muted)",
                      }}
                    >
                      <span style={{ color: "var(--teal)", fontSize: 16 }}>
                        ✓
                      </span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              marginTop: 48,
            }}
          >
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 16, marginBottom: 16, color: "#4ade80" }}>
                Pros
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {product.pros.map((pro) => (
                  <li
                    key={pro}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#4ade80", flexShrink: 0 }}>⭐</span>{" "}
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 16, marginBottom: 16, color: "#f87171" }}>
                Cons
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {product.cons.map((con) => (
                  <li
                    key={con}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#f87171", flexShrink: 0 }}>⚠️</span>{" "}
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: 32,
              marginTop: 32,
              background: "linear-gradient(135deg, #15263A, #0F2032)",
            }}
          >
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>Our Verdict</h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              The {product.name} is an excellent choice for professionals who
              need reliable, high-quality peripherals. With a rating of{" "}
              {product.rating}/5 and a price of {product.price}, it offers
              outstanding value.
            </p>
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noreferrer nofollow noopener"
              className="teal-btn"
              style={{ fontSize: 15, padding: "13px 28px" }}
            >
              Buy on Amazon – {product.price}
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: "#0A1220" }}>
          <div className="container">
            <h2 style={{ fontSize: 24, marginBottom: 24 }}>Related Products</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
