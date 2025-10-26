# Astro + Sanity-CMS Landing Page Starter

Quickly create a modern, content-driven landing page for a small business, artist, or independent contractor—such as a DJ—with this ready-to-use template. Built with Astro, Sanity CMS, React, TailwindCSS. it's designed for fast setup & easy customization.

## Language Support
This template is configured for multiple language use.  
If you need only 1 language, check out my other template repository: [astro-sanity](https://github.com/SananMaarouf/astro-sanity).

## Hosting & Adapters
This template is primarily intended for static site generation.
If you need on-demand rendering for dynamic pages, refer to the [Astro docs](https://docs.astro.build/en/guides/on-demand-rendering/) for a list of official adapters for different cloud providers.


## 🏢 Sanity Studio & CLI Setup

This project uses [Sanity CMS](https://www.sanity.io/).  
To create an organization, initialize a project, and deploy your Sanity Studio, use the included npm scripts.

### Common Setup Steps

1. **Login to Sanity:**
   ```bash
   npm run sanity:login
   ```
2. **Create a new organization (optional):**
   ```bash
   npm run sanity:create-org -- --name "<your-org-name>"
   ```
3. **Initialize a new project or select an existing one:**
   ```bash
   npm run sanity:init
   ```
   Follow the prompts to choose your organization and dataset.

4. **Deploy your Sanity Studio:**
   ```bash
   npm run sanity:deploy
   ```
   This will give you a public Studio URL.

> **Note:**  
> The Sanity Studio code should be in a `/studio` folder or as a separate app.  
> See [Sanity CLI docs](https://www.sanity.io/docs/getting-started-with-sanity-cli) for more info.

### Available Sanity CLI Scripts

The following npm scripts wrap common [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) commands for convenience.  
Run them from your project root using `npm run <script-name>`.

| Script                      | Description                                                      |
|-----------------------------|------------------------------------------------------------------|
| `sanity:login`              | Log in to your Sanity account                                   |
| `sanity:create-org`         | Create a new Sanity organization                                |
| `sanity:init`               | Initialize a new Sanity project or select an existing one        |
| `sanity:deploy`             | Deploy your Sanity Studio                                       |
| `sanity:start`              | Start the local Sanity Studio development server                 |
| `sanity:dataset-create`     | Create a new dataset                                            |
| `sanity:dataset-list`       | List all datasets in your project                               |
| `sanity:dataset-export`     | Export a dataset to a file                                      |
| `sanity:dataset-import`     | Import a dataset from a file                                    |
| `sanity:documents-query`    | Query documents in your dataset                                 |
| `sanity:users-list`         | List users in your project                                      |
| `sanity:cors-add`           | Add a CORS origin to your project                               |
| `sanity:cors-list`          | List CORS origins for your project                              |
| `sanity:hook-create`        | Create a webhook for your project                               |

**Example usage:**

```bash
npm run sanity:login
npm run sanity:init
npm run sanity:deploy
npm run sanity:dataset-list
```

Refer to the [Sanity CLI documentation](https://www.sanity.io/docs/cli) for more details on each command.

## ✨ Features

- **Astro Framework:** Lightning-fast static and dynamic site generation with a modern developer experience.
- **Sanity CMS Integration:** Flexible, real-time content management with powerful schema definitions—edit content without redeploying.
- **Vercel Adapter with ISR:** Deploy to Vercel with built-in [Incremental Static Regeneration](https://vercel.com/docs/incremental-static-regeneration), enabling fast updates and scalable performance.
- **React Support:** Use React components seamlessly alongside Astro and other frameworks.
- **TailwindCSS:** Rapidly style your site with utility-first CSS.
- **PortableText Rendering:** Rich text content from Sanity, rendered beautifully in Astro.
- **Environment Variable Setup:** Easily swap out your Sanity project credentials for new projects.
- **Ready-to-Extend Structure:** Clean, modular file organization for easy customization and scaling.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Landing.astro
│   │   ├── InternalLink.astro
│   │   ├── PortableText.astro
│   │   └── SanityImage.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── post/
│   │       └── [slug].astro
│   └── sanity/
│       ├── lib/
│       │   ├── load-query.ts
│       │   └── sanity-client.ts
│       └── schemaTypes/
│           ├── author.ts
│           ├── blockContent.ts
│           ├── category.ts
│           ├── footer.ts
│           ├── index.ts
│           ├── landing.ts
│           └── post.ts
├── types/
│   ├── index.ts
│   ├── landing.ts
│   └── post.ts
├── .env.example
├── environment.ts
├── astro.config.mjs
├── sanity.config.ts
├── sanity.cli.ts
├── tsconfig.json
├── package-lock.json
└── package.json

```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ⚡ Environment Setup

This template uses environment variables for your Sanity project credentials.  
Your actual `.env` file is **not** included in version control (see `.gitignore`).  
To get started, **create your own `.env` file** in the project root, using `.env.example` as a reference:

```bash
cp .env.example .env
```

Then, fill in your Sanity project ID and dataset in `.env`:

```env
PUBLIC_SANITY_PROJECT_ID="your sanity project id here"
PUBLIC_SANITY_DATASET="production"
```

**Note:**  
Your `.env` file is required for local development and building your site!

## 🏁 Get Started

This template is designed to be cloned and customized for your own projects.  
Swap out your Sanity credentials, update your schemas, and start building—no boilerplate required!
