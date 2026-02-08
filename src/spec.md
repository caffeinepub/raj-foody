# Specification

## Summary
**Goal:** Create a responsive, single-page marketing website for “Raj Foody” that prominently displays the owner name “Jeet Raj” and provides standard restaurant-style sections with editable content.

**Planned changes:**
- Build a responsive single-page homepage with anchored top navigation and sections: Hero, About, Menu/Offerings (6+ items), Why Choose Us, Gallery, Testimonials (3), and Contact (form UI + placeholder contact info + opening hours).
- Apply a warm, food-themed visual design system (coherent colors/typography/spacing; consistent buttons and cards; avoid blue/purple).
- Add a centralized frontend config/data file for business info (shop/owner name, tagline, menu items, hours, contact placeholders) and render content from it.
- Add generated static images under `frontend/public/assets/generated` and wire them into the Hero and Gallery sections.

**User-visible outcome:** Visitors can browse a polished “Raj Foody” marketing page on mobile/desktop, scroll via navbar links to each section, view menu items and gallery, read testimonials, and see a contact form and business details (with content editable via a single config file).
