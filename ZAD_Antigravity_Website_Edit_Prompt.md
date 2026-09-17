# Google Antigravity Prompt
## Edit the Existing ZAD Website Files — Preserve the Current Design

You are editing an existing website project for:

**ZAD Electromechanical Services**

Current website:
https://test.zad-eg.net/

The full website source files/assets have already been attached to this Antigravity project.

Your job is **NOT to build a completely new website from scratch**.

Your job is to **inspect the existing source code, assets, components, styles and page structure and evolve the current website into the new ZAD website defined in this prompt while preserving the existing visual identity and design language**.

---

# 1. NON-NEGOTIABLE RULES

## Rule 1 — Preserve the current design

The existing design is the foundation.

Do not replace it with an unrelated template.

Preserve and improve:

- ZAD logo treatment
- existing primary blue
- existing yellow accent
- industrial photography style
- heading character
- spacing language
- major visual motifs
- section rhythm
- general look and feel

The final result should look like a **significantly upgraded version of the existing ZAD website**, not a different company's website.

---

## Rule 2 — English only

The website must be English only.

Remove or do not implement:

- Arabic content
- Arabic routes
- RTL support
- language switchers
- bilingual database fields
- Arabic metadata

Do not add an EN/AR selector.

---

## Rule 3 — Completely remove specific third-party/authorization references

Search the entire project, including:

- HTML
- JSX/TSX/Vue/etc.
- JavaScript/TypeScript
- CSS
- JSON
- Markdown
- CMS seed data
- metadata
- SEO titles
- descriptions
- image alt text
- comments where they can affect generated output
- structured data
- page content
- image filenames where practical

Remove every occurrence of:

- Wilo
- Authorized Service Provider
- Authorized Service Partner
- any sentence implying ZAD is authorized, certified or officially represented by a third-party pump manufacturer

Also remove third-party manufacturer logos/images that are associated with these claims.

Do NOT replace the removed relationship with another unsupported partnership claim.

---

# 2. FIRST STEP — AUDIT THE EXISTING PROJECT

Before modifying anything:

1. Inspect the project tree.
2. Identify the framework and build system.
3. Identify routing.
4. Identify global styles/theme files.
5. Identify reusable components.
6. Identify existing pages.
7. Identify image assets.
8. Identify fonts.
9. Identify forms.
10. Identify any CMS/data layer.
11. Identify existing SEO configuration.
12. Identify existing analytics integrations.
13. Identify deployment/build scripts.

Do not rewrite the stack unless there is a clear technical reason.

Prefer modifying existing components and styles over introducing unnecessary new dependencies.

---

# 3. USE THE ATTACHED COMPANY PROFILE AS THE FACTUAL SOURCE

The supplied ZAD company profile establishes the following factual foundation:

- ZAD Electromechanical Services
- Established in 2020
- Subsidiary of Kayan for Import
- More than 170 projects
- Local pump assembly
- Commissioning/start-up
- Maintenance and repair
- Inspection
- Technical diagnostics
- Genuine spare parts
- Booster systems
- Chiller pump systems
- Submersible pump systems
- Technical tools including laser alignment, infrared temperature measurement and tachometer
- 24/7 support/service concept

Only use facts supported by the supplied source or approved ZAD content.

Do not invent:

- client names
- project values
- certifications
- awards
- performance percentages
- employee numbers
- revenue
- response-time guarantees
- technical specifications
- unsupported partnerships

Use `[CONTENT REQUIRED FROM ZAD]` where needed.

---

# 4. MASTER BRAND POSITIONING

Use this as the website's main brand direction:

## Primary headline

ENGINEERED FOR PERFORMANCE.
BUILT FOR RELIABILITY.

## Secondary brand line

OUR CHALLENGE IS YOUR SATISFACTION

The secondary line should remain visually compatible with the existing brand language.

---

# 5. REQUIRED INFORMATION ARCHITECTURE

Implement or refactor the existing website to support these routes:

/
/about
/services
/solutions
/local-assembly
/projects
/projects/[slug]
/technology
/spare-parts
/support
/request-service
/contact
/knowledge
/knowledge/[slug]
/privacy-policy
/terms

Service detail routes may be implemented as:

/services/commissioning
/services/maintenance-repair
/services/inspection
/services/emergency-support
/services/spare-parts

Solution routes:

/solutions/booster-sets
/solutions/chiller-pumps
/solutions/submersible-pumps
/solutions/pump-systems

If the existing stack has an established route structure, preserve its conventions while achieving the same final information architecture.

