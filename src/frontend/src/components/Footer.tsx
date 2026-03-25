import { Link } from "react-router-dom";
import { categories } from "../data/products";

export function Footer() {
  return (
    <footer
      style={{
        background: "#080F1A",
        borderTop: "1px solid #24364B",
        marginTop: 80,
      }}
    >
      <div className="container" style={{ padding: "56px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: 16,
                  color: "#0B1422",
                }}
              >
                T
              </div>
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                TechPicksPro
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Honest reviews and expert recommendations for professional tech
              peripherals.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
              }}
            >
              Categories
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={`/products/${c.id}`}
                  className="footer-link"
                >
                  {c.emoji} {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
              }}
            >
              Site Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {(
                [
                  ["/", "Home"],
                  ["/comparison", "Comparison"],
                  ["/blog", "Buying Guides"],
                  ["/about", "About Us"],
                  ["/contact", "Contact"],
                  ["/privacy-policy", "Privacy Policy"],
                ] as [string, string][]
              ).map(([path, label]) => (
                <Link key={path} to={path} className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-muted)",
              }}
            >
              Affiliate Disclosure
            </h4>
            <p
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              TechPicksPro participates in the Amazon Associates Program. We
              earn a commission from qualifying purchases at no extra cost to
              you.{" "}
              <Link to="/privacy-policy" style={{ color: "var(--teal)" }}>
                Learn more
              </Link>
              .
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #24364B",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © 2026 TechPicksPro. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
