## Release package to NPM Registry

Releases are automated by a workflow action as displayed in [Publishing Node.js packages](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages). The [workflows](https://github.com/santosned/unbyted/actions/workflows/npm-publish.yml) is triggered after an new [Github Release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) is **published**.

### Additional Notes

- The [Unbyted Releases](https://github.com/santosned/unbyted/releases) automatically generate the **release notes** which list all contributions since the last published release.
- The early development releases may also include an compressed package (e.g. `unbyted-*.tgz`) that can be used for tests.
