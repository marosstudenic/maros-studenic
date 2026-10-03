This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Shared Convex backend

The `fullstack-developer` Convex project is the shared backend for applications
on fullstack-developer.sk. Project dashboard:
https://dashboard.convex.dev/t/marosstudenic/fullstack-developer

The Zavod crossword is the first application, implemented by the `pdf` function
module and the `pdfTotals` / `pdfDaily` tables. Additional applications can add
their own function modules and tables within the same project.

### PDF open counter

`/zavod-tajnicka.pdf` proxies the original solved crossword through the production
Convex HTTP action. It remains an inline PDF at the same URL. The `beforeFiles`
rewrite overrides the copy in `public/`; `no-store` headers ensure repeat requests
reach the counter.

Production dashboard: https://dashboard.convex.dev/d/festive-mandrill-700/data

- `pdfTotals.opens`: cumulative opens since tracking was enabled.
- `pdfDaily`: daily counts, using UTC dates.
- `pdf:stats`: internal query available through the authenticated dashboard or
  `npx convex run pdf:stats --prod`.

Only aggregate counts and timestamps are stored. No cookies, IP addresses, user
agents, or visitor identifiers are stored. HEAD requests, subsequent nonzero
range requests, and known crawler/preview user agents do not increment the
counter. The count represents PDF requests, rather than unique people or a
guarantee that the document was read. Concurrent increments are transactional.

To update the PDF, replace `public/zavod-tajnicka.pdf` and run `npm run pdf:upload`.
This uploads the document into Convex storage and updates `PDF_STORAGE_ID` on the
production deployment. To update the backend, run `npm run convex:deploy` from an
authenticated checkout. Frontend changes deploy through the existing Vercel/Git
integration; no Convex admin key is embedded in the site.
