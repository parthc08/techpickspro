import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../data/products";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/blog?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(11,20,34,0.97)" : "#111E2E",
        borderBottom: "1px solid #24364B",
        backdropFilter: "blur(8px)",
        transition: "background 0.2s",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "14px 24px",
          gap: 24,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "var(--teal)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 18,
              color: "#0B1422",
            }}
          >
            T
          </div>
          <span style={{ fontWeight: 700, fontSize: 17 }}>TechPicksPro</span>
        </Link>

        <div style={{ display: "flex", gap: 4, flex: 1, alignItems: "center" }}>
          {categories.map((c) => (
            <Link key={c.id} to={`/products/${c.id}`} className="nav-link">
              {c.label}
            </Link>
          ))}
          <Link to="/comparison" className="nav-link">
            Comparison
          </Link>
          <Link to="/blog" className="nav-link">
            Guides
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>

        <form
          onSubmit={handleSearch}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ position: "relative" }}>
            <input
              className="newsletter-input"
              style={{ width: 180, padding: "8px 12px 8px 32px", fontSize: 13 }}
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                fontSize: 14,
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
          </div>
        </form>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            fontSize: 22,
            cursor: "pointer",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "#111E2E",
            padding: "12px 24px 20px",
            borderTop: "1px solid #24364B",
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/products/${c.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                color: "var(--text-muted)",
                fontSize: 15,
                borderBottom: "1px solid #1a2a3a",
              }}
            >
              {c.emoji} {c.label}
            </Link>
          ))}
          <Link
            to="/comparison"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px 0",
              color: "var(--text-muted)",
              fontSize: 15,
              borderBottom: "1px solid #1a2a3a",
            }}
          >
            Comparison
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px 0",
              color: "var(--text-muted)",
              fontSize: 15,
              borderBottom: "1px solid #1a2a3a",
            }}
          >
            Guides
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px 0",
              color: "var(--text-muted)",
              fontSize: 15,
              borderBottom: "1px solid #1a2a3a",
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px 0",
              color: "var(--text-muted)",
              fontSize: 15,
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
