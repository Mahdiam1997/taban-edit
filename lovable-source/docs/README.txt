Taban Edit - static GitHub Pages copy
=====================================
This docs/ folder is a standalone static copy of the site (no build step).
Files: index.html, assets/hero.jpg, .nojekyll, fonts/ (empty until licensed fonts are added).

Enable GitHub Pages (after Git sync to GitHub is connected in Lovable:
Project settings -> Git -> Connect GitHub):
1. Open the repository on GitHub.
2. Settings -> Pages.
3. Source: "Deploy from a branch".
4. Branch: main   Folder: /docs   -> Save.
5. After a minute the site is at https://<user>.github.io/<repo>/

Fonts: Kalameh (headings) and Yekan Bakh (text) are licensed and NOT included.
Until you add them the page uses Vazirmatn, then system fonts. To add them, put
licensed WOFF2 files in docs/fonts/ (Kalameh-Bold.woff2, YekanBakh-Regular.woff2,
YekanBakh-Bold.woff2) and uncomment the @font-face block at the top of the
<style> in index.html.

Note: this copy does not update automatically when the Lovable site changes.