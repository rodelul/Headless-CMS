# Rodi - Premium Headless CMS Portfolio

Un site de portofoliu modern, premium și extrem de interactiv (Setrex-inspired), construit folosind o arhitectură **Headless CMS**. Backend-ul este gestionat în **WordPress**, iar frontend-ul este complet decuplat, rulând pe **Next.js 14**.

## 🚀 Tehnologii Folosite

- **Frontend**: Next.js 14 (App Router), React, TypeScript.
- **Styling**: Tailwind CSS (Dark Mode, Glassmorphism, Neon Lime `#ccff00` Accents).
- **Animații**: Framer Motion (FadeUps, interacțiuni fluide, acordeoane animate).
- **Backend**: WordPress (Headless).
- **API**: WPGraphQL (un singur request pentru a extrage toate datele necesare unei pagini).
- **Date Custom**: Advanced Custom Fields (ACF).

---

## ✨ Funcționalități Premium Implementate

- **Design Dark Mode Setrex-style**: Cromatică întunecată (`bg-dark-950`) cu accente puternice de verde lime.
- **Floating Pill Header**: Un meniu de navigare modern, detașat de margini, cu efecte de blur (glassmorphism) la scroll.
- **Modular Component Architecture**: Codul sursă respectă standardele Vercel (React Composition Patterns). Pagini complexe precum `Homepage` sunt sparte în componente modulare curate, independente (ex. `HomeHero`, `HomeFeatures`, `HomeTestimonials`), garantând mentenabilitate pe termen lung.
- **Interactive Team Roster (Despre Noi)**: O secțiune custom în pagina `/about` unde poți selecta membrii echipei, iar pozele lor se schimbă fluid printr-o animație Framer Motion.
- **Smooth FAQ Accordion**: Un acordeon interactiv construit de la zero, care renunță la vechile elemente statice de HTML în favoarea unor tranziții de înălțime (height transitions) fluide.
- **Infinite Marquee Integrations**: O bară de integrare cu scroll orizontal continuu, animată prin CSS pur.
- **Sistem Fallback**: Dacă WordPress nu răspunde sau datele lipsesc (ex: nu ai adăugat destui membri), frontend-ul umple automat spațiile goale cu placeholdere premium pentru a nu strica designul.

---

## ⚙️ Setup WordPress (Backend)

Pentru ca acest frontend să funcționeze corect, ai nevoie de următoarele pe instalarea ta de WordPress:

### 1. Pluginuri Necesare
- **WPGraphQL** — expune datele prin API GraphQL.
- **Advanced Custom Fields (ACF)** — pentru câmpuri personalizate.
- **WPGraphQL for ACF** — leagă câmpurile ACF de GraphQL.
- **Custom Post Type UI (CPT UI)** — (opțional) pentru a înregistra ușor CPT-urile.

### 2. Custom Post Types (CPT)
Trebuie să ai următoarele CPT-uri înregistrate din interfață, setate cu suport pentru GraphQL și cu următoarele nume de plural la GraphQL:

| Nume Secțiune | Post Type Slug | GraphQL Plural Name | Suport (Supports) |
| :--- | :--- | :--- | :--- |
| **Servicii** | `servicii` | `servicii` | Title, Editor, Thumbnail, Page Attributes |
| **Testimoniale**| `testimoniale` | `testimoniale` | Title, Custom Fields |
| **Echipă** | `team_members` | `teamMembers` | Title, Custom Fields, Page Attributes, Thumbnail |
| **Features** | `features` | `features` | Title, Custom Fields, Page Attributes |
| **FAQ** | `faq` | `faqs` | Title, Custom Fields, Page Attributes |

### 3. ACF Field Groups
*Atenție:* La fiecare Field Group, mergi la setările "GraphQL" (în josul paginii de editare a grupului) și bifează **Show in GraphQL = Yes**, iar la **GraphQL Field Name** pune exact numele de mai jos:

- **Team Member Fields** (`acfTeamMember`) pe CPT "Echipă":
  - `role` (Text)
  - `bio` (Textarea)
  - `photo` (Image - return format: Image Object)
- **FAQ Fields** (`acfFaq`) pe CPT "FAQ":
  - `answer` (Textarea sau WYSIWYG)
- **Feature Fields** (`acfFeature`) pe CPT "Features":
  - `description` (Textarea)
  - `icon` (Text / Emoji)
- **Home Page Fields** (`acfHome`) pe o pagină specifică "Acasă".

---

## 📂 Structura Proiectului

```
Headless-CMS-main/
├── app/
│   ├── layout.tsx              # Layout global (Floating Navbar + Footer, Fonturi)
│   ├── page.tsx                # Homepage Layout (orchestreaza componentele din /sections)
│   ├── about/                  # Pagina Despre Noi (Interactive Team, Timeline)
│   ├── blog/                   # Pagina Blog
│   └── contact/                # Formular Contact
├── components/
│   ├── layout/                 # Componente globale 
│   │   ├── Navbar.tsx          # Meniul principal (Rodi)
│   │   └── Footer.tsx
│   ├── sections/               # Secțiuni modulare independente
│   │   ├── HomeHero.tsx
│   │   ├── HomeFeatures.tsx
│   │   ├── HomeMockups.tsx
│   │   ├── HomeServices.tsx
│   │   ├── HomeIntegrations.tsx
│   │   ├── HomeBlog.tsx
│   │   ├── HomeTestimonials.tsx
│   │   └── FaqSection.tsx
│   └── animations/             # Componente animate cu Framer Motion
│       └── FadeUp.tsx          # Wrapper generic pentru efect de intrare
├── lib/
│   └── wordpress.ts            # Client GraphQL (toate interogările către WP)
├── styles/
│   └── globals.css             # Tailwind + Animații globale (ex: Marquee)
└── tailwind.config.js          # Configurații culori (Lime Green), animații
```
