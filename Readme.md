# Web Design Document — Personal Portfolio Website

**Live URL:** https://kazi011225.github.io/portfolio
**GitHub Repo:** https://github.com/kazi011225/portfolio

---

## Project Overview

A personal portfolio website built completely from scratch using HTML, CSS, and JavaScript — no frameworks, no templates. The site is designed to represent me professionally and personally, showcasing my technical projects, career background, and identity as a Computer Science student with a non-traditional path into tech.

The site is fully responsive (mobile, tablet, desktop), accessible, and hosted live on GitHub Pages.

---

## Target Audience

- Employers and technical recruiters hiring for entry-level software development and cybersecurity roles
- Hiring managers at companies working in AI/ML, networking, and systems programming
- Peers, professors, and program coordinators (e.g. Justice Through Code, NYC Men Teach)
- Anyone who wants to understand who I am, what I've built, and how to reach me

---

## Part 1: Content

**1. Full name as displayed professionally:**
Kazi Anwar

**2. Purpose of the portfolio website:**
To present my professional identity online — showcasing my technical skills, real-world projects, and career background to potential employers and collaborators in software development and cybersecurity.

**3. Target audience:**
Employers, recruiters, and technical hiring managers in software development, cybersecurity, and data roles. Also peers and program coordinators who want to learn more about my background.

**4. Skills highlighted:**
Python, C, JavaScript, HTML/CSS, Machine Learning (YOLOv8), Computer Vision, RAG/LLM integration, Linux (Ubuntu), Git/GitHub, Flask, Tableau, TCP/IP Networking, OS Concepts, Multithreading.

**5. Projects showcased:**
- LLaMA RAG Chatbot — built at AFRL internship
- YOLOv8 Car Parts Detector — computer vision + domain expertise
- Unix Shell in C — systems programming from scratch
- HTTP Download Accelerator — multithreaded TCP networking
- HOG + SVM Digit Classifier — ML on MNIST with research paper
- Food Insecurity Dashboard — Tableau data visualization for public advocacy

**6. Short professional bio:**
After high school, while most of my peers started college, I was working full time to bring my family over from Bangladesh. What followed was over a decade of building myself from the ground up — cashier, restaurant industry, and eventually Finance Manager and Assistant General Manager at a dealership I helped grow from 15 to over 60 cars a month. When COVID-19 closed that chapter, I went back to school for Computer Science. Since then I have interned at the Air Force Research Laboratory, built a Tableau dashboard on food insecurity, earned a Data Analytics certificate, and am a Fellow in the AI Engineering track with Justice Through Code at Columbia University. What drives me is personal — growing up in Bangladesh and Queens, I've seen what it looks like when people lack access to resources and opportunity. I want to use technology to help close that gap.

**7. Pages / sections included:**
Single-page site with the following sections:
- Home (Hero)
- About
- Experience
- Projects
- Hobbies
- Contact

**8. Career goal / desired role:**
SOC Analyst Tier 1 or entry-level Software Developer — targeting roles in cybersecurity and software development upon graduating from Queens College.

**9. Technologies and tools:**
Python, C, JavaScript, HTML5, CSS3, Flask, MATLAB, Git/GitHub, Linux (Ubuntu), Tableau, VS Code, YOLOv8, LLaMA, RAG pipelines, TCP Sockets, pthreads.

**10. Achievements and experiences worth highlighting:**
- Air Force Research Lab (AFRL) — Research Intern
- Justice Through Code × Columbia University — AI Systems Engineering Fellow
- LaGuardia Community College — Teaching Assistant
- Queens College — NYC Men Teach Participant
- LaGuardia Community College — Dean's List
- Co-founded LaGuardia's first Humanitarian Club

**11. Call to action:**
Visitors should view my projects and reach out via the contact form. A downloadable resume PDF is also available directly on the site.

**12. Resume:**
Yes — a downloadable PDF resume is linked on the site. Visitors can download it directly from the page.
Format: PDF.

**13. Social and professional links:**
- GitHub: https://github.com/kazi011225
- LinkedIn: https://www.linkedin.com/in/kazi-anwar-624702371

---

## Content Strategy

The content is organized to answer the three questions every visitor has in order:

1. **Who are you?** — Hero section with name, tagline, and short bio
2. **What's your background?** — About section with personal story + highlights; Experience timeline
3. **What have you built?** — Projects section with 6 real technical projects
4. **Who are you as a person?** — Hobbies gallery showing personality beyond code
5. **How do I reach you?** — Contact form + social links

