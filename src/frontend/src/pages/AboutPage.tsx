import { useEffect } from "react";
import { Link } from "react-router-dom";

export function AboutPage() {
  useEffect(() => {
    document.title =
      "About TechPicksPro | Expert Tech Reviews for Professionals";
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
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>About TechPicksPro</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 17 }}>
            Honest, expert reviews of tech peripherals for working
            professionals.
          </p>
        </div>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>Our Mission</h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                TechPicksPro was built to solve a real problem: there are
                thousands of tech products on Amazon, and most reviews are
                either paid promotions or written by non-professionals. We exist
                to give working professionals — developers, designers, remote
                workers, and executives — reliable, unbiased guidance on the
                peripherals that actually improve their daily workflow.
              </p>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>
                How We Review Products
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  [
                    "🔬 Hands-on Testing",
                    "Every product we recommend has been tested in real professional environments — open offices, home setups, and on the road.",
                  ],
                  [
                    "📊 Data-Driven Ratings",
                    "Our ratings are based on build quality, performance, value, and user feedback from verified buyers.",
                  ],
                  [
                    "🚫 No Sponsored Reviews",
                    "We do not accept payment for positive reviews. Our affiliate commissions come from Amazon — not the brands we review.",
                  ],
                  [
                    "🔄 Regular Updates",
                    "Tech moves fast. We update our recommendations every quarter to reflect new releases and price changes.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title as string}
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ fontSize: 22, flexShrink: 0 }}>
                      {(title as string).split(" ")[0]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, marginBottom: 4 }}>
                        {(title as string).substring(3)}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                        }}
                      >
                        {desc as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>
                Affiliate Disclosure
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                TechPicksPro is a participant in the Amazon Services LLC
                Associates Program, an affiliate advertising program designed to
                provide a means for sites to earn advertising fees by
                advertising and linking to Amazon.com. When you click an
                affiliate link and make a purchase, we may earn a small
                commission at no additional cost to you.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: 15,
                  marginTop: 12,
                }}
              >
                Our editorial opinions are not influenced by affiliate
                relationships. We recommend products based on their merit.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link
                to="/contact"
                className="teal-btn"
                style={{ padding: "13px 28px", fontSize: 15 }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
