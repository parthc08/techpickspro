import { useEffect, useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact TechPicksPro";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

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
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Contact Us</h1>
          <p style={{ color: "var(--text-muted)", fontSize: 17 }}>
            Have a question or product suggestion? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 680 }}>
          {submitted ? (
            <div className="card" style={{ padding: 48, textAlign: "center" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h2 style={{ fontSize: 24, marginBottom: 12 }}>
                Message Received!
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
                Thanks for reaching out. We typically respond within 1-2
                business days.
              </p>
            </div>
          ) : (
            <div className="card" style={{ padding: 36 }}>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    className="newsletter-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className="newsletter-input"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="newsletter-input"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Your question or feedback..."
                    rows={5}
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button
                  className="teal-btn"
                  type="submit"
                  disabled={loading}
                  style={{ padding: "13px", fontSize: 15 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