---

# 6. HEADER

Create/refine the desktop header:

Logo

Navigation:

Home
About
Services
Solutions
Local Assembly
Projects
Technology
Support
Contact

Primary CTA:

REQUEST A SERVICE

Do not add an Arabic language switcher.

Keep the header styling consistent with the current website.

On mobile use:

Logo
Menu
Primary service CTA

---

# 7. HOMEPAGE — REQUIRED CONTENT AND SECTIONS

Refactor the current homepage, but preserve its design language.

## Hero

Eyebrow:

ZAD ELECTROMECHANICAL SERVICES

Headline:

ENGINEERED FOR PERFORMANCE.
BUILT FOR RELIABILITY.

Description:

From local pump assembly and commissioning to preventive maintenance,
emergency repairs and genuine spare-parts support, ZAD provides specialized
electromechanical services focused on dependable system performance.

Buttons:

EXPLORE OUR SERVICES
REQUEST A SERVICE

Secondary support action:

24/7 TECHNICAL SUPPORT

Use the best existing ZAD industrial pump image.

Do not use a generic corporate stock photo if a suitable ZAD asset exists.

---

## Metrics

170+
PROJECTS

2020
ESTABLISHED

24/7
TECHNICAL SUPPORT

Animate numbers on viewport entry.

---

## About

Heading:

ENGINEERING EXPERTISE BUILT AROUND YOUR SYSTEM

Copy:

Established in 2020 as a subsidiary of Kayan for Import, ZAD Electromechanical Services was created to respond to the growing need for professional pump products and technical services with stronger local capabilities and shorter delivery times.

ZAD combines pump assembly, commissioning, inspection, maintenance, repair and technical support to help customers keep their systems operating reliably.

CTA:

DISCOVER ZAD

---

## Services

Heading:

COMPLETE PUMP & ELECTROMECHANICAL SERVICES

Cards:

1. Commissioning & Start-Up
2. Maintenance & Repair
3. Pump Inspection
4. Local Pump Assembly
5. Genuine Spare Parts
6. Emergency Support

Use the existing card visual style as the base.

Improve hover effects and information hierarchy rather than changing the visual language completely.

---

## Local Assembly

Heading:

LOCAL ASSEMBLY.
FASTER DELIVERY. GREATER FLEXIBILITY.

Copy:

Local assembly brings pump capability closer to the customer.

By assembling and configuring pump systems locally, ZAD can support shorter delivery times while creating greater flexibility around application requirements.

Show:

Shorter Lead Times
Reduced Logistics
Flexible Configuration

Add animated process:

REQUIREMENT → CONFIGURATION → ASSEMBLY → INSPECTION → DELIVERY

---

## Solutions

Heading:

PUMP SYSTEMS WE SUPPORT

Cards:

Booster Sets
Chiller Pump Systems
Submersible Pump Systems
Pump Assembly

---

## Why ZAD

Heading:

WHY ZAD

Value blocks:

Local Expertise
Technical Precision
Faster Response
Lifecycle Support
Genuine Parts
24/7 Support

Use icons consistent with the current website's style.

---

## Technology

Heading:

PRECISION ENGINEERING POWERED BY ADVANCED TOOLS

Tools:

Laser Alignment
Infrared Temperature Measurement
Tachometer

Use actual technical images from the attached website/project assets whenever possible.

---

## Reliability

Heading:

PROTECT PERFORMANCE BEFORE FAILURE HAPPENS

Copy:

Pump failure can disrupt operations, increase costs and create unnecessary emergency intervention.

ZAD approaches maintenance with a focus on inspection, diagnostics, preventive action and professional repair.

Visual process:

INSPECT → DIAGNOSE → RESTORE

---

## Projects

Heading:

170+ PROJECTS ACROSS EGYPT

Copy:

Our growing project portfolio reflects ZAD's involvement in pump systems, localized assembly and electromechanical service activities across Egypt.

Add an interactive Egypt map if the current site architecture supports it.

Initial locations referenced by the supplied profile:

Alexandria
Port Said
Cairo
Giza
Aswan

Do not invent project counts per city.

---

## Industries

Heading:

SUPPORTING CRITICAL APPLICATIONS

Cards:

Residential Buildings
Commercial Facilities
Industrial Applications
HVAC & Chilled Water
Water Supply & Pressure Boosting
Water Management

---

## Emergency CTA

Heading:

UNEXPECTED FAILURE CAN'T WAIT.

Copy:

