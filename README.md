# Periodic Table — Electron Desktop App

An interactive periodic table built with React and packaged as a native desktop app using Electron.

## Prerequisites

- **Node.js** 18+ (download from https://nodejs.org)
- **npm** (included with Node.js)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run in development mode (hot-reload)
npm run dev
```

This launches both the Vite dev server and the Electron window. Edits to `src/PeriodicTable.jsx` will hot-reload instantly.

## Build a Distributable

```bash
# Build and package for your current OS
npm run package
```

The installer/executable will appear in the `release/` folder:

| OS      | Output                                |
|---------|---------------------------------------|
| Windows | `release/Periodic Table Setup X.X.X.exe` |
| macOS   | `release/Periodic Table-X.X.X.dmg`      |
| Linux   | `release/Periodic Table-X.X.X.AppImage`  |

## Project Structure

```
periodic-table-app/
├── main.js              # Electron main process
├── preload.js           # Secure bridge between Node and renderer
├── vite.config.js       # Vite bundler config
├── index.html           # HTML shell
├── package.json         # Dependencies and build config
├── src/
│   ├── main.jsx         # React entry point
│   └── PeriodicTable.jsx # The periodic table component
└── release/             # Built installers (after npm run package)
```

## Customization

- **Window size**: Edit `width` / `height` in `main.js` → `createWindow()`
- **App icon**: Place your `.ico` file at `build/icon.ico` (Windows) or `build/icon.icns` (macOS)
- **App name**: Change `productName` in the `"build"` section of `package.json`
- **DevTools**: Uncomment the `openDevTools()` line in `main.js` for debugging

## Author

- **jhstephenson**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Tips

- Press `Ctrl+Shift+I` in the running app to open DevTools manually
- The `npm run dev` command uses `concurrently` to run Vite and Electron together
- For production builds, Vite outputs to `dist/` and Electron loads from there
