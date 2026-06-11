# Web Design Document — Personal Portfolio Website

**Live URL:** https://kazi011225.github.io/portfolio
**GitHub Repo:** https://github.com/kazi011225/portfolio

---

## Project Overview

A personal portfolio website built completely from scratch using HTML, CSS, and JavaScript. No frameworks, no templates, no Bootstrap. Every line of code is original and hand-written.

The site represents me professionally and personally — showcasing my technical projects, career background, and identity as a Computer Science student with a non-traditional path into tech. It is fully responsive across mobile, tablet, and desktop, accessible, and hosted live on GitHub Pages.

---

## Target Audience

- Employers and technical recruiters hiring for entry-level software development and cybersecurity roles
- Hiring managers at companies working in AI/ML, networking, and systems programming
- Peers, professors, and program coordinators such as Justice Through Code and NYC Men Teach
- Anyone who wants to understand who I am, what I have built, and how to reach me

---

## Part 1: Content

**1. Full name as displayed professionally:**
Kazi Anwar

**2. Purpose of the portfolio website:**
To present my professional identity online — showcasing my technical skills, real-world projects, and career background to potential employers and collaborators in software development and cybersecurity.

**3. Target audience:**
Employers, recruiters, and technical hiring managers in software development, cybersecurity, and data roles. Also peers and program coordinators who want to learn more about my background.

**4. Skills highlighted:**
Python, C, C++, Java, JavaScript, HTML/CSS, Machine Learning (YOLOv8, PyTorch), Computer Vision, RAG/LLM integration, Linux (Ubuntu), Git/GitHub, Flask, Tableau, TCP/IP Networking, OS Concepts, Multithreading, Ollama.

**5. Projects showcased:**
- LLaMA RAG Chatbot — built at AFRL internship, locally hosted with no internet required
- YOLOv8 Car Parts Detector — computer vision combined with domain expertise
- Unix Shell in C — systems programming built from scratch
- HTTP Download Accelerator — multithreaded TCP networking
- HOG + SVM Digit Classifier — ML on MNIST with NeurIPS-format research paper
- Food Insecurity Dashboard — Tableau data visualization for public advocacy

**6. Short professional bio:**
After high school, while most of my peers started college, I was working full time to bring my family over from Bangladesh. What followed was over a decade of building myself from the ground up: cashier, restaurant industry, and eventually Finance Manager and Assistant General Manager at a dealership I helped grow from 15 to over 60 cars a month. When COVID-19 closed that chapter, I went back to school for Computer Science. Since then I have interned at the Air Force Research Laboratory, built a Tableau dashboard on food insecurity, earned a Data Analytics certificate, and am a Fellow in the AI Engineering track with Justice Through Code at Columbia University. What drives me is personal. Growing up in Bangladesh and Queens, I have seen what it looks like when people lack access to resources and opportunity. I want to use technology to help close that gap.

**7. Pages and sections included:**
Single-page site with these sections navigable from the fixed navbar:
Home (Hero), About, Experience, Skills, Projects, Hobbies, Contact

**8. Career goal and desired role:**
Entry-level Software Developer or SOC Analyst Tier 1 — targeting roles in software development and cybersecurity upon graduating from Queens College in December 2026.

**9. Technologies and tools with experience:**
Python, C, C++, Java, JavaScript, HTML5, CSS3, Flask, MATLAB, Git/GitHub, Linux (Ubuntu), Tableau, VS Code, YOLOv8, LLaMA, Ollama, RAG pipelines, TCP Sockets, PyTorch, Multithreading.

**10. Achievements and experiences worth highlighting:**
- Air Force Research Laboratory — Research Intern (built locally hosted LLM chatbot)
- Justice Through Code x Columbia University — AI Systems Engineering Fellow
- LaGuardia Community College — Student Tech Mentor
- Queens College — NYC Men Teach Participant
- LaGuardia Community College — Dean's List
- CARE Washington D.C. — Public Policy Advocate (met with U.S. Senators and Representatives)
- Co-founded LaGuardia's first Humanitarian Club

**11. Call to action:**
Visitors should view my projects and reach out via the contact form. A downloadable PDF resume is also available directly from the hero section.

**12. Resume:**
Yes. A downloadable PDF resume is linked in the hero section via a Download Resume button.
Format: PDF.

**13. Social and professional links:**
- GitHub: https://github.com/kazi011225
- LinkedIn: https://www.linkedin.com/in/kazi-anwar-624702371

---

## Content Strategy

The content is organized to answer the questions every visitor has in order:

1. Who are you? — Hero section with name, tagline, and short bio
2. What is your background? — About section with real personal story and credential highlights
3. Where have you worked? — Experience timeline from 2010 to present
4. What do you know? — Skills section with categorized tech stack
5. What have you built? — Projects section with 6 real technical projects
6. Who are you as a person? — Hobbies gallery showing personality beyond code
7. How do I reach you? — Contact form with Formspree integration and social links

