# ASSETS AND CONTENT

## Overview

This document inventories all assets and content from the existing website that should be preserved, optimized, or reorganized in the new rebuild.

## Asset Organization Strategy

### New Asset Structure

```
public/
├── favicon.ico
└── assets/
    ├── images/
    │   ├── logo/
    │   │   ├── rs-logo.webp          # Main logo (512x512)
    │   │   └── rs-logo-300x300.webp   # Footer logo
    │   ├── heroes/
    │   │   ├── home-hero.webp         # Home page hero image
    │   │   └── about-hero.webp        # About page hero image
    │   ├── services/
    │   │   ├── service-1.webp          # Civil Cases
    │   │   ├── service-2.webp          # Personal Affairs
    │   │   ├── service-3.webp          # Legal Affairs & Companies
    │   │   └── Our/                    # Service gallery images
    │   │       ├── service-gallery-1.jpeg
    │   │       ├── service-gallery-2.jpeg
    │   │       └── ...
    │   ├── about/
    │   │   ├── about-card-1.webp      # Years of experience
    │   │   ├── about-card-2.webp      # Winning cases
    │   │   ├── about-card-3.webp      # Legal consultation
    │   │   ├── about-card-4.webp      # Working team
    │   │   ├── hero-image.webp        # About page hero
    │   │   ├── vis.webp               # Vision image
    │   │   ├── miss.webp              # Mission image
    │   │   └── values/                # Value icons
    │   │       ├── value-1.webp
    │   │       ├── value-2.webp
    │   │       ├── value-3.webp
    │   │       └── value-4.webp
    │   ├── why-us/
    │   │   ├── why-us-1.webp
    │   │   ├── why-us-2.webp
    │   │   └── why-us-3.webp
    │   ├── testimonials/              # Optional: testimonial images
    │   ├── decorative/
    │   │   ├── d3awybw.webp
    │   │   ├── ta7selbw.webp
    │   │   ├── cc.webp
    │   │   ├── g.webp
    │   │   └── drawings.webp
    │   └── wp-content/                # Legacy WordPress assets (if needed)
    └── fonts/
        ├── NotoKufiArabic-Black.ttf
        ├── NotoKufiArabic-Bold.ttf
        ├── NotoKufiArabic-ExtraBold.ttf
        ├── NotoKufiArabic-ExtraLight.ttf
        ├── NotoKufiArabic-Light.ttf
        ├── NotoKufiArabic-Medium.ttf
        ├── NotoKufiArabic-Regular.ttf
        ├── NotoKufiArabic-SemiBold.ttf
        └── NotoKufiArabic-Thin.ttf
```

### Asset Optimization

1. **Image Compression**: All images should be optimized for web
2. **Format**: Use WebP format for all images (better compression)
3. **Sizing**: Create appropriately sized versions for different breakpoints
4. **Lazy Loading**: Implement lazy loading for below-the-fold images
5. **CDN**: Consider using a CDN for static assets

## Content Inventory

### Text Content

#### Company Information
- **Name**: مؤسسة رامي شريف للاستشارات القانونية والمحاماة (Rami Sharif Legal Consultation Foundation)
- **Short Name**: مؤسسة رامي شريف
- **Tagline**: مؤسسة استشارات قانونية
- **Description**: مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، ومقرها المنشية بمحافظة الإسكندرية. يقودها الأستاذ رامي شريف بخبرة تمتد لأكثر من 17 عامًا.

#### Founder Information
- **Name**: الأستاذ رامي شريف (Professor Rami Sharif)
- **Experience**: أكثر من 17 عامًا (More than 17 years)
- **Education**: 
  - ليسانس الحقوق من جامعة الإسكندرية (Bachelor of Law from Alexandria University)
  - دبلوم القانون العام (Diploma in Public Law)
  - دبلوم العلوم الجنائية (Diploma in Criminal Sciences)
  - ماجستير القانون الجنائي (Master in Criminal Law)
  - ماجستير القانون التجاري (Master in Commercial Law)

