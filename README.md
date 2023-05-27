# wanderer.moe

Source code for [wanderer.moe](https://wanderer.moe) - A centralized database of various game assets (and some other stuff)

This website is built by dromzeh using SvelteKit, Tailwind CSS, and Node.js, hosted with the Cloudflare Stack (Pages, Workers, R2).

![wanderer.moe](https://badges.crowdin.net/wanderermoe/localized.svg)

## Local Development & Build

To run the website locally, follow these steps:

1. Read [API & CDN](#api--cdn)
2. Clone the repository, either `main` or `development` branch dependant on your use case:

```bash
git clone https://github.com/dromzeh/wanderer.moe -b main # or -b development
```

3. Navigate to the project directory, run `pnpm install` to install the required dependencies
4. Run `pnpm run dev` to start the development server. The website will be available at `http://localhost:1337` (or another port if 1337 is already in use)
5. To build the website, run `pnpm run build`.
6. After the build process is complete, run `pnpm run preview` to preview the built site at `http://localhost:5741`

## API & CDN

> **Note**:
> There are currently CORS rules setup with if you are using wanderer.moe's cdn, you may need to create your own R2 instance and change the `cdn` subdomain to your own R2 instance, make sure to also clone & modify the api & update the URLs.

The API and CDN have their own respective subdomains, `api` and `cdn`.

The API is powered by Cloudflare Workers and the CDN is powered by Cloudflare R2, the api's code is available [here](https://git.dromzeh.dev/api.wanderer.moe)

More details on setting up the API [here](https://github.com/dromzeh/api.wanderer.moe#usage).

## Production Deployment & Configuration

### Cloudflare Configuration:

#### Build Command:

```bash
npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build
```

#### Build Output Directory

```bash
/.svelte-kit/cloudflare
```

## Developed By

- [@dromzeh](https://github.com/dromzeh)

## Contributors

A list of contributors can be found [here](https://wanderer.moe/contributors)

## License

- [api.wanderer.moe](https://api.wanderer.moe) is licensed under [GNU Affero General Public License v3.0](LICENSE) - **You must state all significant changes made to the original software, make the source code available to the public with credit to the original author, original source, and use the same license.**