The writing is intentionally human and direct — not corporate. The goal is for an employer to feel like they know who I am before they ever speak to me.

---

## Information Organization

The site follows the natural flow of how a hiring manager reads a portfolio:

```
HERO → ABOUT → EXPERIENCE → PROJECTS → HOBBIES → CONTACT
```

Each section has a small uppercase label ("About Me", "My Work", etc.) so visitors who scan rather than read can jump directly to what they need. The fixed navbar makes every section accessible at any scroll position.

---

## Part 2: Design

**1. Overall style:**
Warm minimalist — clean and professional without feeling cold or generic. Inspired by editorial design and personal blogs rather than dark "developer portfolio" templates. The goal is for the site to feel like a person, not a product.

**2. Color scheme and why:**
- `#f7f4ef` — Cream background. Warm, soft, easy on the eyes for extended reading.
- `#1a1a1a` — Near-black for headings. Strong contrast without the harshness of pure black.
- `#c1714f` — Terracotta accent. Warm, distinctive, human — not a typical "tech" color. Signals personality.
- `#3d3d3d` — Charcoal body text. Readable and warm.
- `#f0ebe3` — Tinted cream for alternating sections. Adds visual rhythm without a jarring color change.

The terracotta accent was chosen specifically because it's warm and uncommon in tech portfolios — it makes the site memorable and reflects that I'm a person first, developer second.

**3. Fonts:**
- **Headings:** Lora (serif) — warm, literary, confident. Chosen to stand out from the Inter/sans-serif default every developer portfolio uses.
- **Body text:** Inter (sans-serif) — neutral, clean, highly readable at small sizes. Industry standard for UI text.

**4. How design reflects personality and field:**
The serif headings signal that I think carefully about presentation. The warm color palette reflects my people-first background (10+ years in customer-facing roles). The clean layout shows technical discipline. Together they communicate: this person is both technical and human.

**5. Homepage layout:**
Two-column hero: text content on the left (name, tagline, bio, CTA buttons), photo on the right. Below the fold: full-width alternating sections. On mobile, the hero stacks vertically with the photo above.

**6. Project section organization:**
3-column card grid on desktop, 2-column on tablet, 1-column on mobile. Each card contains: a category tag, project title, description, tech stack pills, and a GitHub/view link. Cards lift slightly on hover to signal interactivity.

**7. Mobile responsiveness:**
Yes — the site is fully responsive. Techniques used:
- CSS media queries at 860px (tablet) and 580px (mobile) breakpoints
- CSS Grid with `repeat()` columns that collapse on smaller screens
- `clamp()` for fluid font sizes that scale with viewport width
- Hamburger menu replaces the desktop nav on mobile, with a slide-in drawer
- Hero stacks vertically on tablet and mobile
- All images use `max-width: 100%` and `object-fit: cover`

**8. Visual hierarchy:**
1. Hero headline — largest text on the page, first thing seen
2. Section titles — h2 in Lora serif, large and bold
3. Card/item titles — h3, smaller but still prominent
4. Body text — readable charcoal
5. Muted labels — small uppercase tags guide the eye to section identity

The terracotta accent color appears only on interactive or key identity elements (links, hover states, tags, icons) — never decoratively — so it always draws attention to something meaningful.

**9. Consistency across pages:**
The site is single-page. All sections share:
- The same CSS custom property system (`:root` variables for all colors, fonts, spacing)
- The same card component style (white background, border, border-radius, hover effect)
- The same spacing rhythm (6rem section padding)
- The same label + h2 heading pattern for every section

**10. Accessibility considerations:**
- Color contrast between body text (`#3d3d3d`) and background (`#f7f4ef`) exceeds WCAG AA ratio
- All icon-only links have `aria-label` attributes for screen readers
- All images have descriptive `alt` text
- Semantic HTML elements used throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Focus styles preserved on all interactive elements
- Font sizes use `rem` units so they respect user browser zoom settings
- `prefers-reduced-motion` media query is respected in CSS transitions

**11. Icons, images, illustrations:**
- Font Awesome 6 icons used for nav, social links, and highlight cards — they add visual meaning without requiring image assets
- Real personal photo used in the hero — makes the site feel human, not generic
- Personal image gallery in the Hobbies section — photos from my actual life that show personality
- No stock photography used anywhere

**12. Portfolio websites that inspired this design:**
- brittanychiang.com — strong information hierarchy, confident use of a single accent color
- leerob.io — minimal and typography-forward, lets content breathe
- joshwcomeau.com — personality-driven, proves a dev portfolio can have warmth

