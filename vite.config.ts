import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 凌晨三点 · 情感反诈模拟器 官网
// 单页应用：首页（背景/设定/角色/结局） + 小说连载阅读器
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
