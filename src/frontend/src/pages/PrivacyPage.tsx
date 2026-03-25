import { useEffect } from "react";

const sections = [
  {
    title: "Amazon Associates Affiliate Disclosure",
    content: `TechPicksPro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon.com.

As an Amazon Associate, we earn from qualifying purchases. When you click an affiliate link and make a purchase, we may receive a small commission at no additional cost to you.

All product prices displayed are estimates and may vary. Always verify the current price on Amazon before purchasing. Our editorial content is independent and not influenced by affiliate relationships.`,
  },
  {
    title: "Privacy Policy",
    content: `This Privacy Policy describes how TechPicksPro collects, uses, and shares information about you when you use our website.

Information We Collect: We may collect contact information (name and email) if you submit our contact form or subscribe to our newsletter. We do not sell or share your personal information with third parties.

Cookies: We may use cookies to improve your browsing experience. You can disable cookies in your browser settings.

Third-Party Services: We link to Amazon.com and other third-party sites. Their privacy policies govern how they handle your data once you leave our site.`,
  },
  {
    title: "FTC Compliance",
    content: `In accordance with the Federal Trade Commission's guidelines on endorsements and testimonials, TechPicksPro discloses any material connections between us and the products we recommend.

We receive commissions from Amazon on qualifying purchases. This does not affect our editorial independence or the objectivity of our reviews.`,
  },
  {
    title: "Amazon Associates Program Policy",
    content: `As required by the Amazon Associates Program Operating Agreement:

- We do not promote products through spam or misleading marketing.
- We do not display fake or misleading prices.
- All affiliate links are clearly associated with Amazon.
- "Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates."`,
  },
  {
    title: "Contact",
    content:
      "If you have questions about this privacy policy or our affiliate disclosures, please reach out via our Contact page. We aim to respond within 2 business days.",
  },
];

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy & Affiliate Disclosure | TechPicksPro";
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
            Privacy Policy & Affiliate Disclosure
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
            Last updated: March 2026
          </p>
        </div>
      </div>

      <section>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {sections.map((s) => (
              <div key={s.title} className="card" style={{ padding: 32 }}>
                <h2 style={{ fontSize: 20, marginBottom: 16 }}>{s.title}</h2>
                {s.content.split("\n\n").map((para) => (
                  <p
                    key={para.slice(0, 30)}
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                      marginBottom: 12,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
