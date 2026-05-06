# WordPress Headless CMS + Next.js (WPGraphQL)

Site de prezentare cu blog. WordPress = backend (CMS). Next.js = frontend.

## Pluginuri WordPress necesare

1. **WPGraphQL** — expune conținutul ca GraphQL API
2. **ACF (gratuit)** — câmpuri custom
3. **WPGraphQL for ACF** — conectează ACF la GraphQL
4. **Rank Math** — SEO
5. **Rank Math SEO addon for WPGraphQL** — SEO în GraphQL

Toate gratuite.

---

## Setup WordPress

### 1. Verifică că GraphQL funcționează
După instalarea WPGraphQL, mergi la: `https://your-domain.com/graphql`
Ar trebui să vezi un răspuns JSON. 

GraphiQL IDE (pentru testare): `WP Admin → GraphQL → GraphiQL IDE`

### 2. Înregistrează CPT-urile în functions.php

```php
<?php
// ==========================================
// CUSTOM POST TYPES
// ==========================================

// CPT: Servicii
function register_servicii_cpt() {
    register_post_type('servicii', [
        'labels' => [
            'name' => 'Servicii',
            'singular_name' => 'Serviciu',
        ],
        'public' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,           // ← OBLIGATORIU pt WPGraphQL
        'graphql_single_name' => 'serviciu',  // ← numele singular în schema
        'graphql_plural_name' => 'servicii',  // ← numele plural în schema
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes'],
        'menu_icon' => 'dashicons-hammer',
        'has_archive' => true,
    ]);
}
add_action('init', 'register_servicii_cpt');

// CPT: Testimoniale
function register_testimoniale_cpt() {
    register_post_type('testimoniale', [
        'labels' => [
            'name' => 'Testimoniale',
            'singular_name' => 'Testimonial',
        ],
        'public' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'testimonial',
        'graphql_plural_name' => 'testimoniale',
        'supports' => ['title', 'custom-fields'],
        'menu_icon' => 'dashicons-format-quote',
    ]);
}
add_action('init', 'register_testimoniale_cpt');

// CPT: Team Members
function register_team_members_cpt() {
    register_post_type('team_members', [
        'labels' => [
            'name' => 'Echipă',
            'singular_name' => 'Membru echipă',
        ],
        'public' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'teamMember',
        'graphql_plural_name' => 'teamMembers',
        'supports' => ['title', 'custom-fields', 'page-attributes'],
        'menu_icon' => 'dashicons-groups',
    ]);
}
add_action('init', 'register_team_members_cpt');

// CPT: Features ("De ce noi")
function register_features_cpt() {
    register_post_type('features', [
        'labels' => [
            'name' => 'Features',
            'singular_name' => 'Feature',
        ],
        'public' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'feature',
        'graphql_plural_name' => 'features',
        'supports' => ['title', 'custom-fields', 'page-attributes'],
        'menu_icon' => 'dashicons-star-filled',
    ]);
}
add_action('init', 'register_features_cpt');

// ==========================================
// CORS — permite Next.js să acceseze GraphQL
// ==========================================
function add_cors_headers() {
    // În producție, schimbă cu domeniul real al frontend-ului
    $allowed_origins = [
        'http://localhost:3000',
        // 'https://your-nextjs-domain.com',
    ];
    
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    
    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit();
    }
}
add_action('init', 'add_cors_headers');
```

### 3. Creează ACF Field Groups

**IMPORTANT:** La fiecare Field Group, în setări:
- **Show in GraphQL** = Yes
- **GraphQL Field Name** = numele exact de mai jos

#### Field Group: "Home Page" 
- Locație: Page → is equal to → Home
- GraphQL Field Name: `acfHome`
- Câmpuri:
  - `hero_title` (Text)
  - `hero_subtitle` (Textarea)
  - `hero_cta_text` (Text)
  - `hero_cta_link` (URL)
  - `cta_title` (Text)
  - `cta_description` (Textarea)

#### Field Group: "About Page"
- Locație: Page → is equal to → About
- GraphQL Field Name: `acfAbout`
- Câmpuri:
  - `about_title` (Text)
  - `about_description` (Textarea)