The writing is intentionally human and direct. The goal is for an employer to feel like they know who I am before they ever speak to me.

---

## Information Organization

The site follows the natural flow of how a hiring manager reads a portfolio:

```
HERO > ABOUT > EXPERIENCE > SKILLS > PROJECTS > HOBBIES > CONTACT
```

Each section has a small uppercase label so visitors who scan rather than read can jump directly to what they need. The fixed navbar makes every section accessible at any scroll position.

---

## Part 2: Design

**1. Overall style:**
Warm minimalist — clean and professional without feeling cold or generic. Inspired by editorial design and personal writing rather than dark developer portfolio templates. The goal is for the site to feel like a person, not a product.

**2. Color scheme and why:**
- #f7f4ef — Cream background. Warm, soft, easy on the eyes for extended reading.
- #1a1a1a — Near-black for headings. Strong contrast without the harshness of pure black.
- #c1714f — Terracotta accent. Warm, distinctive, human. Not a typical tech color. Signals personality.
- #3d3d3d — Charcoal body text. Readable and warm.
- #f0ebe3 — Tinted cream for alternating sections. Adds visual rhythm without jarring color changes.
- #e0d9d0 — Warm border color for cards and dividers.

The terracotta accent was chosen specifically because it is warm and uncommon in tech portfolios. It makes the site memorable and reflects that I am a person first, developer second.

**3. Fonts:**
- Headings: Lora (serif) — warm, literary, confident. Chosen to stand out from the generic sans-serif developer portfolio default.
- Body text: Inter (sans-serif) — neutral, clean, highly readable at small sizes. Industry standard for UI text.

**4. How design reflects personality and field:**
The serif headings signal that I think carefully about presentation. The warm color palette reflects my people-first background from over a decade in customer-facing roles. The clean layout shows technical discipline. Together they communicate: this person is both technical and human.

**5. Homepage layout:**
Two-column hero: text content on the left (name, tagline, bio, CTA buttons), photo on the right. Below the fold: full-width alternating sections in this order: About, Experience, Skills, Projects, Hobbies, Contact. On mobile the hero stacks vertically with photo above.

**6. Project section organization:**
3-column card grid on desktop, 2-column on tablet, 1-column on mobile. Each card shows: a category tag, project title, description, and tech stack pills. Cards lift and border highlights on hover to signal interactivity.

**7. Mobile responsiveness:**
Yes. The site is fully responsive using CSS media queries at 860px (tablet) and 580px (mobile) breakpoints. CSS Grid with repeat() columns collapses on smaller screens. Hamburger menu replaces desktop nav on mobile with a slide-in drawer. Hero stacks vertically on mobile. Font sizes use clamp() for fluid scaling. All images use max-width and object-fit for safe rendering at any size.

**8. Visual hierarchy:**
1. Hero headline — largest text on the page, first thing seen
2. Section titles — h2 in Lora serif, prominent
3. Card and item titles — h3, smaller but clear
4. Body text — readable charcoal
5. Muted labels — small uppercase tags identifying each section
The terracotta accent appears only on interactive or key identity elements so it always draws attention to something meaningful.

**9. Consistency across pages:**
The site is single-page. All sections share the same CSS custom property system defined in the root block, the same card component style, the same 6rem section padding, and the same label and h2 heading pattern.

