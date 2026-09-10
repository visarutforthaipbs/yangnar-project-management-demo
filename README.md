# ยางนา — Project Management Demo

Thai single-page frontend prototype based on the provided design billing workbook.

Live demo: https://visarutforthaipbs.github.io/yangnar-project-management-demo/

## Features
- Project dashboard, search, and filtering
- Team task board and editable deadlines
- Project notes and document links
- Monthly billing snapshots and CSV export
- Demo changes stored locally in the browser; reset available

## Development
Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Deployment
Push to `main` to build and deploy automatically through GitHub Actions.
The Pages build sets `GITHUB_PAGES=true` to use the repository subpath.
Static output is `dist/client`. There is no backend or shared database.

Source rows are historical monthly snapshots, not cumulative cash receipts.
