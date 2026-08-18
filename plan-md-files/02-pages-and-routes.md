# PAGES AND ROUTES

## Route Structure

The website has **5 main pages** with the following routing configuration:

### Current Routes (from `src/router/index.js`)

| Path | Name | Component | Title | Description |
|------|------|----------|-------|-------------|
| `/` | home | Home.vue | الرئيسية \| مؤسسة رامي شريف | Legal consultation foundation in Alexandria |
| `/about` | about | About.vue | من نحن \| مؤسسة رامي شريف | About the foundation, vision, values, expertise |
| `/services` | services | Services.vue | الخدمات القانونية \| مؤسسة رامي شريف | Legal services for individuals and companies |
| `/faq` | faq | FAQ.vue | الأسئلة الشائعة \| مؤسسة رامي شريف | Frequently asked legal questions |
| `/contacts` | contacts | Contact.vue | تواصل معنا \| مؤسسة رامي شريف | Contact information and location |
| `/:pathMatch(.*)*` | - | - | - | Redirects to `/` |

### Route Configuration Features

1. **Meta Tags**: Each route has:
   - `title`: Page title for browser tab and SEO
   - `description`: Meta description for SEO

2. **Scroll Behavior**:
   - Smooth scrolling to hash anchors
   - Returns to top on route change
   - Preserves saved scroll positions

3. **Dynamic Metadata**:
   - Updates document title after navigation
   - Updates meta description
   - Updates canonical URL
   - Updates OpenGraph tags

## Page Analysis

### 1. Home Page (`/`)

**Purpose**: Main landing page introducing the foundation and its services

**Sections (in order)**:
1. **Hero Section** - Main introduction with logo, tagline, and CTA button
2. **About Preview** - Brief overview with video and "About Us" button
3. **Statistics Row (Desktop)** - 4 image cards showing achievements (hidden on tablet/mobile)
4. **Statistics Row (Tablet)** - Alternative layout for tablet (hidden on desktop/mobile)
5. **Services Grid** - 3 service category cards with "View All" button
6. **Why Us** - 3 image cards highlighting competitive advantages
7. **Testimonials** - 3 client testimonial cards
8. **Consultation CTA** - Call-to-action for legal consultation booking
9. **Home FAQ** - 3 frequently asked questions with "View All" button

**Key Features**:
- Hero with decorative SVG shape divider
- Embedded video in About Preview section
- Responsive image grids
- Testimonial cards with gold accent borders
- WhatsApp CTA button

**Route in Legacy**: `legacy/index.html`

---

### 2. About Page (`/about`)

**Purpose**: Comprehensive information about the foundation, team, and history

**Sections (in order)**:
1. **About Hero** - Page header with title and logo
2. **About Intro** - Introduction paragraph with company logo
3. **About History** - Detailed company history and founder information
4. **About Vision** - Vision and mission statements with decorative images
5. **About Values** - Company values with icon boxes
6. **About Expertise** - Legal expertise description
7. **About Achievements** - Company achievements and milestones
8. **About Departments** - Service departments/sections overview

**Key Features**:
- Detailed narrative content
- Icon-based value propositions
- Department descriptions
- Historical timeline

**Route in Legacy**: `legacy/about/index.html`

---

### 3. Services Page (`/services`)

**Purpose**: Showcase all legal services offered by the foundation

**Sections (in order)**:
1. **Services Hero** - Page header with title and decorative images
2. **Services Categories** - 3 main service category images
3. **Services Grid** - Gallery of service images with lightbox functionality
4. **Services Stats (Desktop)** - 4 achievement cards (hidden on tablet/mobile)
5. **Services Stats (Tablet)** - Alternative layout for tablet (hidden on desktop/mobile)

**Key Features**:
- Service category visualization
- Image gallery with lightbox
- Lightbox supports keyboard navigation (arrows, escape)
- Click-to-enlarge functionality on service images

**Route in Legacy**: `legacy/services/index.html`

---

### 4. FAQ Page (`/faq`)

**Purpose**: Answer frequently asked legal questions

**Sections (in order)**:
1. **FAQ Intro** - Introduction to the FAQ section
2. **FAQ List** - Accordion-style FAQ with category heading

**Key Features**:
- Accordion component for Q&A
- 16 FAQ items covering various legal topics
- Categories: Personal Status, Civil Cases, Corporate Affairs
- Expand/collapse functionality
- Left-aligned icons in accordion

**FAQ Categories**:
- **Personal Status (الأحوال الشخصية)**: Questions about marriage, divorce, alimony, custody
- **Civil Cases (القضايا المدنية)**: Property, contracts, compensation
- **Corporate Affairs (شئون الشركات)**: Company establishment, partnerships, legal matters

**Route in Legacy**: `legacy/faq/index.html`

---

### 5. Contact Page (`/contacts`)

**Purpose**: Provide contact information and location details

**Sections (in order)**:
1. **Contact Hero** - Page header with title and description
2. **Contact Info** - Detailed contact information with map

**Key Features**:
- Google Maps embed showing location
- Multiple contact methods:
  - Email addresses
  - Phone numbers
  - Physical addresses (2 branches)
- Icon-based contact cards
- "Open in Google Maps" button

**Contact Information**:
- **Email**: Info@Ramisharif.Com, ramisharif.law@email.com
- **Phone**: 01111904997, 034863096
- **Address 1**: ١ شارع الصحافه - المنشيه - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠
- **Address 2**: شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس

**Route in Legacy**: `legacy/contacts/index.html`

---

## Page Hierarchy

```
Home (/
)
├── About (/about)
│   ├── History
│   ├── Vision & Mission
│   ├── Values
│   ├── Expertise
│   ├── Achievements
│   └── Departments
├── Services (/services)
│   ├── Categories
│   ├── Gallery
│   └── Statistics
├── FAQ (/faq)
│   └── Questions & Answers
└── Contact (/contacts)
    ├── Map
    └── Contact Methods
```

## Navigation Structure

### Main Navigation Items
1. **الرئيسية** (Home) - `/`
2. **من نحن** (About) - `/about`
3. **خدماتنا** (Services) - `/services`
4. **الأسئلة الشائعة** (FAQ) - `/faq`
5. **تواصل معنا** (Contact) - `/contacts`

### Navigation Behavior
- Desktop: Horizontal menu with hover effects
- Mobile: Hamburger menu with slide-down overlay
- Active state: Gold color for current page
- Hover state: Gold color on hover

## Route Meta Information

All routes include SEO metadata:
- Arabic page titles
- Descriptive meta descriptions
- OpenGraph tags for social sharing
- Canonical URLs

## Special Routing Notes

1. **404 Handling**: Catch-all route redirects to home
2. **Hash Links**: Smooth scrolling to anchor elements
3. **Scroll Restoration**: Preserves scroll position on navigation
4. **Metadata Updates**: Dynamic updates on route change

## Next Steps

Proceed to [03-component-architecture.md](./03-component-architecture.md) for reusable component analysis.
