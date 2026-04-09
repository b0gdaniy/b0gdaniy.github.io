# Bohdan Pukhno Portfolio

Static portfolio site for GitHub Pages.

## Structure

- `index.html` contains the page markup and content.
- `css/glitche-basic.css`, `css/glitche-layout.css`, and `css/template-colors/orange.css` provide the main visual template styles.
- `css/ionicons.css` and `fonts/` provide the icon font used in contacts and footer.
- `css/site.css` contains small local overrides for the template and Bohdan-specific assets.
- `js/main.js` bootstraps the page behavior: preloader, menu, scroll handling, and dotted skills rendering.
- `js/modules/phrase-rotator.js` provides the typed text effect for the preloader and hero subtitle.

## Checks

Run:

```bash
npm run check
```

## Editing the hero phrases

The rotating hero phrases live in `index.html` inside `.typing-subtitle`.
Each phrase is declared as a separate `<p>` element, and the typed output is rendered into `.typed-subtitle`.
