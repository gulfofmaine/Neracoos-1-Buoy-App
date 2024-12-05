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
  - [ ] For Jest: run `make test`
  - [ ] For Playwright: run `make serve` and keep running, in another tab/window run `yarn run test:e2e:ui`
- [ ] Update Changelog https://github.com/gulfofmaine/Neracoos-1-Buoy-App/blob/main/CHANGELOG.md ([compare to previous release (update this url once loaded)](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/compare/v0.1.1/...main)
- [ ] Create commit with name in the format of `v{major}.{minor}.{patch}`. If commit checks prevent you from commiting to main append `SKIP=no-commit-to-branch` to the beginning of your commit command (e.g. `SKIP=no-commit-to-branch git commit -m "v1.0.0"`)
- [ ] Push commit
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) (_Deploy with Argo CD to Staging_ should run)
- [ ] Check [staging site](https://mariners-dev.aws.neracoos.org/) to make sure update progressed as planned
- [ ] Draft [new release](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/releases). Create a new tag with your version `v{major}.{minor}.{patch}`. Update release notes with what was added to the Changelog. Make sure target is set to `main`.
- [ ] Publish release
- [ ] Observe [Actions Workflow](https://github.com/gulfofmaine/Neracoos-1-Buoy-App/actions) (_Deploy with Argo CD_ should run)
- [ ] Monitor release in Argo CD
- [ ] Check that things are performing as expected on the [production site](https://mariners.neracoos.org/)
- [ ] Announce release in #opd Slack channel with summary of the changes