When a critical pump system stops, every minute matters. ZAD provides responsive technical support for urgent pump and electromechanical service requirements.

CTA:

REQUEST EMERGENCY SUPPORT

---

## Final CTA

Heading:

NEED HELP WITH YOUR PUMP SYSTEM?

Copy:

Tell us about your equipment, project or service requirement.

Buttons:

REQUEST A SERVICE
CONTACT ZAD

---

# 8. ABOUT PAGE

Heading:

ENGINEERING BUILT AROUND RELIABILITY

Sections:

- Our Story
- Our Mission
- Our Vision
- Our Approach
- Core Capabilities

Mission:

To provide reliable and professionally delivered pump and electromechanical services that help customers maintain system performance and operational continuity.

Vision:

To build a stronger local engineering and service capability for pump systems in Egypt.

Do not label these as formal corporate mission/vision statements unless ZAD confirms them; they are website positioning copy.

---

# 9. SERVICES PAGE

Heading:

COMPLETE PUMP SERVICES. ONE ENGINEERING PARTNER.

Create service cards/pages for:

- Commissioning & Start-Up
- Maintenance & Repair
- Pump Inspection
- Local Assembly
- Booster Set Services
- Chiller Pump Services
- Submersible Pump Services
- Emergency Support
- Genuine Spare Parts

Every service detail page should contain:

Hero
Overview
Scope / Activities
Applications
Benefits
FAQs
CTA

---

# 10. SOLUTIONS PAGE

Heading:

PUMP SYSTEMS WE SUPPORT

Solutions:

Booster Sets
Chiller Pumps
Submersible Pumps
Pump Systems

---

# 11. LOCAL ASSEMBLY PAGE

Heading:

LOCAL ASSEMBLY. BUILT AROUND YOUR REQUIREMENTS.

Sections:

Why Local Assembly?
How It Works
Benefits
Pump Categories
Inspection
Delivery
Request Service

Process:

Requirement → Configuration → Assembly → Inspection → Delivery

---

# 12. TECHNOLOGY PAGE

Heading:

TECHNOLOGY THAT HELPS US FIND THE PROBLEM

Create technical sections for:

Laser Alignment
Infrared Temperature Measurement
Tachometer

Use technical diagrams and subtle line animations.

---

# 13. SPARE PARTS PAGE

Heading:

THE RIGHT PART. THE RIGHT SUPPORT.

Copy:

ZAD supports customers with genuine spare-parts supply and technical guidance to help identify the correct component and reduce equipment downtime.

CTA:

REQUEST SPARE PARTS

---

# 14. SUPPORT PAGE

Heading:

SUPPORT BEYOND INSTALLATION

Sections:

Emergency Support
Periodic Maintenance
Technical Inspection
Maintenance Documentation
Spare Parts

---

# 15. PROJECTS PAGE

Heading:

MORE THAN 170 PROJECTS. ONE COMMITMENT TO SERVICE.

Filters:

All
Booster Systems
Pump Assembly
Maintenance
Commissioning
Chiller Systems
Submersible Systems

Each project card should support:

Title
Location
Sector
System
Image
Short Summary
View Project

---

# 16. REQUEST SERVICE PAGE

Heading:

TELL US WHAT YOUR SYSTEM NEEDS

Form fields:

Full Name
Company Name
Phone
Email
Project Location
Application Type
Equipment Manufacturer
Pump Model
Service Required
Message
Pump Photo
Equipment Plate Photo
Technical Documents

Service dropdown values:

Commissioning
Maintenance
Emergency Repair
Pump Inspection
Booster Set
Chiller Pumps
Submersible Pumps
Local Assembly
Spare Parts
Technical Consultation
Other

Success message:

Thank you. Your request has been received and our team will review the information provided.

Implement secure file upload validation.

---

# 17. CONTACT PAGE

Heading:

LET'S KEEP YOUR SYSTEM RUNNING

Address:

Unit No. A14
Polaris Al-Zamil Industrial
6th of October City, Egypt

Phone:

+20 2 3865 4079

Email:

support@zad-eg.net

Create a clean contact form.

Do not invent a WhatsApp number.

---

# 18. FOOTER

Keep the existing footer's design language, but reorganize it around:

Company
Services
Solutions
Projects
Technology
Support
Contact

Use:

ZAD Electromechanical Services
ENGINEERED FOR PERFORMANCE. BUILT FOR RELIABILITY.

Remove all prohibited third-party/authorization references.

---

# 19. SEO

Every page must receive unique metadata.

Homepage title:

