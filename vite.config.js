import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-htaccess',
      closeBundle() {
        try {
          copyFileSync(
            join(__dirname, 'public', '.htaccess'),
            join(__dirname, 'dist', '.htaccess')
          )
        } catch (err) {
          // Игнорируем ошибку, если файл уже существует
        }
      }
    }
  ],
})
