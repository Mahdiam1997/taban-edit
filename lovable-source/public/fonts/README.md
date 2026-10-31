# Custom fonts (Doran Bold + Kalameh Bold)

The exact user-supplied bold fonts are now embedded as self-hosted WOFF2 files,
losslessly converted from the original TTF files with fontTools. Vazirmatn and
system fonts remain fallback choices while the fonts load.

- Doran Bold: h1, h2, h3, section titles and brand (`--font-heading: "Doran"`).
- Kalameh Bold: all body text, descriptions, navigation and buttons (`--font-sans: "Kalameh"`).

Installed files:
- `public/fonts/Doran-Bold.woff2` — 48,752 bytes, from `Doran-Bold.ttf`.
- `public/fonts/Kalameh-Bold.woff2` — 34,696 bytes, from `Kalameh_Bold.ttf`.

Both files were verified against their supplied Git blob SHA-1 hashes, expected
sizes and `wOF2` signatures. `src/styles.css` loads only these local WOFF2 files
with `font-display: swap`: Doran covers weights 700–900 and Kalameh 400–900.
These are the supplied bold faces, not separate regular-weight or variable-font
binaries. The GitHub branch and docs snapshot are intentionally unchanged.