**10. Accessibility considerations:**
- Color contrast between body text (#3d3d3d) and background (#f7f4ef) meets WCAG AA standards
- All icon-only links have aria-label attributes
- All images have descriptive alt text
- Semantic HTML used throughout: header, nav, main, section, article, footer
- Form feedback uses aria-live polite for screen reader announcements
- Font sizes use rem units so they respect browser zoom settings
- prefers-reduced-motion media query disables animations for users who prefer it
- Hamburger button has aria-label for screen reader identification

**11. Icons, images, and illustrations:**
- Font Awesome 6 icons used for nav, social links, skill categories, and highlight cards
- Real personal photo in the hero section makes the site feel human
- Image gallery in the Hobbies section uses real images that reflect my personality
- No stock photography anywhere on the site

**12. Portfolio websites that inspired this design:**
- brittanychiang.com — strong information hierarchy, confident use of a single accent color
- leerob.io — minimal and typography-forward, lets content breathe
- joshwcomeau.com — personality-driven, proves a developer portfolio can have warmth

---

## Visual Design

### Wireframe — Desktop

```
+----------------------------------------------------------+
|  NAV: Kaz.  About  Experience  Skills  Projects  Hobbies  Contact  |
+----------------------------------------------------------+
|                                                          |
|  HERO                                                    |
|  +---------------------------+   +--------------+        |
|  | Queens, NYC               |   |              |        |
|  |                           |   |   [PHOTO]    |        |
|  | Hi, I'm Kaz.              |   |              |        |
|  | CS student. Builder.      |   +--------------+        |
|  | Queens native.            |                           |
|  |                           |                           |
|  | [See My Work] [Say Hello] |                           |
|  | [Download Resume]         |                           |
|  +---------------------------+                           |
|                                                          |
+----------------------------------------------------------+
|  ABOUT ME                                                |
|  I didn't take the traditional path.                     |
|                                                          |
|  +------------------+  +----------------------------+    |
|  | Bio paragraph    |  | [icon] Queens College      |    |
|  | Bio paragraph    |  | [icon] JTC Fellow          |    |
|  | Bio paragraph    |  | [icon] AFRL Intern         |    |
|  +------------------+  | [icon] Tech Mentor         |    |
|                        | [icon] Policy Advocate     |    |
|                        +----------------------------+    |
|                                                          |
+----------------------------------------------------------+
|  EXPERIENCE                                              |
|  Where I've been.                                        |
|                                                          |
|  | . 2024  AI Systems Fellow — JTC x Columbia           |
|  | . 2024  Research Intern — AFRL                       |
|  | . 2023  Student Tech Mentor — LaGuardia              |
|  | . 2010  Finance Manager to AGM — Car Buyers          |
|                                                          |
+----------------------------------------------------------+
|  SKILLS                                                  |
|  Skills & Tools                                          |
|                                                          |
|  +------------------+  +------------------+             |
|  | Languages        |  | AI / ML          |             |
|  | [tags]           |  | [tags]           |             |
|  +------------------+  +------------------+             |
|  +------------------+  +------------------+             |
|  | Systems          |  | Tools            |             |
|  | [tags]           |  | [tags]           |             |
|  +------------------+  +------------------+             |
|                                                          |
+----------------------------------------------------------+
|  PROJECTS                                                |
|  Things I've built.                                      |
|                                                          |
|  +--------+  +--------+  +--------+                     |
|  | Card 1 |  | Card 2 |  | Card 3 |                     |
|  +--------+  +--------+  +--------+                     |
|  +--------+  +--------+  +--------+                     |
|  | Card 4 |  | Card 5 |  | Card 6 |                     |
|  +--------+  +--------+  +--------+                     |
|                                                          |
+----------------------------------------------------------+
|  HOBBIES                                                 |
|  A little about me.                                      |
|                                                          |
|  +------+ +------+ +------+ +------+                    |
|  | img  | | img  | | img  | | img  |                    |
|  +------+ +------+ +------+ +------+                    |
|  +------+ +------+ +------+ +------+                    |
|  | img  | | img  | | img  | | img  |                    |
|  +------+ +------+ +------+ +------+                    |
|  +------+ +------+ +------+ +------+                    |
|  | img  | | img  | | img  | | img  |                    |
|  +------+ +------+ +------+ +------+                    |
|                                                          |
|  [click any image to open fullscreen lightbox]           |
|                                                          |
+----------------------------------------------------------+
|  CONTACT                                                 |
|  Let's talk.                                             |
|                                                          |
|  +------------------+  +------------------+             |
|  | Your Name        |  | Your Email       |             |
|  +------------------+  +------------------+             |
|  +------------------------------------------+           |
|  | Message                                  |           |
|  +------------------------------------------+           |
|  [ Send Message ]                                        |
|                                                          |
|  GitHub   LinkedIn                                       |
+----------------------------------------------------------+
|  2026 Kaz. Made in Queens.                            ^  |
+----------------------------------------------------------+
```

### Wireframe — Mobile

```
+---------------------+
|  Kaz.          [=]  |
+---------------------+
|   [PHOTO]           |
|   Queens, NYC       |
|   Hi, I'm Kaz.      |
|   CS student.       |
|   [See My Work]     |
|   [Say Hello]       |
|   [Resume]          |
+---------------------+
|  About              |
|  [Bio text]         |
|  [Cards stacked]    |
+---------------------+
|  Experience         |
|  [Timeline]         |
+---------------------+
|  Skills             |
|  [Tag groups]       |
+---------------------+
|  Projects           |
|  [Card]             |
|  [Card]             |
|  [Card]             |
+---------------------+
|  Hobbies            |
|  2-col image grid   |
|  [click for modal]  |
+---------------------+
|  Contact            |
|  [Name]             |
|  [Email]            |
|  [Message]          |
|  [Send]             |
+---------------------+
|  2026 Kaz.       ^  |
+---------------------+
```

---

## Part 3: Interactivity

**1. Interactive elements:**
- Fixed navbar that gains a frosted background on scroll
- Hamburger menu for mobile with animated open and close (lines animate into an X)
- Auto-close nav when any link is tapped on mobile
- Hover effects on all project cards, highlight cards, skill cards, gallery images, and buttons
- Smooth scroll on all anchor links via CSS
- Image lightbox gallery: click any photo to open fullscreen viewer
- Back-to-top button in the footer
- Contact form with live validation

**2. Contact form:**
Yes. Fields: Your Name, Your Email, Message. Connected to Formspree so messages go directly to KaziAnwar0112@gmail.com. On submit, JavaScript validates each field before sending. Empty name shows an error. Missing or invalid email shows an error. Empty message shows an error. Errors appear inline below each field in red. On success, a green confirmation message appears and the form resets. Button shows Sending... while the request is in flight.

**3. JavaScript features implemented:**
- Navbar scroll effect: window.addEventListener scroll adds and removes the scrolled class
- Hamburger menu: classList.toggle opens and closes the mobile nav drawer
- Auto-close nav: clicking any link closes the mobile menu
- Contact form validation: checks all fields, shows inline errors, sends via Formspree fetch API
- Lightbox gallery: clicking any gallery image opens a fullscreen overlay
- Lightbox navigation: left and right arrow buttons cycle through all 12 images
- Lightbox keyboard support: ArrowLeft, ArrowRight, and Escape keys work
- Lightbox counter: shows current position as 3 / 12
- Close on backdrop click: clicking outside the image closes the lightbox

**4. User feedback from interactions:**
- Buttons lift upward 2px and change color on hover
- Project cards lift and show a colored border glow on hover
- Highlight cards slide right on hover with accent border
- Gallery images zoom slightly and dim on hover, revealing a caption
- Nav links turn terracotta on hover
- Form inputs glow with a terracotta ring on focus
- Invalid fields turn red with an error message below
- Submit button disables and shows Sending... while processing
- Green success message confirms form was submitted
- Hamburger icon animates into an X when menu is open
- Lightbox shows image counter so user knows where they are in the gallery

**5. How interactivity improves user experience:**
Every interactive detail serves a purpose. The navbar scroll effect lets visitors see content without the nav blocking it on page load, but restores it when needed. The hamburger menu makes the site fully functional on any screen size. Hover effects tell users what is clickable before they click. The image gallery lightbox rewards curiosity by turning a grid of small thumbnails into a full cinematic experience. Form validation saves time by catching errors immediately without a page reload. The keyboard navigation in the lightbox makes the site more accessible and feels polished. Together these details communicate that I pay attention to craft, which is itself a signal to employers.

---

## Technical Overview

| Layer | Technology | Notes |
|-------|------------|-------|
| Structure | HTML5 | Semantic: header, nav, main, section, article, footer |
| Styling | CSS3 | Custom properties, Flexbox, Grid, clamp(), media queries |
| Interactivity | Vanilla JavaScript | No frameworks — ES6, classList, addEventListener, fetch |
| Form backend | Formspree | Free tier, sends to KaziAnwar0112@gmail.com |
| Icons | Font Awesome 6 | Loaded via CDN |
| Fonts | Google Fonts | Lora and Inter |
| Hosting | GitHub Pages | Deployed from main branch |
| Version Control | Git and GitHub | https://github.com/kazi011225/portfolio |

All code is original and hand-written. No Bootstrap, no jQuery, no build tools.

---

## Timeline and Project Milestones

| Milestone | Status |
|-----------|--------|
| Content planning and all questions answered | Complete |
| HTML structure with all sections | Complete |
| CSS styling with colors, layout, typography | Complete |
| Responsive design for mobile and tablet | Complete |
| JavaScript for navbar, menu, form, lightbox | Complete |
| Personal photo and image gallery added | Complete |
| Formspree contact form connected | Complete |
| GitHub repo created | Complete |
| GitHub Pages deployed | Complete |
| Final review and real content filled in | Complete |
| Submitted on Brightspace | Pending |

---

## External Resources Used

| Resource | URL | Purpose |
|----------|-----|---------|
| Google Fonts — Lora | https://fonts.google.com/specimen/Lora | Heading font |
| Google Fonts — Inter | https://fonts.google.com/specimen/Inter | Body font |
| Font Awesome 6 | https://fontawesome.com/ | Icons throughout the site |
| Formspree | https://formspree.io | Contact form email delivery |
| MDN — CSS Custom Properties | https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties | CSS variables reference |
| MDN — CSS Grid | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout | Grid layout reference |
| MDN — Flexbox | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout | Flexbox reference |
| MDN — Fetch API | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API | Used for form submission |
| GitHub Pages Docs | https://docs.github.com/en/pages | Deployment guide |
| W3C WCAG Accessibility | https://www.w3.org/WAI/standards-guidelines/wcag/ | Accessibility standards reference |
| Design inspiration | https://brittanychiang.com | Portfolio structure reference |
| Design inspiration | https://leerob.io | Typography and spacing reference |