# Design System & UI Specification --- Meowhx

**Project:** Meowhx Personal Portfolio\
**Primary domain:** `meowhx.my.id`\
**Blog domain:** `blog.meowhx.my.id`\
**Design version:** 1.0\
**Visual direction:** Simple · Minimalist · Modern\
**Theme:** Dark-first

------------------------------------------------------------------------

## 1. Design Vision

The Meowhx portfolio should feel like a carefully designed personal
website: understated, clear, technical, and professional.

The visual language should communicate confidence through typography,
spacing, alignment, and content hierarchy rather than decoration.

### Core design principles

1.  **Simple:** Every element should have a clear purpose.
2.  **Minimalist:** Use a restrained palette, limited decoration, and
    generous spacing.
3.  **Modern:** Use clean typography, responsive layouts, subtle
    interactions, and consistent components.
4.  **Readable:** Content must remain comfortable to scan and read.
5.  **Credible:** The design should support real experience and project
    evidence, not make the site look like a product dashboard.
6.  **Consistent:** Portfolio and blog share tokens and visual language.

### Avoid

-   Excessive gradients and glow effects.
-   Glassmorphism as a default treatment.
-   Large decorative blobs and floating shapes.
-   Unnecessary terminal windows or fake code panels.
-   Skill percentage bars.
-   Too many pill badges.
-   Over-animated scroll effects.
-   Excessive card nesting.
-   AI-dashboard or generic SaaS landing-page aesthetics.

## 2. Brand Identity

**Brand:** Meowhx

**Primary professional focus:** Network Engineering

**Supporting interests:** System Administration and DevOps

**Supporting technical capabilities:** Programming, backend development,
databases, and infrastructure tools.

### Suggested brand statement

> Exploring Networks. Building Reliable Infrastructure.

Alternative:

> Network Engineering, Linux Systems, and Infrastructure.

Use the statement as a positioning direction, not as a claim of
senior-level professional experience.

## 3. Visual References in Words

The intended visual feel: - A dark editorial portfolio. - A restrained
developer identity. - A clean technical publication. - A professional
personal website rather than a software product dashboard.

Use a near-black background, slightly lighter surfaces, subtle gray
borders, off-white text, and electric blue for selected emphasis and
interaction.

## 4. Color System

### 4.1 Base tokens

``` css
:root {
  color-scheme: dark;

  --background: #000000;
  --surface: #111111;
  --surface-secondary: #171717;

  --primary: #000000;
  --accent: #0070F3;
  --info: #0070F3;
  --success: #16A34A;
  --warning: #F5A623;
  --error: #EE0000;

  --border: #333333;

  --text-primary: #EDEDED;
  --text-secondary: #A1A1A1;
  --text-muted: #666666;
}
```

### 4.2 Token usage

  Token               Value       Usage
  ------------------- ----------- -----------------------------------------
  Background          `#000000`   Main page background
  Surface             `#111111`   Cards, navigation surfaces, code blocks
  Surface secondary   `#171717`   Secondary panels and hover surfaces
  Primary             `#000000`   Primary dark base
  Accent              `#0070F3`   Links, primary CTA, selected states
  Info                `#0070F3`   Informational state
  Success             `#16A34A`   Success feedback
  Warning             `#F5A623`   Warning feedback
  Error               `#EE0000`   Error feedback
  Border              `#333333`   Dividers and component boundaries
  Text primary        `#EDEDED`   Headings and body copy
  Text secondary      `#A1A1A1`   Supporting descriptions
  Text muted          `#666666`   Metadata and low-emphasis labels

### 4.3 Color rules

-   Keep the page background predominantly black.
-   Use surface colors to create subtle grouping, not a stack of visible
    cards.
-   Use accent blue selectively for links, active navigation, focus, and
    primary actions.
-   Do not color every icon or heading blue.
-   Use semantic colors only when their meaning is relevant.
-   Check contrast for all text, controls, and focus indicators.
-   Do not use muted text for essential information if contrast is
    insufficient.

### 4.4 Optional light theme

The first release may be dark-only. If a light theme is added later,
define a complete semantic token set rather than inverting colors ad
hoc.

## 5. Typography

### Recommended font family

