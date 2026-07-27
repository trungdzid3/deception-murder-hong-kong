Place your landing and game background images in this folder with these filenames:

- `landing-bg.jpg` — used as the hero/landing background (recommended: first image you uploaded)
- `game-bg-1.jpg` — alternative background option 1
- `game-bg-2.jpg` — alternative background option 2

After placing images, restart dev server if necessary. The CSS will automatically reference these files.

To add an image via git:

```bash
# from repo root
git add public/images/landing-bg.jpg public/images/game-bg-1.jpg public/images/game-bg-2.jpg
git commit -m "chore(assets): add landing and game background images"
git push origin main
```