#### Vision and Mission
- **Vision**: نسعى إلى أن نكون من المؤسسات القانونية الرائدة في تقديم خدمات قانونية موثوقة ومتكاملة للأفراد والشركات. نسعى إلى حماية حقوق عملائنا وتحقيق أفضل النتائج القانونية الممكنة. نلتزم بتقديم حلول عملية قائمة على الخبرة والدراسة الدقيقة لكل قضية. ونطمح إلى بناء علاقات مستدامة مع عملائنا أساسها الثقة والاحترافية والشفافية.
- **Mission**: تقديم خدمات واستشارات قانونية متكاملة للأفراد والشركات بأعلى درجات المهنية والدقة. نعمل على حماية حقوق عملائنا ومصالحهم من خلال حلول قانونية عملية ومدروسة. نلتزم بالسرية والشفافية والمتابعة الجادة في جميع مراحل العمل القانوني. ونسعى إلى تحقيق أفضل النتائج الممكنة وبناء علاقة دائمة قائمة على الثقة والاحترافية.

#### Values
1. **التميز المهني** (Professional Excellence): نقدّم خدمات قانونية رفيعة المستوى، ترتكز على الخبرة والدقة والالتزام بأعلى المعايير المهنية.
2. **الوضوح والثقة** (Clarity and Trust): نحرص على توضيح الإجراءات والمواقف القانونية، وإطلاع عملائنا على جميع مراحل العمل بكل صدق وشفافية.
3. **المواكبة القانونية** (Legal Follow-up): نتابع المستجدات التشريعية والقضائية، ونطوّر خبراتنا وأدواتنا باستمرار لتقديم حلول أكثر كفاءة وفاعلية.
4. **أولوية مصالح العملاء** (Client Interests Priority): نضع مصالح عملائنا في صميم عملنا، ونقدّم لكل عميل دعمًا قانونيًا مدروسًا يهدف إلى تحقيق أفضل النتائج الممكنة.

#### History
- Founded to provide comprehensive legal services
- More than 17 years of experience
- Specialized in personal affairs, civil cases, and corporate legal affairs
- Strong practical experience in case management, legal consultation, litigation procedures, and judgment execution
- Committed to confidentiality, transparency, and professionalism

#### Service Departments
1. **القضايا المدنية** (Civil Cases): نتولى المنازعات المدنية والعقارية والتعويضات والعقود، مع متابعة دقيقة لجميع مراحل التقاضي والتنفيذ.
2. **الأحوال الشخصية** (Personal Affairs): نقدّم الدعم القانوني في قضايا الأسرة والنفقة والحضانة والطلاق والخلع، بما يحفظ الحقوق ويحقق أفضل حماية قانونية.
3. **الشئون القانونية للشركات** (Corporate Legal Affairs): نقدّم خدمات تأسيس الشركات وصياغة العقود والاستشارات القانونية وإدارة المنازعات، بما يدعم استقرار النشاط ويحمي مصالحه.

#### Services
1. قضايا الأحوال الشخصية (Personal Affairs Cases)
2. قضايا الأسرة (Family Cases)
3. القضايا المدنية (Civil Cases)
4. المنازعات والتعويضات (Disputes and Compensations)
5. تأسيس الشركات (Company Establishment)
6. الشئون القانونية للشركات (Corporate Legal Affairs)
7. صياغة ومراجعة العقود (Drafting and Reviewing Contracts)
8. تنفيذ الأحكام (Judgment Execution)

### Navigation Content

#### Main Navigation
1. الرئيسية (Home) - /
2. من نحن (About) - /about
3. خدماتنا (Services) - /services
4. الأسئلة الشائعة (FAQ) - /faq
5. تواصل معنا (Contact) - /contacts

#### Footer Links
- روابط مهمة (Important Links)
  - الرئيسية (Home)
  - من نحن (About)
  - خدماتنا (Services)
  - الأسئلة الشائعة (FAQ)
  - تواصل معنا (Contact)
- فروعنا (Our Branches)
  - فرع الإسكندرية
  - الإسكندرية
- معلومات التواصل (Contact Information)
  - البريد الإلكتروني (Email)
  - ارقام التواصل (Phone Numbers)

#### Policy Links
1. سياسة الخصوصية (Privacy Policy) - https://ramisharif.com/?page_id=6831
2. سياسة الاسترجاع (Return Policy) - https://ramisharif.com/?page_id=6849
3. الشروط والأحكام (Terms and Conditions) - https://ramisharif.com/?page_id=6851

