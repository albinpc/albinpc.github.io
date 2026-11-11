# Albin — Computer Vision & Robotics Portfolio

A **static, responsive portfolio website** in HTML, CSS, and vanilla JavaScript. No paid subscription, framework, or compilation required.

## Preview locally

Open `index.html` directly in a browser, or from this directory run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing (important)

1. **Verify all public claims.** The site separates completed PCB and speech/ROS work from the *planned* Gazebo project. Confirm project dates, status, descriptions, and links.
2. **Add a contact method.** Find `Add your email and LinkedIn before publishing` in `index.html`. Replace that text with your preferred public contact method, e.g. `mailto:your-address` or a LinkedIn link.
3. **Add evidence.** Replace CSS illustrations with approved project screenshots or demo GIFs where you have rights to share them. Add measured results and benchmark tables only after verification.
4. **Review research/IP permissions.** Do **not** copy code, README text, images, datasets, model weights, unpublished results, credentials, internal URLs, or commit history from institutional private repositories into this website without authorization.
5. **Add CV.** If you want a CV button, place a checked, public-safe PDF in the repository and link to it from `index.html`.
6. **Check links.** One project links to `https://github.com/albinpc/self-driving-car-simulation`. The current repository was not inspected for this draft; verify relevance and visibility.

## Publish for free using GitHub Pages

1. Sign into GitHub as `albinpc`.
2. Create a **public** repository named `albinpc.github.io` (if the name is not already in use).
3. Upload `index.html`, `styles.css`, `script.js`, and `favicon.svg` to the repository root. You can also include this README.
4. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`; save.
5. After publishing, the expected site address is `https://albinpc.github.io/`.

**Note:** Creating the files locally does not automatically create or publish a GitHub Pages site. Anyone can view a published Pages website. GitHub's official documentation: https://docs.github.com/en/pages/quickstart

## Customize appearance

- Colors are at the beginning of `styles.css` (variables `--bg`, `--teal`, etc.).
- Change the hero paragraph in `index.html` to match your exact target job titles.
- For experience details, prefer factual descriptions over unverified impact numbers.
- Project cards are plain HTML, so you can copy an existing `<article class="project-card">` and adapt it.

## Research case-study release process

If your institute work is private, request approval for each of the following **separately**: description, organization name, figures/screenshots, results, code, data, and weights. If permission is denied or unclear, keep the summary generic or omit it. **Never copy the original private Git history to a personal public repository.**

## How to publish via the GitHub website (no terminal needed)

1. Create a new **public** repository `albinpc.github.io` using your personal GitHub account.
2. Choose **Add file -> Upload files** and upload the **contents** of this folder, *not the containing folder and not the ZIP itself*. `index.html` must be at the top level.
3. Commit your upload to `main`.
4. Open **Settings -> Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/(root)**; then **Save**.
5. GitHub Pages will serve the static site from `https://albinpc.github.io/` after publishing completes.

This draft contains no contact email or LinkedIn URL. Add the contact details that you wish to make public before deploying.

## How to include the attached learning roadmap

The eight-month study roadmap is for **your private planning**, not a list of completed skills. Do not paste the entire roadmap into the recruiter-facing site. Update the featured Gazebo project only when you have implemented and measured new results. The existing site already marks Gazebo and deployment items as planned.
