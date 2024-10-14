---
name: Release Template
about: This template is used when a new version is released
title: ""
labels: ""
assignees: ""
---

- [ ] Decide on version (major, minor, patch)
- [ ] Work on `main`
- [ ] Bump version in https://github.com/gulfofmaine/Neracoos-1-Buoy-App/blob/main/package.json
- [ ] Build and test locally
  - [ ] Jest `make test`
  - [ ] Playwright `npm run test:e2e:ui`
- [ ] Update Changelog https://github.com/gulfofmaine/Neracoos-1-Buoy-App/blob/main/CHANGELOG.md ([compare to previous release (update this url once loaded)](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/compare/v0.1.1/...main)
- [ ] Create commit with name in the format of `v{major}.{minor}.{patch}`
- [ ] Push commit
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) (_Deploy with Argo CD to Staging_ should run)
- [ ] Check [staging site](https://mariners-dev.aws.neracoos.org/) to make sure update progressed as planned
- [ ] Tag commit `v{major}.{minor}.{patch}`
- [ ] Push tag
- [ ] Create Github Release
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) (_Deploy with Argo CD_ should run)
- [ ] Monitor release in Argo CD
- [ ] Check that things are performing as expected on the [production site](https://mariners.neracoos.org/)
- [ ] Announce release in #opd Slack channel with summary of the changes
