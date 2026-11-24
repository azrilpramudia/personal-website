# PRD --- Meowhx Personal Portfolio

**Project:** Meowhx Personal Portfolio\
**Primary domain:** https://meowhx.my.id\
**Blog domain:** https://blog.meowhx.my.id\
**Document version:** 1.0\
**Status:** Draft for implementation

------------------------------------------------------------------------

## 1. Product Overview

Meowhx is a personal portfolio and technical writing platform for
presenting professional identity, technical interests, practical
experience, projects, and contact information.

The portfolio's primary professional positioning is **Network
Engineering**. System Administration and DevOps are complementary areas
that are currently being explored and developed through hands-on
practice. Programming, backend development, databases, and
infrastructure tools remain visible as supporting technical
capabilities.

The product consists of two related web properties:

-   **Main portfolio (`meowhx.my.id`)** --- personal profile,
    experience, skills, projects, and a preview of recent writing.
-   **Technical blog (`blog.meowhx.my.id`)** --- long-form articles,
    tutorials, technical notes, and learning documentation.

Both properties share a consistent visual identity while using layouts
appropriate to their content.

## 2. Product Goals

1.  Establish a clear and credible professional online presence.
2.  Communicate Network Engineering as the primary career focus.
3.  Present System Administration and DevOps as developing interests
    without overstating proficiency.
4.  Demonstrate technical breadth through programming languages,
    infrastructure tools, databases, and practical projects.
5.  Make experience and projects easy for recruiters and technical
    visitors to evaluate.
6.  Provide a dedicated platform for technical writing.
7.  Make it easy to contact the portfolio owner.
8.  Deliver a fast, responsive, accessible, maintainable website.

### 2.1 Non-goals

The initial release will not include:

-   A public user account or authentication system.
-   A complex custom CMS or admin dashboard.
-   A comments system for blog posts.
-   A public community or forum.
-   Skill proficiency percentages or arbitrary skill ratings.
-   Complex 3D scenes, heavy animations, or decorative effects that do
    not improve usability.
-   A backend service where static content is sufficient.

## 3. Target Audience

### Primary audience

-   Recruiters and hiring managers.
-   Network Engineering and IT infrastructure teams.
-   Internship and entry-level job evaluators.
-   Technical professionals and potential collaborators.

### Secondary audience

-   Developers and system administrators.
-   Readers interested in networking, Linux, infrastructure, and DevOps.
-   Students learning related technical subjects.

## 4. Brand and Professional Positioning

### 4.1 Primary focus

**Network Engineering**

The portfolio should emphasize interest and practical exposure to
network fundamentals, configuration, troubleshooting, infrastructure,
and network security.

### 4.2 Supporting interests

-   **System Administration:** Linux, server management, SSH,
    permissions, monitoring, and troubleshooting.
-   **DevOps & Infrastructure:** containerization, automation, CI/CD,
    deployment, and infrastructure monitoring.

These areas should be described as currently developing interests unless
supported by substantial practical experience.

### 4.3 Supporting technical capabilities

Programming, backend development, and data technologies should remain
visible. They demonstrate the ability to automate tasks, build
integrations, develop supporting tools, and understand systems beyond
networking.

### 4.4 Suggested short positioning statement

> An aspiring Network Engineer interested in network infrastructure,
> troubleshooting, Linux systems, and infrastructure technologies.

### 4.5 Content principles

-   Be accurate about current experience and proficiency.
-   Prefer evidence and project outcomes over unsupported claims.
-   Distinguish professional experience, academic work, personal
    projects, and learning exercises.
-   Use concise, direct language.
-   Avoid presenting every listed technology as an advanced skill.

## 5. Information Architecture

### 5.1 Main portfolio

The main portfolio is a single-page website with these sections:

1.  Home / Hero
2.  About
3.  Experience
4.  Languages & Skills
5.  Projects
6.  Blog Preview
7.  Contact
8.  Footer

### 5.2 Main navigation

-   Home
-   About
-   Experience
-   Skills
-   Projects
-   Blog
-   Contact

The Blog item links to `https://blog.meowhx.my.id`. Other items navigate
to the corresponding section on the main portfolio.

### 5.3 Blog information architecture

