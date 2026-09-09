import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const pdfSource = 'C:/Users/aman0/.gemini/antigravity-ide/brain/f2c841ba-8a9a-43f2-8bdb-e2574f53fe4f/media__1788952490173.pdf';
const publicDir = path.resolve(__dirname, 'public');
const pdfTarget = path.resolve(publicDir, 'Aman_Patel_Resume.pdf');

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (fs.existsSync(pdfSource)) {
    fs.copyFileSync(pdfSource, pdfTarget);
    console.log('Successfully copied resume PDF to public/Aman_Patel_Resume.pdf');
  }
} catch (e) {
  console.error('Error copying PDF:', e);
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
});

