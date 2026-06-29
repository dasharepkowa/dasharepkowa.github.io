# Your Portfolio Site

A simple 3-file site (HTML/CSS/JS, no build tools needed). Built around a
"blueprint" theme — grid lines, ink-blue background, amber accent — with a
live animated parametric curve as the signature visual.

## Files
- `index.html` — all content lives here. Edit text directly in the tags.
- `style.css` — all visual styling (colors, fonts, layout, spacing).
- `script.js` — draws the animated curve in the hero section.

## What to edit first
1. **Your name & email** — search `index.html` for "Your Name" and
   `you@example.com` and replace.
2. **GitHub/LinkedIn links** — replace `yourhandle` in the contact section.
3. **Projects** — each `<article class="project">` block is one project.
   Replace the placeholder text, and swap `<div class="placeholder-art">`
   for an actual image: `<img src="images/project1.png" alt="...">`.
4. **About section** — write your real bio and tool list.

## Adding real images
Create an `images/` folder next to `index.html`, drop your project
screenshots in, then replace the placeholder divs with:
```html
<img src="images/your-image.png" alt="Description of the project">
```

## Adding a p5.js sketch instead of an image
For an interactive piece, you can embed a live sketch in place of a project
image. Add this to the `<head>` of index.html:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
```
Then add a `<div id="sketch-container"></div>` where you want it, and write
your sketch in a separate file (e.g. `sketch.js`) using `createCanvas()`
targeting that container.

## Viewing it locally
Just open `index.html` in a browser — no server needed for this simple setup.

## Deploying for free with GitHub Pages
1. Create a new GitHub repository (e.g. `yourname.github.io` — using exactly
   this naming gives you a live site at `https://yourname.github.io`).
2. Push these three files (and any `images/` folder) to that repo.
3. Go to the repo's **Settings → Pages**, set source to the `main` branch,
   root folder, and save.
4. Your site will be live at `https://yourusername.github.io` within a
   minute or two.

If you name the repo something else (e.g. `portfolio`), it'll be live at
`https://yourusername.github.io/portfolio` instead.

## Next steps as you build your math/computational design portfolio
- Replace the three placeholder projects with real work — even small course
  experiments count if presented well (the math idea + the visual result).
- Consider adding a live p5.js sketch as one of your projects once you're
  comfortable with web dev — it's a strong signal for this specific field.
- Keep descriptions short: one sentence on the idea, one on the method.
