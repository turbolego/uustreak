# WCAG Violations Report for Kunsthøgskolen i oslo

**Timestamp:** 2026-11-23T06:24:07.687Z
**URL:** [https://khio.no/](https://khio.no/)
**Total Violations:** 4

## Violation Details

### Heading levels should only increase by one

- **Impact:** moderate
- **Description:** Ensure the order of headings is semantically correct
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/heading-order?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `.two.col:nth-child(1) > h6`
  - **HTML:** `<h6>Følg oss</h6>`
  - **Failure summary:** Fix any of the following: Heading order invalid


### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 21

#### Affected Elements:

- **Target:** `.kunst-og-handverk.kunst-og-handverk-page[data-index="0"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader loaded" loading="lazy" width="1024" height="682" title="Bachelorstudium i me..." alt="Bachelorstudium i me...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i design"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjQvMDYvMjgvdmpuZ2t1enp0X0NVX0UxXzAwM18yMzExMDYuanBnIl0sWyJwIiwidGh1bWIiLCIxMDI0eDY4MiMiXV0/CU_E1_003_231106.jpg" class="imgloader loaded" loading="lazy" width="1024" height="682" title="Masterstudium i…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Bachelorstudium i billedkunst"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader loaded" loading="lazy" width="1024" height="682" title="Bachelorstudium i bi..." alt="Bachelorstudium i bi...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.design.design-page[data-index="3"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader loaded" loading="lazy" width="1024" height="682" title="Bachelorstudium i kl..." alt="Bachelorstudium i kl...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i teater"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjUvMDgvMjAvMzZncGZwZTMxZV9UZWF0ZXJfTWFzdGVyLmpwZyJdLFsicCIsInRodW1iIiwiMTAyNHg2ODIjIl1d/Teater%20Master.jpg" class="imgloader loaded" loading="lazy" width="1024" height="682" title="Masterstudium i tea…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.dans-page.dans[data-index="5"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Bachelorstudium i kl..." alt="Bachelorstudium i kl...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i opera"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjQvMDYvMjgvMXEzcXkxbXh2bV9FTUtfXzEwMy5qcGciXSxbInAiLCJ0aHVtYiIsIjEwMjR4NjgyIyJdXQ/EMK_-103.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i opera" alt="Masterstudi…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Bachelorstudium i regi"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMTkvMDkvMDUvMTRfMTdfNDhfNzI1X1QzNEM2NTcyXzE3NTB4MTE1Mi5qcGciXSxbInAiLCJ0aHVtYiIsIjEwMjR4NjgyIyJdXQ/T34C6572_1750x1152.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Bachelorstudi…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.kunst-og-handverk.kunst-og-handverk-page[data-index="8"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i medi..." alt="Masterstudium i medi...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Årsstudium i opera"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Årsstudium i opera" alt="Årsstudium i opera">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Bachelorstudium i jazzdans"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjQvMDYvMDUvM2t2dmE4bGg0dl9QaG90b19ZYW5pdl9Db2hlbl83NzAyLmpwZyJdLFsicCIsInRodW1iIiwiMTAyNHg2ODIjIl1d/Photo_Yaniv_Cohen-7702.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Bachelo…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i dans"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i dans" alt="Masterstudium i dans">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.teaterhogskolen-page.teaterhogskolen[data-index="12"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Dobbelgrad Masterstu..." alt="Dobbelgrad Masterstu...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.design.design-page[data-index="13"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Bachelorstudium i gr..." alt="Bachelorstudium i gr...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.teaterhogskolen-page.teaterhogskolen[data-index="14"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjYvMDMvMTEvNHd1eTJyY3Rmd19EU0MwNjM0M18yLmpwZyJdLFsicCIsInRodW1iIiwiMTAyNHg2ODIjIl1d/DSC06343-2.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Bachelorstudium i skuespillerfag" a…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i billedkunst"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i bill..." alt="Masterstudium i bill...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.kunst-og-handverk.kunst-og-handverk-page[data-index="16"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i kuns..." alt="Masterstudium i kuns...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Bachelorstudium i samtidsdans"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjQvMDYvMDkvOHFxZ2wybWlic19QaG90b19ZYW5pdl9Db2hlbl85MzE5LmpwZyJdLFsicCIsInRodW1iIiwiMTAyNHg2ODIjIl1d/Photo_Yaniv_Cohen-9319.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Bachelo…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `img[title="Masterstudium i koreografi"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjQvMDYvMTkvNjE3aWQ4aHdhZF90aHVtYm5haWxfNC5qcGVnIl0sWyJwIiwidGh1bWIiLCIxMDI0eDY4MiMiXV0/thumbnail-4.jpeg" class="imgloader" loading="lazy" width="1024" height="682" title="Masterstudium i koreografi" al…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.design.design-page[data-index="19"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > .loaded[height="682"][width="1024"]`
  - **HTML:** `<img src="/system/images/W1siZ..." class="imgloader loaded" width="1024" height="682" title="Bachelorstudium i in..." alt="Bachelorstudium i in...">`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text

- **Target:** `.operahogskolen.dans[data-index="20"] > .slide-image > figure > .image-wrapper.horizontal > img-loader > picture > img[height="682"][width="1024"][loading="lazy"]`
  - **HTML:** `<img src="/system/images/W1siZiIsIjIwMjUvMTAvMjgvNDIyenY0NWw0ZF9EU0MwMDU0OS5qcGciXSxbInAiLCJ0aHVtYiIsIjEwMjR4NjgyIyJdXQ/DSC00549.jpg" class="imgloader" loading="lazy" width="1024" height="682" title="Praktisk-pedagogisk utdanning i sceneku…`
  - **Failure summary:** Fix all of the following: Element contains <img> element with alt text that duplicates existing text


### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `nav[data-sticky-mini-home-button-target="logo"]`
  - **HTML:** `<nav class="container cf" data-sticky-mini-home-button-target="logo" isvisible="true">`
  - **Failure summary:** Fix any of the following: The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable


### Page should contain a level-one heading

- **Impact:** moderate
- **Description:** Ensure that the page, or at least one of its frames contains a level-one heading
- **Source:** Page content
- **Help URL:** https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- **Target:** `html`
  - **HTML:** `<html lang="nb" class="js">`
  - **Failure summary:** Fix all of the following: Page must have a level-one heading

