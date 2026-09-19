# WCAG Violations Report for Telenor ASA

**Timestamp:** 2026-09-19T20:03:11.436Z
**URL:** [https://www.telenor.no/privat/](https://www.telenor.no/privat/)
**Total Violations:** 6

## Violation Details

### Elements must only use permitted ARIA attributes

- **Impact:** serious
- **Description:** Ensure ARIA attributes are not prohibited for an element's role
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/aria-prohibited-attr?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.main`

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 2

#### Affected Elements:

- `.dropdown-category.footer.dark:nth-child(1) > .dropdown-link[data-v-515173b3=""] > .dropdown-header.hidden-mobile[data-v-515173b3=""] > h6`
- `h4`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 2

#### Affected Elements:

- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(6) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .image-container[data-v-e4fb5de4=""] > img[height="200"][data-nuxt-img=""]`
- `a[href$="apple-airpods-5/"] > .image-container[data-v-e4fb5de4=""] > img[height="200"][data-nuxt-img=""]`

### <li> elements must be contained in a <ul> or <ol>

- **Impact:** serious
- **Description:** Ensure <li> elements are used semantically
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/listitem?application=playwright
- **Tags:** cat.structure, wcag2a, wcag131, EN-301-549, EN-9.1.3.1, RGAAv4, RGAA-9.3.1
- **Count:** 8

#### Affected Elements:

- `.swiper-slide-active > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide-next > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(3) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(4) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(5) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(6) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `.swiper-slide.spotlight-slide[data-v-9528d48a=""]:nth-child(7) > .spotlight-product-card[ondragstart="return false"][draggable="false"] > .main-stock.stock[size="14px"]`
- `a[href$="apple-airpods-5/"] > .main-stock.stock[size="14px"]`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 5

#### Affected Elements:

- `#privacy_prompt_text`
- `#privacy_prompt_text2`
- `#freetext-top > .two-buttons`
- `.showConsentPreferences`
- `#privacy_prompt_bottom`

### [role="img"] elements must have alternative text

- **Impact:** serious
- **Description:** Ensure [role="img"] elements have alternative text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.12/role-img-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `.hero-banner`
