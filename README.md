# SciCompPaths Notes — the free cheat-sheet site

Plain HTML, hosted free on GitHub Pages. Each cheat sheet is a folder with these files:
- `index.html`: the page, with the Download button and the link-preview tags.
- `preview.png`: the 1200×630 card that Instagram, WhatsApp and X show when the link is shared.
- `sheet-preview.jpg`: the top of the sheet, shown free on the page.

**For now there's no friction (decided 11 Nov 2026):** the page has a plain Download button that links to the PDF on
Google Drive, with no email asked. The email gate (`assets/gate.js`, Google Form → Sheet) is built but parked. We
switch it on at about 10–20K followers.

## One-time setup (about 10 minutes; send Claude the things marked ➜)

### 1. GitHub Pages
1. Logged into your personal GitHub: **+ → New organization → Free**, named `scicomppaths` (or `scicomppaths-notes`
   if that's taken), with contact email scicomppaths@gmail.com. This keeps the brand off your personal profile.
   ➜ Send the organization name.
2. In the organization: **New repository**, named exactly `<org>.github.io`, set to **Public** → Create.
3. **Add file → Upload files** → drag in everything inside `D:\Edit\site\`. Upload the files, not the `site` folder
   itself. → Commit.
4. **Settings → Pages → Build and deployment:** Source *Deploy from a branch*, Branch `main`, folder `/ (root)` → Save.
   After about a minute the site is live at `https://<org>.github.io/`.

### 2. Google Form (later, at ~10–20K followers)
Skip for now. When we turn on email capture, follow the steps in `assets/gate.js` and the Form section in git history.

### 3. The PDF link
Upload the PDF to Drive → Share → **Anyone with the link: Viewer** → Copy link. ➜ Send it.

### 4. Visit counts (optional, free)
Sign up at goatcounter.com and pick the code `scicomppaths`. ➜ Send the code.

Claude then fills in `SITE_URL`, `PDF_LINK` and `GOATCOUNTER_CODE`. Re-upload
the changed files (step 1.3) and you're live.

## Every new DM reel after that
Claude adds a new folder (for example `upi/`) and a new entry in `index.html`. You upload those two to GitHub, then
send this DM text with the page link, `https://<org>.github.io/<sheet>/`, on its own line so Instagram shows the
preview card.

## Good to know
- The free cheat sheets are bait meant to spread. Paid material never goes on this site.
