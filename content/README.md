# Editable content

These HTML snippets are shown in the Mariners' Dashboard:

- `about.html` - the About page
- `sidebar.html` - the sidebar next to the home page map

## Editing

Edit the files directly on `main` (the GitHub web editor works fine). The dashboard fetches them from
`raw.githubusercontent.com` and caches them for 15 minutes, so changes should appear within about 20 minutes
without a dashboard release.

The HTML is inserted into the page as-is, so Bootstrap classes are available for layout.

## Fallback

A copy of these files is baked into each Docker image when it is built. If GitHub can't be reached, the dashboard
shows that copy instead, so it may be out of date until the next release.
