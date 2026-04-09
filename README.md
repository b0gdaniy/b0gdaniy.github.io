# Bohdan Pukhno Portfolio

Static portfolio site for GitHub Pages.

## Structure

- `index.html` contains the page markup and content.
- `css/build.css` contains the generated utility styles already used by the page.
- `css/site.css` contains project-specific styles and small overrides.
- `js/main.js` bootstraps interactive features.
- `js/modules/phrase-rotator.js` contains the reusable phrase rotation component for the hero section.

## Checks

Run:

```bash
npm run check
```

## Editing the hero phrases

The rotating phrases live in `index.html` inside the element with `data-phrase-rotator`.
Each phrase is declared as a separate element with the `data-phrase` attribute, so the content and styling stay in markup while the animation stays in JavaScript.
