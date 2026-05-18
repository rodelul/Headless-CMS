# Rodi - Premium Headless CMS Portfolio

A modern, premium, and highly interactive (Setrex-inspired) portfolio website built using a Headless CMS architecture. The backend is managed in WordPress, while the frontend is fully decoupled, running on Next.js 14.

## Technologies Used

- Frontend: Next.js 14 (App Router), React, TypeScript.
- Styling: Tailwind CSS (Dark Mode, Glassmorphism, Neon Lime `#ccff00` Accents).
- Animations: Framer Motion (FadeUps, fluid interactions, animated accordions).
- Backend: WordPress (Headless).
- API: WPGraphQL (a single request to extract all data necessary for a page).
- Custom Data: Advanced Custom Fields (ACF).

---

## Premium Features Implemented

- Dark Mode Setrex-style Design: Dark color palette (`bg-dark-950`) with strong lime green accents.
- Floating Pill Header: A modern navigation menu, detached from the edges, with blur effects (glassmorphism) on scroll.
- Modular Component Architecture: The source code strictly follows Vercel standards (React Composition Patterns). Complex pages like the Homepage, About, Blog, Services, and Contact are broken down into clean, independent modular components (e.g., `HomeHero`, `AboutBentoGrid`, `ServiciiGrid`, `ContactForm`), ensuring long-term maintainability.
- Interactive Lottie Animations: High-performance, lightweight starfield animations used across multiple hero sections (Home, Blog, About) replacing heavy video backgrounds.
- Smooth FAQ Accordion: An interactive accordion built from scratch, utilizing fluid height transitions instead of static HTML elements.
- Infinite Marquee Integrations: A horizontal scrolling integration bar, animated purely through CSS.
- Fallback System: If WordPress fails to respond or data is missing, the frontend automatically populates empty spaces with premium placeholders to preserve the design.

---

## WordPress Setup (Backend)

For this frontend to function correctly, you need the following on your WordPress installation:

### 1. Required Plugins
- WPGraphQL — exposes data via the GraphQL API.
- Advanced Custom Fields (ACF) — for custom fields.
- WPGraphQL for ACF — links ACF fields to GraphQL.
- Custom Post Type UI (CPT UI) — (optional) to easily register CPTs.

### 2. Custom Post Types (CPT)
You must have the following CPTs registered from the interface, configured with GraphQL support and the following plural names for GraphQL:

| Section Name | Post Type Slug | GraphQL Plural Name | Supports |
| :--- | :--- | :--- | :--- |
| Services | `servicii` | `servicii` | Title, Editor, Thumbnail, Page Attributes |
| Testimonials| `testimoniale` | `testimoniale` | Title, Custom Fields |
| Team | `team_members` | `teamMembers` | Title, Custom Fields, Page Attributes, Thumbnail |
| Features | `features` | `features` | Title, Custom Fields, Page Attributes |
| FAQ | `faq` | `faqs` | Title, Custom Fields, Page Attributes |

### 3. ACF Field Groups
Note: For each Field Group, go to the "GraphQL" settings (at the bottom of the group edit page) and check "Show in GraphQL = Yes", and under "GraphQL Field Name" enter exactly the names below:

- Team Member Fields (`acfTeamMember`) on CPT "Team":
  - `role` (Text)
  - `bio` (Textarea)
  - `photo` (Image - return format: Image Object)
- FAQ Fields (`acfFaq`) on CPT "FAQ":
  - `answer` (Textarea or WYSIWYG)
- Feature Fields (`acfFeature`) on CPT "Features":
  - `description` (Textarea)
  - `icon` (Text)
- Home Page Fields (`acfHome`) on a specific "Home" page.

---

## Project Structure

```
Headless-CMS-main/
├── app/
│   ├── layout.tsx              # Global Layout (Floating Navbar + Footer, Fonts)
│   ├── page.tsx                # Homepage Layout (orchestrates components from /sections)
│   ├── about/                  # About Us Page Layout
│   ├── blog/                   # Blog Page Layout
│   ├── contact/                # Contact Page Layout
│   └── servicii/               # Services Page Layout
├── components/
│   ├── layout/                 # Global components 
│   │   ├── Navbar.tsx          # Main menu (Rodi)
│   │   └── Footer.tsx
│   ├── sections/               # Independent modular components
│   │   ├── HomeHero.tsx
│   │   ├── AboutBentoGrid.tsx
│   │   ├── BlogGrid.tsx
│   │   ├── ServiciiGrid.tsx
│   │   ├── ContactForm.tsx
│   │   └── ... (many more)
│   └── animations/             # Animated components with Framer Motion and Lottie
│       ├── FadeUp.tsx          # Generic wrapper for entrance effect
│       └── LottieBackground.tsx
├── lib/
│   └── wordpress.ts            # GraphQL Client (all queries to WP)
├── styles/
│   └── globals.css             # Tailwind + Global animations
└── tailwind.config.js          # Color configurations (Lime Green), animations
```
