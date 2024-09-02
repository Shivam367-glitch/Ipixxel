import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import purgecss from 'rollup-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), purgecss({
    content: ['./src/**/*.html', './src/**/*.jsx'],
  })],
})
