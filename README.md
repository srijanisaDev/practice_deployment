# Srijan — Portfolio

A single-page personal portfolio built with Next.js (App Router). It includes a
working contact form backed by a serverless API route that sends email through
Gmail SMTP via Nodemailer.

## Tech stack

- Next.js 15 (App Router, React 19)
- Plain CSS (no UI framework) — styles live in `src/app/globals.css`
- Nodemailer over Gmail SMTP for the contact form

## Project structure

```
public/
  profile.jpg            <- add your photo here (see "Profile photo" below)
src/
  app/
    layout.js            <- root layout + page metadata
    page.js              <- assembles all sections
    globals.css          <- all styling
    api/contact/route.js <- contact form email endpoint
  components/            <- Nav, Hero, About, Skills, Experience,
                            Projects, Achievements, Contact, Footer
  data/content.js        <- ALL site content lives here (edit this to update text)
```

## Editing content

All text, links, projects, skills, etc. are in **`src/data/content.js`**.
Change that one file to update the site — you should not need to touch the
components.

## Profile photo

Save your photo at `public/profile.jpg`. It is referenced by the `profilePhoto`
field in `src/data/content.js`. If the file is missing, the hero shows a styled
initial as a fallback, so the site never breaks. To use a different filename or
format, update `profilePhoto` accordingly. You can delete `public/README.txt`
once the photo is in place.

## Running locally

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

### Local contact-form testing (optional)

Create a file named `.env.local` in the project root (it is gitignored) and fill
in the values from `.env.example`:

```
GMAIL_USER=your-sending-address@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
CONTACT_TO_EMAIL=address-to-receive-messages@example.com
```

## Contact form environment variables

The API route at `src/app/api/contact/route.js` reads three variables. Nothing
is hardcoded.

| Variable             | Purpose                                                        |
| -------------------- | -------------------------------------------------------------- |
| `GMAIL_USER`         | The Gmail address that SENDS the message                       |
| `GMAIL_APP_PASSWORD` | 16-character Gmail App Password (NOT your normal password)     |
| `CONTACT_TO_EMAIL`   | The address where you want to RECEIVE contact submissions      |

## Gmail App Password setup

1. Go to `myaccount.google.com/security` and enable 2-Step Verification.
2. Go to `myaccount.google.com/apppasswords`.
3. Select app: Mail. Select device: Other — name it "Portfolio Contact Form."
4. Generate the 16-character app password and store it securely.
5. Enter it in Vercel's Environment Variables panel (see below).
   Do not commit it or paste it anywhere public.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **Add New -> Project** and import the repository.
3. Framework preset is detected automatically as Next.js. Keep the defaults.
4. Go to **Project Settings -> Environment Variables** and add the three
   variables listed above (`GMAIL_USER`, `GMAIL_APP_PASSWORD`,
   `CONTACT_TO_EMAIL`) for the Production (and Preview, if you want) environment.
5. Click **Deploy**. After the first deploy, redeploy if you add the env vars
   afterward so they take effect.

## Notes on dependencies

`nodemailer` is pinned to a patched 9.x release. Two moderate advisories remain
from `postcss`, which is bundled transitively inside Next.js 15; they affect the
build tooling only and are resolved by future Next.js updates. Do not run
`npm audit fix --force`, as it would incorrectly downgrade Next.js to v9.
