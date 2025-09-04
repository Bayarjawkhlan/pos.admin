# GTN Stock platform

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org) ![ESLint](https://img.shields.io/badge/code%20style-eslint-brightgreen)

## 🚀 What's Included

- **Vite**
- **React 19**
- **TypeScript 5**
- **ESLint 9**
- **Prettier 3**
- **Tailwind CSS 4**
- **Shadcn UI**
- **App Directory**
- **System, Light & Dark Mode**
- **Dockerfile** with Node.js 22.14.0 (Alpine)
- **Dockerfile.bun** with Bun 1.2.7 (Alpine)

### 🛠️ ESLint Plugins

- [**@eslint/js**](https://www.npmjs.com/package/@eslint/js)
- [**typescript-eslint**](https://github.com/typescript-eslint/typescript-eslint)
- [**eslint-plugin-react**](https://github.com/jsx-eslint/eslint-plugin-react)
- [**eslint-config-prettier**](eslint-config-prettier)
- [**eslint-plugin-tailwindcss**](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [**eslint-plugin-import**](https://github.com/import-js/eslint-plugin-import)
- [**eslint-plugin-promise**](https://github.com/eslint-community/eslint-plugin-promise)

### ✨ Prettier Plugins

- [**@trivago/prettier-plugin-sort-imports**](https://github.com/trivago/prettier-plugin-sort-imports)
- [**prettier-plugin-tailwindcss**](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## 🏁 Getting Started

### Prerequisites

- **Bun**: Version 1.2.7 or higher OR
- **Node.js**: Version 22.14.0 or higher
- **Docker**: For containerized deployment (optional but recommended)

### Installation

1. **Install Dependencies**:

   ```bash
   npm install
   # or with Yarn
   yarn install
   # or with pnpm
   pnpm install
   # or with Bun
   bun install
   ```

2. **Run Development Server**:

   ```bash
   pnpm dev
   ```

3. **Build for Production**:
   ```bash
   pnpm build
   ```

### 🔑 MKCert - Local HTTPS

install mkcert and create a local certificate for localhost:

```bash
  brew install mkcert
  brew install nss
  mkcert -install
  mkcert gtn.test localhost
```
# pos.admin