---

## Visual Design

### Wireframe — Desktop Layout

```
┌─────────────────────────────────────────────────────┐
│  NAV:  Kaz.    About  Experience  Projects  Hobbies  Contact  │
├─────────────────────────────────────────────────────┤
│                                                     │
│   HERO                                              │
│   ┌─────────────────────┐   ┌──────────────┐        │
│   │ Queens, NYC         │   │              │        │
│   │                     │   │    [PHOTO]   │        │
│   │ Hi, I'm Kaz.        │   │              │        │
│   │ CS student.         │   │              │        │
│   │ Builder.            │   └──────────────┘        │
│   │ Queens native.      │                           │
│   │                     │                           │
│   │ [See My Work] [Say Hello]                       │
│   └─────────────────────┘                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│  ABOUT ME                                           │
│  A different kind of CS student.                    │
│                                                     │
│  ┌──────────────────┐  ┌────────────────────────┐   │
│  │ Bio paragraph    │  │ [icon] Queens College  │   │
│  │ Bio paragraph    │  │ [icon] AFRL Intern     │   │
│  │ Bio paragraph    │  │ [icon] JTC Fellow      │   │
│  └──────────────────┘  │ [icon] Teaching Asst  │   │
│                        └────────────────────────┘   │
│                                                     │
├─────────────────────────────────────────────────────┤
│  EXPERIENCE                                         │
│  Where I've been.                                   │
│                                                     │
│  │ • 2024   AI Systems Fellow — JTC × Columbia     │
│  │ • 2024   Research Intern — AFRL                 │
│  │ • 2023   Teaching Assistant — LaGuardia         │
│  │ • 2010   Finance Manager → AGM — Car Buyers     │
│                                                     │
├─────────────────────────────────────────────────────┤
│  MY WORK                                            │
│  Things I've built.                                 │
│                                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │ Project │  │ Project │  │ Project │             │
│  │  Card   │  │  Card   │  │  Card   │             │
│  └─────────┘  └─────────┘  └─────────┘             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │ Project │  │ Project │  │ Project │             │
│  │  Card   │  │  Card   │  │  Card   │             │
│  └─────────┘  └─────────┘  └─────────┘             │
│                                                     │
├─────────────────────────────────────────────────────┤
│  OUTSIDE OF CODE                                    │
│  A little about me.                                 │
│                                                     │
│  ┌──────────────────────┐  ┌──────────┐             │
│  │  [Wide photo — me    │  │ [Photo]  │             │
│  │   at museum]         │  │ Banksy   │             │
│  └──────────────────────┘  └──────────┘             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ [Photo]  │  │ [Photo]  │  │ [Photo]  │           │
│  │ Kubrick  │  │ Khabib   │  │ Zidane   │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│  ┌──────────────────────────────────────┐           │
│  │  [Wide photo — Eat the Rich mural]   │           │
│  └──────────────────────────────────────┘           │
│                                                     │
├─────────────────────────────────────────────────────┤
│  GET IN TOUCH                                       │
│  Let's talk.                                        │
│                                                     │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │ Your Name    │  │ Your Email   │                 │
│  └──────────────┘  └──────────────┘                 │
│  ┌──────────────────────────────────┐               │
│  │ Message                          │               │
│  └──────────────────────────────────┘               │
│  [ Send Message ✈ ]                                 │
│                                                     │
│  GitHub   LinkedIn                                  │
├─────────────────────────────────────────────────────┤
│  © 2026 Kaz. Made in Queens. 🗽                   ↑  │
└─────────────────────────────────────────────────────┘
```

### Wireframe — Mobile Layout

```
┌─────────────────────┐
│  Kaz.          [☰]  │
├─────────────────────┤
│   [PHOTO]           │
│                     │
│   Queens, NYC       │
│   Hi, I'm Kaz.      │
│   CS student.       │
│   Builder.          │
│                     │
│   [See My Work]     │
│   [Say Hello]       │
├─────────────────────┤
│  About              │
│  [Bio text]         │
│  [Highlight cards   │
│   stacked]          │
├─────────────────────┤
│  Experience         │
│  [Timeline]         │
├─────────────────────┤
│  Projects           │
│  [Card]             │
│  [Card]             │
│  [Card]             │
├─────────────────────┤
│  Hobbies            │
│  [Photo]            │
│  [Photo]            │
│  [Photo]            │
├─────────────────────┤
│  Contact            │
│  [Name]             │
│  [Email]            │
│  [Message]          │
│  [Send]             │
├─────────────────────┤
│  © 2026 Kaz.     ↑  │
└─────────────────────┘
```

