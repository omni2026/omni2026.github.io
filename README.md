# Anonymous Project Page

This repository contains a static academic project website for a paper under double-blind review.

## Local Preview

From this directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Edit Content

- Edit `index.html` for all page text, section order, links, and captions.
- Put figures in `static/images/`.
- Put videos in `static/videos/`.
- Put anonymized PDFs in `static/pdfs/`.
- Replace `static/images/favicon.ico` before publishing.

## Double-Blind Checklist

- Do not include author names, institution names, personal websites, personal GitHub handles, or acknowledgments.
- Do not link to arXiv or a non-anonymous project repository during review.
- Remove metadata from PDFs, images, and videos before publishing.
- Use anonymous file names and neutral captions.
- Recheck `index.html` and this README before making the repository public.

## After Acceptance

Replace the anonymous placeholders with author, institution, paper, code, and citation information.
