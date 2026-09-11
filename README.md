# 情感反诈模拟器 · 官网（《凌晨三点，哥哥》）

《情感反诈模拟器》（原名《凌晨三点，哥哥》）的官方网站：游戏背景、玩法设定、
主要角色介绍，以及以游戏角色与内容为主题的中篇小说《凌晨三点，哥哥》的连载阅读器。

**技术栈**：React 19 + Vite 6 + TypeScript，零运行时依赖（无路由/无 UI 库），
hash 路由（`#/novel/chN` 深链章节），移动优先响应式（断点 520 / 640 / 760 / 880 / 940px）。

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc + vite build → dist/
npm run preview   # 预览 dist/
```

## 结构

```
src/
├─ data/
│  ├─ characters.ts   五位主角 + 时区条 + 45 人库的原型卡（派生自游戏 targets.ts / voice-cards.ts）
│  ├─ personas.ts     女主四张面孔（派生自游戏 personas.ts）
│  ├─ game.ts         现象/女主/玩法八齿轮/代价层/十结局/晨钟月轮/安全门（派生自 README、endings、gathas）
│  └─ novella.ts      中篇小说正文（8 章，Paragraph 联合类型支持正文/小节/代价字幕/聊天气泡）
├─ components/        Backdrop(夜空) / Nav / Home(六板块) / NovelReader / Footer
├─ App.tsx            hash 路由 + 视图切换
└─ styles.css         夜色设计系统（墨蓝 + 窗灯琥珀 + 月光；衬线正文 / 合成偈语字）
```

## 官网板块

`#background` 现象与「她」 · `#setting` 玩法八齿轮 + 五时区 + 代价层 + 晨钟月轮 + 安全门 ·
`#characters` 五角色长卡（含话风锚点 / 场景照片 / 「钱从哪来」）+ 四人设 + 库原型 ·
`#endings` 十结局卡（附结局偈） · `#serial` 小说目录 → `#/novel/chN` 阅读器。

## 小说

《凌晨三点，哥哥》八章全本连载：女主「小满」的三十天——余额三百五 / 老李的收车 /
周老师的「静」 / 王总车库的四十分钟 / 阿豪的十三号机 / 陈工公差 ±0.02 / 评论区穿帮 /
凌晨三点的荷花头像。文体纪律沿用游戏话术红线：受害者的代价可见，无可复用的索取技巧。

## 图片资产

取自游戏仓库 `public/`（老头头像 / 场景照片 / 人设头像 / 自拍），存于 `public/img/`。