-   Blog homepage
-   Article listing
-   Article detail
-   Category or tag archive
-   Search results (optional for initial release if article volume is
    small)
-   About / author information (optional)

## 6. Functional Requirements

Priority definitions:

-   **P0:** Required for the initial production release.
-   **P1:** Important; may follow the first release.
-   **P2:** Optional enhancement.

### 6.1 Navigation

  -----------------------------------------------------------------------
  ID                      Requirement             Priority
  ----------------------- ----------------------- -----------------------
  NAV-01                  Display brand identity  P0
                          and primary navigation. 

  NAV-02                  Navigate to portfolio   P0
                          sections using anchor   
                          links.                  

  NAV-03                  Link Blog to the blog   P0
                          subdomain.              

  NAV-04                  Provide a responsive    P0
                          mobile navigation.      

  NAV-05                  Indicate the current or P1
                          active section where    
                          appropriate.            

  NAV-06                  Support keyboard        P0
                          navigation and visible  
                          focus states.           
  -----------------------------------------------------------------------

### 6.2 Hero

The hero must communicate who the owner is and the primary professional
focus.

Required content: - Name or preferred public identity. - A concise
Network Engineering-oriented headline. - A short supporting
introduction. - Primary CTA to Projects. - Secondary CTA to Contact. -
Relevant social links, such as GitHub and LinkedIn. - Optional CV
download, only when a current public CV is available.

Suggested headline:

> Exploring Networks. Building Reliable Infrastructure.

Suggested introduction:

> I'm Azril, an Informatics Engineering student focused on Network
> Engineering, with growing interests in Linux systems, System
> Administration, and DevOps.

The wording may be refined, but must not imply senior-level expertise.

### 6.3 About

Include: - Brief personal background. - Education, accurately marked as
ongoing until graduation. - Primary technical focus. - Supporting
interests. - Learning approach or professional direction. - Relevant
links where useful.

Keep the section text-focused. Do not require a profile illustration,
terminal mockup, or decorative dashboard.

### 6.4 Experience

Each entry should support: - Organization. - Role or position. -
Employment or participation type. - Start and end dates, or Present. -
Location or work arrangement, if relevant. - Responsibilities and
contributions. - Tools and technologies used. - Outcomes or
achievements, where verifiable.

Display newest entries first. Clearly distinguish employment,
internship, education, training, and organizational activity.

### 6.5 Languages & Skills

Use grouped categories rather than proficiency bars.

Suggested categories and candidate entries:

**Network Engineering** - TCP/IP - DNS - DHCP - VLAN - Routing and
Switching - Firewall - VPN - Network Troubleshooting

**System Administration** - Linux - Bash - SSH - User and Permission
Management - Server Administration - System Monitoring - Nginx

**Programming Languages & Scripting** - Go - C - Bash - JavaScript -
TypeScript - Node.js

**Infrastructure & DevOps** - Docker - Docker Compose - Cloudflare -
Git - GitHub Actions - CI/CD - Prometheus - Grafana

**Database & Storage** - PostgreSQL - MySQL - SQLite - Redis

**Backend & Integration** - REST API - MQTT - WebSocket - Prisma ORM

Only publish entries the owner has genuinely studied or used. The list
is a content inventory, not a claim that every item is equally mastered.
Bash may appear in both System Administration and Programming &
Scripting because it serves both roles.

Do not use percentage-based proficiency meters. If proficiency labels
are needed later, use clear terms such as Familiar, Practicing, and
Experienced, and apply them consistently and honestly.

### 6.6 Projects

Each project entry should support: - Project name. - Short summary. -
Problem or purpose. - Owner's role and contribution. - Project status
(Completed, In Progress, or Archived). - Category. - Technologies
actually used. - Key features or implementation details. - Repository
URL. - Live demo URL, if available. - Image or screenshot, if it adds
useful context.

Recommended project categories: - Network Engineering - System
Administration - Infrastructure & DevOps - Backend Development -
Monitoring & Automation - Web Applications

Project content should prioritize practical evidence. Do not list a
technology on a project unless it was actually used.

Potential project examples, subject to confirming current status and
details: - Linux notification monitoring with webhook-to-Telegram
integration. - Air Quality Monitoring Platform. - Go backend/API
projects. - Infrastructure, reverse proxy, or monitoring experiments.