### Contact Information

#### Phone Numbers
- 01111904997
- 034863096
- WhatsApp: +201111904997

#### Email Addresses
- Info@Ramisharif.Com
- ramisharif.law@email.com

#### Physical Addresses
1. **فرع الإسكندرية** (Alexandria Branch):
   - ١ شارع الصحافه - المنشية - مبنى كمال سعد الإداري - أمام محكمه الإسكندريه - الدور ٣ مكتب رقم ١٠
2. **الإسكندرية** (Alexandria):
   - شارع الجلاء , أمام مستشفى العقاد , برج أبو بكر الصديق الدور الخامس

#### Social Media
- Facebook: https://www.facebook.com/ramisharif.law/
- YouTube: https://www.youtube.com/@ramisharif.law
- Instagram: https://www.instagram.com/ramisharifeg/
- LinkedIn: https://www.linkedin.com/company/ramisharifeg

### SEO Content

#### Meta Titles
- Home: الرئيسية | مؤسسة رامي شريف للاستشارات القانونية والمحاماة
- About: من نحن | مؤسسة رامي شريف للاستشارات القانونية والمحاماة
- Services: الخدمات القانونية | مؤسسة رامي شريف للاستشارات القانونية والمحاماة
- FAQ: الأسئلة الشائعة | مؤسسة رامي شريف للاستشارات القانونية والمحاماة
- Contact: تواصل معنا | مؤسسة رامي شريف للاستشارات القانونية والمحاماة

#### Meta Descriptions
- Home: مؤسسة رامي شريف للاستشارات القانونية والمحاماة هي مؤسسة متخصصة في تقديم الخدمات القانونية للأفراد والشركات، ومقرها المنشية بمحافظة الإسكندرية.
- About: تعرف على مؤسسة رامي شريف للاستشارات القانونية والمحاماة، رؤيتها ورسالتها وقيمها وخبراتها القانونية الممتدة لأكثر من 17 عامًا.
- Services: نقدم خدمات قانونية متخصصة في القضايا المدنية والأحوال الشخصية والشئون القانونية للشركات، مع التزام بالدقة والسرية وحماية مصالح العملاء.
- FAQ: إجابات على الأسئلة الشائعة حول القضايا المدنية والأحوال الشخصية والشئون القانونية للشركات في مؤسسة رامي شريف.
- Contact: تواصل مع مؤسسة رامي شريف للاستشارات القانونية والمحاماة عبر الهاتف أو الواتساب أو البريد الإلكتروني. فرع الإسكندرية - المنشية.

## Asset Inventory

### Logo Files
| File | Size | Purpose | Action |
|------|------|---------|--------|
| rs-logo.webp | 512x512 | Main logo | Keep, optimize |
| rs-logo-300x300.webp | 300x300 | Footer logo | Keep, optimize |

### Hero Images
| File | Size | Purpose | Action |
|------|------|---------|--------|
| ramisharif.webp | 1024x1024 | Home hero portrait | Keep, optimize |
| hero-image.webp | 1024x1024 | About hero | Keep, optimize |

### Service Images
| File | Size | Purpose | Action |
|------|------|---------|--------|
| service-1.webp | 539x1600 | Civil Cases | Keep, optimize |
| service-2.webp | 539x1600 | Personal Affairs | Keep, optimize |
| service-3.webp | 539x1600 | Legal Affairs | Keep, optimize |
| WhatsApp Image 2026-08-12 at 6.28.18 PM.jpeg | Various | Personal Affairs Cases | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.18 PM (1).jpeg | Various | Family Cases | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.18 PM (2).jpeg | Various | Civil Cases | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.19 PM.jpeg | Various | Disputes | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.19 PM (1).jpeg | Various | Company Establishment | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.20 PM.jpeg | Various | Corporate Affairs | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.28.21 PM.jpeg | Various | Contracts | Keep, rename |
| WhatsApp Image 2026-08-12 at 6.33.11 PM.jpeg | Various | Judgment Execution | Keep, rename |

