# TechPicksPro

## Current State
New project. Only scaffolded files exist (empty Motoko actor, no frontend pages).

## Requested Changes (Diff)

### Add
- Homepage with hero, featured product cards, categories, comparison table, newsletter signup
- Product review pages for: earpieces, powerbanks, keyboards, mice
- Comparison page ("Best Tech Peripherals for Professionals")
- Blog listing + article pages with SEO-optimized placeholder content
- About page
- Contact page
- Privacy Policy + Affiliate Disclosure page
- Sticky navigation bar with search
- Footer with affiliate disclaimer
- Amazon affiliate link placeholders throughout
- Star ratings UI, "Best Choice" badges, pros/cons sections
- Schema markup (Product, Review) in page heads

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: store products (id, name, category, rating, price, amazonUrl, isBestChoice, pros, cons, features), blog posts, and contact form submissions
2. Backend: query APIs — getProducts, getProductsByCategory, getFeaturedProducts, getBlogPosts, getBlogPost, submitContact
3. Frontend: routing via React Router (/, /products/:id, /comparison, /blog, /blog/:slug, /about, /contact, /privacy-policy)
4. Homepage: sticky nav, hero section, "Editor's Top Picks" 4-up grid, comparison table, categories, latest guides, newsletter, footer
5. Product page: title, image, star rating, pros/cons, features, "Buy on Amazon" CTA
6. Comparison page: feature table comparing top products per category
7. Blog: listing + individual article pages
8. About/Contact/Privacy pages
9. SEO: meta tags, schema markup, heading structure, internal links
