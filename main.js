import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = !app.isPackaged;
let viteProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 850,
    minWidth: 1000,
    minHeight: 700,
    title: "Periodic Table",
    backgroundColor: "#0a0a10",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.maximize();
  win.setMenuBarVisibility(false);

  if (isDev) {
    viteProcess = spawn('npm', ['run', 'vite:dev'], { shell: true, stdio: 'ignore', windowsHide: true });
    win.loadURL("http://localhost:5173");
  } else {
    win.loadFile(path.join(__dirname, "dist", "index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on('before-quit', () => {
  if (viteProcess) {
    viteProcess.kill();
    viteProcess = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