Feature only projects that can be explained clearly. A small,
well-documented project is more valuable than an inflated list.

### 6.7 Blog Preview

Show a small selection of recent articles on the main portfolio.

Each preview should include: - Article title. - Short excerpt. -
Publication date. - Category or tags. - Estimated reading time, if
available. - Link to the full article.

Include a link to view all articles on the blog domain. If no articles
are published, hide the section or show a deliberate empty state rather
than placeholder content.

### 6.8 Contact

Provide: - Public contact email or a contact form. - GitHub and LinkedIn
links. - A short invitation for professional communication.

If a form is implemented, fields should include: - Name - Email -
Subject (optional) - Message

Form requirements: - Client-side usability validation and server-side
validation. - Clear loading, success, and error states. - Spam
mitigation. - Safe handling of submitted data. - No public exposure of
private credentials.

A mailto link is an acceptable P0 alternative if a secure form is not
ready.

### 6.9 Footer

Include: - Brand or owner identity. - Compact navigation. - Relevant
social links. - Blog link. - Copyright year.

## 7. Blog Requirements

### 7.1 Purpose

The blog is a technical writing space for documenting practical
learning, explaining concepts, and sharing project implementation notes.

### 7.2 Topic areas

-   Network Engineering and networking fundamentals.
-   Linux and System Administration.
-   DevOps and infrastructure.
-   Backend development and programming.
-   Monitoring, automation, and troubleshooting.

### 7.3 Article structure

Each article should support: - Title. - Slug. - Description or
excerpt. - Publication date. - Updated date (optional). - Author. -
Category and tags. - Cover image (optional). - Reading time. - Table of
contents for long articles. - Headings, code blocks, images, and
links. - Related articles (optional).

### 7.4 Blog content management

Preferred initial approach: **Astro Content Collections with
Markdown/MDX**.

Reasons: - Articles are version-controlled with the source code. - No
CMS backend is required for a small personal blog. - Markdown and code
blocks suit technical writing. - Static generation provides a simple
deployment model.

Supabase may be introduced later if browser-based content management,
dynamic content, or another concrete requirement justifies it.

## 8. Technology Requirements

### 8.1 Main stack

  Technology                        Responsibility
  --------------------------------- -----------------------------------
  Astro                             Web framework and rendering
  TypeScript                        Type safety
  Tailwind CSS                      Styling and responsive design
  Astro Content Collections / MDX   Structured content and articles
  Supabase                          Optional dynamic backend services

### 8.2 Supabase usage

Supabase is not mandatory for every part of the portfolio.

Potential use cases: - Contact message storage. - Contact workflow
integration. - Dynamic content if a future CMS is required. - Image
storage if a dynamic publishing workflow is introduced.

Static profile, experience, skills, and project content should initially
be maintained in local typed data files or content collections.

### 8.3 Suggested architecture

-   Prefer static rendering for public content.
-   Use client-side JavaScript only when interaction requires it.
-   Keep content separate from presentation components.
-   Use reusable components for repeated UI patterns.
-   Keep secrets server-side.
-   Avoid unnecessary database queries and third-party dependencies.

## 9. Domain and Deployment

  Property         Domain                Responsibility
  ---------------- --------------------- --------------------
  Main portfolio   `meowhx.my.id`        Personal portfolio
  Blog             `blog.meowhx.my.id`   Technical articles

Requirements: - Configure DNS records for both domains. - Enable HTTPS
on both domains. - Configure canonical URLs for each site. - Set
appropriate cross-domain links. - Configure production environment
variables. - Add deployment checks. - Verify redirects and error
pages. - Ensure the blog and portfolio can be deployed independently if
separate repositories are chosen.

Hosting provider and repository arrangement remain implementation
decisions.

## 10. Non-functional Requirements

### 10.1 Performance

-   Prioritize static output for content pages.
-   Minimize client-side JavaScript.
-   Optimize and appropriately size images.
-   Lazy-load non-critical images.
-   Avoid unnecessary animation libraries.
-   Load fonts efficiently.
-   Avoid layout shifts where practical.

### 10.2 Responsive design

Support: - Small mobile screens. - Large mobile screens. - Tablets. -
Laptops. - Desktop displays.

No horizontal overflow should occur at supported widths. Navigation,
typography, cards, and spacing must adapt to screen size.

