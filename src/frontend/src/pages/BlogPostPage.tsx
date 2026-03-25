import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/products";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    if (post) document.title = `${post.title} | TechPicksPro`;
  }, [post]);

  if (!post) {
    return (
      <div
        className="container"
        style={{ padding: "80px 24px", textAlign: "center" }}
      >
        <h1>Article not found</h1>
        <Link
          to="/blog"
          className="teal-btn"
          style={{ marginTop: 24, display: "inline-block" }}
        >
          Back to Guides
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div>
      <div
        style={{
          background: "#0A1220",
          borderBottom: "1px solid #24364B",
          padding: "56px 24px",
        }}
      >
        <div className="container" style={{ maxWidth: 800 }}>
          <div
            style={{
              fontSize: 12,
              color: "var(--teal)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: 16,
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            <span>Published: {post.publishDate}</span>
            <span>🕐 {post.readTime} min read</span>
          </div>
        </div>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 800 }}>
          {paragraphs.map((para) => {
            if (para.startsWith("## "))
              return (
                <h2
                  key={para}
                  style={{
                    fontSize: 24,
                    margin: "32px 0 16px",
                    borderBottom: "1px solid #24364B",
                    paddingBottom: 10,
                  }}
                >
                  {para.replace("## ", "")}
                </h2>
              );
            if (para.startsWith("### "))
              return (
                <h3
                  key={para}
                  style={{
                    fontSize: 18,
                    margin: "24px 0 12px",
                    color: "var(--teal)",
                  }}
                >
                  {para.replace("### ", "")}
                </h3>
              );
            if (para.startsWith("**") && para.endsWith("**"))
              return (
                <p
                  key={para}
                  style={{ fontWeight: 700, fontSize: 16, margin: "16px 0" }}
                >
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul
                  key={para}
                  style={{
                    margin: "12px 0 12px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15,
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.replace("- ", "").replace(/\*\*([^*]+)\*\*/g, "$1")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={para.slice(0, 40)}
                style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  margin: "12px 0",
                }}
              >
                {para.replace(/\*\*([^*]+)\*\*/g, "$1")}
              </p>
            );
          })}

          <div
            style={{
              marginTop: 40,
              padding: "16px 20px",
              background: "rgba(34,184,182,0.06)",
              border: "1px solid rgba(34,184,182,0.2)",
              borderRadius: 10,
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            <strong style={{ color: "var(--teal)" }}>
              Affiliate Disclosure:
            </strong>{" "}
            This article contains Amazon affiliate links. TechPicksPro earns a
            small commission on qualifying purchases at no extra cost to you.
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: "#0A1220" }}>
          <div className="container">
            <h2 style={{ fontSize: 22, marginBottom: 24 }}>
              More Buying Guides
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 20,
              }}
            >
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="card card-hover"
                  style={{ padding: 24, display: "block" }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--teal)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    {p.category}
                  </div>
                  <h3
                    style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.4 }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