### About Images
| File | Size | Purpose | Action |
|------|------|---------|--------|
| about-card-1.webp | 1536x1024 | Years of experience | Keep, optimize |
| about-card-2.webp | 1536x1024 | Winning cases | Keep, optimize |
| about-card-3.webp | 1536x1024 | Legal consultation | Keep, optimize |
| about-card-4.webp | 1536x1024 | Working team | Keep, optimize |
| vis.webp | 768x768 | Vision image | Keep, optimize |
| miss.webp | 768x768 | Mission image | Keep, optimize |

### Why Us Images
| File | Size | Purpose | Action |
|------|------|---------|--------|
| why-us-1.webp | 1536x1024 | Legal experience | Keep, optimize |
| why-us-2.webp | 1536x1024 | Legal specializations | Keep, optimize |
| why-us-3.webp | 1536x1024 | Serious follow-up | Keep, optimize |

### Decorative Images
| File | Size | Purpose | Action |
|------|------|---------|--------|
| d3awybw.webp | Various | Services decorative | Keep, optimize |
| ta7selbw.webp | Various | Services decorative | Keep, optimize |
| cc.webp | 768x512 | Consultation CTA | Keep, optimize |
| g.webp | 768x768 | FAQ decorative | Keep, optimize |
| drawings.webp | Various | Background pattern | Keep, optimize |

### Value Icons
| File | Size | Purpose | Action |
|------|------|---------|--------|
| 11-1.webp | 150x150 | Professional excellence | Keep, optimize |
| 1111.webp | 150x150 | Clarity and trust | Keep, optimize |
| 11.webp | 150x150 | Legal follow-up | Keep, optimize |
| 111.webp | 150x150 | Client priority | Keep, optimize |

### Video Files
| File | Size | Purpose | Action |
|------|------|---------|--------|
| مؤسسه-رامي-شريف-للاستشارات-القانونيه-والمحاماه-720p-h264.mp4 | Various | About page video | Keep, optimize |

### Font Files
All Noto Kufi Arabic font weights are available in `public/assets/fonts/`. These should be:
- Reviewed for actual usage
- Only necessary weights should be loaded
- Consider using system fonts as fallback

## Content Data Files

### FAQ Data (`src/data/faq.json`)
Contains 16 FAQ items covering:
- Personal Affairs (5 questions)
- Civil Cases (5 questions)
- Corporate Affairs (6 questions)

**Action**: Keep, organize by category

### Services Data (`src/data/services.json`)
Contains 8 service items with images and alt text.

**Action**: Keep, ensure all images are properly referenced

## Content Separation Strategy

### 1. Static Content in Components
For content that is unlikely to change:
- Page headings
- Section descriptions
- Company information

### 2. JSON Data Files
For content that might be updated:
- FAQ questions and answers
- Service listings
- Testimonials
- Navigation items

### 3. Markdown Files (Optional)
For longer content like:
- About page history
- Service descriptions
- Legal disclaimers

### Recommended Structure

```
src/
├── data/
│   ├── navigation.json      # Navigation items
│   ├── faq.json            # FAQ questions and answers
│   ├── services.json       # Service listings
│   ├── testimonials.json   # Client testimonials
│   ├── contact.json        # Contact information
│   └── company.json        # Company info (vision, mission, values)
└── content/
    └── pages/
        ├── home.md          # Home page content
        ├── about.md         # About page content
        └── ...
```

## Asset Optimization Checklist

- [ ] Convert all images to WebP format
- [ ] Compress images without quality loss
- [ ] Create responsive image versions (srcset)
- [ ] Implement lazy loading for images
- [ ] Add proper alt text for all images
- [ ] Review font usage and load only necessary weights
- [ ] Minify and optimize SVG files
- [ ] Remove unused legacy assets
- [ ] Organize assets into logical folders
- [ ] Rename files to be descriptive

## Content Preservation Checklist

- [ ] All page titles preserved
- [ ] All headings preserved
- [ ] All paragraphs preserved
- [ ] All links preserved
- [ ] All contact information preserved
- [ ] All service descriptions preserved
- [ ] All FAQ questions and answers preserved
- [ ] All testimonials preserved
- [ ] All company information preserved
- [ ] All SEO metadata preserved

## Next Steps

Proceed to [13-interactions-and-animations.md](./13-interactions-and-animations.md) for interaction and animation specifications.