-   **Primary:** Geist Sans or Inter.
-   **Monospace:** JetBrains Mono.

Choose one primary sans-serif family and use it consistently.

### Typography scale

  Role                     Desktop guidance     Weight
  ---------------------- ------------------ ----------
  Hero heading                     48--64px   600--700
  Section heading                  30--40px        600
  Card/article heading             20--24px   500--600
  Body large                           18px        400
  Body                                 16px        400
  Supporting text                      14px        400
  Metadata                         12--13px   400--500

Use fluid sizing where appropriate, for example:

``` css
.hero-title {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.045em;
}
```

### Typography rules

-   Use tight letter spacing for large headings.
-   Keep body line height around 1.6--1.75.
-   Limit paragraph width for comfortable reading.
-   Avoid too many font weights.
-   Use monospace only for code, technical labels, or small details.

## 6. Layout and Spacing

### 6.1 Container

Suggested global container:

``` css
.container {
  width: min(100% - 3rem, 1120px);
  margin-inline: auto;
}
```

Adapt horizontal padding on smaller screens.

### 6.2 Spacing scale

Use a consistent 4px-based spacing scale:

  Token          Value
  ------------ -------
  `space-1`        4px
  `space-2`        8px
  `space-3`       12px
  `space-4`       16px
  `space-5`       20px
  `space-6`       24px
  `space-8`       32px
  `space-10`      40px
  `space-12`      48px
  `space-16`      64px
  `space-20`      80px
  `space-24`      96px

### 6.3 Section rhythm

-   Use generous vertical spacing between major sections.
-   Keep section headings aligned to the same container edge.
-   Use consistent spacing between heading, description, and content.
-   Avoid giving every section a separate boxed background.
-   Use subtle dividers only when they improve scanning.

### 6.4 Grid

-   Use a simple one-column content flow for text-heavy sections.
-   Use two or three columns for project cards where space permits.
-   Use responsive grids for technology logos or labels.
-   Avoid overly dense layouts.

## 7. Shape, Border, and Elevation

### Radius

Suggested radius tokens: - Small: 6px - Medium: 10px - Large: 14px -
Pill: 999px, reserved for compact status or tag treatments

Use mostly small-to-medium radii. Avoid making every element a pill.

### Borders

-   Default border: `1px solid #333333`.
-   Use borders to separate content, not outline every element.
-   Prefer a subtle bottom border for navigation and editorial
    divisions.
-   Avoid bright borders except for active or focused controls.

### Shadows

-   Default: no shadow.
-   Use a very subtle shadow only when a floating element needs
    separation.
-   Do not use colored glow effects as a primary visual device.

## 8. Iconography and Imagery

### Icons

-   Use one consistent icon family, preferably Lucide.
-   Keep icons simple and consistent in stroke weight.
-   Use icons to support labels, not replace essential text.
-   Avoid mixing multiple icon styles.

### Technology logos

-   Use official or recognizable technology marks where licensing and
    asset availability allow.
-   Normalize logo containers to consistent dimensions.
-   Prefer monochrome or restrained treatments where brand guidelines
    permit.
-   Provide text labels so meaning is not dependent on an image.
-   Do not show a technology logo merely for decoration.

### Project imagery

-   Use real screenshots, diagrams, or project visuals where they add
    evidence.
-   Keep image aspect ratios consistent within a project grid.
-   Avoid generic stock imagery.
-   Add descriptive alt text.
-   Optimize images before production.

## 9. Component Specifications

### 9.1 Navbar

**Desktop** - One horizontal row. - Brand at the left. - Navigation
links at the right. - Compact vertical padding. - Subtle bottom border
or transparent background. - Sticky positioning is optional; if sticky,
keep it unobtrusive.

**Mobile** - Brand at the left. - Accessible menu button at the right. -
Menu opens with a clear, compact layout. - Close after selecting an
in-page section. - Provide keyboard and screen-reader accessible labels.

Navigation items: - Home - About - Experience - Skills - Projects -
Blog - Contact

Blog opens the blog subdomain.

### 9.2 Hero

**Layout** - Left-aligned text is preferred. - Keep content width
controlled. - Use generous top and bottom whitespace. - Avoid
unnecessary illustration panels.

