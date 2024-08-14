---
name: Release Template
about: This template is used when a new version is released
title: ''
labels: ''
assignees: ''

---

- [ ] Decide on version (major, minor, patch)
- [ ] Work on `main`
- [ ] Bump version in https://github.com/gulfofmaine/VSNext/blob/main/frontend/package.json
- [ ] Bump version in https://github.com/gulfofmaine/VSNext/blob/main/app/pyproject.toml
- [ ] Build and test locally
  - [ ] Jest `make test-frontend`
  - [ ] Playwright `yarn test:e2e:ui`
- [ ] Update Changelog https://github.com/gulfofmaine/VSNext/blob/main/CHANGELOG.md ([compare to previous release (update this url once loaded)](https://github.com/gulfofmaine/VSNext/compare/v0.14.3...main))
- [ ] Create commit with name in the format of `v{major}.{minor}.{patch}`
- [ ] Push commit
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/VSNext/actions) (_Deploy with Argo CD to Staging_ should run)
- [ ] Check [staging site](https://staging-investigate.gmri.org/) to make sure update progressed as planned
- [ ] Tag commit `v{major}.{minor}.{patch}`
- [ ] Push tag
- [ ] Create Github Release
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/VSNext/actions) (_Deploy with Argo CD_ should run)
- [ ] Monitor release in Argo CD
- [ ] Check that things are performing as expected on the [production site](https://investigate.gmri.org/)
- [ ] Announce release in #eco-i-net Slack channel with summary of the changes