---

## Part 3: Interactivity

**1. Interactive elements:**
- Fixed navbar that becomes visible (frosted background) on scroll
- Hamburger menu for mobile with animated open/close
- Hover effects on all project cards, highlight cards, gallery images, and buttons
- Smooth scroll on all anchor links
- Image gallery with hover-reveal captions in the Hobbies section
- Back-to-top button in the footer
- Contact form with live validation

**2. Contact form:**
Yes. Fields: Name, Email, Message. On submit, JavaScript validates each field:
- Empty name → shows "Please enter your name."
- Empty or invalid email → shows appropriate error
- Empty message → shows "Please write a message."
Errors appear inline under each field in red. On successful validation, the button shows "Sending..." for 1 second, then a green success message appears and the form resets. No backend is used — this demonstrates front-end validation and UX feedback.

**3. JavaScript features implemented:**
- **Navbar scroll effect** — `window.addEventListener('scroll')` adds/removes `.scrolled` class
- **Hamburger menu** — `classList.toggle()` opens/closes the mobile nav drawer
- **Auto-close nav** — clicking any nav link closes the mobile menu automatically
- **Contact form validation** — checks all fields, shows/clears inline errors, simulates submission with `setTimeout`

**4. User feedback from interactions:**
- Buttons lift upward (`translateY(-2px)`) and change color on hover
- Project cards lift and get a colored border shadow on hover
- Gallery images zoom slightly and dim, revealing a slide-up caption
- Nav links turn terracotta on hover
- Form inputs glow with a terracotta ring on focus
- Invalid fields turn red with an error message below
- Submit button disables and shows "Sending..." while processing
- Green success message confirms the form was submitted

**5. How interactivity improves user experience:**
Interactivity makes the site feel alive and responsive rather than a static document. Hover effects tell users what is clickable. The mobile hamburger menu makes the site usable on any device. Form validation prevents frustration by catching errors immediately, without a page reload. The gallery captions reward curiosity — you have to hover to read them, which encourages exploration. Together these details communicate attention to craft, which is itself a signal to employers about how I approach my work.

---

## Technical Overview

| Layer | Technology | Notes |
|-------|------------|-------|
| Structure | HTML5 | Semantic elements: header, nav, main, section, article, footer |
| Styling | CSS3 | Custom properties, Flexbox, Grid, clamp(), media queries |
| Interactivity | Vanilla JavaScript | No frameworks — ES6, classList, addEventListener, setTimeout |
| Icons | Font Awesome 6 | Loaded via CDN |
| Fonts | Google Fonts | Lora (serif) + Inter (sans-serif) |
| Hosting | GitHub Pages | Deployed from main branch |
| Version Control | Git / GitHub | https://github.com/kazi011225/portfolio |

All code is original and hand-written. No Bootstrap, no jQuery, no build tools.

---

## Timeline / Project Milestones

| Milestone | Status |
|-----------|--------|
| Content planning — answer all questions | ✅ Complete |
| HTML structure — all sections built | ✅ Complete |
| CSS styling — colors, layout, typography | ✅ Complete |
| Responsive design — mobile + tablet | ✅ Complete |
| JavaScript — navbar, menu, form validation | ✅ Complete |
| Personal photo + image gallery added | ✅ Complete |
| GitHub repo created | ✅ Complete |
| GitHub Pages deployed | ✅ Complete |
| Final review + real content filled in | ✅ Complete |
| Submitted on Brightspace | 🔲 Pending |

---

## External Resources Used

| Resource | URL | Purpose |
|----------|-----|---------|
| Google Fonts — Lora | https://fonts.google.com/specimen/Lora | Heading font |
| Google Fonts — Inter | https://fonts.google.com/specimen/Inter | Body font |
| Font Awesome 6 | https://fontawesome.com/ | Icons |
| MDN — CSS Custom Properties | https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties | CSS variables reference |
| MDN — CSS Grid | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout | Grid layout reference |
| MDN — Flexbox | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout | Flexbox reference |
| GitHub Pages Docs | https://docs.github.com/en/pages | Deployment guide |
| W3C — WCAG Accessibility | https://www.w3.org/WAI/standards-guidelines/wcag/ | Accessibility standards |
| Design inspiration | https://brittanychiang.com | Portfolio design reference |
| Design inspiration | https://leerob.io | Portfolio design reference |