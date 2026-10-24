# Chengqi Duan — Academic Homepage

A buildless static website for GitHub Pages. Preview locally with:

```
python3 -m http.server 8765
```

- `index.html`: biography, news, publications, education, experience and awards.
- `assets/style.css`: responsive layout and visual design. No CSS build step or external font/icon CDN is required.
- `assets/main.js`: mobile navigation, email copying, optional citation counts and accessible figure dialogs.
- `assets/papers/`: original research figures and source/link records. Figure links work even without JavaScript.

HKU's official crest is stored locally in `assets/hku.svg`, with the wordmark excluded through its SVG viewport. Original asset: https://www.hku.hk/adobe/dynamicmedia/deliver/dm-aid--afc8d43c-587a-43f0-b93c-26f8bd397e0e/logo-hku.svg (retrieved 2026-10-24). The mark belongs to the University of Hong Kong.

The Tsinghua crest and optional Semantic Scholar citation counts use external services. Unavailable citation counts are hidden. The previous compiled Tailwind files and preview thumbnails are retained but are not required by the current design.

Acceptance news uses the official conference notification schedules (checked 2026-10-24):
- NeurIPS 2026: September 24, 2026 — https://neurips.cc/Conferences/2026/Dates
- ECCV 2026: June 17, 2026 — https://eccv.ecva.net/Conferences/2026/Dates
The news list displays month/year; each acceptance entry stores the full date in its `datetime` attribute and tooltip. Paper acceptance status was supplied by the site owner.
