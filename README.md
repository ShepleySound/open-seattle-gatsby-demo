# Open Seattle Gatsby Demo

## Tools

- [Gatsby](https://www.gatsbyjs.com/) - Static site generator
- [Contentful](https://www.contentful.com/) - Headless CMS (Content Management System)
- [MUI](mui.com) - Component library and UI toolkit based on Material Design

## Building Locally

1. Clone the repository to your machine.
2. run the following commands -

```bash
# Install dependencies
> npm install

# Run Gatsby in development/watch mode
> npm run dev

# Clean the Gatsby cache (necessary in some cases. Run this script if you notice that your changes aren't appearing in development mode.)
> npm run clean
```

> Recently, Gatsby released a major update to v5, and it is possible that many plugins have not caught up in their versioning. For this reason, it may be necessary to add the `--legacy-peer-deps` flag when running `npm install`. This issue is currently being researched.

> Node version errors? Check out the Gatsby docs [here](https://www.gatsbyjs.com/docs/upgrading-node-js/)
