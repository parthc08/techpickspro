import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { blogPosts } from "../data/products";

export function BlogPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() ?? "";

  useEffect(() => {
    document.title = "Buying Guides & Reviews | TechPicksPro";
  }, []);

  const filtered = query
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query),
      )
    : blogPosts;

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
            Buying Guides & Reviews
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 17 }}>
            Expert advice to help professionals choose the right tech
            peripherals.
          </p>
          {query && (
            <p style={{ marginTop: 16, color: "var(--teal)", fontSize: 14 }}>
              Showing results for: "{query}"
            </p>
          )}
        </div>
      </div>

      <section>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "var(--text-muted)", fontSize: 18 }}>
                No guides found for "{query}"
              </p>
              <Link
                to="/blog"
                className="outline-btn"
                style={{ marginTop: 20, display: "inline-block" }}
              >
                View All Guides
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="card card-hover"
                  style={{ padding: 28, display: "block" }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--teal)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      marginBottom: 12,
                    }}
                  >
                    {post.category}
                  </div>
                  <h2
                    style={{ fontSize: 18, marginBottom: 12, lineHeight: 1.4 }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span>{post.publishDate}</span>
                    <span>🕐 {post.readTime} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