**Content hierarchy** 1. Small introduction or availability label, if
accurate. 2. Name or identity. 3. Main positioning headline. 4. Short
introduction. 5. Primary and secondary CTA. 6. Social links.

**CTA** - Primary: View Projects. - Secondary: Contact Me. - Optional:
Download CV.

The hero should make the Network Engineering focus clear within a few
seconds.

### 9.3 About

-   Text-first composition.
-   Comfortable reading width.
-   One or two short paragraphs, with optional concise facts.
-   Avoid a fake terminal, decorative profile dashboard, or excessive
    icon grid.
-   Keep education and current interests factually accurate.

### 9.4 Experience

Preferred treatment: editorial timeline or clean stacked entries.

Each entry: - Role and organization. - Date range. - Concise summary. -
2--4 contribution bullets where appropriate. - Relevant tools as plain
text or a small number of tags.

Avoid large cards for every entry unless the content needs separation.

### 9.5 Languages & Skills

Use category headings and compact lists or restrained logo grids.

Recommended categories:

**Network Engineering** - TCP/IP, DNS, DHCP, VLAN, Routing & Switching,
Firewall, VPN, Network Troubleshooting.

**System Administration** - Linux, Bash, SSH, Nginx, User & Permission
Management, Server Administration, System Monitoring.

**Programming Languages & Scripting** - Go, C, Bash, JavaScript,
TypeScript, Node.js.

**Infrastructure & DevOps** - Docker, Docker Compose, Cloudflare, Git,
GitHub Actions, CI/CD, Prometheus, Grafana.

**Database & Storage** - PostgreSQL, MySQL, SQLite, Redis.

**Backend & Integration** - REST API, MQTT, WebSocket, Prisma ORM.

Only include technologies the owner has genuinely studied or used. Do
not imply equal proficiency. Avoid percentage bars and unsupported skill
ratings.

### 9.6 Projects

Preferred treatment: clean grid with restrained borders.

Each project card: - Optional preview image. - Project title. - Short
purpose or outcome. - Category or status. - Small technology list. -
Repository and live demo links, when available.

Interaction: - Subtle border or surface change on hover. - Links have
visible focus states. - Do not make the entire card clickable if it
contains multiple separate actions and this creates accessibility
ambiguity.

Optional detail pages can be added for projects with substantial
documentation.

### 9.7 Blog Preview

Use an editorial list rather than oversized promotional cards.

Each item: - Date. - Category. - Article title. - One- or two-line
excerpt. - Reading time. - Read article link.

Show a small number of recent posts and a clear link to the blog
homepage.

### 9.8 Contact

-   Short invitation.
-   Email link visible without requiring form completion.
-   GitHub and LinkedIn links.
-   Optional compact contact form.

Form controls: - Clear labels. - Dark surface. - Subtle border. -
Visible focus ring using accent blue. - Helpful validation messages. -
Loading, success, and error states.

### 9.9 Footer

-   Simple top divider.
-   Brand or owner identity.
-   Compact navigation/social links.
-   Copyright.
-   Blog link.

Avoid oversized multi-column footer layouts.

## 10. Blog Design

The blog should feel like a technical publication using the same brand
tokens.

### Blog homepage

-   Compact header and navigation.
-   Clear blog title and short description.
-   Featured or latest article area.
-   Article list with date and category.
-   Optional topic filters.
-   Minimal footer.

### Article detail

-   Narrow reading column.
-   Clear title, summary, author, date, and reading time.
-   Table of contents for long posts.
-   Comfortable paragraph width.
-   Clear heading hierarchy.
-   Styled code blocks with horizontal overflow handling.
-   Responsive images and diagrams.
-   Previous/next or related article links where useful.

### Suggested reading width

Approximately 680--760px for the main article text, depending on font
size and layout.

### Code blocks

-   Use a consistent monospace font.
-   Provide syntax highlighting with restrained colors.
-   Allow horizontal scrolling for long lines.
-   Include a copy button only if it works accessibly.
-   Keep code block contrast readable.

## 11. Interaction and Motion

Use motion sparingly.

