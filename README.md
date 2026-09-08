# CBR-1 / CBI Robotics Documentation

Docusaurus site for CBI Robotics, structured like Clearpath Robotics' docs site (docs.clearpathrobotics.com): a top navbar split into independent sections — **Robots** and **Software** — each with its own sidebar, the same way Clearpath separates Husky/Warthog/Jackal docs from their shared ROS/OutdoorNav/IndoorNav docs.

## Structure

- `docs_robots/` — the "Robots" top-nav section. Contains `robots.mdx` (the platform-picker landing page) plus one subfolder per platform:
  - `docs_robots/cbr1/` — full doc set (User Manual, Integration Guide, Tutorials, Maintenance, Troubleshooting, Error Codes)
  - `docs_robots/rbot/` — stub overview page; build out the same six sections here as R-BOT docs get written
- `docs_software/` — the "Software" top-nav section. ROS/software stack docs shared across platforms (offboard PC setup, Using ROS, ROS 2 Quickstart tutorial). This is a second, independent Docusaurus docs plugin instance — not a subfolder of Robots — which is what makes it its own top navbar tab rather than a sidebar category.
- `sidebars.js` — sidebar for the Robots section
- `sidebarsSoftware.js` — sidebar for the Software section

To add a third top-level section (e.g. an "OutdoorNav"-style autonomy product later), register another `@docusaurus/plugin-content-docs` instance in `docusaurus.config.js`'s `plugins` array with its own `id`, `path`, and `routeBasePath`, add a matching sidebar file, and add a navbar item pointing at it — same pattern as the `software` plugin.

## Local development

```bash
npm install
npm start
```

Opens a local dev server at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
```

Outputs a static site to `build/`. Serve it locally with `npm run serve` to preview the production build.

## Deploy to GitHub Pages

1. Create a GitHub repo named `cbr1-docs` under your account (or update `organizationName`/`projectName` in `docusaurus.config.js` to match whatever repo you use).
2. Push this project to that repo.
3. Run:
   ```bash
   GIT_USER=<your-github-username> npm run deploy
   ```
   This builds the site and pushes `build/` to the `gh-pages` branch.
4. In the repo's Settings → Pages, set the source to the `gh-pages` branch.
5. Your site will be live at `https://<your-github-username>.github.io/cbr1-docs/`.

If you'd rather host on a custom domain (e.g. `docs.cbirobotics.com`), update `url` and `baseUrl` in `docusaurus.config.js` to `/` and add a `CNAME` file to `static/`.

## Content status

- **CBR-1** (`docs_robots/cbr1/`) — real starter content throughout, built from existing CBI Robotics/CushyBots material (battery/BMS, WDC One motor controller, load test data, reparability-first design, warranty terms). Tutorials, Troubleshooting, and Error Codes are thinner placeholders — Error Codes especially, since no fault-code table exists internally yet.
- **R-BOT** (`docs_robots/rbot/`) — a single overview stub with known specs (distribution, HS code, warranty). The full six-section doc set still needs to be written.
- **Software** (`docs_software/`) — general ROS guidance and the ROS 1 → ROS 2 migration status; will grow as more of the migration is documented.

Edit any `.mdx` file directly — no need to touch the sidebar or config unless you add or rename whole sections/platforms.
