# NextJS and NextUI Dashboard Template Starter

You can deploy here directly to vercel [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Siumauricio/nextui-dashboard-template)


V1 Version Stitches https://v1-nextui-dashboard-template.vercel.app/
V1 Code: https://github.com/Siumauricio/nextui-dashboard-template/tree/v1

This is a template for NextJS and NextUI.

[NextJS](https://nextjs.org/)
[NextUI](https://nextui.org/)

You can see the demo here: https://nextui-dashboard-template.vercel.app/
For improve this template, you can create a pull request or open an issue here [Issues](https://github.com/Siumauricio/nextui-dashboard-template/issues) or [Pull Request](
    https://github.com/Siumauricio/nextui-dashboard-template/pulls)

### Dark Mode
![Dashboard Dark Mode](./public/dark.png)

### Light Mode
![Dashboard Light Mode](./public/light.png)


- Dark Mode Support
- Full Responsive
- Home Page with Charts
- Accounts Page
- More pages coming soon...

```
├── components
│   ├── accounts            # Accounts components
│   ├── charts              # Charts components
│   ├── breadcrumb          # component
|   ├── home                # Home components
|   ├── layout              # Layout components
|   ├── navbar              # Navbar components
|   ├── sidebar             # Sidebar components
|   ├── table               # Table components
|   ├── styles              # Some reusable components
|   ├── icons               # Icons
|   ├── hooks               # Hooks
├── app                     # Documentation files
│   ├── accounts            # Accounts route
|       ├── page.tsx        # Accounts page
│   ├── page.tsx            # Entry point for the app
│   ├── layout.tsx          # Layout applied to all application pages
│   ├── providers.tsx       # Theme provider
│   ├── more...             # Soon
└──
```

## For Run

Install dependencies


```bash
npm install
```

Start the server



```bash
npm run dev
```



Error to install in stacktblizt (swc) problems:

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    forceSwcTransforms: false
  },
  swcMinify: false
}

module.exports = nextConfig


Løsning på npm install-problemet
Du har en konflikt mellom apexcharts og react-apexcharts fordi react-apexcharts krever apexcharts@>=4.0.0, mens prosjektet ditt bruker apexcharts@3.54.1. Følg trinnene nedenfor for å løse dette:

Installer med --legacy-peer-deps Hvis du ikke kan oppdatere apexcharts, bruk denne kommandoen:

bash
Kopier kode
npm install --legacy-peer-deps
Dette lar npm ignorere peer dependency-konflikter.

Alternativ: Oppdater apexcharts Hvis det er mulig å oppdatere apexcharts, gjør dette:

bash
Kopier kode
npm install apexcharts@latest
Kontroller deretter at prosjektet fortsatt fungerer med den oppdaterte versjonen.

Force-installasjon Hvis begge alternativene feiler, prøv å tvinge installasjonen (brukes med forsiktighet):

bash
Kopier kode
npm install --force
Løsning på manglende next
Kommandoen npm run dev mislyktes fordi Next.js ikke er installert. Installer Next.js på nytt:

bash
Kopier kode
npm install next
Hvis next allerede er en del av package.json, men mangler i node_modules, kan en full reinstallasjon hjelpe:

bash
Kopier kode
rm -rf node_modules package-lock.json
npm install
Etter installasjon
Når npm install er fullført uten feil, kjør:

bash
Kopier kode
npm run dev