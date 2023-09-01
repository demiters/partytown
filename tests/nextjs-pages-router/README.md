This Next.js app uses the "legacy" `/pages` router but unlike the `/app` router can already use experimental NextScript worker strategy that uses Partytown *under the hood* and requires less configuration code.

Conveniences:
- `@builder.io/partytown` is only needed as devDependency

Caveats & Gotchas:
- can only be used in the "legacy" `/pages` router directory, no support for `/app` directory yet
- under-the-hood Partytown can be configured via `window.partytown`

Goals:
- tests 3rd party scripts that benefit from worker strategy - GTM, GA4, ...
- fully TypeScript
- failing test for `/app` directory support, passing it makes this approach more or less production ready

Test scenarios:
- compare known/documented Partytown config defaults (`lib: '_next/static/~partytown', `) against `window.partytown`
- override `window.partytown` for cases that need them (GTM?)
- check that `next.config.js` enables `experimental: { nextScriptWorkers: true }` while it's needed


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
