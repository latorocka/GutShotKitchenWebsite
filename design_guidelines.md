# GutShot - Cinematic Digital Kitchen Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from cinematic media platforms (Netflix, Spotify) combined with street culture and urban design elements. The design merges primitive craftsmanship with neon-lit street market energy - creating a bold, immersive experience that positions GutShot as a visual storytelling brand rather than a traditional culinary website.

## Core Design Principles
1. **Primal Meets Urban**: Balance raw, organic preservation imagery with sharp, electric street market aesthetics
2. **Cinematic Narrative**: Each section tells part of the GutShot story with dramatic visual hierarchy
3. **Bold Without Noise**: Strong visual statements with breathing room - let each element command attention
4. **Street-Level Authenticity**: Gritty, real textures paired with clean modern interface elements

## Typography System

**Primary Font**: Bebas Neue (Google Fonts) - Bold condensed sans-serif for headlines, perfect for the stencil/street aesthetic
**Secondary Font**: Inter (Google Fonts) - Clean, modern for body text and supporting content

**Hierarchy**:
- Hero Headline: Bebas Neue, 5xl to 7xl, uppercase, tracking-wider
- Section Headers: Bebas Neue, 4xl to 5xl, uppercase
- Taglines/Quotes: Bebas Neue, 2xl to 3xl, letter-spacing tight
- Body Text: Inter, base to lg, regular weight
- Captions/Labels: Inter, sm, medium weight, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content spacing: gap-8 to gap-16 for grid layouts
- Component padding: p-6 to p-8
- Inline spacing: space-x-4, space-y-6

**Container Strategy**:
- Full-width sections with inner max-w-7xl for expansive feel
- Text-heavy content: max-w-4xl for readability
- Grid layouts: 12-column system for flexibility

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with dramatic deer logo centered
- Animated logo entrance with subtle neon glow pulse effect
- Primary tagline below logo: "Trophies aren't on walls — they're on plates"
- Secondary navigation anchors at bottom of hero (scroll indicators)
- Dark background with subtle smoke/texture overlay
- Dual CTA buttons: "Watch the Fire" and "Join the Hunt" with glass-morphism treatment

### Brand Story Section
- Two-column asymmetric layout (60/40 split on desktop, stack on mobile)
- Left: Bold mission statement with Bebas Neue typography
- Right: Supporting manifesto text with Inter
- Background: Charcoal with ember accent borders
- Include pulled quote callout: "100 plates a night → 1 creation that lives forever online"

### Three Pillars Showcase
- Three-column grid (stacks to single column on mobile)
- Each pillar card features:
  - Large icon/graphic representation (fire, jar, smoke)
  - Title: "FERMENT", "INFUSE", "FEAST"
  - 2-3 sentence description
  - Neon accent border on hover (teal for ferment, yellow for infuse, red for feast)
- Cards have subtle depth with shadow-2xl
- Background alternates between sections for visual rhythm

### Content Strategy Timeline
- Horizontal scroll/carousel layout showcasing the 4-week arc
- Week cards displayed as connected journey (arrow connectors)
- Each card shows: Week number, content type, thumbnail placeholder
- Culminates in "Trophy Dish" finale card with special treatment
- Use horizontal snap-scroll on mobile for gesture-friendly navigation

### Revolution Statement Section
- Full-width impactful section with large typography
- Side-by-side comparison: "Old Model vs. GutShot Model"
- Use contrasting visual treatment (crossed-out text vs. glowing text)
- Dramatic centered layout with generous whitespace

### CTA/Connect Section
- Split layout: Video preview area + Subscribe form
- Embedded YouTube channel preview or placeholder
- Email capture form with bold "Join the Hunt" submit button
- Social links with neon icon treatment
- Future merch store teaser with "Coming Soon" badge

### Footer
- Three-column layout: Brand statement, Quick links, Contact
- Deer logo watermark in background (subtle opacity)
- Newsletter signup reminder
- Copyright and tagline: "Bold Flavors. Wild Instincts."
- Social media icons with neon glow on hover

## Images

**Hero Image**: Large atmospheric shot of smoke rising from cooking surface with neon street signs blurred in background - positioned as full-viewport background with overlay gradient (dark bottom to transparent top). Deer logo sits prominently in center.

**Pillars Section Images**: Three supporting images showing close-up preservation techniques - fermentation jars with glowing backlighting, smoking meat with fire embers, and infused oils with neon reflections. These are accent images within cards, not full backgrounds.

**Content Timeline**: Thumbnail-style images for each week showing the progression from craft to trophy dish - these are smaller showcase images within the carousel cards.

**Revolution Section**: Optional split-screen imagery showing "before/after" or "old kitchen vs. digital kitchen" visual metaphor - use sparingly, prioritize typography.

## Interactions & Animations

**Strategic Animation Use** (minimal, high-impact):
- Hero logo: Fade-in with gentle scale on page load
- Section reveals: Subtle fade-up as sections enter viewport
- Neon glow: Pulsing glow effect on brand elements (CSS animation, 2-3 second cycle)
- Card hover: Gentle lift (translateY -2px) with border glow intensification
- NO parallax scrolling, NO excessive motion

**Micro-interactions**:
- Button states: Background blur with neon accent border, scale on press
- Link hovers: Underline slide-in animation with neon color
- Form inputs: Neon focus ring, subtle glow on active state

## Accessibility Standards
- Maintain WCAG 2.1 AA contrast ratios despite dark theme (test neon colors against backgrounds)
- All interactive elements minimum 44x44px touch targets
- Keyboard navigation with visible focus indicators (neon ring treatment)
- Alt text for all deer logo instances and decorative imagery
- Form labels clearly associated with inputs
- Semantic HTML5 structure (header, nav, main, section, footer)

This design creates a bold, cinematic single-page experience that positions GutShot as a premium content brand while maintaining the raw, street-level energy described in your roadmap. The primal-meets-neon aesthetic is achieved through dramatic typography, strategic use of dark backgrounds with electric accents, and purposeful restraint that lets each section breathe.