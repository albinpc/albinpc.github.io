# Albin Paul Chenginiyaden — CV-based portfolio website

This is a **static, mobile-friendly website** presenting completed work documented in `Albin_Paul_CV.pdf` provided by the portfolio owner (November 2026). It is intentionally not a list of planned projects.

## Included pages
- `index.html` — homepage, completed work, experience, current skills, education, and contact.
- `pcb-xray.html` — PCB X-ray component-detection project summary (not defect detection).
- `hey-surgi.html` — speech recognition / ROS 2 proof-of-concept summary.
- `styles.css`, `script.js`, `favicon.svg` — website assets.
- `.nojekyll` — GitHub Pages static hosting marker.

## Important before publishing
1. Check dates, metrics, titles and LinkedIn/email contact details. Information was taken from the supplied CV, not from repository inspection.
2. Hero and project artwork is **illustrative**, not an actual research image. Replace it with figures that you own or have explicit permission to use.
3. **No private institute or employer code/data** is included or linked. Do not publish a private GitLab/GitHub repository or approved-sounding portions without permission from the owner(s). Create a clean new public repository containing approved assets only.
4. This website intentionally does **not** include a downloadable CV. The CV contains a telephone number. If you want a public PDF resume, consider creating a contact-safe version and add a download link.
5. The resume reports Gazebo among tools, but this site does not list a Gazebo autonomous-navigation project as completed because such completion is not documented.

## Publish over your existing GitHub Pages site
Your existing repository is `https://github.com/albinpc/albinpc.github.io`. Its `main` branch is already set up on your laptop under `~/Downloads/git/albin-portfolio`.

**Recommended method:** Extract the website ZIP into your existing local repository folder. These files will replace the old site and add two case-study pages. You can remove any obsolete pages if they exist.

```bash
cd ~/Downloads/git/albin-portfolio
# Unzip the new ZIP from your Downloads folder. Adjust the path if the ZIP is elsewhere.
unzip -o ~/Downloads/Albin_Current_Portfolio_Website.zip -d .
# Check changes before committing
git status
git diff --stat
git add index.html pcb-xray.html hey-surgi.html styles.css script.js favicon.svg README.md .nojekyll
git commit -m "Update portfolio using completed CV projects"
git push origin main
```

GitHub Pages (Settings -> Pages -> Deploy from branch `main`, `/(root)`) automatically republishes changes. View `https://albinpc.github.io/` after successful deployment.

## No build system needed
You can test locally by opening `index.html` or running:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
