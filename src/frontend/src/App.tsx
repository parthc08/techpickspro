import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ComparisonPage } from "./pages/ComparisonPage";
import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:category/:slug" element={<ProductPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
