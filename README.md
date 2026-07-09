# Aqil Yusri — Photography Website

A 4-page photography portfolio site (Home, Gallery, About Me, Contact) built with **Astro**, editable through **Decap CMS**, and deployed for free on **Netlify**.

Every image, headline, and paragraph on the site is pulled from content files, so you (or your CMS) can update text and swap photos without ever touching code.

## What's inside

```
src/
  content/
    home/index.json      ← Home page text + hero images
    about/index.json     ← About Me text + photo
    contact/index.json   ← Contact details + social links
    gallery/*.json        ← One file per gallery photo
  components/            ← Header, Footer, pixel icons
  layouts/Layout.astro   ← Shared page shell
  pages/                 ← index.astro, gallery.astro, about.astro, contact.astro
  styles/global.css      ← Colors, fonts, buttons, paint-splash decoration
public/
  admin/                 ← Decap CMS (index.html + config.yml)
  images/uploads/        ← Where CMS-uploaded photos land
```

The gallery, hero, and about photos currently point to placeholder images from picsum.photos so the site works out of the box. Swap them for your own shots any time — see below.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`. Edit any file in `src/content/` and refresh to see changes — this is the fastest way to swap in your own photos and copy before you touch the CMS at all.

To replace a photo without the CMS: put your image in `public/images/my-photos/whatever.jpg`, then set that path (e.g. `"/images/my-photos/whatever.jpg"`) as the `image` field in the matching JSON file.

## 2. Put it on GitHub

Decap CMS and Netlify both work by connecting to a Git repository.

```bash
git init
git add .
git commit -m "Initial site"
```

Create a new empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## 3. Deploy to Netlify (free)

1. Go to [app.netlify.com](https://app.netlify.com) and sign up (free plan is enough).
2. **Add new site → Import an existing project** → connect GitHub → pick your repo.
3. Build settings are already set via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. You'll get a live URL like `https://your-site-123.netlify.app`.
   - Optional: rename it under **Site settings → Change site name**.
   - Optional: update the `site` value in `astro.config.mjs` to match, then push again.

## 4. Turn on the CMS (Decap) so you can edit from any browser

Decap CMS needs **Netlify Identity** (login) and **Git Gateway** (lets logged-in users save content to GitHub) — both are free Netlify features.

1. In your Netlify site dashboard: **Site configuration → Identity → Enable Identity**.
2. Still in Identity settings, under **Registration**, set it to **Invite only** (so strangers can't sign up).
3. Under **Services → Git Gateway**, click **Enable Git Gateway**.
4. Go to the **Identity** tab (top nav of the site dashboard, not settings) → **Invite users** → send yourself an invite.
5. Check your email, click the invite link. It'll open your live site and pop up a "Set password" box — set one.
6. Now visit `https://your-site.netlify.app/admin/` and log in. You're in the CMS.

From the CMS you can:
- Edit the **Home Page**, **About Page**, and **Contact Page** content and images.
- Add, edit, delete, or reorder **Gallery Photos**, including uploading your own images directly.

Every save creates a commit to your GitHub repo, and Netlify automatically rebuilds the live site within a minute or two.

## 5. The contact form

The Contact page form works out of the box via **Netlify Forms** (also free, no backend needed). Submissions show up under **Site configuration → Forms** in your Netlify dashboard, and you can turn on email notifications there too (**Forms → Form notifications → Add notification → Email notification**).

## Notes

- Fonts: "Press Start 2P" (pixel headings) + "Space Grotesk" (body), loaded from Google Fonts.
- The gallery filter and "Load More" button work with plain JavaScript — no framework needed.
- Colors, fonts, and button styles all live in `src/styles/global.css` as CSS variables if you want to adjust the palette later.