#### Field Group: "Servicii Fields"
- Locație: Post Type → is equal to → Servicii
- GraphQL Field Name: `acfServicii`
- Câmpuri:
  - `short_description` (Textarea)
  - `price` (Text)
  - `icon` (Text — emoji)
  - `features` (Repeater*): `feature_text` (Text)

*Notă: Repeater e doar în ACF Pro. Dacă ai versiunea gratuită, creează câmpuri individuale: feature_1, feature_2, feature_3.

#### Field Group: "Testimoniale Fields"
- Locație: Post Type → is equal to → Testimoniale
- GraphQL Field Name: `acfTestimoniale`
- Câmpuri:
  - `client_name` (Text)
  - `client_role` (Text)
  - `testimonial_text` (Textarea)
  - `rating` (Number, min: 1, max: 5)

#### Field Group: "Team Member Fields"
- Locație: Post Type → is equal to → Echipă
- GraphQL Field Name: `acfTeamMember`
- Câmpuri:
  - `role` (Text)
  - `bio` (Textarea)
  - `photo` (Image, return format: Image Object)

#### Field Group: "Feature Fields"
- Locație: Post Type → is equal to → Features
- GraphQL Field Name: `acfFeature`
- Câmpuri:
  - `description` (Textarea)
  - `icon` (Text — emoji)

### 4. Creează paginile în WordPress
- Pagină cu slug **"home"** → completează câmpurile ACF
- Pagină cu slug **"about"** → completează câmpurile ACF
- Adaugă câteva Servicii, Testimoniale, Team Members, Features

### 5. Testează în GraphiQL IDE
Mergi la WP Admin → GraphQL → GraphiQL IDE și rulează:

```graphql
{
  posts(first: 3) {
    nodes {
      title
      slug
    }
  }
  servicii {
    nodes {
      title
      acfServicii {
        shortDescription
        price
      }
    }
  }
}
```

Dacă vezi date, totul funcționează.

---

## Setup Next.js (local)

```bash
cd nextjs-wordpress-headless
npm install
cp .env.example .env.local
# Editează .env.local cu URL-ul WordPress
npm run dev
```

Deschide http://localhost:3000

---

## Structura proiectului

```
nextjs-wordpress-headless/
├── app/
│   ├── layout.tsx              # Layout global (navbar + footer)
│   ├── page.tsx                # Homepage (1 query GraphQL = tot)
│   ├── about/page.tsx          # Despre noi
│   ├── blog/
│   │   ├── page.tsx            # Lista articole
│   │   └── [slug]/page.tsx     # Articol individual
│   ├── contact/page.tsx        # Contact + formular
│   ├── servicii/page.tsx       # Lista servicii
│   └── api/contact/route.ts    # API formular
├── lib/
│   ├── wordpress.ts            # Client GraphQL (toate query-urile)
│   └── types.ts                # Tipuri TypeScript
├── styles/globals.css          # Tailwind + stiluri WP content
├── next.config.js
├── tailwind.config.js
├── .env.example
└── package.json
```

## Diferența cheie: REST API vs GraphQL

```
REST API (înainte):          GraphQL (acum):
4 request-uri separate       1 singur request
────────────────────         ────────────────
GET /wp-json/wp/v2/posts     query {
GET /wp-json/wp/v2/servicii    posts { ... }
GET /wp-json/wp/v2/pages       servicii { ... }
GET /wp-json/wp/v2/testimoniale  testimoniale { ... }
                                 page(id:"home") { acf... }
Primești TOT din fiecare      }
(și ce nu ai nevoie)         Primești EXACT ce ceri
```

## Pași următori
- [ ] Design custom (fonturi, culori, animații)
- [ ] Meniu mobil funcțional
- [ ] Paginare blog cu cursor GraphQL
- [ ] Formular contact cu email (Resend)
- [ ] Google Maps embed
- [ ] Preview mode (draft-uri din WP)
- [ ] Sitemap.xml dinamic
- [ ] Deploy pe Vercel + webhook rebuild
