import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 프로젝트 페이지(minsu-codelab.github.io/fde/)로 서빙되므로 base='/fde/'
export default defineConfig({
  base: '/fde/',
  plugins: [react()],
})