Allowed patterns: - Short color transitions on links and buttons. -
Subtle card border or surface transitions. - Small mobile menu
transitions. - Gentle section entrance only if it does not delay
content. - Clear form feedback.

Guidelines: - Prefer CSS transitions for simple effects. - Avoid
scroll-jacking and parallax. - Respect `prefers-reduced-motion`. - Never
hide essential content behind animation. - Keep interaction feedback
immediate.

Suggested transition duration: 150--220ms for small UI changes.

## 12. Responsive Behavior

### Mobile

-   Single-column layout.
-   Compact navigation.
-   Hero headline scales down without awkward wrapping.
-   Project cards stack vertically.
-   Technology lists wrap naturally.
-   Article text uses comfortable side padding.
-   Buttons and controls have touch-friendly targets.

### Tablet

-   Use two-column grids where content benefits.
-   Maintain readable line lengths.
-   Keep section spacing balanced.

### Desktop

-   Constrain overall content width.
-   Use two- or three-column project layouts where appropriate.
-   Keep text sections narrower than the full container.
-   Avoid stretching paragraphs across wide screens.

Test at representative widths such as 375px, 768px, 1024px, and 1440px.

## 13. Accessibility

-   Use semantic HTML.
-   Maintain a logical heading hierarchy.
-   Ensure all interactive elements are keyboard accessible.
-   Use visible focus indicators.
-   Provide accessible names for icon-only buttons.
-   Use labels for form fields.
-   Ensure text and control contrast.
-   Add meaningful alt text to informative images.
-   Respect reduced-motion preferences.
-   Do not use color as the only indicator of status.

## 14. Design Tokens: Suggested CSS

``` css
:root {
  color-scheme: dark;

  /* Colors */
  --color-background: #000000;
  --color-surface: #111111;
  --color-surface-secondary: #171717;
  --color-border: #333333;

  --color-text-primary: #EDEDED;
  --color-text-secondary: #A1A1A1;
  --color-text-muted: #666666;

  --color-accent: #0070F3;
  --color-info: #0070F3;
  --color-success: #16A34A;
  --color-warning: #F5A623;
  --color-error: #EE0000;

  /* Typography */
  --font-sans: "Geist", "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Layout */
  --container-width: 1120px;
  --article-width: 720px;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;

  /* Motion */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
}
```

Treat these as starting tokens. Validate contrast and refine them during
implementation.

## 15. Design Quality Checklist

### Brand and visual consistency

-   [ ] Network Engineering is the clearest professional focus.
-   [ ] Supporting interests are represented accurately.
-   [ ] Dark palette is consistent across sections.
-   [ ] Accent blue is used selectively.
-   [ ] Typography hierarchy is consistent.
-   [ ] Spacing and container alignment are consistent.

### Components

-   [ ] Navbar works on desktop and mobile.
-   [ ] Hero has a clear headline and useful actions.
-   [ ] About remains readable and text-focused.
-   [ ] Experience entries are easy to scan.
-   [ ] Skills are grouped and do not use misleading percentages.
-   [ ] Project cards show real information.
-   [ ] Blog preview is editorial and readable.
-   [ ] Contact links and form states are clear.
-   [ ] Footer remains compact.

### Responsive and accessible

-   [ ] No horizontal overflow.
-   [ ] Navigation is keyboard accessible.
-   [ ] Focus indicators are visible.
-   [ ] Text contrast is sufficient.
-   [ ] Images have appropriate alt text.
-   [ ] Reduced-motion preference is respected.
-   [ ] Form fields have labels and clear errors.

### Performance

-   [ ] No unnecessary animation dependency.
-   [ ] Images are optimized.
-   [ ] Fonts are loaded efficiently.
-   [ ] Client-side JavaScript is limited to actual interaction needs.

------------------------------------------------------------------------

## 16. Final Design Direction

The final Meowhx experience should be:

-   Black and dark gray as the foundation.
-   Off-white text for comfortable readability.
-   Electric blue as a restrained accent.
-   Clean typography and generous whitespace.
-   Minimal borders and simple layouts.
-   Real project evidence rather than decorative graphics.
-   Consistent between the portfolio and technical blog.

**Design principle:** Make the content memorable, not the decoration.
