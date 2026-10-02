# WCAG Violations Report for Best Western AS

**Timestamp:** 2026-10-02T17:06:35.475Z
**URL:** [https://www.bestwestern.no/](https://www.bestwestern.no/)
**Total Violations:** 3

## Violation Details

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 7

#### Affected Elements:

- **Target:** `img[alt="Oppdag flere opplevelser"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Oppdag flere opplevelser" src="https://images.ctfassets.net/y4r87wu8k4mh/4BOoziAVWE3bvKzuqvkR5k/af1240862efbd2ba48ef2f37c304d8b3/cristina-gottardi-65LQwsGeGAA-unsplash.jpg?&…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Spahoteller"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Spahoteller" src="https://images.ctfassets.net/y4r87wu8k4mh/29vJMInLbuLEtwTtBURePm/b368b23093ab24e501ad303c9d026b16/pexels-koolshooters-7143273_-_kopia.jpg?&amp;fit=fill&amp…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Naturnære hoteller"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Naturnære hoteller" src="https://images.ctfassets.net/y4r87wu8k4mh/7aTNY4CVr2NbTfKj5dXp3O/228389ce7a30893236a8ed1173e5f710/Dronningsstien_Kinsarvik_mindre.jpg?&amp;fit=fill&…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Hundevennlige hoteller"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Hundevennlige hoteller" src="https://images.ctfassets.net/y4r87wu8k4mh/vEqcJUyMJN253r0APYccm/9415e58ad4936fe5742d8b8c4e1ba08a/Ny_version_av_hundbilden.JPG?&amp;fit=fill&amp;…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Hotell utover det vanlige"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Hotell utover det vanlige" src="https://images.ctfassets.net/y4r87wu8k4mh/QpUbgiyTptBLMVXfe7QEW/63e4c117b5f4861b2d6cd7fd18b0cddf/The_Vault_reception_exporterad.jpg?&fit=fill…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[alt="Hotellrestauranter"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Hotellrestauranter" src="https://images.ctfassets.net/y4r87wu8k4mh/2CA52dqO2qJCUOoIZK6NEr/a21020a6cad3f0b27fecd9f417f5211c/jay-wennington-2065-unsplash.jpg?&amp;fit=fill&amp…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `a[href$="globale-destinasjoner"] > .md\:rounded-bl-lg.bg-cover.bg-center > img[height="0"][width="0"][loading="lazy"]`
  - **HTML:** `<img class="object-cover h-full w-full" height="0" width="0" alt="Globale hoteller & destinasjoner" src="https://images.ctfassets.net/y4r87wu8k4mh/15Tm0grC9TvS2evdnR47EM/30e4a0649f9c2a410f6435d9458e5f77/pyro-jenka-N2hiyUWvuNs-unsplash.jpg?…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `header > nav`
  - **HTML:** `<nav aria-label="Hovedmeny">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.13/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 7

#### Affected Elements:

- **Target:** `.not-focus\:visually-hidden`
  - **HTML:** `<a class="inline-flex w-fit ho..." href="#main" tabindex="0" title="" aria-label="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `.pr-2`
  - **HTML:** `<p aria-hidden="false" class="font-book text-2xs leading-2xs tracking-normal pr-2" id=""><span class="visually-hidden">Best Western Hotels and Resorts er </span> En del av BWH® Hotels<!----><!----></p>`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `a[href$="bestwestern.com/"]`
  - **HTML:** `<a class="inline-flex w-fit no-underline font-book text-2xs hover:text-on-surface-variant focus-visible:text-on-surface-variant group" href="https://www.bestwestern.com/" tabindex="0" title="" aria-label="Til bestwestern.com">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1790960784418, .captcha__header`
  - **HTML:** `<div class="captcha__header" data-dd-captcha-header="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1790960784418, .captcha__human`
  - **HTML:** `<div class="captcha__human" data-dd-captcha-human="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1790960784418, .captcha__robot__warning`
  - **HTML:** `<div class="captcha__robot__warning" data-dd-captcha-robot-warning="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

- **Target:** `#ddChallengeBody1790960784418, .captcha__robot__contact_support`
  - **HTML:** `<div class="captcha__robot__contact_support" data-dd-captcha-robot-contact-support="">`
  - **Failure summary:** Fix any of the following: Some page content is not contained by landmarks

