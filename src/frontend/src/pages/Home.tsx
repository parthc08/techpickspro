import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { StarRating } from "../components/StarRating";
import { blogPosts, categories, products } from "../data/products";

export function Home() {
  useEffect(() => {
    document.title = "TechPicksPro | Best Tech Peripherals for Professionals";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Expert reviews and comparisons of the best earpieces, power banks, keyboards, and mice for professionals.",
    );
  }, []);

  const bestChoiceProducts = products.filter((p) => p.isBestChoice);

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0B1422 0%, #0F2032 50%, #0B1A30 100%)",
          padding: "96px 24px",
          borderBottom: "1px solid #24364B",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <div
              style={{
                display: "inline-block",
                background: "rgba(34,184,182,0.12)",
                border: "1px solid rgba(34,184,182,0.3)",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 13,
                color: "var(--teal)",
                marginBottom: 20,
                fontWeight: 600,
              }}
            >
              🔬 Expert-Tested & Reviewed
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 900,
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              The Best Tech Peripherals
              <br />
              <span style={{ color: "var(--teal)" }}>for Professionals</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--text-muted)",
                marginBottom: 32,
                lineHeight: 1.6,
              }}
            >
              Unbiased reviews, expert comparisons, and top Amazon picks for
              earpieces, power banks, keyboards, and mice.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/comparison"
                className="teal-btn"
                style={{ fontSize: 15, padding: "14px 28px" }}
              >
                View Comparison Guide
              </Link>
              <Link
                to="/blog"
                className="outline-btn"
                style={{ fontSize: 15, padding: "14px 28px" }}
              >
                Buying Guides
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section>
        <div className="container">
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>Browse by Category</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 32 }}>
            Find the perfect peripheral for your professional setup
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="card card-hover"
                style={{ padding: 24, display: "block" }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>
                  {cat.emoji}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{cat.label}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Top Picks */}
      <section style={{ background: "#0A1220" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 8 }}>
                Editor's Top Picks
              </h2>
              <p style={{ color: "var(--text-muted)" }}>
                Our highest-rated products across all categories
              </p>
            </div>
            <Link
              to="/comparison"
              className="outline-btn"
              style={{ fontSize: 13 }}
            >
              Full Comparison
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {bestChoiceProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <div className="container">
          <h2 style={{ fontSize: 28, marginBottom: 8 }}>Quick Comparison</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 32 }}>
            Top picks side-by-side
          </p>
          <div className="card" style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Best For</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {bestChoiceProducts.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>
                        {p.name}
                      </div>
                      {p.isBestChoice && (
                        <span
                          style={{
                            fontSize: 11,
                            background: "rgba(34,184,182,0.15)",
                            color: "var(--teal)",
                            padding: "2px 8px",
                            borderRadius: 10,
                          }}
                        >
                          Best Choice
                        </span>
                      )}
                    </td>
                    <td
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 13,
                        textTransform: "capitalize",
                      }}
                    >
                      {p.category}
                    </td>
                    <td>
                      <StarRating rating={p.rating} size={13} />
                    </td>
                    <td style={{ fontWeight: 600, color: "var(--teal)" }}>
                      {p.price}
                    </td>
                    <td style={{ fontSize: 13, color: "var(--text-muted)" }}>
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
                          padding: "6px 14px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        View on Amazon
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link to="/comparison" className="outline-btn">
              Full Comparison Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Guides */}
      <section style={{ background: "#0A1220" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 8 }}>
                Latest Buying Guides
              </h2>
              <p style={{ color: "var(--text-muted)" }}>
                Expert advice to help you make the right choice
              </p>
            </div>
            <Link to="/blog" className="outline-btn" style={{ fontSize: 13 }}>
              All Guides
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="card card-hover"
                style={{ padding: 24, display: "block" }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--teal)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: 10,
                  }}
                >
                  {post.category}
                </div>
                <h3 style={{ fontSize: 16, marginBottom: 10, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "var(--text-muted)",
                  }}
                >
                  <span>{post.publishDate}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section>
        <div className="container">
          <div
            className="card"
            style={{
              padding: "56px 40px",
              textAlign: "center",
              background: "linear-gradient(135deg, #15263A 0%, #0F2032 100%)",
            }}
          >
            <h2 style={{ fontSize: 28, marginBottom: 12 }}>
              Stay Ahead of the Curve
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: 32,
                maxWidth: 500,
                margin: "0 auto 32px",
              }}
            >
              Get the latest buying guides, deals, and reviews delivered to your
              inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: 12,
                maxWidth: 420,
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              <input
                className="newsletter-input"
                placeholder="Enter your email"
                style={{ flex: 1, minWidth: 200 }}
              />
              <button
                className="teal-btn"
                type="submit"
                style={{ padding: "12px 24px" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