ZAD Electromechanical Services | Pump Engineering & Services in Egypt

Homepage description:

ZAD provides specialized pump engineering, local assembly, commissioning, maintenance, diagnostics, repairs, spare parts and technical support in Egypt.

Implement:

- title
- description
- canonical
- Open Graph
- Twitter/X metadata
- sitemap.xml
- robots.txt
- Organization schema
- WebSite schema
- WebPage schema
- Service schema
- Breadcrumb schema where appropriate

Do not mention prohibited third-party authorization terms anywhere in SEO metadata.

---

# 20. IMAGE AND ASSET RULES

Prioritize real ZAD images already included in the attached project.

Use them in:

- Hero
- About
- Local Assembly
- Services
- Technology
- Projects
- Spare Parts

If an important visual is missing, create a clearly marked development placeholder such as:

ZAD REAL IMAGE REQUIRED

Do not use generic people shaking hands, generic office stock photography or unrelated industrial machinery.

---

# 21. ANIMATION RULES

Keep animation premium and technical.

Use:

- fade-up reveals
- image scale transitions
- count-up statistics
- SVG technical line drawing
- subtle parallax
- button micro-interactions
- technical process animations

Do not use:

- excessive bouncing
- heavy 3D effects
- random particle backgrounds
- distracting scroll hijacking
- excessive page transitions

Respect `prefers-reduced-motion`.

---

# 22. FORMS AND LEAD MANAGEMENT

Create/maintain secure forms for:

- Request Service
- Contact
- Spare Parts Inquiry

Capture:

name
company
phone
email
location
service
message
attachments
source page
UTM source
UTM medium
UTM campaign
created timestamp

If the current stack already has an API/backend, extend it rather than introducing a second backend unnecessarily.

---

# 23. DATA MODEL

If the current project has no CMS/data model, structure the application around these entities:

Service
Solution
Project
ProjectCategory
KnowledgeArticle
ArticleCategory
Inquiry
InquiryAttachment
MediaAsset
SiteSetting

Use the accompanying PRD/ERD document as the complete data-model reference.

---

# 24. PROJECT IMPLEMENTATION STRATEGY

Execute this in phases.

## Phase 1 — Audit

Inspect and document the current implementation without changing anything.

## Phase 2 — Content cleanup

Remove prohibited third-party/authorization content.

## Phase 3 — Architecture

Refactor navigation/routes/components as needed.

## Phase 4 — Homepage

Upgrade the current homepage while preserving the existing visual design.

## Phase 5 — Internal pages

Implement About, Services, Solutions, Local Assembly, Projects, Technology, Spare Parts, Support, Contact and Request Service.

## Phase 6 — SEO

Add metadata/schema/sitemap/robots.

## Phase 7 — Performance

Optimize images/fonts/scripts.

## Phase 8 — QA

Test desktop/tablet/mobile and all forms.

---

# 25. DO NOT DO THIS

Do not:

- rebuild the site from scratch with a generic template
- switch to an unrelated color palette
- remove the ZAD industrial identity
- introduce Arabic
- introduce a language switcher
- invent third-party partnerships
- mention Wilo
- mention authorized service provider
- mention authorized service partner
- create fake testimonials
- create fake clients
- create fake project data
- create fake awards/certifications
- create fake project performance percentages
- replace real ZAD images with generic stock photos when actual assets exist
- add excessive animation
- add unsupported technical claims

---

# 26. ACCEPTANCE TEST

Before finishing, search the entire project for all prohibited strings and verify zero results for:

`Wilo`
`Authorized Service Provider`
`Authorized Service Partner`

Also search case-insensitive variants.

Then verify:

- English only
- no Arabic routes
- no RTL selector
- current ZAD design preserved
- all primary routes load
- all major CTAs work
- service forms work
- uploads work securely
- project filters work
- SEO metadata is present
- no lorem ipsum remains
- no unsupported facts were introduced
- mobile layout is polished
- accessibility is acceptable
- performance is optimized

---

# 27. FINAL QUALITY BAR

The final result should look like:

**A premium Egyptian industrial engineering company website that has evolved from the current ZAD design rather than abandoning it.**

It should communicate immediately:

1. ZAD understands pump systems.
2. ZAD has local assembly capability.
3. ZAD provides engineering and maintenance services.
4. ZAD can diagnose and support equipment.
5. ZAD has documented project experience.
6. Customers can easily request service.

The final UI should be visually strong enough for a serious industrial B2B client presentation while remaining technically clean, responsive and maintainable.
