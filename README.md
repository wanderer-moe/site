<h1 align="center">wanderer.moe</h1>
<p align="center">Centralized database of various game assets</p>

<p align="center">
  <a href="https://deepsource.io/gh/dromzeh/wanderer.moe/?ref=repository-badge}" target="_blank"><img alt="DeepSource" title="DeepSource" src="https://deepsource.io/gh/dromzeh/wanderer.moe.svg/?label=active+issues&token=EzKEOHLDivZSRTyThM-VLLsH"/></a>
  <a href="https://deepsource.io/gh/dromzeh/wanderer.moe/?ref=repository-badge}" target="_blank"><img alt="DeepSource" title="DeepSource" src="https://deepsource.io/gh/dromzeh/wanderer.moe.svg/?label=resolved+issues&token=EzKEOHLDivZSRTyThM-VLLsH"/></a>
  <a title="Crowdin" target="_blank" href="https://crowdin.com"><img src="https://badges.crowdin.net/wanderermoe/localized.svg"></a>
</p>

> ℹ️ Any contributions are welcome.

## Getting Started

To run the website locally, follow these steps:

1. Clone the repository
2. Navigate to the project directory and run `pnpm install` to install the required dependencies
3. Run `pnpm run dev` to start the development server. The website will be available at `http://localhost:1337` (or another port if 1337 is already in use)
4. To build the website, run `pnpm run build`.
5. After the build process is complete, run `pnpm run preview` to preview the built site at `http://localhost:5741`

## Deployment

This website is deployed on Cloudflare Pages and uses Workers (api subdomain) & R2 (cdn subdomain)

Previous versions of the website were deployed on Netlify - `netlify.toml` config file is still present in the repository for reference.

**Cloudflare Configuration:**

```
npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build
```

This code installs the dependencies, builds the website.

## Credits

This website was built by dromzeh using SvelteKit, Tailwind CSS, and Node.js, and is hosted with Cloudflare Stack.
Redirects are done in `/src/hooks/hooks.server.js`

A list of contributors can be found [here](https://wanderer.moe/contributors)

## License

This website is licensed under the [GPL-3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)