### 10.3 Accessibility

-   Semantic HTML landmarks.
-   Logical heading hierarchy.
-   Keyboard-accessible navigation and controls.
-   Visible focus states.
-   Labels for form controls.
-   Meaningful alt text.
-   Sufficient text contrast.
-   Reduced-motion support.

### 10.4 SEO

Main portfolio and blog should each have: - Unique page title and meta
description. - Canonical URL. - Open Graph metadata. - Appropriate
social preview image. - Sitemap. - Robots.txt. - Semantic HTML. -
Descriptive link text. - Appropriate structured data where useful.

Blog articles should have unique metadata and stable, readable URLs.

### 10.5 Security

-   Do not expose Supabase service-role keys or other secrets in browser
    code.
-   Use server-side validation for submitted data.
-   Apply appropriate Row Level Security if Supabase tables are exposed
    through its Data API.
-   Restrict database permissions to the minimum required.
-   Protect forms against spam and abuse.
-   Use HTTPS.
-   Avoid publishing private personal information.

## 11. Analytics and Privacy

Analytics are optional for the initial release. If added: - Prefer
privacy-conscious analytics. - Collect only data needed to understand
site usage. - Avoid collecting sensitive personal information. - Provide
any legally required disclosure. - Do not introduce invasive tracking by
default.

## 12. Acceptance Criteria

The initial release is acceptable when:

-   [ ] Main domain loads over HTTPS.
-   [ ] Blog domain loads over HTTPS.
-   [ ] Portfolio clearly identifies Network Engineering as the primary
    focus.
-   [ ] System Administration and DevOps are represented accurately as
    developing interests.
-   [ ] Programming languages and supporting technologies are included
    in categorized skills.
-   [ ] Experience entries have accurate dates and descriptions.
-   [ ] Projects show real contributions and working links where
    available.
-   [ ] Blog preview links to the correct article domain.
-   [ ] Contact method works.
-   [ ] Mobile navigation works.
-   [ ] Layout works across mobile, tablet, and desktop.
-   [ ] No horizontal overflow or broken links remain.
-   [ ] Metadata, sitemap, and robots.txt are configured.
-   [ ] Keyboard navigation and visible focus states work.
-   [ ] Production build completes successfully.
-   [ ] No secrets are exposed in client-side output.

## 13. Delivery Phases

### Phase 1 --- Foundation

-   Confirm brand direction and content.
-   Initialize Astro and TypeScript.
-   Configure Tailwind CSS.
-   Establish design tokens and typography.
-   Create global layout and navigation.

### Phase 2 --- Portfolio

-   Build Hero and About.
-   Build Experience.
-   Build Languages & Skills.
-   Build Projects.
-   Build Blog Preview.
-   Build Contact and Footer.

### Phase 3 --- Blog

-   Initialize blog application or site.
-   Configure content collections.
-   Build listing and article layouts.
-   Add metadata and article navigation.
-   Publish initial articles.

### Phase 4 --- Integration and Refinement

-   Connect cross-domain navigation.
-   Add contact workflow if required.
-   Refine responsive layouts.
-   Test accessibility and performance.
-   Review content accuracy.

### Phase 5 --- Production

-   Configure domains and HTTPS.
-   Configure CI/CD.
-   Deploy both properties.
-   Run final acceptance checks.

## 14. Future Enhancements

Potential improvements after the initial release: - Search across blog
articles. - RSS feed. - Reading progress indicator. - Related article
recommendations. - Project detail pages. - Downloadable CV versioning. -
Privacy-conscious analytics. - Supabase-powered CMS, only if editorial
needs grow.

------------------------------------------------------------------------

## 15. Product Principles

1.  **Clarity over decoration** --- visitors should understand the
    owner's focus quickly.
2.  **Evidence over claims** --- projects and contributions should
    support skill statements.
3.  **Honest positioning** --- distinguish primary focus from areas
    still being learned.
4.  **Content over effects** --- prioritize useful information and
    readability.
5.  **Performance by default** --- avoid unnecessary JavaScript and
    dependencies.
6.  **Maintainability** --- keep content, components, and configuration
    organized.
7.  **Consistency** --- portfolio and blog should feel like parts of the
    same identity.
