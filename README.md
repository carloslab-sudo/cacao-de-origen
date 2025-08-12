# Cacao de Origen — Site Starter (GitHub Pages)

A minimalist, static website you can host for free on GitHub Pages. 
It’s designed for webinars, results, news, and feedback — with easy embeds and forms.

## Quick Start
1) Create a new repo on GitHub (e.g., `cacao-de-origen`).
2) Download this zip and extract the folder. Add all files to your repo and commit.
3) Enable GitHub Pages: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then choose `main` and `/ (root)`.
4) Wait ~1–2 minutes, then open your Pages URL (pattern: `https://<your-username>.github.io/<repo-name>/`).

## Where to Put Things
- **Webinars**: Edit `webinars.html`. Replace the sample YouTube embed with your own. 
- **Registration**: In `webinars.html`, replace the Google Forms placeholder with your Google Form *embed* code (iframe). 
  - In Google Forms: More (⋮) → **Get pre-filled link** or **Send** → **<> Embed HTML**; copy the `<iframe ...>` code and paste it where indicated.
- **Results** (maps, technical studies): Put PDFs or images in `assets/` and link them from `results.html`.
- **News**: Add items to `news.html` (each as a simple card). 
- **Feedback**: Paste a survey (Google Forms iframe) into `feedback.html`.

## Tips
- Keep YouTube videos as **Unlisted** if you want them visible only via the site.
- You can customize colors in `assets/styles.css` under `:root { ... }`.
- If you later want richer forms without Google Forms, consider Formspree or Netlify Forms.

