import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StarRating } from "../components/StarRating";
import { categories, products } from "../data/products";

export function ComparisonPage() {
  useEffect(() => {
    document.title = "Best Tech Peripherals Comparison | TechPicksPro";
  }, []);

  return (
    <div>
      <div
        style={{
          background: "#0A1220",
          borderBottom: "1px solid #24364B",
          padding: "56px 24px",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>
            Best Tech Peripherals for Professionals
          </h1>
          <p
            style={{ color: "var(--text-muted)", fontSize: 17, maxWidth: 600 }}
          >
            Side-by-side comparison of the top-rated products across all
            categories.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat.id);
            return (
              <div key={cat.id} style={{ marginBottom: 56 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <h2 style={{ fontSize: 24 }}>
                    {cat.emoji} Best {cat.label}
                  </h2>
                  <Link
                    to={`/products/${cat.id}`}
                    className="outline-btn"
                    style={{ fontSize: 13 }}
                  >
                    See All
                  </Link>
                </div>
                <div className="card" style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Top Feature</th>
                        <th>Best For</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {catProducts.map((p) => (
                        <tr key={p.id}>
                          <td>
                            <div
                              style={{
                                fontWeight: 600,
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                              }}
                            >
                              {p.isBestChoice && (
                                <span
                                  style={{
                                    background: "var(--teal)",
                                    color: "#0B1422",
                                    fontSize: 10,
                                    padding: "2px 8px",
                                    borderRadius: 10,
                                    fontWeight: 700,
                                  }}
                                >
                                  BEST
                                </span>
                              )}
                              <Link
                                to={`/products/${p.category}/${p.slug}`}
                                className="nav-link"
                                style={{ padding: 0 }}
                              >
                                {p.name}
                              </Link>
                            </div>
                          </td>
                          <td>
                            <StarRating rating={p.rating} size={13} />{" "}
                            <span
                              style={{
                                fontSize: 12,
                                color: "var(--text-muted)",
                              }}
                            >
                              {p.rating}/5
                            </span>
                          </td>
                          <td style={{ fontWeight: 700, color: "var(--teal)" }}>
                            {p.price}
                          </td>
                          <td
                            style={{ fontSize: 13, color: "var(--text-muted)" }}
                          >
                            {p.features[0]}
                          </td>
                          <td
                            style={{ fontSize: 13, color: "var(--text-muted)" }}
                          >
                            {p.pros[0]}
                          </td>
                          <td>
                            <a
                              href={p.amazonUrl}
                              target="_blank"
                              rel="noreferrer nofollow noopener"
                              className="teal-btn"
                              style={{
                                fontSize: 12,
                                padding: "6px 12px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Buy on Amazon
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          <div
            style={{
              padding: "16px 20px",
              background: "rgba(34,184,182,0.05)",
              border: "1px solid rgba(34,184,182,0.15)",
              borderRadius: 12,
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            <strong style={{ color: "var(--teal)" }}>
              Affiliate Disclosure:
            </strong>{" "}
            TechPicksPro participates in the Amazon Associates program. Prices
            shown are approximate. We earn a commission from qualifying
            purchases at no extra cost to you.
          </div>
        </div>
      </section>
    </div>
  );
}
